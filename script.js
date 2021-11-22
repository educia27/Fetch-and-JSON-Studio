window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
       // Access the JSON in the response
       response.json().then( function(json) {
        let theJson = `[
            {
               "id": 1,
               "active": false,
               "firstName": "Mae",
               "lastName": "Jemison",
               "skills": [
                     "Physician", "Chemical Engineer"
               ],
               "hoursInSpace": 190,
               "picture": "https://handlers.education.launchcode.org/static/images/mae-jemison.jpg"
            },
            {
               "id": 2,
               "active": false,
               "firstName": "Frederick",
               "lastName": "Gregory",
               "skills": [
                     "Information Systems", "Shuttle Pilot", "Fighter Pilot", "Helicopter Pilot", "Colonel USAF"
               ],
               "hoursInSpace": 455,
               "picture": "https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg"
            },
            {
               "id": 3,
               "active": false,
               "firstName": "Ellen",
               "lastName": "Ochoa",
               "skills": [
                     "Physics", "Electrical Engineer"
               ],
               "hoursInSpace": 979,
               "picture": "https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg"
            },
            {
               "id": 4,
               "active": false,
               "firstName": "Guion",
               "lastName": "Bluford",
               "skills": [
                     "Aerospace Engineer", "Philosophy", "Physics", "Colonel USAF",
                     "Fighter Pilot"
               ],
               "hoursInSpace": 686,
               "picture": "https://handlers.education.launchcode.org/static/images/guion-bluford.jpg"
            },
            {
               "id": 5,
               "active": false,
               "firstName": "Sally",
               "lastName": "Ride",
               "skills": [
                     "Physicist", "Astrophysics"
               ],
               "hoursInSpace": 343,
               "picture": "https://handlers.education.launchcode.org/static/images/sally-ride.jpg"
            },
            {
               "id": 6,
               "active": true,
               "firstName": "Kjell",
               "lastName": "Lindgren",
               "skills": [
                     "Physician", "Surgeon", "Emergency Medicine"
               ],
               "hoursInSpace": 15,
               "picture": "https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg"
            },
            {
               "id": 7,
               "active": true,
               "firstName": "Jeanette",
               "lastName": "Epps",
               "skills": [
                     "Physicist", "Philosophy", "Aerospace Engineer"
               ],
               "hoursInSpace": 0,
               "picture": "https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg"
            }
         ]`
         let arrayOfObjects = JSON.parse(theJson);
         //console.log(arrayOfObjects);
         arrayOfObjects.forEach(object => {
            for (let key in object) {
                console.log(`${key}: ${object[key]}`);
            }
        });
        const contain = document.getElementById("container");
        contain.innerHTML  = `<div class="astronaut">
            <div class="bio">
            <h3>Name: ${json[0].firstName} ${json[0].lastName}</h3>
            <ul>
                <li>Hours in space: ${json[0].hoursInSpace}</li>
                <li>Active: ${json[0].active}</li>
                <li>Skills: ${json[0].skills}</li>
            </ul>
            </div>
            <img class="avatar" src= ${json[0].picture}>
            </div>
            <div class="astronaut">
            <div class="bio">
            <h3>Name: ${json[1].firstName} ${json[1].lastName}</h3>
            <ul>
                <li>Hours in space: ${json[1].hoursInSpace}</li>
                <li>Active: ${json[1].active}</li>
                <li>Skills: ${json[1].skills}</li>
            </ul>
            </div>
            <img class="avatar" src= ${json[1].picture}>
            </div>
            <div class="astronaut">
            <div class="bio">
            <h3>Name: ${json[2].firstName} ${json[2].lastName}</h3>
            <ul>
                <li>Hours in space: ${json[2].hoursInSpace}</li>
                <li>Active: ${json[2].active}</li>
                <li>Skills: ${json[2].skills}</li>
            </ul>
            </div>
            <img class="avatar" src= ${json[2].picture}>
            </div>`
       });
    });
 });