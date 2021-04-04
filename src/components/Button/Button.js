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
        base: "border-gray-700 outline-none",
        active:
            "text-gray-700 hover:bg-gray-100 focus:outline-none",
    },
}

const Button = ({className, padding = 'px-2 py-2 sm:px-4 sm:py-2', variant = 'default', circular, fullWidth, children, ...props}) => {
    const variantStyles = VARIANTS[variant] || VARIANTS.default
    return (
        <button
            type='button'
            className={
                clsx('relative font-semibold text-sm sm:text-base gap-x-2 inline-flex justify-center items-center border',
                    circular ? 'px-3 py-1' : padding,
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