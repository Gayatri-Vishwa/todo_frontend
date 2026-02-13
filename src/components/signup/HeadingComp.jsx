import React from 'react'

function HeadingComp({first,second}) {
  return (
    <div>
       {/* <h1 className="text-8xl font-bold text-center text-red-600 font-semi-bold opacity-[0.3]">
              {first} <br /> {second} */}
               <h1 className="text-[22px] sm:text-[33px] md:text-[94px] lg:text-8xl font-bold text-center text-red-600 opacity-30 leading-tight">
        {first} <br /> {second}
   

            </h1>
    </div>
  )
}

export default HeadingComp
