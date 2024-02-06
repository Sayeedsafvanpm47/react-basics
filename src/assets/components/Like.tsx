
import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
interface Props{
          onClick : ()=>void;
          
}
const Like = ({onClick}:Props) => {
  const [visibility,setVisibility] = useState(true)        
  const toggle = ()=> {
          setVisibility(!visibility)
          onClick()
  }
  if(visibility) return (
     
    <div onClick={toggle}>{visibility && <CiHeart/>}</div>
   
  )
  return  <div onClick={toggle}><FaHeart/></div>

}
export default Like