import React from "react";
import { FormWrapper } from "./FormWrapper";

interface FormProps {
  onSubmit: (data: GptData) => void;
  feedback: string;
}

interface GptData {
  controller: string;
  criteria: string;
  email: string;
}

export function Form({ onSubmit, feedback='' }: FormProps) 
{
  const [gptData, setGptData] = React.useState<GptData>({
    controller: "",
    criteria: "",
    email: "",
  });

  function handleInputChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const { name, value } = e.target;
    setGptData({ ...gptData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(gptData);
  }

  return (
  <>
    <div className="d-flex flex-row">
      <FormWrapper>
        <h2>GPT Request</h2>
        <form onSubmit={handleSubmit} className="d-flex flex-column">
          <label>Controller Name:</label>
          <input
            type="text"
            name="controller"
            value={gptData.controller}
            onChange={handleInputChange}
            style={{
              width: "90%",
              margin: "1em auto",
            }}
            className="ms-3"
          />
          <label>Criteria:</label>
          <textarea
            name="criteria"
            value={gptData.criteria}
            onChange={handleInputChange}
            style={{
              width: "90%",
              height: "20em",
              margin: "1em auto",
            }}
            className="ms-3"
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={gptData.email}
            onChange={handleInputChange}
            style={{
              width: "90%",
              margin: "1em auto",
            }}
            className="ms-3"
          />
          <button
            type="submit"
            name="submit"
            style={{
              width: "90%",
              marginTop: "1em",
              marginLeft: "3.5%",
            }}
          >
            Submit
          </button>
        </form>
      </FormWrapper>
      <FormWrapper>
        <h2>GPT Response</h2>
        <div className="d-flex flex-column">
          <label>Feedback</label>
          <textarea
            name="feedback"
            defaultValue={feedback}
            style={{
              width: "90%",
              height: "20em",
              margin: "1em auto",
            }}
            className="ms-3"
          />
          <button 
            name="clear"
            style={{
              width: "90%",
              marginTop: "1em",
              marginLeft: "3.5%",
            }}
          >
            Clear
          </button>
        </div>
      </FormWrapper>
    </div>    
  </>
  );
}
