import React,{ Component } from 'react';
import ApiService from '../service/ApiService';
import './BookList.css';

class BookList extends Component{
    constructor(props){
      super(props)

      this.state={
        books:[],
        message:null
      }
      this.addBook=this.addBook.bind(this)
      this.loadBookList=this.loadBookList.bind(this)
     // this.editBook=this.editBook.bind(this)

    }

    componentDidMount(){
      console.log("Getting book list")
      this.loadBookList()
      
    }

    addBook(){
        window.localStorage.removeItem("bookNo")
        this.props.history.push("/add-book")
      }

    
    

    loadBookList(){
      ApiService.fetchBooks()
        .then(response=>{
          this.setState({books:response.data.result})
        })
    }
    
      editBook(bookNo){
          window.localStorage.setItem("bookNo",bookNo)
          this.props.history.push("/edit-book")
      }

    deleteBook(){

    }

    render(){
      return(
        <div className="container">
        <div>
          <h1 className="h1">My Library</h1>
          <br/>
          <button type="button" className="button" onClick={this.addBook}>Add Book</button><br/><br/>
        </div>
      <div>
        <table className="table">
        <thead>
          <tr>
            <th>Book No</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>No of Pages</th>
            <th>Price</th>
            <th>Status</th>
            <th>Rating</th>
          </tr>
        </thead>  
      <tbody> 
        {
          this.state.books.map(
            book=>
              <tr key={book.bookNo}>
                <td>{book.bookName}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.noOfPages}</td>
                <td>{book.price}</td>
                <td>{book.status}</td>
                <td>{book.rating}</td>
                <td>
                  <button type="button" className="buttonedit" onClick={this.editBook(book.bookNo)}> Edit</button> 
                </td>
              <td>
                <button type="button" className="buttonedit" onClick={this.deleteBook(book.bookNo)}>Delete</button>
              </td>
            </tr>
          )
            }
          </tbody>
        </table>
      </div>
   </div>
      )
    }
  }

    
export default BookList;