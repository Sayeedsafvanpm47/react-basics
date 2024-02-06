
interface Props{
          cartItem : String[],
          onClear : ()=>void
}

const Cart = ({cartItem,onClear}:Props) => {
  return (
          <>
    <div>{cartItem.map((item,index) => <li key={`${item}-${index}`}>{item}</li>)}</div>
    <button onClick={onClear}>clear</button>
    </>
  )
}

export default Cart