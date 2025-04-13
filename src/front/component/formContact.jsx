





export const FormContact = () => {
    return (
        <section id="formContact">



            <div className="container">

                <h1 className="text-warning">
                    Contacto
                </h1>
                <form ref={form} onSubmit={""}>
                    <div className="col-md-4">
                        <label for="inputName" className="form-label"></label>
                        <input type="text" name="user_name" placeholder="Tu nombre" required />
                    </div>
                    <div className="col-md-4">
                        <label for="inputEmail4" className="form-label"></label>
                        <input type="email" name="user_email" placeholder="Tu correo" required />
                    </div>
                    <div className="col-md-4">
                        <label for="inputNumber" className="form-label"></label>
                        <input type="PhoneNumber" phone="user_phone" placeholder="Número" />
                    </div>
                    <div className="col-12">
                        <label for="inputText" className="form-label"></label>
                        <textarea name="message" placeholder="Tu mensaje" required />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </section>
    )
}