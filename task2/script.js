document.getElementById('planetButton').addEventListener('click', showPlanets);

    function showPlanets() {
        let planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
        let planetContainer = document.getElementById('planet-container');
        planetContainer.innerHTML = '';
        planets.forEach(function (planet) {
            var planetButton = document.createElement('button');
            planetButton.innerHTML = planet;
            planetButton.addEventListener('click', function () {
                displayPlanetDetail(planet);
            });
            planetContainer.appendChild(planetButton);
        });
    }

    function displayPlanetDetail(planetName) {
        let planetDetailContainer = document.getElementById('planet-detail-container');
        let planetDetails = {
            "Mercury": {
                description: "The smallest planet in our solar system and nearest to the Sun—is only slightly larger than Earth's Moon. Its surface is covered in tens of thousands of impact craters. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as 11 times brighter.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/220px-Mercury_in_color_-_Prockter07-edit1.jpg"
            },
            "Venus": {
                description: "The second planet from the Sun. It is named after the Roman goddess of love and beauty. Although it's similar in structure and size to Earth, Venus has a thick atmosphere that traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/PIA23791-Venus-NewlyProcessedView-20200608.jpg/220px-PIA23791-Venus-NewlyProcessedView-20200608.jpg"
            },
            "Earth": {
                description: "The third planet from the Sun and the only astronomical object known to harbor life. Earth—our home planet—is the only place we know of so far that’s inhabited by living things. NASA uses the vantage point of space to increase our understanding of our home planet, improve lives, and safeguard our future. We monitor Earth’s vital signs from land, air and space with a fleet of satellites and ambitious airborne and ground-based observation campaigns.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/240px-The_Earth_seen_from_Apollo_17.jpg"
            },
            "Mars": {
                description: "The fourth planet from the Sun and the second-smallest planet in the Solar System. Despite being inhospitable to humans, robotic explorers – like NASA's Perseverance rover – are serving as pathfinders to eventually get humans to the surface of the Red Planet.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/220px-OSIRIS_Mars_true_color.jpg"
            },
            "Jupiter": {
                description: "The fifth planet from the Sun and the largest in the Solar System. Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter is named for the king of the ancient Roman gods.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/220px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg"
            },
            "Saturn": {
                description: "The sixth planet from the Sun and the second-largest in the Solar System. Saturn's beautiful rings are relatively young. They may have formed in the era of the dinosaurs here on Earth. It is not the only planet to have rings, but none are as spectacular or as complex as Saturn's. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/220px-Saturn_during_Equinox.jpg"
            },
            "Uranus": {
                description: "The seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is very cold and windy. It is surrounded by faint rings and more than two dozen small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/220px-Uranus2.jpg"
            },
            "Neptune": {
                description: "The eighth and farthest known planet from the Sun in the Solar System. Dark, cold and whipped by supersonic winds, giant Neptune is the eighth and most distant major planet orbiting our Sun. More than 30 times as far from the Sun as Earth, Neptune is not visible to the naked eye.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/220px-Neptune_Full.jpg"
            }
        };

        if (planetDetails[planetName]) {
            let { description, image } = planetDetails[planetName];
            planetDetailContainer.innerHTML = '<h3>' + planetName + '</h3><img src="' + image + '" alt="' + planetName + '" style="max-width:300px;max-height:300px;"><p>' + description + '</p>';
        } else {
            planetDetailContainer.innerHTML = '<p>No details available for ' + planetName + '</p>';
        }
    }