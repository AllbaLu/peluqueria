import logo from "../img/AlvLoEd.jpg"
import { Link } from "react-router-dom";



export const NavBar = () => {


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent " style={{mixBlendMode: "difference"}}>
            <div className="container-fluid ">
                <h1 className="d-flex text-center  ">
                    <img src={logo } style={{width: "50px", height: "50px", borderRadius: "50px"}}/>
                    <em><a className="navbar-brand text-warning fs-1 ms-2 " href="#" > Álvaro Rodríguez</a></em>
                </h1>
                
                <div className="collapse navbar-collapse d-flex justify-content-end " id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item  mx-2">
                            <a className="text-warning " href="#home">Inicio</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="text-warning " href="#about">Sobre mí</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="text-warning " href="#services">Servicios</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="text-warning " href="#carrousel">Trabajos</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="text-warning " href="#formContact">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;