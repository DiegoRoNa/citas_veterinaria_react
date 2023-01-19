import { useEffect, useState } from "react"
import { Error } from "./Error";
import Swal from 'sweetalert2'

export const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);

    // useEffect para cachar cuando se llena el objeto PACIENTE del prop, que viene dese Paciente.jsx a App.jsx
    useEffect(() => {
        // VALIDAR SI EL OBJETO ESTA LLENO
        if (Object.keys(paciente).length > 0) {

            // asignar valores
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas); 
        }
        
    }, [paciente]) // se ejecuta cuando el objeto de PACIENTE cambia

    const generarID = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true);
        } else {
            setError(false);

            const objetoPaciente = {
                nombre, 
                propietario, 
                email, 
                fecha, 
                sintomas
            }

            // VALIDAR SI EXISTE LA INSTANCIA DE paciente, QUE LLEGA EN EL PROP, PARA SABER SI SE ESA EDITANDO O CREANDO
            if (paciente.id) {
                // agregar el id del paciente que se quiere editar
                objetoPaciente.id = paciente.id;

                /**
                 * hiteramos el arreglo de pacientes que es el que contiene los pacientes...
                 * comparamos el paciente hiterado con el paciente que se quiere editar...
                 * si son iguales los ID retornamos el objeo actualizado...
                 * Si no, retornamos el objeto tal cual se encuentra en el arreglo de pacientes
                 */
                
                const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);

                // seteamos el nuevo arreglo
                setPacientes(pacientesActualizados);

                // limpiar el objeto PACIENTE del prop, el que ya existia en PACIENTES
                setPaciente({});

                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Paciente actulizado',
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                // agregar el id al objeto
                objetoPaciente.id = generarID();
                // TOMA LA FUNCION DEL PROP, CREAMOS EL ARREGLO CON OBJETOS
                setPacientes([...pacientes, objetoPaciente]);
            }

            
            // limpiar el form
            setNombre('');
            setPropietario('');
            setEmail('');
            setFecha('');
            setSintomas('');
        }
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade pacientes y
                <span className="text-indigo-600 font-bold"> adminístralos</span>
            </p>

            <form onSubmit={handleSubmit} className="mx-5 bg-white shadow-md rounded-xl py-10 px-5 mb-10">
                
                {/*ESTA ES OTRA FORMA DE PASAR PROPS*/}
                {error && <Error><p>Todos los campos son obligatorios</p></Error>}

                <div className="mb-5">
                    <label htmlFor="mascota" 
                            className="block text-gray-700 uppercase font-bold">
                                Nombre mascota
                    </label>
                    <input type="text" 
                            id="mascota"
                            placeholder="nombre de la mascota" 
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={nombre}
                            onChange={ e => setNombre(e.target.value) }/>
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" 
                            className="block text-gray-700 uppercase font-bold">
                                Nombre propietario
                    </label>
                    <input type="text" 
                            id="propietario"
                            placeholder="nombre del propietario" 
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={propietario}
                            onChange={ e => setPropietario(e.target.value) }/>
                </div>
                <div className="mb-5">
                    <label htmlFor="email" 
                            className="block text-gray-700 uppercase font-bold">
                                Email
                    </label>
                    <input type="email" 
                            id="email"
                            placeholder="email de contacto del propietario" 
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={email}
                            onChange={ e => setEmail(e.target.value) }/>
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" 
                            className="block text-gray-700 uppercase font-bold">
                                Alta
                    </label>
                    <input type="date" 
                            id="alta"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={fecha}
                            onChange={ e => setFecha(e.target.value) }/>
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" 
                            className="block text-gray-700 uppercase font-bold">
                                Sintomas
                    </label>
                    <textarea id="sintomas" 
                            placeholder="describe los síntomas"
                            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                            value={sintomas}
                            onChange={ e => setSintomas(e.target.value) }></textarea>
                </div>
                <input type="submit" 
                        value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}
                        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 hover:cursor-pointer transition-all"/>
            </form>
        </div>
    )
}
