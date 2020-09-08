const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the users below.

mongoose.connect(
    process.env.MONGODB_URI || 
    "mongodb://localhost/zbkdatabase"
);

// Seeding the database with a list of test users.
const userSeed = [
    {
        username: "Artemis",
        password: "theArticIncident",
        currentLine: "Halfcab to manual and kickflip out",
        motivationalLine: "Treflip to 360 backside to switchflip",
        registeredDate: new Date(Date.now()),
        favoriteSpots: [
            { 
                name : "Dublin Skatepark",
                coords: [53.35, -6.266667]
            },
            { 
                name: "Fowl Manor",
                coords: [53.3429, -6.2675]
            }
        ],
        trackedSpots: [
            {
                name: "Dublin Skatepark",
                coords: [53.3429, -6.266667]
            }
        ]
    },
    {
        username: "Kid Cudi",
        password: "themanonthemoon",
        currentLine: "Fakie flip to hardflip",
        motivationalLine: "Fakie flip to FS 180 to hardflip",
        registeredDate: new Date(Date.now()),
        favoriteSpots: [
            { 
                name : "Vans Off The Wall Skatepark",
                coords: [33.734001, -117.997253]
            },
            { 
                name: "Venice Skate Park",
                coords: [33.985432, -118.472649]
            }
        ],
        trackedSpots: [
            {
                name: "Venice Skate Park",
                coords: [33.985432, -118.472649]
            }
        ]
    },
    {
        username: "Yuto Horigome",
        password: "thatprofromJapan",
        currentLine: "Doubleflip to BS 360 to laser flip",
        motivationalLine: "Double heelflip to BS 360 to switch Treflip",
        registeredDate: new Date(Date.now()),
        favoriteSpots: [
            { 
                name : "Trinity B3 Park",
                coords: [35.794155, 139.68376]
            },
            { 
                name: "Nike Miyashita SkatePark",
                coords: [35.670289, 139.696816]
            }
        ],
        trackedSpots: [
            {
                name: "HLNA Skygarden",
                coords: [35.66667, 139.81667]
            }
        ]
    },
]

// Seeding the database with preselected skate park spots in the 32712 area.

const spotSeed = [
    {
        name: "Candyland Skatepark",
        coords: [28.7088972, -81.3320661]
    },
    {
        name: "Azalea Skatepark",
        coords: [28.7088972, -81.3320661]
    },
    {
        name: "Sunset Island Skatepark",
        coords: [28.849279, -81.688846]
    },
    {
        name: "Metro Skateboard Academy",
        coords: [28.5067351, -81.4423772]
    },
    {
        name: "Orlando Skate Park",
        coords: [28.547932, -81.346355]
    }
]


// Connecting to either the controllers or directly to the databse
// using mongoose/ mongodb.
db.Users
    .remove({})
    .then(() => db.Users.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });

db.Spots
    .remove({})
    .then(() => db.Spots.collection.insertMany(spotSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });