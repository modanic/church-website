import "./index.css"
import { useState } from "react" 

// IMPORT DESKTOP IMAGES
import image01 from '../assets/landing-page-slide-show/1.png'
import image02 from '../assets/landing-page-slide-show/2.png'
import image03 from '../assets/landing-page-slide-show/3.png'

// IMPORT DESKTOP
import imageRes01 from '../assets/responsive-landing-page/1.png'
import imageRes02 from '../assets/responsive-landing-page/2.png'
import imageRes03 from '../assets/responsive-landing-page/3.png'

// IMPORT SLIDESHOW
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const SlideShow = () =>{

    const spanStyle = {
        padding: '20px',
        background: '#efefef',
        color: '#000000'
    }
    

    const responsiveImage = [
        {
            url_image: image01,
            background_color: 'red'
        },
        {
            url_image: image02,
            background_color: 'blue'
        },
        {
            url_image: image03,
            background_color: "yellow"
        }
    ]

    const mobileResponseImage = [
        {
            url_image: imageRes01,
            background_color: 'red'

        },
        {
            url_image: imageRes02,
            background_color: 'blue'

        },
        {
            url_image: imageRes03,
            background_color: "yellow"

        }
    ]

    return(

        <div className="slideShowBody">
            <div className="slide-show-container cmp">
                
                {
                    <Fade>
                    {responsiveImage.map((v, i)=> (
                       <div id="mySlides" className="slideShowContainer fade" key={`key${i}`}>
                            <img src={v.url_image} style={{width: '100%', height: "100%", backgroundColor: v.background_color}} />
                            <div className="create-acc-btn">
                                <button
                                    className="section-buttn"
                                    type="button"
                                    // onclick="handelClick()"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                     ))} 
                   </Fade>
                }
                
            </div>
            {/* mobileResponseImage */}
            <div className="slide-show-container mob">
                {
                    <Fade>
                    {mobileResponseImage.map((v, i)=> (
                       <div id="mySlides" className="slideShowContainer fade" key={`key${i}`}>
                            <img src={v.url_image} style={{width: '100%', height: "100%", backgroundColor: v.background_color}} />
                            <div className="create-acc-btn">
                                <button
                                    className="section-buttn"
                                    type="button"
                                    // onclick="handelClick()"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                     ))} 
                   </Fade>
                }
                {/* {} */}
                
            </div>
        </div>
    )
}

export default SlideShow