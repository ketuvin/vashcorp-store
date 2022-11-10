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
            <button 
                value="BLUE"
                className={`w-24 m-0.5 p-0 text-xs ${variantName == "BLUE" ? "bg-[#126B60] text-white" : "bg-white text-[#126B60]"}`}
                onClick={checkColorHandler}
            >
                BLUE
            </button>
            <button 
                value="BLACK"
                className={`w-24 m-0.5 p-0 text-xs ${variantName == "BLACK" ? "bg-[#126B60] text-white" : "bg-white text-[#126B60]"}`}
                onClick={checkColorHandler}
            >
                BLACK
            </button>
            <button 
                value="WHITE"
                className={`w-24 m-0.5 p-0 text-xs ${variantName == "WHITE" ? "bg-[#126B60] text-white" : "bg-white text-[#126B60]"}`}
                onClick={checkColorHandler}
            >
                WHITE
            </button>
        </div>
    );
};

ColorSelection.propTypes = {
    options: PropTypes.arrayOf(PropTypes.any),
    checkColorVariantsCallback: PropTypes.func
};

export default ColorSelection;