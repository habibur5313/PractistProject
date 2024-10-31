import { Link } from "react-router-dom";


const Book = ({book}) => {

const {author,bookId,bookName,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = book;
                    return (
                                        <Link to={`books/${bookId}`}>
                                        <div className="border rounded-xl p-4 flex flex-col ">
                                         <div className="">
                                         <img className="w-full h-[400px] rounded-xl" src={image} alt="book" />
                                         </div> 
                                        <div className="flex gap-6 text-green-500 text-xl"><p>{tags[0]}</p>
                                        <p>{tags[1]}</p></div> 

                                        <h1 className="text-3xl flex-grow font-semibold text-purple-500">{bookName}</h1> 
                                        <h1 className="text-xl font-medium pb-8 border-b-4 border-dashed">by: {author}</h1>
                                       <div className="flex justify-between items-center">
                                       <p>{category}</p> 
                                       <p>{rating}</p>
                                        </div>               
                                        </div>
                                        </Link>
                                        
                    );
};

export default Book;