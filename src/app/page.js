"use client";

import Results from "@/components/Results";
import Header from "../components/Header";
import UserInput from "@/components/UserInput";
import React, { useState } from "react";

export default function Home() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 100000,
    annualInvestment: 20000,
    expectedReturn: 5,
    duration: 15,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <div className="grid grid-rows-[20px_100px_1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-[#210F37]">
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      <Results input={userInput} />
    </div>
  );
}
