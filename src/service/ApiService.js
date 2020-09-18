import axios from 'axios'
const USER_BASE_URL="http://localhost:8080/"

class ApiService{
    addBook(book){
        return axios.post(USER_BASE_URL+'/addbook',book)

    }

    fetchBooks(){
        return axios.get(USER_BASE_URL+'/getallbooks')
    }

    // editBook(book){
    //     return axios.put(USER_BASE_URL+'/updatebook')
        
    // }

    getBookById(bookNo){
        return axios.get(USER_BASE_URL+'/getbook'+'/'+bookNo)
    }
}

export default new ApiService();