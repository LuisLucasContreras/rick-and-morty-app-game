import React from 'react'


interface Prop {
    children?: React.ReactNode
}

const Back = ({children}: Prop) => {
  return (
 
   
   <div >
     <div className="lamp">
        <div className="lava">
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob"></div>
          <div className="blob top"></div>
          <div className="blob bottom"></div>
          {
            children
          }
        </div>
    </div>
    
   </div>
  )
}

export default Back