import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './MealsSummary.module.css';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Veg Thali',
        description: 'Rice, Dal, Sabzi, Bhaji, Roti',
        price: 70,
    },
    {
        id: 'm2',
        name: 'Chicken Thali',
        description: 'Rice, Chicken, Sabzi, Bhaji, Roti',
        price: 100,
    },
    {
        id: 'm3',
        name: 'Chicken Biriyani',
        description: 'Rice, Chicken, Egg, Raita',
        price: 120,
    },
    {
        id: 'm4',
        name: 'Masala Cold Drink',
        description: 'Cold Drink with Masala',
        price: 20,
    },
];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => ( 
        <MealItem 
            key={meal.id} 
            name={meal.name} 
            description={meal.description} 
            price={meal.price}  
        />
    ));

    return <section className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>
};

export default AvailableMeals;