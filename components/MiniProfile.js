

function MiniProfile() {
  return (
    <div className="flex items-center justify-between ml-10 mt-14">
        <img 
        className="w-16 h-16  rounded-full border rounded-[2px]"
        src="https://avatars.githubusercontent.com/u/97034683?v=4" 
        alt="img"
        />

        <div>
            <h2 className="font-bold">@shanto_0000</h2>
            <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
        </div>
        <button className="font-semibold text-sm text-blue-400">Sign Out</button>
    </div>
  )
}

export default MiniProfile