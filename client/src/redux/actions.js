import { AGREGAR_PERSONAJE, 
        AGREGAR_PERSONAJE_EXITO, 
        AGREGAR_PERSONAJE_ERROR,
        CARGAR_PERSONAJES,
        CARGAR_PERSONAJES_EXITO,
        CARGAR_PERSONAJES_ERROR
} from "./types";  

import clienteAxios from "../config/axios";

export function crearNuevoPersonajeAction(personaje) {
    return async (dispatch) => {
        dispatch( agregarPersonaje())

        try {
            await clienteAxios.post('/character', personaje)

            dispatch(agregarPersonajeExito(personaje))
            
        } catch (error) {
            dispatch(agregarPersonajeError(true))
            
        }
        


    }

}

const agregarPersonaje = () => ({
    type: AGREGAR_PERSONAJE,
    payload: true
})
const agregarPersonajeExito = (personaje) => ({
    type: AGREGAR_PERSONAJE_EXITO,
    payload : personaje
})

const agregarPersonajeError = () => ({
    type: AGREGAR_PERSONAJE_ERROR,
    payload: true
})

/**************************** */
//cargar todos los personajes

export function cargarPersonajesAction () {
    return async (dispatch) => {
        dispatch(cargarPersonajes());

        try {
            const respuesta = await clienteAxios.get('/characters');
            dispatch(cargarPersonajesExito(respuesta.data));
            
        } catch (error) {
            dispatch(cargarPersonajesError(error));
            
        }
    }
}

const cargarPersonajes = () => ({
    type: CARGAR_PERSONAJES,
    payload: true

})

const cargarPersonajesExito = (personajes) => ({
    type: CARGAR_PERSONAJES_EXITO,
    payload: personajes
})

const cargarPersonajesError = () => ({
    type: CARGAR_PERSONAJES_ERROR,
    payload: true
})
