import { Alert, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [successStatus, setSuccessStatus] = useState(false);

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccessStatus(true);
        }
      });

    e.preventDefault();
  };

  return (
    <div>
      <h2> Create Admin </h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "50%" }}
          onBlur={handleOnBlur}
          label="Email"
          type="email"
          variant="standard"
        />{" "}
        <br />
        <br />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {successStatus && <Alert severity="success">Admin Created Successfully!</Alert>}
    </div>
  );
};

export default MakeAdmin;
