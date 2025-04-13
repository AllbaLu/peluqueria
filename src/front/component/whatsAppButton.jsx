






export const WhatsAppButton = () => {

    const phoneNumber = '573505137703';
    const message = 'Hola, quiero más información';
    const encodedMessage = encodeURIComponent(message);
    const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return(
        <div className="container-whatsApp mt-5">

            <i className="fa-brands fa-whatsapp" >  
            <a  href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer " > 
                Escribeme - WhatsApp 
            </a>
            </i>
                
        </div>
    )
}