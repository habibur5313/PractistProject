
import bannerImg from '../../../assets/books.jpg'
const Banner = () => {
                    return (
                                        <div className='grid grid-cols-1 md:grid-cols-2 bg-gray-400 p-10 rounded-xl'>
                                        <div className='flex space-y-6 flex-col justify-center  px-10'>
                                            <h1 className="text-6xl font-extrabold">Books to freshen up your bookshelf</h1> 
                                            <button className='text-xl font-semibold py-2 px-3 bg-green-600 text-white w-[200px] rounded-xl'>View The List</button>               
                                        </div>           
                                        <div className=''>
                                        <img className='w-full rounded-xl' src={bannerImg} alt="" /></div>        
                                        </div>
                    );
};

export default Banner;