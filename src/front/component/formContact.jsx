import React, {useRef} from "react";
import emailjs from 'emailjs-com';





export const FormContact = () => {

    const form = useRef();

    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm(
            'service_63en7eu',
            'template_z4z6eel',
            form.current,
            'aypkSt5-RupwjxdPV'
        ).then(
            (result) => {
                alert('Mensaje enviado con éxito!')
                form.current.reset();
            },
            (error) => {
                alert('Error al enviar el mensaje')
                console.error(error.text);
                
            }
        );
    };


    return (
        <section id="formContact">



                <h1 className="text-warning mt-5" style={{mixBlendMode: "difference"}}>
                    Contacto
                </h1>
            <div className=" form-control d-flex  mt-1 bg-transparent border-0 justify-content-center"  >
                <form  ref={form} onSubmit={sendEmail} style={{display: "grid", width: "400px", background: "transparent"}}>                   
                    <input className="form-control mt-1" type="text" name="user_name" placeholder="Tu nombre" required />
                    <input className="form-control mt-1" type="email" name="user_email" placeholder="Tu correo" required />
                    <input className="form-control mt-1" type="phone" name="user_phone" placeholder="Tu número" required />
                    <textarea className="form-control mt-1" name="message" placeholder="Tu mensaje" required />
                    <button className="mt-1" type="submit"  value="send" >Enviar</button>
                </form>
            </div>
        </section>
    )
}