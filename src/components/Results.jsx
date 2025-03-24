import { calculateInvestmentResults, formatter } from "@/util/investment";
import { userAgent } from "next/server";
import React from "react";

const Results = ({ input }) => {
  const resultsData = calculateInvestmentResults(input);
  console.log(resultsData);
  const initialnvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;

  return (
    <table>
      <thead>
        <tr>
          <th className="w-fit text-[#DCA06D] px-1 md:px-3 text-xs md:text-base text-center py-4">
            {" "}
            Year
          </th>
          <th className="w-fit px-1 text-[#DCA06D] md:px-3 text-xs md:text-base text-center py-4">
            {" "}
            Investment Value
          </th>
          <th className="w-fit px-1 text-[#DCA06D] md:px-3 text-xs md:text-base text-center py-4">
            {" "}
            Interest(year)
          </th>
          <th className="w-fit px-1 text-[#DCA06D] md:px-3 text-xs md:text-base text-center py-4">
            {" "}
            Total interest
          </th>
          <th className="w-fit px-1 text-[#DCA06D] md:px-3 text-xs md:text-base text-center py-4">
            {" "}
            Invested capital
          </th>{" "}
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialnvestment;

          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year} className="">
              <td className="w-fit px-1 text-[#DCA06D] md:px-3 text-xs md:text-base text-center py-1.5 ">
                {yearData.year}
              </td>
              <td className="w-fit px-1 text-[#DCA06D] md:px-3 text-xs md:text-base text-center py-1.5 ">
                {formatter.format(yearData.valueEndOfYear)}
              </td>
              <td className="w-fit px-1 text-[#DCA06D] md:px-3 text-xs md:text-base text-center py-1.5 ">
                {formatter.format(yearData.interest)}
              </td>
              <td className="w-fit px-1 text-[#DCA06D] md:px-3 text-xs md:text-base text-center py-1.5">
                {formatter.format(totalInterest)}
              </td>
              <td className="w-fit px-1 text-[#DCA06D] md:px-3 text-xs md:text-base text-center py-1.5 ">
                {formatter.format(totalAmountInvested)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
