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
            <div className="flex flex-wrap justify-center">
                {props.options && props.options[1].values.map((memory, index) => (
                    <button
                        key={index}
                        value={memory}
                        className={`w-28 m-1 p-0 text-xs ${variantMemory == memory ? "bg-[#126B60] text-white" : "bg-[#f0f0f0] text-[#126B60]"} ${!props.availableMemory.includes(memory) ? "line-through opacity-50" : ""}`}
                        onClick={checkMemoryHandler}
                        disabled={props.availableMemory.length == 0 ? true : !props.availableMemory.includes(memory)}
                    >
                        {memory}
                    </button>
                ))}
            </div>
        </div>
    );
};

MemorySelection.propTypes = {
    options: PropTypes.arrayOf(PropTypes.any),
    checkMemoryVariantsCallback: PropTypes.func
};

export default MemorySelection;