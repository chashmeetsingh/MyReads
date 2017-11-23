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
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

    updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf)

        book.shelf = shelf
        this.setState((state) => {
            console.log(state.books)
        })
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <BooksList books={this.state.books} onUpdateShelf={this.updateShelf} />
                )}/>

                <Route path='/search' render={() => (
                    <BooksSearch/>
                )}/>

            </div>
        )
    }

}

export default BooksApp
