import React from "react";
import AddBookUseForm from "./addBookUseForm";
import AddBookValidation from "./addBookValidation";
import "./form.css";
const AddBook = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = AddBookUseForm(
    submitForm,
    AddBookValidation
  );
  return (
    <>
      <div className="form-content-right">
        <form onSubmit={handleSubmit} className="form" noValidate>
          <h1>Add a book!</h1>
          <div className="form-inputs">
            <label className="form-label">Title</label>
            <input
              id="title"
              type="text"
              name="title"
              className="form-input"
              placeholder="Introduce book title"
              value={values.title}
              onChange={handleChange}
            />
            {errors.title && <p>{errors.title}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Author</label>
            <input
              id="author"
              type="text"
              name="author"
              className="form-input"
              placeholder="Introduce book Author"
              value={values.author}
              onChange={handleChange}
            />
            {errors.author && <p>{errors.author}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Description</label>
            <input
              id="description"
              type="text"
              name="description"
              className="form-input"
              placeholder="Introduce book description"
              value={values.description}
              onChange={handleChange}
            />
          </div>
          <button className="form-input-btn" type="submit">
            Add Book
          </button>
        </form>
      </div>
    </>
  );
};
export default AddBook;
