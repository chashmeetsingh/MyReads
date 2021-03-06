import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import BooksList from './BooksList'
import BooksSearch from './BooksSearch'

class BooksApp extends React.Component {

    state = {
        books: []
    }

    componentDidMount() {
        this.getAllBooks()
    }

    getAllBooks() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

    updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(() => {
            this.getAllBooks()
        })
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <BooksList books={this.state.books} onUpdateShelf={this.updateShelf} />
                )}/>

                <Route path='/search' render={() => (
                    <BooksSearch onUpdateShelf={this.updateShelf} />
                )}/>

            </div>
        )
    }

}

export default BooksApp
