import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const ColorSelection = (props) => {
    const { variantName } = useSelector((state) => state.products);

    const checkColorHandler = (e) => {
        if (props.checkColorVariantsCallback) {
            props.checkColorVariantsCallback(e.target.value);
        }
    }

    return (
        <div className="pl-0 pr-0" style={{ border: "1px solid #126B60", padding: "0.9vw"}}>
            <p className="text-xs mx-0 mb-1 font-semibold text-center text-[#126B60]">COLOR:</p> <br />
            <div className="flex flex-wrap justify-center">
                {props.options && props.options[0].values.map((color, index) => (
                    <button 
                        key={index}
                        value={color}
                        className={`w-28 m-1 p-0 text-xs ${variantName == color ? "bg-[#126B60] text-white" : "bg-[#f0f0f0] text-[#126B60]"}`}
                        onClick={checkColorHandler}
                    >
                        {color}
                    </button>
                ))}
            </div>
        </div>
    );
};

ColorSelection.propTypes = {
    options: PropTypes.arrayOf(PropTypes.any),
    checkColorVariantsCallback: PropTypes.func
};

export default ColorSelection;