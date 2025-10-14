import { useState } from 'react'
import './App.css'
import { Banner } from './components/Banner'
import { CardEvento } from './components/CardEvento'
import {FormularioDeEventos} from './components/FormularioDeEventos'
import { Tema } from './components/Tema'

function App() {

const temas = [
  {
    id: 1,
    nome: 'front-end'
  },
  {
    id: 2,
    nome: 'back-end'
  },
  {
    id: 3,
    nome: 'devops'
  },
  {
    id: 4,
    nome: 'inteligência artificial'
  },
  {
    id: 5,
    nome: 'data science'
  },
  {
    id: 6,
    nome: 'cloud'
  },
]

const [eventos, setEventos] = useState([
  {
    capa: 'https: //raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
    tema: temas[0],
    data: new Date(),
    titulo: 'Mulheres no Front'
  }
])

function adicionarEvento(evento) {
  /* eventos.push(evento) */
  setEventos([... eventos, evento])
}

temas.map

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormularioDeEventos 
      temas={temas} 
      aoSubmeter={adicionarEvento} 
      />
      {temas.map(function (item){
        return (
          <section key={item.id}>
            <Tema tema={item} />
            {eventos.map(function(item, index){
              return <CardEvento evento={item} key={index} />
            })}
            
          </section>
        )
      })}
    </main>
  )
}

export default App
