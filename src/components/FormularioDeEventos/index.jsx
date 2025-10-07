import {CampoDeEntrada} from '../CampoDeEntrada'
import {CampoDeFormulario} from '../CampoDeFormulario'
import {Label} from '../Label'
import {TituloFormulario} from '../TituloFormulario'
import {Botao} from '../Botao'
import {ListaSuspensa} from '../ListaSuspensa'
import './formulario-de-evento-style.css'

//no react, componentes são funções

export function FormularioDeEventos () {

  return (
    <form className='form-evento'>
        <TituloFormulario>
          Preencha para criar um evento:
        </TituloFormulario>
        <div className="campos">
          <CampoDeFormulario>
          <Label>
            Qual o nome do evento?
          </Label>
          <CampoDeEntrada type="text" id='nomeEvento' placeholder='Summer dev hits' name='nomeEvento'/>
          </CampoDeFormulario>
          <CampoDeFormulario>
          <Label>
            Data do evento
          </Label>
          <CampoDeEntrada type="text" id='dataEvento' placeholder='XX/XX/XXXX' name='dataEvento'/>
          </CampoDeFormulario>
          <CampoDeFormulario>
          <Label>
            Tema do evento
          </Label>
          <ListaSuspensa />
          </CampoDeFormulario>
        </div>
        <div className='acoes'>
          <Botao>
            Criar Evento
          </Botao>
        </div>
    </form>
  )
}