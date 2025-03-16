import './index.css'
import {useState} from "react"

import modanmicLogo from "../assets/modanmicLog.jpg"

const ContactForm = ()=>{

    const [submiteState, setSubmiteState] = useState(false)

    const handelSubmite = async (event) =>{

        event.preventDefault()

        const firstName = document.getElementById('firstName').value
        const lastName = document.getElementById('lastName').value
        const contactPhone = document.getElementById('contactPhone').value
        const contactEmail = document.getElementById('contactEmail').value
        const contactaddress = document.getElementById('contactaddress').value
        const contactTestimones = document.getElementById('contactTestimones').value

        setSubmiteState(!submiteState)
        const newTest = {
            email: "kmanEmanuel@modanmic.com",
            contactEmail, 
            firstName, 
            lastName, 
            contactPhone, 
            contactaddress, 
            contactTestimones,
          }

        const configUpdate = {
            'method': "POST",
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            "body": JSON.stringify(newTest)
        }
        const handeLocalhostLocation = "https://missionary.onrender.com/api/" // `http://localhost:3001/api/` // "https://missionary.onrender.com/api/"
        const urlUpate = `${handeLocalhostLocation}testimones`
        // display loading
        // displayLoadingScreen()
        const responseUpdate = await fetch(urlUpate, configUpdate)
        let dataUpdata = await responseUpdate.json();


        console.log(responseUpdate)

        if( responseUpdate.status === 200){ // responseUpdate.status === 200
            // VIEW LOADING
            console.log('working')
            // displayReversLoadingScreen()
            // window.location.replace("./sales-supply.html")
            // "sales-supply.html"

        }
        
    }

    return(
        <section className='contact-section'>
            <div className='contact-form-container'>
                <div className="contact-form-body">
                    <form onSubmit={(event)=>handelSubmite(event)}>
                        <div className='contact-fname-lname'>
                            <div className="contact-fname">
                                <label htmlFor="firstName">First Name</label>
                                <input required type="text" name="firstName" id="firstName" placeholder='David' />
                            </div>
                            <div className="contact-lname">
                                <label htmlFor="lastName">Last Name</label>
                                <input required type="text" name="lastName" id="lastName" placeholder='Bencin' />
                            </div>
                        </div>
                        <div className='contact-email-phone'>
                            <div className="contact-phone contact-enpadres">
                                <label htmlFor="contactPhone">Phone</label>
                                <input required type="tel" name="contactPhone" id="contactPhone" placeholder='+234********' />
                            </div>
                            <div className="contact-email contact-enpadres">
                                <label htmlFor="contactEmail">Email</label>
                                <input required type="text" name="contactEmail" id="contactEmail" placeholder='example@example.com' />
                            </div>
                            
                        </div>
                        <div className='contact-address-response'>
                            <div className="contact-address contact-enpadres">
                                <label htmlFor="contactaddress">Address</label>
                                <input required type="text" name="contactaddress" id="contactaddress" placeholder='example@example.com' />
                            </div>
                            <div className="contact-address contact-enpadres">
                                <label htmlFor="contactTestimones">Testimon</label>
                                <textarea required type="text"  name="contactTestimones" id="contactTestimones" placeholder='example@example.com'></textarea>
                            </div>
                        </div>
                        
                        <button type="submit">
                            Submite Testimon
                        </button>
                    </form>
                </div>
            </div>
            {
                submiteState 
                && 
                <div className="contact-form-background">

                    <div className='con-form-back-body'>
                        <img src={modanmicLogo} alt="LOGO OF CHURCH" />
                        <h2>
                            Testemone Sumbited!
                        </h2>
                    </div>

                </div>
            }
        </section>
    )
}

export default ContactForm