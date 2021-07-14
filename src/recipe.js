import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, image, ingredients, url }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <ol className={style.list}>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <img className={style.image} src={image} alt="" />
      <p>
        {" "}
        visit website:{" "}
        <span>
          <a href={url}>recipe</a>
        </span>
      </p>
    </div>
  );
};

export default Recipe;
