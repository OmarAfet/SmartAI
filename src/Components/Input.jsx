const Input = ({ name, classes, value, onBlur, onChange, type, placeholder, onKeyDown }) => {
	return (
		<>
			<input autoComplete="off" value={value} title="" type={type} id={placeholder} onKeyDown={onKeyDown} onBlur={onBlur} onChange={onChange} className="flex-1 border-2 focus:border-main rounded-lg px-2 py-1 peer" />
			<label htmlFor={placeholder} className={`absolute right-0 mx-[10px] px-1 text-gray-400 cursor-text inline-block top-2 peer-focus:-top-2 peer-focus:text-xs duration-150 ${value ? "text-xs -top-2" : ""} bg-white`}>{placeholder}</label>
		</>
	);
};

export default Input;
