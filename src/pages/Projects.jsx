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
                                    <img src={currentData.img} className="head-img" alt='image' />
                                </div>
                                <div className="body">
                                    <h3 className="tittle">{currentData.tittle}</h3>
                                    <div className="descriptions">{currentData.description}</div>
                                    <button><a href={currentData.demo} target="_blank">Live Demo</a></button>
                                    <button><a href={currentData.code} target="_blank">View Code</a></button>
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