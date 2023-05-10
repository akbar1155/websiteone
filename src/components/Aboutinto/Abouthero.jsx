import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required(),
});

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  const onSubmit = (data) => {
    //   Submit logic here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input id="name" name="name" ref={register} />
      {errors.name && <p>{errors.name.message}</p>}

      <label htmlFor="email">Email</label>
      <input id="email" name="email" ref={register} />
      {errors.email && <p>{errors.email.message}</p>}

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" ref={register} />
      {errors.message && <p>{errors.message.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
