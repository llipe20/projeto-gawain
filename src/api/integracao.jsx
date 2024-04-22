
const API = async (search) => {
    const key = 'AIzaSyC4HR6jd4k9E5xYNXj91WH6LEh94VtOWlg';
    try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${key}`)
        const data = await response.json()
        return data.items
    } catch (error) {
        console.error('Ocorreu um erro:', error)
    }
}

export default API