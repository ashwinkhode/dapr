const Badge = ({query}) => {
    return (
        <div className="absolute -top-2 right-0 sm:-top-1 sm:right-2 text-[0.5rem] text-white font-bold px-[4px] sm:p-1 rounded-full bg-red-500 flex justify-center items-center">{query}</div>
    )
}

export default Badge