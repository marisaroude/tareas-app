import { useState } from 'react'  /* estado de variable, info q almacena por ej la info d un input*/

const Formulario = ({ tareas, setTareas }) => {
    //x cada uno de los input se necesita un usestate
    const [ nombre, setNombre] = useState('')
    const [ puesto, setPuesto] = useState('')
    const [ fecha, setFecha] = useState('')
    const [ descripcion, setDescripcion] = useState('')
    const [ error, setError] = useState (false)
   
    const generarId = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)
    return (random + fecha)
    }

    const handleSubmit = (e) =>{
        e.preventDefault() //previene el render, es conveniente ponerlo siempre en formularios
        
        //validacion del form
        if ([nombre, puesto, fecha, descripcion].includes('')){
            console.log('Hay al menos un campo vacio')
            setError(true)

            //objeto de tareas
            
        }else{
            console.log('Todos llenos')
            setError(false)

            //objeto de tareas
            const objetoTareas ={
                nombre,
                puesto,
                fecha,
                descripcion,
                id: generarId()
            }
 
            setTareas([...tareas, objetoTareas]) //se evita q se muten y toma una copia y agrega un nuevo objeto
            //reiniciar formulario, cada vez que se hace el submit deben vaciarse los campos

            setNombre('')
            setPuesto('')
            setFecha('')
            setDescripcion('')
        }
        
        
        console.log('Enviando formulario')
    }
    
    

    return (
        <div className="w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento de tareas</h2>    

            <p className="text-lg mt-5 text-center">
                Añade tareas y {" "}
                <span className="text-indigo-600 font-bold">Administralas</span>
            </p>

            <form 
                onSubmit = {handleSubmit}
                className="bg-white shadow-md text-left">

                { error && 
                <div className='bg-red-800 text-white text-center p-3-uppercase font-bold mb-3 rounded-md'>
                    <p>¡Error!</p>
                </div>
                }
                <div className="mb-5">
                    <label htmlFor="Nombre">Nombre del Dev</label> {/*MANERA DE DAR ACCESIBILIDAD*/}
                    <input
                        id = "nombre" 
                        className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                        type="text"
                        placeholder="Nombre del desarrollador"
                        value = {nombre} //parametro que necesitamos para que pueda ser leido el input del formulario
                        onChange ={(e) => setNombre(e.target.value)} //nos permite recibir un argumento y enviarlo a hook, esto se escucha en consola
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="Puesto">Puesto del Dev</label> {/*MANERA DE DAR ACCESIBILIDAD*/}
                    <input 
                        id = "puesto"
                        className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                        type="text"
                        placeholder="Puesto del desarrollador"
                        value = {puesto}
                        onChange = {(e) => setPuesto(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="alta">Fecha de alta</label> {/*MANERA DE DAR ACCESIBILIDAD*/}
                    <input 
                        id = "alta"
                        className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                        type="date"
                        value = {fecha}
                        onChange = {(e) => setFecha(e.target.value)}

                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="detalle">Descripción de la tarea</label> {/*MANERA DE DAR ACCESIBILIDAD*/}
                    <textarea 
                        id = "detalle"
                        className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded-md"
                        placeholder="Describa la tarea..."
                        value={descripcion}
                        onChange = {(e) => setDescripcion(e.target.value)}

                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transitions-color"
                />
            </form>
        </div>
    );
}
 
export default Formulario;

