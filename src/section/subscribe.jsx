import {useState} from 'react'
import "./index.css"
import modanmicLogo from '../assets/modanmicLog.jpg'

const Subscribe = () =>{

    const [subEmail, setSubEmail] = useState("")
    const [clickSub, setClickSub] = useState(false)

    const handelSubmit = (e)=>{
        e.preventDefault()
        setClickSub(!clickSub)
        
    }

    return(
        <div className='subscription-body'>
            <h2>
                SUBSCRIBE
            </h2>
            <div className='subscribe-container'>
                <div className="sub-con-info">
                    <img src={modanmicLogo} alt={'company logo'} />
                    <form onSubmit={handelSubmit}>
                        <label htmlFor="email">
                            Subscribe Email
                        </label>
                        <input type="email" id="email" placeholder='Enter Email' required />
                        <button type="submit">
                            Subscribe
                        </button>
                    </form>
                </div>
                {
                    clickSub &&
                    <div className="sub-con-background">
                        <img src={modanmicLogo} alt="company logo" />
                        <h2>SUBSCRIPTION CONFIRMED!</h2>
                    </div>
                }
            </div>

        </div>
    )
}

export default Subscribe