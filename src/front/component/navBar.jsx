import logo from "../img/logoPeluqueria.jpg"
import { Link } from "react-router-dom";



export const NavBar = () => {


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent " style={{mixBlendMode: "difference"}}>
            <div className="container-fluid ">
                <h1 className="d-flex justify-content-center text-center  ">
                    <img src={logo } style={{width: "50px", height: "50px", borderRadius: "50px"}}/>
                    <a className="navbar-brand " href="#"> Alvaro Rodríguez</a>
                </h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end " id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <a href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#carrousel">My Works</a>
                        </li>
                        <li className="nav-item">
                            <a href="#formContact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;