
interface Props{
          cartItemCount : number,
          
}
const NavBar = ({cartItemCount} : Props) => {
  return (
    <div>Cart Item Count : {cartItemCount}</div>
  )
}

export default NavBar