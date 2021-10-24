import React, {useState} from 'react'

import SliderData from "./SliderData"

const ImageSlider = () => {
  
  const [slideIndex, setSlideIndex] = useState (1);

  const moveDot = index => {
    setSlideIndex(index)
}
  
    return (
        <div className="container-slider">
         
            {SliderData.map ( (obj, index) => { return (   

                                    <div 
                                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"} 
                                    key={obj.id}>

                                    <img alt="carousel" src={process.env.PUBLIC_URL + `Imgs/img${index + 1}.jpg` } />  

                                    </div>

             )  }             )}



<div className="container-dots">
                {Array.from({length: 3}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>

        </div>
    )
} 

export default ImageSlider


