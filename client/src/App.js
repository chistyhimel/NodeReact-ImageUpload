import { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    const config = {
      "content-type": "multipart/form-data",
    };

    const url = "http://localhost:3000/user/upload";

    axios
      .post(url, formData, config)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Image Upload</h1>
      <form onSubmit={onFormSubmit} method="post">
        <input type="file" name="image" onChange={onFileChange} />
        <br />
        <br />
        <button type="submit">Upload</button>
      </form>
    </>
  );
}

export default App;
