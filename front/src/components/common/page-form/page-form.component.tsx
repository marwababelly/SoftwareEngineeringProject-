import React, { ReactNode } from "react";
import { Formik, FormikHelpers, FormikValues } from "formik";
import Form from "../../../components/common/Formik/FormComponent";
import Button from "../../../components/base/button/button.component";

export type PageFormProps<T extends FormikValues> = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  submitText?: string;
  validationSchema: any;
  initialValues: T;
  onSubmit: (data: T, actions: FormikHelpers<T>) => void;
};

function PageForm<T extends FormikValues>({
  title,
  subtitle,
  children,
  submitText = "submit",
  validationSchema,
  initialValues,
  onSubmit,
}: PageFormProps<T>) {
  return (
    <div className="FormWrapper">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        validateOnBlur
        validateOnChange={false}
      >
        {(formik) => (
          <Form varient={"blue"}>
            {title && (
              <h1 className="text-center text-lg w-full font-bold">{title}</h1>
            )}
            {subtitle && (
              <p className="text-main-txt/[.8] text-sm font-semibold text-center w-full mb-4">
                {subtitle}
              </p>
            )}
            {children}
            <Button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid}
              className="w-full rounded-2xl py-4 bg-[#6375f0]! capitalize"
              varient={"blue"}
            >
              {submitText}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PageForm;
