import "./button.css";

const Button = ({label, className, onClick}) => {
  
  return (
     <button className={`btn ${className}`} onClick={onClick}>{label}</button>
  )
}

export default Button;