import { useState, useEffect, useRef } from "react";
import "./Dropdown.css";

const Dropdown = () => {
  const [dropdownToggled, setDropdownToggled] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);

  const dropdownOptions = [
    { id: 1, label: "Mazda Miata", value: "mazda-miata" },
    { id: 2, label: "Subaru WRX", value: "subaru-wrx" },
    { id: 3, label: "Ford Mustang", value: "ford-mustang" },
    { id: 4, label: "Chevrolet Corvette", value: "chevrolet-corvette" },
  ];

  useEffect(() => {
    function handler(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownToggled(false);
      }
    }

    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button
        className="toggle"
        onClick={() => {
          setDropdownToggled(!dropdownToggled);
        }}
      >
        <span>{selectedOption ? selectedOption.label : "Select Car"}</span>
        <span>{dropdownToggled ? "-" : "+"}</span>
      </button>
      <div className={`options ${dropdownToggled ? "visible" : ""}`}>
        {dropdownOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => {
              setSelectedOption(option);
              setDropdownToggled(false);
            }}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
