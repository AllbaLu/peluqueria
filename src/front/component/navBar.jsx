import logo from "../img/logoPeluqueria.jpg"
import { Link } from "react-router-dom";



export const NavBar = () => {


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent " style={{mixBlendMode: "difference"}}>
            <div className="container-fluid ">
                <h1 className="d-flex text-center  ">
                    <img src={logo } style={{width: "50px", height: "50px", borderRadius: "50px"}}/>
                    <em><a className="navbar-brand text-warning fs-1 ms-2 " href="#" > Alvaro Rodríguez</a></em>
                </h1>
                
                <div className="collapse navbar-collapse d-flex justify-content-end " id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item  mx-2">
                            <a className="text-warning " href="#home">Home</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="text-warning " href="#about">About</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="text-warning " href="#services">Services</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="text-warning " href="#carrousel">My Works</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="text-warning " href="#formContact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;