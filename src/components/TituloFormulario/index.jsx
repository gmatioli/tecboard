import './titulo-formulario-style.css'
//prop é um objeto 
//props.children
export function TituloFormulario (props) {
  return (
    <h2 className='titulo-form'>
      {props.children}
    </h2>
  )
}