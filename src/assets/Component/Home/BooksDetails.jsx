import { useLoaderData, useParams } from "react-router-dom";


const BooksDetails = () => {

const {bookId} = useParams({})
const id = parseInt(bookId)
const data = useLoaderData()


const book = data.find(book => id == book.bookId)
const {author,bookName,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = book;


                    return (
                                        <div className="grid  grid-cols-2 gap-5 border rounded-xl p-5 ">
                                        <div className="h-[500px]">
                                        <img className="w-full h-full" src={image} alt="" />                    
                                        </div>  
                                        <div className="">
                                        <div className="flex  items-center gap-6 text-green-500 text-xl"><p>{tags[0]}</p>
                                        <p>{tags[1]}</p></div> 

                                        <h1 className="text-3xl flex-grow font-semibold text-purple-500">{bookName}</h1> 
                                        <h1 className="text-xl font-medium pb-8 border-b-4 border-dashed">by: {author}</h1>
                                        <p>{review}</p>
                                       <div className="flex justify-between items-center">
                                       <p>{category}</p> 
                                       <p>{rating}</p>
                                        </div>                    
                                        </div>                 
                                        </div>
                    );
};

export default BooksDetails;