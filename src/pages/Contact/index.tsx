import { useState } from "react";
import { ButtonForm, ContactPaga, TextAreaContact } from "./styles";
import emailjs from "@emailjs/browser"

export function ContactPage() {

   const [name, setName] = useState('')
   const [email, setEmail] = useState('')
   const [phone, setPhone] = useState('')
   const [message, setMessage] = useState('')

   function sendEmail(event: any) {
    event.preventDefault()

    if(name === '' || email === '' || message === ''){
        alert("Preencha todos os campos");
        return
    }

    const templateParams = {
        from_name: name,
        message: message,
        email: email,
    }

    emailjs.send("service_osh9o5j", "template_xbkm0lz", templateParams, "-K7DkayEZikN8FBhH")
    .then((response)=>{
        console.log("email enviado", response.status, response.status)
    setName('')
    setPhone('')
    setEmail('')
    setMessage('')
    },(err) => {
        console.log("Erro: ", err)
    })
}

return(
    <ContactPaga>
       
        <h1>Entre em contato</h1>

        <hr />

        <p>Envie-nos uma mensagem que retornaremos o mais breve possível.</p>

        <form onSubmit={sendEmail}>

        <p>Nome</p>
       
        <input 
            type="text" 
            onChange={(e) => setName(e.target.value)}
            value={name}
        />

        <p>Telefone</p>
       
        <input 
            type="text" 
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
        />

        <p>E-mail</p>
       
        <input 
            type="text" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
        />

        <p>Mensagem</p>
       
        <TextAreaContact 
            onChange={(e) => setMessage(e.target.value)}
            value={message}
        />

        <ButtonForm type="submit" value='Enviar' />
        </form>
   
    </ContactPaga>
)
}