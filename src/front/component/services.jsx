








export const Services = () => {
    return (
        <section id="services">
            <div className="container mt-4 mb-4">
                <div className="title text-center">
                    <h1 className="text-white">Servicios</h1>
                </div>

                <div className="services-list">

                    <div className="row text-white mt-4">

                        {/* col 1 */}
                        <div className="col-12 col-md-4">

                            <ul className="list-unstyled text-white">
                                <li>
                                    <i className="fa-solid fa-scissors" style={{ color: "#FFD43B" }}></i>{" "}
                                    <strong>Diseño de cortes y estilos femeninos</strong>
                                </li>
                                <li>
                                    <i className="fa-solid fa-wand-magic-sparkles" style={{ color: "#FFD43B" }}></i>{" "}
                                    <strong>Secado y peinado</strong>
                                </li>
                                <li>
                                    <i className="fa-solid fa-palette" style={{ color: "#FFD43B" }}></i>{" "}
                                    <strong>Diseño de color, tintes - Ultimas tendencias </strong>
                                </li>
                            </ul>
                        </div>
                        {/* col 2 */}
                        <div className="col-12 col-md-4">

                            <ul className="list-unstyled text-white">
                                <li>
                                    <i className="fa-solid fa-child" style={{ color: "#FFD43B" }}></i>{" "}
                                    <strong>Corte infantil</strong>
                                </li>
                                <li>
                                    <i className="fa-solid fa-star-half-stroke" style={{ color: "#FFD43B" }}></i>{" "}
                                    <strong>Mechas, balayage y reflejos</strong>
                                </li>
                                <li>
                                    <i className="fa-solid fa-stamp" style={{ color: "#FFD43B" }}></i>{" "}
                                    <strong>Diseño de cortes y estilos masculinos</strong>
                                </li>
                            </ul>
                        </div>
                        { /* col 3 */}
                        <div className="col-12 col-md-4">

                            <ul className="list-unstyled text-white">
                                <li>
                                    <i className="fa-solid fa-hand-holding-heart" style={{ color: "#FFD43B" }}></i>{" "}
                                    <strong>Tratamientos capilares</strong>
                                </li>
                                <li>
                                    <i className="fa-solid fa-handshake-angle" style={{ color: "#FFD43B" }}></i>{" "}
                                    <strong>Asesoramiento en tendencias</strong>
                                </li>
                                <li>
                                    <i className="fa-solid fa-crown" style={{ color: "#FFD43B" }}></i>{" "}
                                    <strong>Peinados para ocasiones especiales</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="text-center text-warning mt-4" >
                    <h3 className="text" style={{textAlign: "justify"}}>
                        Cada cliente es único y merece un servicio de calidad. ¡Permíteme
                        cuidar tu cabello y potenciar tu estilo con profesionalismo y
                        dedicación!
                    </h3>
                </div>
            </div>
        </section>
    );
};
