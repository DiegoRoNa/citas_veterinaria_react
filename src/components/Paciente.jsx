import Swal from 'sweetalert2'

export const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente;

    const hanleEliminar = () => {
        Swal.fire({
            title: '¿Quieres eliminar el paciente?',
            text: "No podrás recuperarlo",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                eliminarPaciente(id);
            }
        })
    }

    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre:
                <span className="font-normal normal-case"> {nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario:
                <span className="font-normal normal-case"> {propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email:
                <span className="font-normal normal-case"> {email}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha alta:
                <span className="font-normal normal-case"> {fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntomas:
                <span className="font-normal normal-case"> {sintomas}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button type="button"
                    onClick={() => setPaciente(paciente)}
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg">
                    Editar
                </button>
                <button type="button"
                    onClick={hanleEliminar} // mandamos el id a APP.jsx
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg">
                    Eliminar
                </button>
            </div>
        </div>
    )
}
