import React from "react";

const Card = ({ book }) => {
    const image = book.volumeInfo.imageLinks?.thumbnail || '';
    console.log(book);
    return (
        <a src={book.link} target="_blank" className="flex flex-col justify-between items-center w-full h-60 lg:h-80 p-2 scale-95 hover:scale-100 shadow-md rounded-lg">
            <div className="flex justify-center items-center w-full h-5/6">
                {image && <img src={image} alt={book.id} className="h-full" />}
            </div>
            <div className="flex justify-center items-center w-full h-1/6">
                <span className="text-xs lg:text-sm pl-4">{book.volumeInfo.title}</span>
            </div>
        </a>
    )
}

export default Card;