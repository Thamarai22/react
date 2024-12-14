import React from 'react'

const content = () => {
    const HandleChange=() =>{
        const words=["Live","Laugh","Love"]
        const int=Math.floor(Math.random()*3)
        return words[int]
    }
  return (
    <div>
      <h1>Just {<HandleChange/>}</h1>
    </div>
  )
}

export default content
