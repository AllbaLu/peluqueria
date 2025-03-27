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
                            <Link to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" >Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/carrousel" >My Work</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/formContact" >Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;