import React from "react";

function SwitchBtn({ isOn, setIsOn }) {
  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div style={{ marginTop: "30px", fontFamily: "Arial, sans-serif", display: "flex" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          width: "50px",
          height: "25px",
          borderRadius: "12.5px",
          backgroundColor: isOn ? "#4CAF50" : "#ccc",
          padding: "3px",
          transition: "background-color 0.3s",
          justifyContent: isOn ? "flex-end" : "flex-start",
          margin: "10px",
        }}
        onClick={toggleSwitch}
      >
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: "white",
            transition: "transform 0.3s",
          }}
        />
      </div>
      <p
        style={{
          margin: "10px 0",
          fontSize: "16px",
          color: isOn ? "#4CAF50" : "#000000",
          textTransform: "capitalize",
          fontFamily: "Inter",
        }}
      >
        {isOn ? "Parent mode Switched" : "Switch on if you are a parent!"}
      </p>
    </div>
  );
}

export default SwitchBtn;
