import React from "react";

function HomeCatItem({ CatTitle, CatDesc, CatLink }) {
  return (
    <div className="categoryCol d-flex align-content-between flex-wrap rounded">
      <h4>{CatTitle}</h4>
      <article>
        <p>{CatDesc}</p>
        <a to="{CatLink}" className="font-semibold font-secondary">
          Read More
        </a>
      </article>
    </div>
  );
}

export default HomeCatItem;
