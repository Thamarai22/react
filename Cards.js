import React from 'react'

const Cards = () => {
  return (
    <div  className='MainDiv'>
        <div className='div1'>
            <h1>THAMARAI</h1>
        </div>
        <div className='div2'>
           <img src="./image/img1.jpg" />
           <p className='p1'> Hello all I'm  Ren,im a anime character my name meaning is Lotus</p> 
          <span style={{marginLeft:"20px", wordSpacing:"30px"}}>45 459 54</span> <br></br>
          <p style={{marginLeft:"30px", wordSpacing:"30px"}}>Posts Followers Following</p>
		
           <button> FOLLOW </button> 
           <button> MESSAGE </button>     
        </div>
      
    </div>
  )
}

export default Cards
