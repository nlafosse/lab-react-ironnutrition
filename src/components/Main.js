import React, {useState} from 'react';
import FoodBox from './FoodBox'
import foods from '../foods.json'
import AddFood from './AddFood';

const Main = () => {
    const [foodArr, setFoodArr] = useState(foods);
    const [showForm, setShowForm] = useState(false)
    const [searchbar, setSearchbar] = useState('')
    const [fullFoodArr, setFullFoodArr] = useState(foods)
    
    React.useEffect(() => {
        let caseInsensitiveText = searchbar.toLowerCase();
        let newArr = [...fullFoodArr];
        newArr = newArr.filter((user) => {
          return user.name.toLowerCase().includes(caseInsensitiveText);
        });
        setFoodArr(newArr);
      }, [searchbar]);
    
    const searchWhileTyping = (val) => {
        setSearchbar(val);
    };
    
    const addNewFood = (newFood) => {
        let newArr = [...foodArr];
        newArr = newArr.concat(newFood);
        setFoodArr(newArr);
    };

    return (
        <div>

            <div>
                <label>Search</label>
                <input
                name='search'
                placeholder='Search foods'
                value={searchbar}
                onChange={(e) => searchWhileTyping(e.target.value)}
                />
            </div>


            <div>
                <button onClick={() => setShowForm(!showForm)} >Add food</button>
                {showForm && <AddFood addNewFood={addNewFood} />}
            </div>

            <div className='foodBox'>
                {foodArr.map((food) => {
                return (
                    <FoodBox 
                        foodName={food.name} 
                        foodCalories={food.calories} 
                        foodImage={food.image} 
                        foodQuantity={food.quantity}
                    />
                )
                })}

            </div>
        </div>
    )
}

export default Main;