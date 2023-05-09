import React, { useState, useEffect } from 'react'; //estos hooks permiten manejar y actualizar el estado del componente
import './formulario.css'

function Formulario() {
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    numero: '',
    cedula:'',
    RH:'',
    placa:'',
    N_internovehiculo:'',
    V_soat:'',
    T_vigencia:'',
    C_bateria:'',
    U_mantenimiento:'',
    D_mantenimiento:'',
  });
  const [registros, setRegistros] = useState(
    JSON.parse(localStorage.getItem('registros')) || []   //para obtener los registros alamacenados previamente
  );

  const handleInputChange = (event) => {    //carga los datos a un objeto
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => { //envia el valor al registro a la base de datos
    event.preventDefault();
    const registro = { ...datos, id: Date.now() };
    setRegistros([...registros, registro]);
    localStorage.setItem('registros', JSON.stringify([...registros, registro])); //ingresa los datos al local storage
    setDatos({ nombre: '',
    apellido: '',
    numero: '',
    cedula:'',
    RH:'',
    placa:'',
    N_internovehiculo:'',
    V_soat:'',
    T_vigencia:'',
    C_bateria:'',
    U_mantenimiento:'',
    D_mantenimiento:'', });
  };

  const handleDelete = (id) => {   //permite eliminar un registro de la tabla, actualiza y guarda en el localstorage
    const updatedRegistros = registros.filter((registro) => registro.id !== id);
    setRegistros(updatedRegistros);
    localStorage.setItem('registros', JSON.stringify(updatedRegistros));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Ingreso de datos conductor y vehiculo:</h2>
        <label htmlFor='nombre'>Nombre:</label>
        <input
          type='text'
          id='nombre'
          name='nombre'
          value={datos.nombre}
          onChange={handleInputChange}
        />

        <label htmlFor='apellido'>Apellido:</label>
        <input
          type='text'
          id='apellido'
          name='apellido'
          value={datos.apellido}
          onChange={handleInputChange}
        />

        <label htmlFor='numero'>Número:</label>
        <input
          type='tel'
          id='numero'
          name='numero'
          value={datos.numero}
          onChange={handleInputChange}
        />

        <label htmlFor='cedula'>Cédula:</label>
        <input
          type='number'
          id='cedula'
          name='cedula'
          value={datos.cedula}
          onChange={handleInputChange}
        />
        <label htmlFor='RH'>RH:</label>
        <input
          type='text'
          id='RH'
          name='RH'
          value={datos.RH}
          onChange={handleInputChange}
        />
        <label htmlFor='placa'>Placa:</label>
        <input
          type='text'
          id='placa'
          name='placa'
          value={datos.placa}
          onChange={handleInputChange}
        />
        <label htmlFor='N_internovehiculo'>N° interno vehiculo:</label>
        <input
          type='number'
          id='N_internovehiculo'
          name='N_internovehiculo'
          value={datos.N_internovehiculo}
          onChange={handleInputChange}
        />
        <label htmlFor='NV_soat'>Fecha vigencia soat:</label>
        <input
          type='date'
          id='V_soat'
          name='V_soat'
          value={datos.V_soat}
          onChange={handleInputChange}
        />
        <label htmlFor='T_vigencia'>Fecha vigencia tecnomecanica:</label>
        <input
          type='date'
          id='T_vigencia'
          name='T_vigencia'
          value={datos.T_vigencia}
          onChange={handleInputChange}
        />
        <label htmlFor='C_bateria'>Fecha cambio de bateria:</label>
        <input
          type='date'
          id='C_bateria'
          name='C_bateria'
          value={datos.C_bateria}
          onChange={handleInputChange}
        />
        <label htmlFor='U_mantenimiento'>Fecha ultimo mantenimiento:</label>
        <input
          type='date'
          id='U_mantenimiento'
          name='U_mantenimiento'
          value={datos.U_mantenimiento}
          onChange={handleInputChange}
        />
        <label htmlFor='D_mantenimiento'>Detalles del ultimo mantenimiento:</label>
        <textarea
          type='text'
          id='D_mantenimiento'
          name='D_mantenimiento'
          value={datos.D_mantenimiento}
          onChange={handleInputChange}
        />

        <button type='submit'>Guardar</button>
      </form>

      <h2 >Registros:</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Número</th>
            <th>Cédula</th>
            <th>RH</th>
            <th>Placa</th>
            <th>N° interno del vehiculo </th>
            <th>Vigencia del Soat </th>
            <th>Vigencia de la tecnomecanica </th>
            <th>F. cambio de bateria </th>
            <th>F. ultimo mantenimiento </th>
            <th>Descripcion del mantenimiento </th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody className='colorletra'>
          {registros.map((registro) => (
            <tr key={registro.id}>
              <td>{registro.nombre}</td>
              <td>{registro.apellido}</td>
              <td>{registro.numero}</td>
              <td>{registro.cedula}</td>
              <td>{registro.RH}</td>
              <td>{registro.placa}</td>
              <td>{registro.N_internovehiculo}</td>
              <td>{registro.V_soat}</td>
              <td>{registro.T_vigencia}</td>
              <td>{registro.C_bateria}</td>
              <td>{registro.U_mantenimiento}</td>
              <td>{registro.D_mantenimiento}</td>

              <td>
                <button onClick={() => handleDelete(registro.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Formulario;
