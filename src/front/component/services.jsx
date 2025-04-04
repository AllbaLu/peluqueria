




export const Services = () => {
    
    return(
        <section id="services">
            
            <div className="container">
                <div className="title">

                    <h1 className="text-white">
                        Services
                    </h1>
                </div>
                <div className="d-flex justify-content-evenly ">
                    <ul className="list text-warning">
                        <li className="list">
                            <i className="fa-light fa-scissors" style={{color: "#FFD43B"}}></i><strong></strong>
                                <p>
                                    <a className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                        Corte de Cabello
                                    </a>
                                    
                                </p>
                                    <div className="collapse" id="collapseExample">
                                    <div className="card card-body">
                                        Desde cortes clásicos hasta los más modernos y personalizados para mujeres, hombres y niños.
                                    </div>
                                    </div>
                            
                        </li>
                        <li className="list">
                           
                            
                        </li>
                        <li>serv 3</li>
                    </ul>
                    <ul className="list-gropu text-white">
                        <li>serv 1</li>
                        <li>serv 2</li>
                        <li>serv 3</li>
                    </ul>
                    <ul className="list-gropu text-white">
                        <li>serv 1</li>
                        <li>serv 2</li>
                        <li>serv 3</li>
                    </ul>
                    <ul className="list-gropu text-white">
                        <li>serv 1</li>
                        <li>serv 2</li>
                        <li>serv 3</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}