// alert with only text
// interface Props{
//           text:String;
// }
// const Alert = ({text}:Props) => {
//   return (
//     <div className="alert alert-primary"> {text} </div>
//   )
// }



// export default Alert

// alert with html components too 
// import { ReactNode } from "react";
// interface Props{
//           children:ReactNode
// }



// const Alert = ({children}:Props) => {
//   return (
//     <div className="alert alert-primary">{children}</div>
//   )
// }

// export default Alert

// alert with button 

import { ReactNode } from "react";
interface Props{
          children:ReactNode,
          onClose: ()=>void
}



const Alert = ({children,onClose}:Props) => {
  return (
          <>
       
    <div className="alert alert-warning alert-dismissible">{children}
    <button type="button" onClick={onClose} className="btn-close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button></div>
  </>
  )
}

export default Alert