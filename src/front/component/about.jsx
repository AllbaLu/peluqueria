import img from "../img/AlvPerfil.jpg"





export const About = () => {

    return (
        <section id="about" >
            <div className="container mt-4">
                <div className="card bg-transparent text-white"  style={{
                    maxWidth: "100%",
                    width: "clamp(350px, 95%, 1100px)", // Esto adapta el ancho a distintos tamaños
                    margin: "0 auto",
                    border: "none",
                    padding: "0rem"
                }}>
                    <div className="card-body ">
                        <h1 className="card-title text-warning" style={{mixBlendMode: "hard-light"}}>Sobre mí</h1>
                        <img src={img} 
                        style={{width: "250px", height: "280px", borderRadius: "50%", outline: "auto"}} />
                        <h5 className="card-subtitle mb-2 mt-3 text-light"><em><strong>Experiencia y Pasión por la Belleza Capilar</strong></em> </h5>
                        <p className="card-text" style={{textAlign: "justify"}}>
                        Con más de 40 años de trayectoria en el mundo de la peluquería, 
                        mi misión es realzar la belleza y personalidad de cada cliente a través de técnicas personalizadas y las últimas tendencias. 
                        Mi experiencia me permite trabajar con todo tipo de cabello y estilos, brindando un servicio profesional y adaptado a cada necesidad.
                        </p> 
                    </div>
                </div>
            </div>
        </section>
    )
}