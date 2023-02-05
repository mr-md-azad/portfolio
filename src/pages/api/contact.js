import MimeNode from "nodemailer/lib/mime-node"

export default function (req, res) {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({})
    
    console.log(req.body)

  }