import React from "react";

const Card = ({ book }) => {
    return (
        <div className="flex flex-col justify-between items-center w-full h-60 lg:h-80 p-2 bg-gray-200">
           <div className="">
                <img src={book.thumbnail} alt={book.id} />
           </div>
        </div>
    )
}

export default Card