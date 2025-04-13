
const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
};


export const Footer = () => {

    return (

        <div className="container-fluid mt-5">
            <div className="card border-dark bg-transparent text-white mb-3" style={{
                    maxWidth: "100%",
                    width: "clamp(350px, 95%, 1100px)", // Esto adapta el ancho a distintos tamaños
                    margin: "0 auto",
                    border: "none",
                    padding: "0rem"
                }} >
                <div className="card-header text-warning mt-3 fs-2" style={{mixBlendMode: "difference"}}>Álvaro Rodríguez</div>
                <div className="card-body text-white">
                    <p className="card-text"><i className="fa-solid fa-square-phone"></i> Telf. +57 350 513 7703</p>
                    <p className="card-text"><i className="fa-solid fa-square-envelope"></i> arodriguezagudelo@gmail.com</p>
                    <p className="card-text mb-5"><i className="fa-solid fa-location-dot"></i> CRA 34 A # 37-90 conjunto frailejón 3 torre 17 apto 102 Ciudad Verde - Soacha Cundinamarca, Colombia. </p>
                </div>
            </div>
            <div>
               <p className="mt-5">Hecho por  
                <a  onClick={(() => openLink("https://www.linkedin.com/in/alba-luccia-rodr%C3%ADguez-qui%C3%B11/"))}
                    className="card-link ms-2"
                >  AlbaLu
                </a>
                </p>
               
            </div>
        </div>
    )
}