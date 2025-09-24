import { useEffect, useRef } from "react";

export function InputUseRef() {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <input ref={inputRef} type="text" placeholder="Type here..." />
    </div>
  );
}
