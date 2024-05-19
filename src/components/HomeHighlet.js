import React from "react";

const HomeHighlet = ({ Number, Title }) => {
  return (
    <div>
      <h2>
        {Number}
        <span>+</span>
      </h2>
      <p>{Title}</p>
    </div>
  );
};

export default HomeHighlet;
