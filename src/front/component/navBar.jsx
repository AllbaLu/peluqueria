import logo from "../img/logoPeluqueria.jpg"




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
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">My Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" >Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}