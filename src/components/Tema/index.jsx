import './tema-style.css'

export function Tema({ tema }) {
    return <h3 className='titulo-tema'>{tema.nome}</h3>
}