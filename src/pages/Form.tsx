import React, { useState } from "react";
import DynamicForm from "../components/DynamicForm";
import FormData from "../utils/FormData";

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    input: "",
    textArea: "",
    checkbox: "",
  });

  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmittedData(formData);
  }

  return (
    <>
      <form
        className="flex flex-col items-center justify-center border-b-2"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <label htmlFor="myInput" className="text-lg font-medium ">
            Input
          </label>
          <input
            type="text"
            id="myInput"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setFormData({ ...formData, input: e.target.value })
            }
          />
          <label htmlFor="myInput" className="text-lg font-medium">
            TextArea
          </label>
          <input
            type="text"
            id="myInput"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setFormData({ ...formData, textArea: e.target.value })
            }
          />
          <label htmlFor="myInput" className="text-lg font-medium">
            Checkbox
          </label>
          <input
            type="text"
            id="myInput"
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setFormData({ ...formData, checkbox: e.target.value })
            }
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 mb-3">
          Build
        </button>
      </form>
      {submittedData && (
        <DynamicForm {...submittedData} />
      )}
    </>
  );
};

export default Form;
