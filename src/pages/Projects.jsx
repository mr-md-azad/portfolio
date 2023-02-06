import Image from 'next/image'
import React, { useState } from 'react'
import Data from './ProjectAPI'


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
                                    <Image src={currentData.img} className="head-img" alt='image' width={0} height={0}/>
                                </div>
                                <div className="body">
                                    <h3 className="tittle">{currentData.tittle}</h3>
                                    <div className="descriptions">{currentData.description}</div>
                                    <button><a href={currentData.demo} target="_blank" rel='noreferrer'>Live Demo</a></button>
                                    <button><a href={currentData.code} target="_blank" rel='noreferrer'>View Code</a></button>
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