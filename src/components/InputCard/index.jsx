import "./inputCard.css"

const InputCard = ({label, type, value, onChangefunc}) => {

    const placeholder = type === "password" ? "***" : label.toLowerCase();

    return (
      <div className="input-card-div">
        <label className="small-text input-card-label">{label}</label>
        <input
          type={type}
          value={value}
          onChange={onChangefunc}
          placeholder={placeholder}
          className="input-card-input"
        />
      </div>
    );
}

export default InputCard