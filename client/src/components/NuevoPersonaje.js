import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import { crearNuevoPersonajeAction, cargarEpisodiosAction} from "../redux/actions";

function NuevoPersonaje() {
  //state del componente
  const [name, setName] = useState("");
  const [origen, setOrigen] = useState("");
  const [especie, setEspecie] = useState("");
  const [imagen, setImagen] = useState("");
  const [episodios, setEpisodios] = useState([]);

  const dispatch = useDispatch();

  const episodiosApi = useSelector(state => state.episodios);

  console.log(episodiosApi);

  

  useEffect(() => {
    const cargarEpisodios = () => dispatch(cargarEpisodiosAction());
    cargarEpisodios();
  }, [])


  const agregarPersonaje = (personaje) =>
    dispatch(crearNuevoPersonajeAction(personaje));

  const submitPersonajeNuevo = (e) => {
    e.preventDefault();

    agregarPersonaje({
      name,
      origen,
      especie,
      imagen,

    })
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

                <form onSubmit={submitPersonajeNuevo}>
                  <div>
                    <label>Nombre:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre Personaje"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Origen:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Origen"
                      name="origen"
                      value={origen}
                      onChange={(e) => setOrigen(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Especie:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Especie"
                      name="especie"
                      value={especie}
                      onChange={(e) => setEspecie(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Imagen:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Imagen"
                      name="imagen"
                      value={imagen}
                      onChange={(e) => setImagen(e.target.value)}
                    />
                  </div>
                  <div>
                    <label>Episodios</label>
                    <select
                      className="form-control"
                      name='episodios'
                      
                      
                    >
                      <option value=''>--Seleccione --</option>
                      {episodiosApi.map(episodio => (
                        <option key={episodio.id}>{episodio.name}</option>
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
