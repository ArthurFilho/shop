import axios from "axios"
import { Provider } from "react-redux"
import { store } from "../../store/store"

const api = axios.create({
    baseURL: "https://api.mercadopago.com"
})

api.interceptors.request.use(async config => {
    const token = process.env.REACT_APP_TOKEN_MERCADO_PAGO_PUBLIC
    config.headers.Authorization = `Bearer ${token}`
})

export function PagamentPage () {

    const handleSubmit = (event:any) => {
        event.preventDefault()
        alert('opa')
    }

    return(
        <Provider store={store}>
        <form onSubmit={handleSubmit}>

            <div>
                <label> E-mail </label>
                <input name="email" />
            </div>

            <div>
                <label> Nome </label>
                <input name="nome" />
            </div>

            <div>
                <label> CPF </label>
                <input name="cpf" />
            </div>

            <div>
                <button type="submit">Pagar</button>
            </div>

        </form>
        </Provider>
    )
}