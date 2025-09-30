import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

function Spinner({ loading }) {
  return (
    <ClipLoader
      color="#000"
      loading={loading}
      cssOverride={override}
      size={50}
    />
  );
}

export default Spinner;
