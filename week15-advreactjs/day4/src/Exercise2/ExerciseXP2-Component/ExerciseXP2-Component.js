import { useRef } from "react";

const InputWithState=()=> {
  const inputRef = useRef();

  const handleButtonClick = () => {
    alert(`Input value: ${inputRef.current.value}`);
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Get Input Value</button>
    </>
  );
}

export default InputWithState