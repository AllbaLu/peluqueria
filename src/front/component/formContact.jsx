





export const FormContact = () => {
    return (
        <section id="formContact">
            <div className="container">

                <form className="row g-3 mt-5">
                    <h1 className="text-warning">
                        Contacto
                    </h1>
                    <div className="col-md-4">
                        <label for="inputName" className="form-label"></label>
                        <input type="name" className="form-control" id="inputName" placeholder="Nombre"/>
                    </div>
                    <div className="col-md-4">
                        <label for="inputEmail4" className="form-label"></label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                    </div>
                    <div className="col-md-4">
                        <label for="inputNumber" className="form-label"></label>
                        <input type="PhoneNumber" className="form-control" id="inputNumber" placeholder="Numero"/>
                    </div>
                    <div className="col-12">
                        <label for="inputText" className="form-label"></label>
                        <input type="text" className="form-control" id="inputText" placeholder="Nota"/>
                    </div> 
                    <button onSubmit={''} > Enviar</button>
                </form>
            </div>
        </section>
    )
}