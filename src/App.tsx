import React, { useEffect, useState } from "react";
import "./styles.css";
import Input from "./Input";

export default function App() {
  const [inputVal, setInputVal] = useState({ routingCode: "", bankName: "" });
  const data = [
    {
      routingCode: "001",
      bankName: "SBI-1"
    },
    {
      routingCode: "002",
      bankName: "SBI-2"
    },
    {
      routingCode: "003",
      bankName: "SBI-3"
    },
    {
      routingCode: "004",
      bankName: "SBI-4"
    }
  ];

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const ans = data.find((el) => el.routingCode === value);
    if (ans) {
      //console.log(ans);
      setInputVal({
        ...inputVal,
        routingCode: ans.routingCode,
        bankName: ans.bankName
      });

      //setBankName(ans.bankName);
    }
  };

  return (
    <div className="App">
      <Input
        placeholder="enter code"
        onChange={handleChange}
        name="routingCode"
      />
      <Input
        placeholder="enter bank name"
        value={inputVal.bankName}
        name="bankName"
        readonly
      />
    </div>
  );
}
