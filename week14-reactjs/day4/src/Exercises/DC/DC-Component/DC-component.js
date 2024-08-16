import React from "react";
import "./DC-Component.css"

const FormComponent = (props) => {
  let { handleChange } = props;
  return (
    <>
      <form onSubmit={handleChange}>
        <InputWithLabel id="firstname" label="FirstName" type="text" />
        <InputWithLabel id="name" label="Name" type="text" />
        <InputWithLabel id="age" label="Age" type="number" />
        <InputWithLabel name="gender" id="male" label="Male" type="radio" />
        <InputWithLabel name="gender" id="female" label="Female" type="radio" />
        <SelectWithLabel
          name="destination"
          id="destination"
          label="Destination"
        >
          <option value="Hong Kong">Hong Kong</option>
          <option value="Tel Aviv">Tel Aviv</option>
          <option value="New York">New York</option>
        </SelectWithLabel>
        <p>Your dietary restrictions</p>
        <InputWithLabel id="nutsFree" label="**NutsFree" type="checkbox" />
        <InputWithLabel
          id="lactoseFree"
          label="**LactoseFree"
          type="checkbox"
        />
        <InputWithLabel id="veganMeal" label="**VeganMeal" type="checkbox" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

const InputWithLabel = (props) => {
  let { name, id, label, type, value } = props;
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        name={name}
        id={id}
        type={type}
        value={type === "checkbox" || type === "radio" ? value : undefined}
      />
    </>
  );
};

const SelectWithLabel = (props) => {
  let { name, label, id, Children } = props;
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name}>
        {Children}
      </select>
    </>
  );
};

export default FormComponent;
