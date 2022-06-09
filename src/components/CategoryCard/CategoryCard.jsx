export default function CategoryCard({ icon: Icon, title }) {
    return (
        <div className="h-16 md:h-32 flex flex-col flex-1 justify-center items-center gap-2 bg-white text-gray-700 overflow-hidden hover:bg-gray-700 hover:text-white transition cursor-pointer">
            <Icon className="mx-auto text-3xl" />
            <h2 className="hidden md:block text-center text-sm font-semibold tracking-[0.01em] w-full px-2 truncate">
                {title}
            </h2>
        </div>
    )
}
