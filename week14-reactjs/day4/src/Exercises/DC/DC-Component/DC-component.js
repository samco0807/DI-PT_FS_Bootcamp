import React, { useState } from "react";
import "./DC-Component.css";

const FormComponent = (props) => {
  // store the data in formData
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    // // select the form elements
    // const formElements = Array.from(e.target.elements);
    // // Create an empty array for the updated upcoming data
    // const updatedFormData = {};

    // // iterate through formElement objet and for each element, display the value
    // formElements.forEach((element) => {
    //   updatedFormData[element.name] = element.value;
    // });
    // // update the formData with new inputs
    // setFormData(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <InputWithLabel
            id="firstname"
            label="FirstName"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div>
          <InputWithLabel
            id="lastname"
            label="LastName"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div>
          <InputWithLabel
            id="age"
            label="Age"
            type="number"
            onChange={handleChange}
          />
        </div>
        <div>
          <InputWithLabel
            name="gender"
            id="male"
            label="Male"
            type="radio"
            onChange={handleChange}
          />
        </div>
        <div>
          <InputWithLabel
            name="gender"
            id="female"
            label="Female"
            type="radio"
          />
        </div>
        <div>
          <SelectWithLabel
            name="destination"
            id="destination"
            label="Select your destination"
            options={[
              { value: "Hong Kong", label: "Hong Kong" },
              { value: "Tel Aviv", label: "Tel Aviv" },
              { value: "New York", label: "New York" },
            ]}
          />
        </div>
        <strong>
          <p>Your dietary restrictions</p>
        </strong>
        <div>
          <InputWithLabel
            id="nutsFree"
            label="**NutsFree"
            type="checkbox"
            onChange={handleChange}
          />
        </div>
        <div>
          <InputWithLabel
            id="lactoseFree"
            label="**LactoseFree"
            type="checkbox"
          />
        </div>
        <div>
          <InputWithLabel
            id="veganMeal"
            label="**VeganMeal"
            type="checkbox"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

const InputWithLabel = ({ name, id, label, type, value, onChange }) => (
  <>
    <label htmlFor={id}>{label}</label>
    <input
      name={name}
      id={id}
      type={type}
      value={type === "checkbox" || type === "radio" ? value : undefined}
      onChange={onChange}
    />
  </>
);

const SelectWithLabel = (props) => {
  let { name, label, id, options, onChange } = props;
  return (
    <>
      <strong>
        {" "}
        <label htmlFor={id}>{label}</label>
      </strong>
      <br></br>
      <select id={id} name={name} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default FormComponent;