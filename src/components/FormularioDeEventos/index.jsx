import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { Botao } from "../Botao";
import { ListaSuspensa } from "../ListaSuspensa";
import "./formulario-de-evento-style.css";

//no react, componentes são funções

export function FormularioDeEventos({ temas, AoSubmeter }) {

  function aoFormSubmetido(formData) {
    console.log(formData)
    const evento = {
      capa: formData.get('capaEvento'),
      tema: temas.find(function (item) {
        return item.id == formData.get('tema')
      }),
      data: formData.get('dataEvento'),
      titulo: formData.get('nomeEvento')
    }
    AoSubmeter(evento)
  }

  return (
    <form className="form-evento" action={aoFormSubmetido}>
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            placeholder="Summer dev hits"
            name="nomeEvento"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label>Qual o endereço da imagem de capa?</Label>
          <CampoDeEntrada
            type="text"
            id="capaEvento"
            placeholder="http://..."
            name="capaEvento"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada
            type="date"
            id="dataEvento"
            placeholder="XX/XX/XXXX"
            name="dataEvento"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="temaEvento">Tema do evento</Label>
          <ListaSuspensa id="tema" name="tema" itens={temas} />
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <Botao>Criar Evento</Botao>
      </div>
    </form>
  );
}
