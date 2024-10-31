import { Outlet } from "react-router-dom";
import Footer from "./assets/Component/Footer/Footer";
import Navbar from "./assets/Component/Navbar/Navbar";

const Root = () => {
                    return (
                                        <div >
                                         <div className="container mx-auto">
                                         <Navbar></Navbar>
                                         <Outlet></Outlet>
                                         </div>
                                         <Footer></Footer>                   
                                        </div>
                    );
};

export default Root;