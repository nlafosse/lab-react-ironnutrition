import React, {useState} from "react";

const AddFood = (props) => {
    const [foodname, setFoodName] = useState('');
    const [calories, setCalories] = useState('');
    const [image, setImage] = useState('');
    const [quantity, setQuantity] = useState('');
  
    const structureNewFoodToPushToMain = () => {
        const newFood = {
          name: foodname,
          calories: calories,
          image: image,
          quantity: quantity
        };
    
        props.addNewFood(newFood);
        setFoodName('')
        setCalories('')
        setImage('')
        setQuantity('')
      };
  
    return (
      <div>
        <h3><strong>Add Food</strong></h3>
        <label htmlFor='foodname'>Name</label>
        <input
          name='foodname'
          placeholder='name'
          value={foodname}
          type='text'
          onChange={(e) => setFoodName(e.target.value)}
        />

        <label htmlFor='calories'>Calories</label>
        <input
          name='calories'
          placeholder='calories'
          value={calories}
          type='text'
          onChange={(e) => setCalories(e.target.value)}
        />

        <label htmlFor='image'>Image</label>
        <input
          name='image'
          placeholder='image url'
          value={image}
          type='text'
          onChange={(e) => setImage(e.target.value)}
        />

        <label htmlFor='quantity'>Quantity</label>
        <input
          name='quantity'
          placeholder='quantity'
          value={quantity}
          type='text'
          onChange={(e) => setQuantity(e.target.value)}
        />




        <button onClick={structureNewFoodToPushToMain}>Add</button>
      </div>
    );
  };
  

export default AddFood;