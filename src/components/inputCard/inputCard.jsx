import "./inputCard.css"

const InputCard = ({label, password}) => {


    return (
        <div className="input-card-div">
            <label className="small-text input-card-label">
                {label}
            </label>
            <input type="text"  placeholder={label} className="input-card-input"/>
         </div>
    )
}

export default InputCard