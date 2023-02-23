export default function AddBookValidation(values) {
  let errors = {};

  if (!values.title.trim()) {
    errors.title = "Title required";
  }

  if (!values.author) {
    errors.author = "Author is required";
  }
  return errors;
}
