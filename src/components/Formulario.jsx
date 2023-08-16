import React from 'react'

const Formulario = () => {
  return (
    <form>
        <div>
            <h2>Potencia</h2>
        </div>
        <div>
            <div>
                <label>
                    Potencia Recomendada:
                </label>
                <input type='number' />
            </div>
            <div>
                <label>
                    Potencia Maxima:
                </label>
                <input type='number' />
            </div>
            <div>
                <label>
                    Largo:
                </label>
                <input type='number' />
            </div>
            <div>
                <label>
                    Ancho:
                </label>
                <input type='number' />
            </div>
        </div>
    </form>
  )
}

export default Formulario
