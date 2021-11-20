import React from 'react';

const FoodBox = (prop) => {
    return (
<div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={prop.foodImage} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{prop.foodName}</strong> <br />
          <small>{prop.foodCalories} calories</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" value={prop.foodQuantity} />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
    )

}

export default FoodBox;