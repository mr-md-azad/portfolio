import Image from 'next/image'
import React, { useState } from 'react'



const Data = [
    {
        direction: "card rtl",
        key: 1,
        img: "/images/programming.jpg",
        tittle: "Personal Portfolio",
        description: "This is my single page Responsive Personal Portfolio, created in Next.js and styled with SASS.",
        code: "#Add Link Here",
        demo: "https://mr-md-azad.vercel.app/"
    },
    {
        direction: "card ltr",
        key: 2,
        img: "/images/laptop.jpg",
        tittle: "Auto Quotes Generator",
        description: "A simple JavaScript mini project. I used ",
        code:"https://github.com/mr-md-azad/random-quotes",
        demo: "https://bit.ly/3JFRx2B"
    }
]

const Projects = () => {
    const [currentData, setData] = useState(Data)
    
    return (
        <>
            {Data.map((currentData) => {
                return (
                    <>

                        <div className="cards" key={currentData.key}>
                            <div className={currentData.direction}>
                                <div className="head">
                                    <img src={currentData.img} className="head-img" alt='image' width={0} height={0}/>
                                </div>
                                <div className="body">
                                    <h3 className="tittle">{currentData.tittle}</h3>
                                    <div className="descriptions">{currentData.description}</div>
                                    <div classname="buttons">
                                    <button><a href={currentData.demo} target="_blank" rel='noreferrer'>Live Demo</a></button>
                                    <button><a href={currentData.code} target="_blank" rel='noreferrer'>View Code</a></button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </>
                )
            })}

        </>
    )
}

export default Projects