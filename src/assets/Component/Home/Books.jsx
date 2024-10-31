import React, { useEffect, useState } from 'react';
import Book from './Book';

const Books = () => {

const [books, setBooks] = useState([])

useEffect(() => {
                    fetch('booksData.json')
                    .then(res => res.json())
                    .then(data => setBooks(data))
},[])
                    return (
                                        <div className='mt-5'>
                                           <h1 className="text-4xl text-center font-bold">Books</h1> 
                                          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                                          {books.map((book, idx) => <Book key={idx} book={book}></Book>)}              
                                        </div>                
                                        </div>
                    );
};

export default Books;