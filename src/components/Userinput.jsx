import React from 'react'

const Userinput = (prop) => {
  return (
    <div className='Userinput' >

        {/* Userinput */}
      < input type="text" onChange={prop.changeEvent} />
        
    </div>
  )
}

export default Userinput