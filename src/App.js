import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import AddBook from './components/AddBook';
import BookList from './components/BookList';
import EditBook from './components/EditBook';


function App(){
    return(
        <div className="container">
            <Router>
                <div>
                    <Switch>
                        <Route path="/" exact component={BookList}/>
                        <Route path="/add-book" component={AddBook}/>
                        <Route path="/getUserList" component={BookList}/>
                        {/* <Route path="/edit-book" component={EditBook}/> */}
                    </Switch>
                </div>

            </Router>
        </div>
    )
}




export default App;

