import './titulo-formulario-styles.css'
// props é um OBJETO
// props.children
export function TituloFormulario ({children}) {
    return (
      <h2 className='titulo-form'>
        {children}
      </h2>
    )
}
  