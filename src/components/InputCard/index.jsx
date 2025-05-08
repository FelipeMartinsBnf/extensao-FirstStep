import "./inputCard.css"

const InputCard = ({label, type}) => {

    const placeholder = type === "password" ? "***" : label.toLowerCase();

    return (
      <div className="input-card-div">
        <label className="small-text input-card-label">
          {label}
        </label>
        <input type={type} placeholder={placeholder} className="input-card-input" />
      </div>
    )
}

export default InputCard