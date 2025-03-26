import pelu from "../img/peluq.png";
import '../../styles/Home.css';





export const home = () => {

    return (
       <div className="home h-100">
            <div className="img-home"
                style={{
                    backgroundImage: `url(${pelu})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    minHeight: "70vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    
                    
                }}
                >

                    <h1 className="text mt-5" style={{mixBlendMode: "color-burn"}} >Realza tu Belleza, Eleva tu Estilo</h1>
            </div>

            <div></div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel culpa totam qui, voluptates ipsa eveniet? Consectetur, sit pariatur sapiente assumenda impedit ea temporibus cum quaerat totam quasi distinctio. Laboriosam, quidem!</div>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint in, mollitia accusamus corrupti necessitatibus, officiis pariatur omnis ipsa quos explicabo aut accusantium dignissimos ad, excepturi rerum nulla culpa quasi eligendi?</div>
        </div> 
    )
}

export default home;