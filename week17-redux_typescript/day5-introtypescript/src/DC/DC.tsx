import React from "react";

const DailyChallenge = () => {
  const validateUnionType = (value: any, allowedTypes: string[]): boolean => {
    return allowedTypes.includes(typeof value);
  };
  const valueToValidate = true;
  const allowedTypes = ["string", "number"];

  const isValid = validateUnionType(valueToValidate, allowedTypes);

  return (
    <h1>
      The value "{valueToValidate} " is{""}
      {isValid ? " valid" : " invalid"}
    </h1>
  );
};

export default DailyChallenge;
