const UserInput = ({ onChangeInput, userInput }) => {
  return (
    <section className="flex flex-col gap-3">
      <div className="bg-[#4F1C51] grid grid-row-2 lg:flex lg:flex-row md:flex-row gap-3 md:gap-x-30 p-3 md:p-6 rounded justify-evenly ">
        <p className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-center lg:items-center ">
          <label className="text-[#DCA06D]">Initial inv</label>
          <input
            className="ml-3 border border-[#A55B4B] rounded p-0 md:p-2 max-w-30 bg-gray-300 text-center"
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onChangeInput("initialInvestment", event.target.value)
            }
          />
        </p>
        <p className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-center  lg:items-center ">
          <label className="text-[#DCA06D]">Annual inv</label>
          <input
            className="ml-3 border max-w-30 border-black rounded p-0 md:p-2 bg-gray-300 text-center"
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChangeInput("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="bg-[#4F1C51] grid grid-row-2 lg:flex lg:flex-row md:flex-row gap-3 md:gap-x-30 p-3 md:p-6 rounded justify-evenly">
        <p className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-center lg:items-center ">
          <label className="text-[#DCA06D]">Exp return</label>
          <input
            className="ml-3 border max-w-30 border-black rounded p-0 md:p-2 bg-gray-300 text-center"
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChangeInput("expectedReturn", event.target.value)
            }
          />
        </p>
        <p className="grid grid-cols-2 lg:flex lg:flex-row lg:justify-center lg:items-center ">
          <label className="text-[#DCA06D]">Duration</label>
          <input
            className="ml-3 border max-w-30 border-black rounded p-0 md:p-2 bg-gray-300 text-center"
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChangeInput("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
