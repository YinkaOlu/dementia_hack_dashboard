'use strict';

const sampleQuesitons =[
    {
        "title": "Dry Dishes",
        "category": "House Work",
        "subCategory": "Dishes"
    },
    {
        "title": "Vacuum house",
        "category": "House Work",
        "subCategory": "Dishes"
    },
    {
        "title": "Watch Favorite Soap Opera",
        "category": "Entertainment",
        "subCategory": "Routine"
    },
    {
        "title": "Drive to Drug Store",
        "category": "Travel",
        "subCategory": "Routine"
    },
    {
        "title": "Soften Clothes",
        "category": "House Work",
        "subCategory": "Laundry"
    },
    {
        "title": "Take Eyedroppers",
        "category": "Health",
        "subCategory": "Preventative"
    },
    {
        "title": "Afternoon Stretch",
        "category": "Health",
        "subCategory": "Exercise"
    },
    {
        "title": "Walk to the Pet Store",
        "category": "Travel",
        "subCategory": "Errands"
    },
    {
        "title": "Clean DishWasher",
        "category": "House Work",
        "subCategory": "Dishes"
    },
    {
        "title": "Watch Youtube",
        "category": "Entertainment",
        "subCategory": "TV"
    },
    {
        "title": "Drive to Dentist office",
        "category": "Travel",
        "subCategory": "Errands"
    },
    {
        "title": "Dry Clothes",
        "category": "House Work",
        "subCategory": "Laundry"
    },
    {
        "title": "Use Skin Ointment",
        "category": "Health",
        "subCategory": "Preventative"
    },
    {
        "title": "Evening Yoga",
        "category": "Health",
        "subCategory": "Exercise"
    },
    {
        "title": "Walk the barber",
        "category": "Travel",
        "subCategory": "Routine"
    },

    {
        "title": "Boil Rice",
        "category": "Food",
        "subCategory": "Preparation"
    },
    {
        "title": "Make Cereal",
        "category": "Food",
        "subCategory": "Cooking"
    },
    {
        "title": "Set A/C",
        "category": "Home work",
        "subCategory": "Appliance"
    },
    {
        "title": "Got to Therapist",
        "category": "Travel",
        "subCategory": "Errands"
    },
    {
        "title": "Mouthwash",
        "category": "Hygiene",
        "subCategory": "Oral"
    },
    {
        "title": "Change Dentures",
        "category": "Hygiene",
        "subCategory": "Oral"
    },
    {
        "title": "Take Bath",
        "category": "Hygiene",
        "subCategory": "Body"
    },
    {
        "title": "File Nailes",
        "category": "Hygiene",
        "subCategory": "Body"
    },
    {
        "title": "Make Roti",
        "category": "Food",
        "subCategory": "Cooking"
    },
    {
        "title": "Drive to Brother's house",
        "category": "Travel",
        "subCategory": "Family"
    },
    {
        "title": "Iron Shirts",
        "category": "House Work",
        "subCategory": "Laundry"
    },
    {
        "title": "Take sleeping pills",
        "category": "Health",
        "subCategory": "Medication"
    },
    {
        "title": "Morning Walk with Dog",
        "category": "Leisure",
        "subCategory": "Excercise"
    },
    {
        "title": "Make Hot Chocolate",
        "category": "Food",
        "subCategory": "Drinks"
    },



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
        "subCategory": "Errand"
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
        "title": "Morning Exercise",
        "category": "Health",
        "subCategory": "Exercise"
    },
    {
        "title": "Walk to the corner store",
        "category": "Travel",
        "subCategory": "Errand"
    },
    {
        "title": "Use Dishwasher",
        "category": "House Work",
        "subCategory": "Dishes"
    },
    {
        "title": "Watch Netflix",
        "category": "Entertainment",
        "subCategory": "Internet"
    },
    {
        "title": "Drive to Doctor's office",
        "category": "Travel",
        "subCategory": "Errand"
    },
    {
        "title": "Fold Clothes",
        "category": "House Work",
        "subCategory": "Laundry"
    },
    {
        "title": "Use Skin Ointment",
        "category": "Health",
        "subCategory": "Skincare"
    },
    {
        "title": "Evening Yoga",
        "category": "Health",
        "subCategory": "Exercise"
    },
    {
        "title": "Walk through park",
        "category": "Travel",
        "subCategory": "Errand"
    },

    {
        "title": "Fry Eggs",
        "category": "Food",
        "subCategory": "Cooking"
    },
    {
        "title": "Make Toast",
        "category": "Food",
        "subCategory": "Cooking"
    },
    {
        "title": "Set Heater",
        "category": "Home work",
        "subCategory": "Comfort"
    },
    {
        "title": "Got to Optometrist",
        "category": "Travel",
        "subCategory": "Errands"
    },
    {
        "title": "Brush Teeth",
        "category": "Hygiene",
        "subCategory": "Oral"
    },
    {
        "title": "Floss teeth",
        "category": "Hygiene",
        "subCategory": "Oral"
    },
    {
        "title": "Take shower",
        "category": "Hygiene",
        "subCategory": "Body"
    },
    {
        "title": "Clip nails",
        "category": "Hygiene",
        "subCategory": "Body"
    },
    {
        "title": "Make Spaghetti",
        "category": "Food",
        "subCategory": "Cooking"
    },
    {
        "title": "Drive to Sister's house",
        "category": "Travel",
        "subCategory": "Family"
    },
    {
        "title": "Starch pants",
        "category": "House Work",
        "subCategory": "Laundry"
    },
    {
        "title": "Take vitamins",
        "category": "Health",
        "subCategory": "Medication"
    },
    {
        "title": "Evening Walk with Dog",
        "category": "Leisure",
        "subCategory": "Dog Walking"
    },
    {
        "title": "Make Lemonade",
        "category": "Food",
        "subCategory": "Drinks"
    },
]

const initialState = seedResults().concat(seedResults()).concat(seedResults())
function seedResults() {
    const data = [];
    const seedSize = 10;
    for(let i = 0; i < seedSize; i++){
        const randomNum = getRandom();
        const randomTask = jQuery.extend(true, {}, sampleQuesitons[getRandom()]);

        randomTask.failed = (Math.floor(getRandom()) % 2 == 0);
        const fullDate = new Date(new Date().getTime() - (Math.floor(90*(Math.floor(Math.random()*sampleQuesitons.length)/sampleQuesitons.length)) * (1000 * 60 * 60 * 24)));
        const dateStr = `${fullDate.getMonth()}/${fullDate.getUTCDate()}/${fullDate.getUTCFullYear()}`
        randomTask.date = dateStr;
        data.push(randomTask)
    }
    return data;

    function getRandom() {
        return Math.floor(Math.random()*sampleQuesitons.length);
    }
}

export default function data(state = initialState) {
    return state
}