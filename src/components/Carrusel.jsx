import React from 'react'

const Carrusel = () => {
  return (
   <div>
  <div classname="carousel w-full">
    <div id="item1" classname="carousel-item w-full">
      <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"  />
    </div>
    <div id="item2" classname="carousel-item w-full">
      <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"  />
    </div>
    <div id="item3" classname="carousel-item w-full">
      <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"  />
    </div>
    <div id="item4" classname="carousel-item w-full">
      <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"  />
    </div>
  </div>
  <div classname="flex w-full justify-center gap-2 py-2">
    <a href="#item1" classname="btn btn-xs">1</a>
    <a href="#item2" classname="btn btn-xs">2</a>
    <a href="#item3" classname="btn btn-xs">3</a>
    <a href="#item4" classname="btn btn-xs">4</a>
  </div>
</div>

  )
}

export default Carrusel