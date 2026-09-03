import React from 'react'
import ImgeCardLeft from '../components/imgeCardLeft'
import ImageCardRight from '../components/imageCardRight'
const ScrollWindow = () => {
  return (
    <div className=' w-full px-30 py-40 text-black text-8xl '>
      <ImgeCardLeft />
      <ImageCardRight />
    </div>
  )
}

export default ScrollWindow
