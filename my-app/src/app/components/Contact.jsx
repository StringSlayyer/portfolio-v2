"use client";
import { useState } from "react";
import { Input, Textarea } from "@nextui-org/react";

const initValues = {
  name: "",
  email: "",
  message: "",
};

const initState = { values: initValues };

const Contact = () => {
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const { values } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  return (
    <form className="flex flex-col">
      <Input
        isRequired
        isInvalid={!values.name && touched.name}
        type="text"
        label="Jméno"
        value={values.name}
        //defaultValue="Jan Novák"
        onChange={handleChange}
        className="max-w-xs my-3"
      />

      <Input
        isRequired
        isInvalid={!values.email && touched.email}
        type="email"
        label="Email"
        value={values.email}
        //defaultValue="jan.novak@seznam.cz"
        onChange={handleChange}
        className="max-w-xs my-3"
      />
      <Textarea
        isRequired
        isInvalid={!values.message && touched.message}
        placeholder="Zpráva"
        value={values.message}
        //defaultValue="Ahoj, rád bych se s vámi spojil."
        onChange={handleChange}
        className="max-w-xs my-3"
      />
    </form>
  );
};

export default Contact;

{
  /*const Contact = () => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        isRequired
        type="text"
        label="Jméno"
        defaultValue="Jan Novák"
        className="max-w-xs"
      />
      <Input
        isRequired
        type="email"
        label="Email"
        defaultValue="jan.novak@gmail.com"
        className="max-w-xs"
      />
      {/* register your input into the hook by invoking the "register" function }
      <input defaultValue="test" {...register("example")} />

      {/* include validation with required or other standard HTML validation rules }
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  }
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default Contact;
*/
}
