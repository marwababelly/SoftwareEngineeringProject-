import React, { ReactNode } from "react";
import { Form } from "formik";

export interface IForm {
  varient: "blue" | "danger";
  className?: string;
  children?: ReactNode;
}

const FormComponent: React.FC<IForm> = ({ className, children, varient }) => {
  const formVarient = "Form-" + varient[0].toUpperCase() + varient.substring(1);
  className = ["Form w-full", formVarient, className].join(" ");

  return <Form className={className}>{children}</Form>;
};

export default FormComponent;
