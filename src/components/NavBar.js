import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-grey/60 backdrop-blur-sm text-white py-4 fixed w-full z-50 px-6">
      <div className="container mx-auto flex items-center text-white-600 justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 mr-6">
          <a href="/" className="text-2xl font-bold tracking-wide">
            TUGAS AKHIR
          </a>
        </div>
        <div className="md:flex-hidden">
          <a href="/" className="mr-6">
            Human Counting
          </a>
          <a href="/" className="mr-6">
            Face Recognition
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar