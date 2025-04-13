






export const WhatsAppButton = () => {

    const phoneNumber = '573505137703';
    const message = 'Hola, quiero más información';
    const encodedMessage = encodeURIComponent(message);
    const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return(
        <div className="whatsAppButton mt-5">

            
            <a  href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer " style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                backgroundColor: '#25D366',
                color: 'white',
                padding: '15px 20px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 'bold',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                zIndex: 1000,
                
              }} > 
               💬 WhatsApp 
            </a>
            
                
        </div>
    )
}