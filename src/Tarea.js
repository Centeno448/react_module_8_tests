import React from 'react'

export default function Tarea({ tarea, marcadoTarea }) {

    function manejoTareaClic () {
        marcadoTarea(tarea.id)
    }
    return (
        <div>
            <label>
                <input type="checkbox" checked={tarea.completado} onChange={manejoTareaClic} />
                {tarea.nombre}
            </label>

        </div>
    )
}
