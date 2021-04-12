import clsx from 'clsx'

const VARIANTS = {
    primary: {
        base: "border-gray-700 text-white",
        active:
            "bg-gray-700 hover:bg-gray-600 hover:shadow-md focus:border-gray-700 active:bg-gray-900",
        disabled: "bg-gray-300 opacity-70",
    },
    default: {
        base: "border-transparent text-gray-700",
        active:
            "focus:outline-none ",
        disabled: "opacity-40",
    },
    danger: {
        base: "border-transparent text-white",
        active:
            "bg-red-500 hover:bg-red-600 focus:border-red-600 focus:shadow-outline-red",
        disabled: "bg-red-400",
    },
    secondary: {
        base: "outline-none focus:outline-none",
        active:
            "text-gray-700 bg-white border-gray-700 hover:text-white hover:bg-gray-700 active:bg-white active:text-gray-700",
    },
    invert: {
        base: "outline-none focus:outline-none",
        active: "text-white border-white hover:text-gray-700 hover:bg-white",
    },
    blue: {
        base: "outline-none focus:outline-none",
        active: "text-white bg-blue-500 border-blue-500 hover:bg-blue-400 active:bg-blue-700",
    }
}

const Button = ({className, padding = 'px-2 py-2 sm:px-4 sm:py-2', variant = 'default', circular, fullWidth, children, ...props}) => {
    const variantStyles = VARIANTS[variant] || VARIANTS.default
    return (
        <button
            type='button'
            className={
                clsx('relative font-semibold text-sm sm:text-base gap-x-2 inline-flex justify-center items-center border transition duration-300 ',
                    circular ? 'px-3 py-1 w-8 h-8' : padding,
                    variantStyles.base,
                    fullWidth && "w-full text-center",
                    props?.disabled && "cursor-default",
                    props?.disabled ? variantStyles.disabled : variantStyles.active,
                    className
                )}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button