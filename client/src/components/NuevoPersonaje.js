import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import controlForm from "../funciones";

import { crearNuevoPersonajeAction, cargarEpisodiosAction} from "../redux/actions";

function NuevoPersonaje() {

  const cargarEpisodios = useSelector(state => state.episodiosCargados);
  

  useEffect(() => {
    if(!cargarEpisodios){
      const cargarEpisodios = () => dispatch(cargarEpisodiosAction());
      cargarEpisodios();
    }
    
    

  }, [], cargarEpisodios)
  const navigate = useNavigate();
  //state del componente
  // const [name, setName] = useState("");
  // const [origen, setOrigen] = useState("");
  // const [species, setEspecie] = useState("");
  // const [image, setImagen] = useState("");
  const [episodes, setEpisodios] = useState([]);

  const [input, setInput] = useState({
    name : '',
    origen : '',
    species : '',
    image: '',
    
  })

  const {name, origen, species, image} = input;
  //error
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })

    setErrors(controlForm({
      ...input,
      [e.target.name] : e.target.value
    }))

  }
  

  const dispatch = useDispatch();

  const episodiosApi = useSelector(state => state.episodios);

  

  const agregarPersonaje = (personaje) =>
    dispatch(crearNuevoPersonajeAction(personaje));

  

  const submitPersonajeNuevo = (e) => {
    e.preventDefault();

    //validacion del formulario
    if(name.trim() === '' || origen.trim() === '' || species.trim() === '' || image.trim() === '' || episodes.length === 0){
      setError(true);
      return;
    }

    setError(false);

    agregarPersonaje({
      name,
      origen,
      species,
      image,
      episodes

    });

    alert('Personaje Creado Correctamente')

    navigate('/');
  }

  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <h2 className="text-center mb-4 font-weight-bold">
                  AGREGAR NUEVO PERSONAJE
                </h2>
                {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

                <form onSubmit={submitPersonajeNuevo}>
                  <div>
                    <label>Nombre:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre Personaje"
                      name="name"
                      value={name}
                      onChange={(e) => handleChange(e)}
                    />
                    {errors.name && (
                      <p className="mensaje-error">{errors.name}</p>
                      
                    )}
                  </div>
                  <div className="form-group">
                    <label>Origen:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Origen"
                      name="origen"
                      value={origen}
                      onChange={(e) => handleChange(e)}
                    />
                    {errors.origen && (
                      <p className="mensaje-error">{errors.origen}</p>
                      
                    )}
                  </div>
                  <div className="form-group">
                    <label>Especie:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Especie"
                      name="species"
                      value={species}
                      onChange={(e) => handleChange(e)}
                    />
                    {errors.species && (
                      <p className="mensaje-error">{errors.species}</p>
                      
                    )}
                  </div>
                  <div className="form-group">
                    <label>Imagen:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Imagen"
                      name="image"
                      value={image}
                      onChange={(e) => handleChange(e)}
                    />
                    {errors.image && (
                      <p className="mensaje-error">{errors.image}</p>
                      
                    )}
                  </div>
                  <div>
                    <label>Episodios</label>
                    <select
                      className="form-control"
                      name='episodios'
                      onChange={(e) => setEpisodios([...episodes, e.target.value])}
                      
                      
                    >
                      <option value=''>--Seleccione --</option>
                      {episodiosApi.map(episodio => (
                        <option key={episodio.id} value={episodio.id}>{episodio.name}</option>
                      ))}
                    </select>
                    
                  </div>
                  <button type="submit" className="mt-5 btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default NuevoPersonaje;
