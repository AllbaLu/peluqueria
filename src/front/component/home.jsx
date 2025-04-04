import pelu from "../img/peluq.png";
import '../../styles/home.css';





export const home = () => {

    return (
        <section id="home">

        <div className="home h-100" style={{mixBlendMode: "difference"}}>
                <div className="img-home"
                    style={{
                        backgroundImage: `url(${pelu})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        width: "100%",
                        minHeight: "70vh",
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "center",
                        textAlign: "center",
                        
                        
                    }}
                    >

                        
                        <h1 className="display-3  mt-5 ms-5 " style={{mixBlendMode: "color-burn"}} ><em><strong> Realza tu Belleza</strong></em></h1>
                        
                </div>

                
            </div> 
        </section>
    )
}

export default home;