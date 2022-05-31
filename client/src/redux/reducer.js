import { AGREGAR_PERSONAJE, 
    AGREGAR_PERSONAJE_EXITO, 
    AGREGAR_PERSONAJE_ERROR,
    CARGAR_PERSONAJES,
    CARGAR_PERSONAJES_EXITO,
    CARGAR_PERSONAJES_ERROR
} from "./types";  
const initialState = {
    personajes: [],
    error: false,
    loading: false

};

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case AGREGAR_PERSONAJE:
            return {
                ...state,
                loading: action.payload
            }
        case AGREGAR_PERSONAJE_EXITO:
            return {
                ...state,
                loading: false,
                personajes : [...state.personajes, action.payload]
            }
        case AGREGAR_PERSONAJE_ERROR:
            return {
                ...state,
                error: action.payload
            }
    

        default:
            return state;
    }
  
}

