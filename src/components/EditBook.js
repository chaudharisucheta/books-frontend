import React from 'react';
import ApiService from '../service/ApiService';
import './AddBook.css';

class EditBook extends React.Component{

    constructor(props){
      super(props)
      this.state={
        bookNo:"",
        bookName:"",
        author:"",
        publisher:"",
        noOfPages:"",
        price:"",
        status:"",
        rating:""
      }
      this.loadBook=this.loadBook.bind(this)
      this.updateBook=this.updateBook.bind(this)

    }

    onChange=event=>{
      this.setState({[event.target.name]:event.target.value}) 
    }

    loadBook(){
      
      ApiService.getBookById(window.localStorage.getItem("bookNo"))
        .then(response=>{
          let book=response.data.result
          this.setState(
           { bookNo:book.bookNo,
            bookName:book.bookName,
            author:book.author,
            publisher:book.publisher,
            noOfPages:book.noOfPages,
            price:book.price,
            status:book.status,
            rating:book.rating
          }
           

          )
        })
        
    }

    // componentDidMount(){
    //   this.loadBook()
    // }

    updateBook=(event)=>{
      event.preventDefault()
      let book={
        bookNo:this.state.bookNo,
        bookName:this.state.bookName,
        author:this.state.author,
        publisher:this.state.publisher,
        noOfPages:this.state.noOfPages,
        price:this.state.price,
        status:this.state.status,
        rating:this.state.rating
      }
      ApiService.editBook(book)
        .then(response=>{
          this.props.history.push("/")
        })

    }
    render(){
        return(
            <div className="container">
        <form>
        <h1 className="h1">Edit Book</h1>
        <label  className="label">Book No</label>
        <input type="text" id="bno" name="bookNo" className="form-control" onChange={this.onChange}/><br/>

        <label  className="label">Book Name</label>
        <input type="text" id="bname" name="bookName" className="form-control" onChange={this.onChange}/><br/>
        
        <label  className="label">Author</label>
        <input type="text" id="bauth" name="author" className="form-control" onChange={this.onChange}/><br/>
        
        <label className="label">Publisher</label>
        <input type="text" id="bpub" name="publisher" className="form-control" onChange={this.onChange}/><br></br>

        <label className="label">No of Pages</label>
        <input type="text" id="pgs" name="noOfPages" className="form-control" onChange={this.onChange}/><br></br>

        <label className="label">Price</label>
        <input type="text" id="bprice" name="price" className="form-control" onChange={this.onChange}/><br></br>

      <label className="label">Status</label>
        <select id="status" name="status" className="form-control" onChange={this.onChange}>
          <option value="Read">Read</option>
          <option value="Reading">Reading</option>
          <option value="Completed">Completed</option>
        </select><br/>
      
        <label className="label">Rating(out of 5)</label>
        <input type="text" id="rating" name="rating" className="form-control" onChange={this.onChange}/><br>
        </br>

        <input type="button" value="Update" className="form-control" onClick={this.updateBook}/>

        </form>

      </div>
        )
    }
}

export default EditBook;