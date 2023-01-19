import { useEffect, useState } from "react"
import { Formulario } from "./components/Formulario"
import { Header } from "./components/Header"
import { ListadoPacientes } from "./components/ListadoPacientes"
import Swal from 'sweetalert2'
import { Footer } from "./components/Footer"

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  // effect para detectar si hay algo en localstorage al iniciar la app
  useEffect(() => {
    const obtenerLS = () => {
      // obtener lo que hay en localstorage y convertirlo a ARRAY
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS);
    }

    obtenerLS();
  }, [])

  // effect para guardar en localstorage
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  // FUNCION PARA ELIMINAR PACIENTES
  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(pacienteState => pacienteState.id !== id);
    setPacientes(pacientesActualizados);

    Swal.fire(
      'Eliminado!',
      'Has eliminado el paciente correctamente',
      'success'
    )
  }

  return (
    <div className="container mx-auto mt-20">
      <Header></Header>

      <div className="mt-12 md:flex">
        <Formulario pacientes={pacientes} 
                    setPacientes={setPacientes} 
                    paciente={paciente}
                    setPaciente={setPaciente}
        ></Formulario>
        <ListadoPacientes pacientes={pacientes} 
                          setPaciente={setPaciente}
                          eliminarPaciente={eliminarPaciente}
        ></ListadoPacientes>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default App
