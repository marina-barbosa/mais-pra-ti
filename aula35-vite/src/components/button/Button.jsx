import './button.css'
const Button = (props) => {

  return (
    <div className="relative">

      <button className="sparks absolute bg-neutral-900 text-neutral-400 hover:text-sky-300 hover:border-sky-600 cursor-pointer border border-transparent font-semibold px-4 py-2 rounded  transform-style preserve-3d transition duration-200 ease-in-out hover:translate-y-[0.110rem] active:translate-y-1 z-10" onClick={props.onClick}>
        {props.text || "BUTTON"}
      </button>
      <div className="absolute shadow-custom-btn px-4 py-2 border border-neutral-700 rounded">{props.text || "BUTTON"}</div>
    </div>
  )
}

export default Button

// press
// https://uiverse.io/Madflows/terrible-catfish-72

// sparks
// https://uiverse.io/zjssun/curly-seahorse-76

