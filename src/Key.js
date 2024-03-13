import React from 'react'

function Key() {

    const recipes = [
        {
            id: 'greek-salad',
            name: 'Greek Salad',
            ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
        }, {
            id: 'hawaiian-pizza',
            name: 'Hawaiian Pizza',
            ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
        }, {
            id: 'hummus',
            name: 'Hummus',
            ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
        }];



    return (
        <>
            <div>
                <h1>Recipes</h1>
                {recipes.map(item => {
                    return (


                        <div>

                            <h2 key={item.id}>{item.name}</h2>
                            <ul>
                                <li> {item.ingredients.map(ing => {
                                    return <li key={ing} >{ing}</li>
                                })}</li>
                            </ul>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default Key