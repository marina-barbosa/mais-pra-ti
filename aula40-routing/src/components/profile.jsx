export function Profile() {
  return (

    <div className="relative drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-slate-500" >
      <h1>Profile</h1>
      <p>Welcome to your profile page!</p>
      <div className="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-slate-700" >
        <div className="">
          <div className="avatar"></div>
          <h2>John Doe</h2>
          <p>Web Developer</p>
        </div>
      </div>
      <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
    </div>

  )
}

