// Importing the useState hook from React
import { useState } from "react";

const CommentForms = () => {
  // Step 1 Initialize form state with default values
  // 'formData' holds all form input values
  // 'setFormData' updates them
  let [formData, setFormData] = useState({
    username: "",  // text input for username
    remarks: "",   // textarea for remarks
    rating: 5,     // numeric input for rating (default 5)
  });

  // Step 2️: Handle input field changes
  const handleInputChange = (event) => {
    // event.target → the element that triggered the change (input or textarea)
    // event.target.name → gives the name of the input (username, remarks, or rating)
    // event.target.value → gives the value typed by the user

    // Update state based on which input changed
    setFormData((currData) => {
      // Spread the previous state (...currData)
      // Then update only the field that changed using computed property syntax
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  // Step 3️: Handle form submission
  let handleSubmit = (event) => {
    event.preventDefault(); // prevent the page from refreshing (default form behavior)
    console.log(formData);  // print current form data in console (for checking)

    // Reset the form fields after submission
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };

  // Step 4️: Return JSX to render the form
  return (
    <div>
      <h1>Give a Comments here</h1>

      {/* Wrap all inputs in a <form> to handle submit */}
      <form onSubmit={handleSubmit}>
        {/* Username input */}
        <label htmlFor="username">UserName</label>
        <input
          id="username"
          placeholder="username"
          type="text"
          value={formData.username}       // controlled input (value tied to state)
          onChange={handleInputChange}    // updates state on every keystroke
          name="username"                 // must match key in formData
        />
        <br /><br />

        {/* Remarks textarea */}
        <label htmlFor="remarks">Remarks</label>
        <textarea
          id="remarks"
          placeholder="remarks"
          value={formData.remarks}        // controlled textarea
          onChange={handleInputChange}
          name="remarks"
        ></textarea>
        <br /><br />

        {/* Rating input */}
        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          placeholder="rating"
          type="number"
          min={1}                         // minimum allowed rating
          max={5}                         // maximum allowed rating
          value={formData.rating}         // controlled numeric input
          onChange={handleInputChange}
          name="rating"
        />
        <br /><br />

        {/* Submit button */}
        <button>Add Comments</button>
      </form>
    </div>
  );
};

export default CommentForms;

