import { ReactNode } from "react";

type FormWrapperProps = {
  children: ReactNode;
};

export function FormWrapper({children}: FormWrapperProps) {
  return (
    <>
      <h2
        style={{
          textAlign: "left",
          margin: 0,
          marginBottom: "1rem",
        }}
      >
      </h2>
      <div
        style={{
          width: "100%",
          margin: "1em auto",
        }}
      >
        {children}
      </div>
    </>
  );
}
