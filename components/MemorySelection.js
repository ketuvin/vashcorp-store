

const MemorySelection = (props) => {
    return (
        <div className="pl-0 pr-0 mt-5" style={{ border: "1px solid #126B60", padding: "0.9vw"}}>
            <p className="text-xs mx-0 mb-1 font-semibold text-center text-[#126B60]">MEMORY:</p> <br />
            {props.options && props.options[1].values.map((color, index) => (
                <button key={index} className='w-24 m-0.5 p-0 text-xs bg-white text-[#126B60] active:bg-[#126B60] active:text-white focus:bg-[#126B60] focus:text-white'>{color}</button>
            ))}
        </div>
    );
};

export default MemorySelection;