export const Error = ({children}) => {
    return (
        <div className="bg-red-800 text-white text-center p-3 uppercase mb-3 font-bold rounded-md">
            {children}
        </div>
    )
}

/**
 * children es una palabra reservada de react, contiene todos los props que se pasaen 
 * al componente, funciones, html o vaiables, etc
 */
