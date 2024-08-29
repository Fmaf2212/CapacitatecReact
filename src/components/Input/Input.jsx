const Input =
    (
        {
            className = "border-neutral-200",
            sizeClass = "h-[44px] px-4 py-3 border-neutral-200",
            fontClass = "text-sm font-normal",
            rounded = "rounded-2xl",
            error,
            errorMessage,
            ...rest
        },
    ) => {
        const { value } = rest; // Desestructurando el valor de las propiedades

        return (
            <div className="relative w-full">
                <input
                    className={`block w-full border border-neutral-200 focus:border-purple-600 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 disabled:bg-neutral-200 dark:disabled:bg-neutral-800 ${rounded} ${fontClass} ${sizeClass} ${className}`}
                    {...rest} // Se propagan las propiedades adicionales al input
                />
                {error && typeof value === "string" && value.trim() !== "" && (
                    <p className="absolute text-red-500 text-[9px] -bottom-5 right-0 whitespace-nowrap">
                        {errorMessage} {/* Mensaje de error, si corresponde */}
                    </p>
                )}
            </div>
        );
    }
// Exportación del componente para ser utilizado en otros lugares
export default Input;
