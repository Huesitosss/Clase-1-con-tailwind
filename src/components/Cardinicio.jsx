import React from 'react'

const cardinicio = () => {
  return (
    <div className="navbar bg-gray-900">
    <div className="navbar-start">
    <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
    </div>
    <div className="navbar-center w-96 mx-0">
    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
    </div>
    <div className="navbar-end">
      <button className="btn btn-ghost btn-circle">
      <div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn m-5">Lenguage</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li><a>Español</a></li>
    <li><a>Ingles</a></li>
  </ul>
</div>
      </button>
      <button className="btn btn-ghost ">
        <div className="indicator">
        <button className="btn">Search</button>
          <span className="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
    </div>
  </div>

  )
}

export default cardinicio