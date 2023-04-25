import React from "react";
import * as Yup from "yup";
import FormControl from "../../../components/common/Formik/FormControl/FormControl";
import PageForm from "../../../components/common/page-form/page-form.component";
import { ICustomer } from "../customers.page";
import { IEditItemProps } from "../../../constants/common.interface";

function CustomerForm({ editItem }: IEditItemProps<ICustomer>) {
  const initialValues: ICustomer = {
    id: editItem?.id || 0,
    name: editItem?.name || "",
    email: editItem?.email || "",
    phone: editItem?.phone || "",
    totalOrders: editItem?.totalOrders || 0,
    totalSpend: editItem?.totalSpend || "",
    location: editItem?.location || "",
  };

  const onSubmit = (data: ICustomer, actions: any) => {
    console.log("Form data", data);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    phone: Yup.string().required("Required"),
    totalOrders: Yup.string().required("Required"),
    totalSpend: Yup.string().required("Required"),
    location: Yup.string().required("Required"),
  });

  return (
    <PageForm
      title="Add Customer:"
      subtitle="One more customer, we'll get rich"
      submitText="add"
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <FormControl
        control="input"
        name="name"
        placeholder="enter your name"
        label="Name: "
        type="text"
      />
      <FormControl
        control="input"
        name="email"
        placeholder="email"
        label="email: "
        type="email"
      />
      <FormControl
        control="input"
        name="phone"
        placeholder="phone"
        label="phone: "
        type="text"
      />
      <FormControl
        control="input"
        name="totalOrders"
        placeholder="totalOrders"
        label="totalOrders: "
        type="number"
      />
      <FormControl
        control="input"
        name="totalSpend"
        placeholder="totalSpend"
        label="totalSpend: "
        type="text"
      />
      <FormControl
        control="input"
        name="location"
        placeholder="location"
        label="location: "
        type="text"
      />
    </PageForm>
  );
}

export default CustomerForm;
