import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const MemorySelection = (props) => {
    const { variantMemory } = useSelector((state) => state.products);

    const checkMemoryHandler = (e) => {
        if (props.checkMemoryVariantsCallback) {
            props.checkMemoryVariantsCallback(e.target.value);
        }
    }

    return (
        <div className="pl-0 pr-0 mt-5" style={{ border: "1px solid #126B60", padding: "0.9vw"}}>
            <p className="text-xs mx-0 mb-1 font-semibold text-center text-[#126B60]">MEMORY:</p> <br />
            <button 
                value="32GB"
                className={`w-24 m-0.5 p-0 text-xs ${variantMemory == "32GB" ? "bg-[#126B60] text-white" : "bg-white text-[#126B60]"} ${!props.availableMemory.includes("32GB") ? "line-through" : ""}`}
                onClick={checkMemoryHandler}
                disabled={props.availableMemory.length == 0 ? true : !props.availableMemory.includes("32GB")}
            >
                32GB
            </button>
            <button 
                value="64GB"
                className={`w-24 m-0.5 p-0 text-xs ${variantMemory == "64GB" ? "bg-[#126B60] text-white" : "bg-white text-[#126B60]"} ${!props.availableMemory.includes("64GB") ? "line-through" : ""}`}
                onClick={checkMemoryHandler}
                disabled={props.availableMemory.length == 0 ? false : !props.availableMemory.includes("64GB")}
            >
                64GB
            </button>
            <button 
                value="256GB"
                className={`w-24 m-0.5 p-0 text-xs ${variantMemory == "256GB" ? "bg-[#126B60] text-white" : "bg-white text-[#126B60]"} ${!props.availableMemory.includes("256GB") ? "line-through" : ""}`}
                onClick={checkMemoryHandler}
                disabled={props.availableMemory.length == 0 ? true : !props.availableMemory.includes("256GB")}
            >
                256GB
            </button>
        </div>
    );
};

MemorySelection.propTypes = {
    options: PropTypes.arrayOf(PropTypes.any),
    checkMemoryVariantsCallback: PropTypes.func
};

export default MemorySelection;