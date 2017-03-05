'use strict';

const sampleQuesitons =[
    {
        "title": "Washing Dishes",
        "category": "House Work",
        "subCategory": "Dishes"
    },
    {
        "title": "Watch Favorite Show",
        "category": "Entertainment",
        "subCategory": "TV"
    },
    {
        "title": "Drive to Grocery Store",
        "category": "Travel",
        "subCategory": "Errand Run"
    },
    {
        "title": "Dry Clothes",
        "category": "House Work",
        "subCategory": "Laundry"
    },
    {
        "title": "Take Medication",
        "category": "Health",
        "subCategory": "Dishes"
    },
    {
        "title": "Morning Excersise",
        "category": "Health",
        "subCategory": "Excercise"
    },
    {
        "title": "Walk to the corner store",
        "category": "Travel",
        "subCategory": "Errand Run"
    }
]
function seedResults() {
    const data = [];
    const seedSize = 100;
    for(let i = 0; i < seedSize; i++){
        const randomNum = Math.floor(Math.random()*sampleQuesitons.length)
        const randomTask = sampleQuesitons[randomNum]
        randomTask.failed = randomNum % 2 == 0;
        randomTask.date = new Date().getTime() - Math.floor((7 * (1000 * 60 * 60 * 24)) * (randomNum/seedSize));
        data.push(randomTask)
    }
    return data;
}

export default function data(state = seedResults()) {
    console.log(state)
    return state
}