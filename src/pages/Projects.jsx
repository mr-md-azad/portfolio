import Image from 'next/image'
import React, { useState } from 'react'



const Data = [
    {
        direction: "card rtl",
        key: 1,
        img: "https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=75,format=auto/uploads/2020/06/SOC101_Portfolio_Guide.png",
        tittle: "Personal Portfolio",
        description: "This is my single page Responsive Personal Portfolio, created in Next.js and styled with SASS.",
        code: "#Add Link Here",
        demo: "https://mr-md-azad.vercel.app/"
    },
    {
        direction: "card ltr",
        key: 2,
        img: "https://cdn.wallpapersafari.com/13/92/it0Bae.jpg",
        tittle: "Auto Quotes Generator",
        description: "A simple JavaScript mini project. I used ",
        code: "https://github.com/mr-md-azad/random-quotes",
        demo: "https://bit.ly/3JFRx2B"
    },
    {
        direction: "card rtl",
        key: 3,

        img:"https://miro.medium.com/v2/resize:fit:720/format:webp/1*8du96SQUQ0NlWmWvVu20Zw.png",
        tittle: "Rock Paper Scissors",
        description: "Rock paper scissors is a hand game, usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand.",
        code: "https://github.com/mr-md-azad/RockPaperScissorsGame",
        demo: "https://mr-md-azad.github.io/RockPaperScissorsGame/"
    },
    {
        direction: "card ltr",
        key: 4,

        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfCG81rbMmMimUMyyRgIuFWq7-Hz33jqhx8g&usqp=CAU",
         tittle: "Under Development",
        description: "Coming soon...",
        code: "",
        demo: ""
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
                                    <img src={currentData.img} className="head-img" alt='image' width={0} height={0} />
                                </div>
                                <div className="body">
                                    <h3 className="tittle">{currentData.tittle}</h3>
                                    <div className="descriptions">{currentData.description}</div>
                                    <div className="buttons">
                                        <button className="live-demo"><a href={currentData.demo} target="_blank" rel='noreferrer'>Live Demo</a></button>
                                        <button className="view-code"><a href={currentData.code} target="_blank" rel='noreferrer'>View Code</a></button>
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
