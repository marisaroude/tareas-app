import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoTarea from './components/ListadoTarea'


function App() {

  const [ tareas, setTareas] = useState([])

    return (
      <>
      <div className="container mx-auto mt-5 flex:wrap "> {/* mt: margin top */}
        <Header />
        <div className='mt-12 md:flex '>
          <Formulario
            tareas ={tareas}
            setTareas = {setTareas}
          /> 
          <ListadoTarea 
          tareas= {tareas}
          setTareas = {setTareas}/>
        </div>
      </div>
      </>
    )
}


export default App
