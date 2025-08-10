import React from "react";
import FormData from "../utils/FormData";

const DynamicForm: React.FC<FormData> = (props) => {
  const { input, textArea, checkbox } = props;

  return (
    <form className="flex flex-row justify-around mt-5 ">
      <div className="flex flex-col gap-2">
        {Number(input) > 0 &&
          Array.from({ length: Number(input) }, (_, index) => (
            <input
              className="border-2 border-solid border-blue-500"
              placeholder={`input №${index + 1}`}
              key={index}
            />
          ))}
        {isNaN(Number(input)) &&
          "Please, check what you have enter in the INPUT field."}
        {Number(input) < 0 && "INPUT field is not greater then 0."}
      </div>

      <div className="flex flex-col gap-2">
        {Number(textArea) > 0 &&
          Array.from({ length: Number(textArea) }, (_, index) => (
            <textarea
              className="border border-solid border-pink-500 w-full"
              placeholder={`textarea №${index + 1}`}
              key={index}
            />
          ))}
        {isNaN(Number(textArea)) &&
          "Please, check what you have enter in the TEXTAREA field."}
        {Number(textArea) < 0 && "TEXTAREA field is not greater then 0."}
      </div>

      <div className="flex flex-col gap-2">
        {Number(checkbox) > 0 &&
          Array.from({ length: Number(checkbox) }, (_, index) => (
            <input
              type="checkbox"
              placeholder={`textarea №${index + 1}`}
              key={index}
            />
          ))}
        {isNaN(Number(checkbox)) &&
          "Please, check what you have enter in the CHECKBOX field."}
        {Number(checkbox) < 0 && "CHECKBOX field is not greater then 0."}
      </div>
    </form>
  );
};

export default DynamicForm;
