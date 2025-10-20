import React from 'react'
interface Iprops{
    sru:string
}

const IconImf = ({sru}:Iprops) => {
  return (
   <img src={sru} alt=""  className="w-5 h-5"  />
  )
}

export default IconImf