import PropTypes from "prop-types";

const ColorSelection = (props) => {
    const checkColorHandler = (e) => {
        if (props.checkColorVariantsCallback) {
            props.checkColorVariantsCallback(e.target.value);
        }
    }

    return (
        <div className="pl-0 pr-0" style={{ border: "1px solid #126B60", padding: "0.9vw"}}>
            <p className="text-xs mx-0 mb-1 font-semibold text-center text-[#126B60]">COLOR:</p> <br />
            {props.options && props.options[0].values.map((color, index) => (
                <button key={index} value={color} className='w-24 m-0.5 p-0 text-xs bg-white text-[#126B60] focus:bg-[#126B60] focus:text-white' onClick={checkColorHandler}>{color}</button>
            ))}
        </div>
    );
};

ColorSelection.propTypes = {
    options: PropTypes.arrayOf(PropTypes.any),
    checkColorVariantsCallback: PropTypes.func
};

export default ColorSelection;