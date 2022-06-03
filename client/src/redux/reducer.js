import { AGREGAR_PERSONAJE, 
    AGREGAR_PERSONAJE_EXITO, 
    AGREGAR_PERSONAJE_ERROR,
    CARGAR_PERSONAJES,
    CARGAR_PERSONAJES_EXITO,
    CARGAR_PERSONAJES_ERROR,
    CARGAR_EPISODIOS,
    CARGAR_EPISODIOS_EXITO,
    CARGAR_EPISODIOS_ERROR
} from "./types";  
const initialState = {
    personajes: [],
    episodios: [],
    cantidadPersonajesTotal : 0,
    episodiosCargados: false,
    error: false,
    loading: false

};

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case CARGAR_EPISODIOS:
        case CARGAR_PERSONAJES:
        case AGREGAR_PERSONAJE:
            return {
                ...state,
                loading: action.payload
            }
        case AGREGAR_PERSONAJE_EXITO:
            return {
                ...state,
                loading: false,
                cantidadPersonajesTotal: state.cantidadPersonajesTotal + 1,
                personajes : [...state.personajes, action.payload]
            }
        case CARGAR_EPISODIOS_ERROR:
        case CARGAR_PERSONAJES_ERROR:
        case AGREGAR_PERSONAJE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case CARGAR_PERSONAJES_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                cantidadPersonajesTotal: action.payload.length,
                episodiosCargados: true,
                personajes: action.payload
            }
        case CARGAR_EPISODIOS_EXITO:
            return {
                ...state,
                loading: false,
                error: null,
                episodios: action.payload
            }
        
    

        default:
            return state;
    }
  
}

