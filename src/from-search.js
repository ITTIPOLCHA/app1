import React from "react";

export default function FromSearch() {
  const textKw = React.useRef();
  const btOk = React.createRef();

  const onChangeKw = () => {
    if (textKw.current.value.trim() !== '"') {
      btOk.current.disabled = false;
    } else {
      btOk.current.disabled = true;
    }
  };
  return (
    <div style={{ margin: "30px" }}>
      <from>
        <input
          type="text"
          name="kw"
          placeholder="ค้นหา"
          ref={textKw}
          onInput={onChangeKw}
        />
        &nbsp;
        <button ref={btOk} disabled>
          ตกลง
        </button>
      </from>
    </div>
  );
}