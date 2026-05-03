export default function Badge({text}) {
  return (
    <div className="flex gap-2 items-center">
      <div className="border-2 border-gray-500 w-4 md:w-6"></div>
      <p className='text-sm md:text-base uppercase text-gray-500 font-semibold'>{text}</p>
    </div>
  )
}