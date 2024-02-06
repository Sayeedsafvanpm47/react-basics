interface Props{
          text:String,
          color?: 'primary' | 'secondary' |'danger', //settingf up ?: and | to check an optional value if any oresence of invalid values 
          onClick : ()=>void
}

const Button = ({text,onClick,color}:Props) => {
  return (
    <div className={"btn btn-"+color} onClick={onClick} >{text}</div>
  )
}

export default Button