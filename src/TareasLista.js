import React from 'react'
import Tarea from './Tarea'

export default function TareasLista({ tareas, marcadoTarea }) {
    return (
        tareas.map(tarea => {
            return <Tarea key={tarea.id} tarea={tarea} marcadoTarea={marcadoTarea}/>
        })
    )
}
