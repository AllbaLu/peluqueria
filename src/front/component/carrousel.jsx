import { useState, useEffect, useRef } from "react"
import "../../styles/carrousel.css"
import peluq from "../img/peluq.png"
import Alv1 from "../img/Alv1.jpg"
import Alv2 from "../img/Alv2.jpg"
import Alv3 from "../img/Alv3.jpg"
import Alv4 from "../img/Alv4.jpg"
import Alv5 from "../img/Alv5.jpg"
import Alv6 from "../img/Alv6.jpg"
import Alv7 from "../img/Alv7.jpg"
import Alv8 from "../img/Alv8.jpg"
import Alv9 from "../img/Alv9.jpg"
import Alv10 from "../img/Alv10.jpg"
import Alv11 from "../img/Alv11.jpg"
import Alv13 from "../img/Alv13.jpg"









const images =[
    `${Alv1}`, `${Alv2}`,`${Alv4}`, `${Alv5}`,`${Alv6}`,`${Alv7}`,`${Alv8}`,`${Alv9}`,`${Alv3}`,`${Alv10}`,`${Alv11}`,`${Alv13}`
    
];



// loop infinito
const duplicatedImages = [...images, ...images];

export const Carrousel = ({direction = "left", speed = 1}) => {

    
    const [paused, setPaused] = useState(false);
    const [modalImg, setModalImg] = useState(null);
    const trackRef = useRef(null)
    const [scrollDirection, setScrollDirection] = useState("left");
    

    useEffect(() => {
        if (!paused) {
            const interval = setInterval(() => {
                if(trackRef.current) {
                    trackRef.current.scrollLeft += direction === "left" ? speed : -speed;
                
                    //reiniciar
                    if(trackRef.current.scrollLeft >= trackRef.current.scrollWidth /2) {
                        trackRef.current.scrollLeft = 0;
                    }else if (trackRef.current.scrollLeft <= 0) {
                        trackRef.current.scrollLeft = trackRef.current.scrollWidth / 2;
                    }
                }
            }, 20);
            return () => clearInterval(interval);
        }
    }, [paused, direction, speed]);

    const nextSlide = () => {
        setScrollDirection("left");
        trackRef.current.scrollLeft += 300;
    };

    const prevSlide = () => {
        setScrollDirection("right");
        trackRef.current.scrollLeft -=300;
    }

    return (
        <section id="carrousel">

            <div className="carrousel mt-4">
                {/* carrousel 1 */}
                <h1 className="text-white mt-4">
                    Trabajos
                </h1>
                <button className="btn prev" onClick={prevSlide}>&lt;</button>
                <div className="carrousel-container mt-5"
                    ref={trackRef}
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                >
                    <div className="carrousel-track" 
                    >
                        {duplicatedImages.map((img, i) => (
                            <img
                                key={i}
                                src={img}
                                alt={`Imagen ${i + 1}`}
                                onClick={() => setModalImg(img)}
                            />
                        ))}
                    </div>
                </div>
                
                <button className="btn next" onClick={nextSlide}>&gt;</button>

                {/* modal para ampliar imagen  */}
                {modalImg && (
                    <div className="modal" onClick={() => setModalImg(null)}>
                        <img src={modalImg} alt="Imagen ampliada" />
                    </div>
                )}
            </div>
        </section>
    );
};

export default Carrousel;