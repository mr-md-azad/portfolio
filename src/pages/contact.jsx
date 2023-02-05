import { useState } from 'react'
import styles from '../styles/Home.module.css'

const contact = () => {


    // *****************
    // const scriptURL = 'https://script.google.com/macros/s/AKfycbyAZlpawxJFzIVGLNnXPANrmHTimj26NeoM2UtpQEXMHg4VIrY-CY_3746d3875HJu4Xg/exec'
    // const form =document.form['google-sheet']

    // form.addEventListener('submit', e => {
    //   e.preventDefault()
    //   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    //     .then(response => 
    //     alert("Thanks You!😊")
    //     )
    //     .catch(error => console.error('Error!', error.message))
    // })
    // *****************



    return (
        <>
            <div class="contact-form">
                <div class="heading-text">Contact me</div><br />
                <form action='https://script.google.com/macros/s/AKfycbyAZlpawxJFzIVGLNnXPANrmHTimj26NeoM2UtpQEXMHg4VIrY-CY_3746d3875HJu4Xg/exec' method="post" name="google-sheet" autocomplete="off">

                    <input type="text" name="Name" class="form-control" placeholder="Your Name *" value="" required="" />
                    <input type="email" name="Email" class="form-control" placeholder="Your Email *" value="" required="" />
                    <textarea name="Message" rows="6" placeholder="Your Message" />

                    <input type="submit" name="submit" class="btn btn2 button" id="send-btn" value="Send" />
                </form>

                <div id="msg"></div>

            </div>
        </>
    )
}

export default contact