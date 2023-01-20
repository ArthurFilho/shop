import { ContactPaga } from "./styles";

export function ContactPage() {
return(
    <ContactPaga>
       
        <h1>Entre em contato</h1>

        <hr />

        <p>Envie-nos uma mensagem que retornaremos o mais breve possível.</p>

        <p>Nome</p>
       
        <input type="text" />

        <p>Telefone</p>
       
        <input type="text" />

        <p>E-mail</p>
       
        <input type="text" />

        <p>Mensagem</p>
       
        <input type="text" />

        <button>Enviar</button>
   
    </ContactPaga>
)
}