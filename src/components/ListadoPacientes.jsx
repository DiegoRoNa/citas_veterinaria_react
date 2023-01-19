import { Paciente } from "./Paciente"

export const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length > 0
        ? <>
          <h2 className="font-black text-3xl text-center">
            Listado de pacientes
          </h2>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus
            <span className="text-indigo-600 font-bold"> pacientes y citas</span>
          </p>

          {pacientes.map(paciente =>
            <Paciente key={paciente.id} 
                      paciente={paciente} 
                      setPaciente={setPaciente}
                      eliminarPaciente={eliminarPaciente}
            ></Paciente>
          )}
        </>
        : <>
          <h2 className="font-black text-3xl text-center">
            No hay pacientes
          </h2>
          <p className="text-lg mt-5 text-center mb-10">
            Comienza agregando pacientes
            <span className="text-indigo-600 font-bold"> y aparecerán en esta sección</span>
          </p>
        </>
      }

    </div>
  )
}
