// import React from 'react'
// import './footer.css'

// function Footer() {
//   return (
//     <div className='p-4  max-w-[100vw] mx-auto  flex justify-center'>
//         <footer className="text-center bg-pink-300 h-22 p-4 m-2  w-[100vw]   text-black-600 text-white">
//             <h4 className='text-2xl'>todo</h4> <p>copy&; THECODEMASTER
//               © 2025 My Todo App — All rights reserved
//             </p>
//          </footer>    
//     {/* <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white text-center py-3">
//   © 2025 My Todo App — All rights reserved
// </footer> */}

//      </div>
//   )
// }

// export default Footer


// flex-grow not working
// Parent (div) must have flex and min-h-screen

// =============================================


import React from "react";

function Footer() {
  return (
    <footer className="w-full mx-auto bg-pink-300 text-center py-4  mt-3">
      
      <h4 className="text-xl sm:text-2xl font-semibold text-black">
        todo
      </h4>

      <p className="text-xs sm:text-sm mt-2 text-gray-800">
        © 2025 My Todo App — All rights reserved
      </p>

      <p className="text-xs sm:text-sm text-gray-800">
        THECODEMASTER
      </p>

    </footer>
  );
}

export default Footer;






