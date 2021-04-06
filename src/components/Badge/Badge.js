const Badge = ({query}) => {
    return (
        <div className="absolute -top-0 right-0 sm:-top-0 sm:right-2 text-[0.5rem] text-white font-bold px-[4px] w-4 h-4 rounded-full bg-red-500 flex justify-center items-center">{query}</div>
    )
}

export default Badge