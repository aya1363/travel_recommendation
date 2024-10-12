document.addEventListener('DOMContentLoaded', () => {
    fetch('travel_recommendation.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data); // Verify the data
            window.travelData = data; // Store the data for later use
            //displayRecommendations(data); // Initially display all recommendations
            document.getElementById('searchbtn').addEventListener('click', () => {
                const keyword = document.getElementById('Recommendation').value.toLowerCase();
                const data = window.travelData; // Access the fetched data
        
                // Clear previous recommendations
                const recommendationsDiv = document.getElementById('recommendations');
                recommendationsDiv.innerHTML = '';
        
                // Display recommendations based on the keyword
                if (keyword.includes('beach')) {
                    displayBeachRecommendations(data);
                } else if (keyword.includes('temple')) {
                    displayTempleRecommendations(data);
                } else if (keyword.includes('country')) {
                    displayCountryRecommendations(data);
                } else {
                    recommendationsDiv.innerHTML = '<p>No recommendations found for that keyword.</p>';
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    

    document.getElementById('resetbtn').addEventListener('click', () => {
        // Clear input field and recommendations
        document.getElementById('Recommendation').value = '';
        document.getElementById('recommendations').innerHTML = '';
    });
});
// Function to display all recommendations
function displayRecommendations(data) {
    const recommendationsDiv = document.getElementById('recommendations');

    // Display countries and cities
    data.countries.forEach(country => {
        const countryTitle = document.createElement('h2');
        countryTitle.textContent = country.name;
        recommendationsDiv.appendChild(countryTitle);

        country.cities.forEach(city => {
            const cityDiv = document.createElement('div');
            cityDiv.innerHTML = `
                <h3>${city.name}</h3>
                <img class='recommendation-image' src="${city.imageUrl}" alt="${city.name}" width="200">
                <h4>${city.description}</h4>
            `;
            recommendationsDiv.appendChild(cityDiv);
        });
    });

    // Display temples
    const templesTitle = document.createElement('h2');
    templesTitle.textContent = "Famous Temples";
    recommendationsDiv.appendChild(templesTitle);

    data.temples.forEach(temple => {
        const templeDiv = document.createElement('div');
        templeDiv.innerHTML = `
            <h3>${temple.name}</h3>
            <img class='recommendation-image' src="${temple.imageUrl}" alt="${temple.name}" width="200">
            <h4>${temple.description}</h4>
        `;
        recommendationsDiv.appendChild(templeDiv);
    });

    // Display beaches
    const beachesTitle = document.createElement('h2');
    beachesTitle.textContent = "Famous Beaches";
    recommendationsDiv.appendChild(beachesTitle);

    data.beaches.forEach(beach => {
        const beachDiv = document.createElement('div');
        beachDiv.innerHTML = `
            <h3>${beach.name}</h3>
            <img class='recommendation-image' src="${beach.imageUrl}" alt="${beach.name}" width="200">
            <h4>${beach.description}</h4>
        `;
        recommendationsDiv.appendChild(beachDiv);
    });
}

// Function to display beach recommendations
function displayBeachRecommendations(data) {
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = ''; // Clear previous content

    const beachesTitle = document.createElement('h2');
    beachesTitle.textContent = "Famous Beaches";
    recommendationsDiv.appendChild(beachesTitle);

    data.beaches.forEach(beach => {
        const beachDiv = document.createElement('div');
        beachDiv.innerHTML = `
            <h3>${beach.name}</h3>
            <img class='recommendation-image' src="${beach.imageUrl}" alt="${beach.name}" width="200">
            <h4>${beach.description}</h4>
        `;
        recommendationsDiv.appendChild(beachDiv);
    });
}

// Function to display temple recommendations
function displayTempleRecommendations(data) {
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = ''; // Clear previous content

    const templesTitle = document.createElement('h2');
    templesTitle.textContent = "Famous Temples";
    recommendationsDiv.appendChild(templesTitle);

    data.temples.forEach(temple => {
        const templeDiv = document.createElement('div');
        templeDiv.innerHTML = `
            <h3>${temple.name}</h3>
            <img class='recommendation-image' src="${temple.imageUrl}" alt="${temple.name}" width="200">
            <h4>${temple.description}</h4>
        `;
        recommendationsDiv.appendChild(templeDiv);
    });
}

// Function to display country recommendations
function displayCountryRecommendations(data) {
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = ''; // Clear previous content

    data.countries.forEach(country => {
        const countryTitle = document.createElement('h2');
        countryTitle.textContent = country.name;
        recommendationsDiv.appendChild(countryTitle);

        country.cities.forEach(city => {
            const cityDiv = document.createElement('div');
            cityDiv.innerHTML = `
                <h3>${city.name}</h3>
                <img class='recommendation-image' src="${city.imageUrl}" alt="${city.name}" width="200">
                <h4>${city.description}</h4>
            `;
            recommendationsDiv.appendChild(cityDiv);
        });
    });
}

// Current time in New York
const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
const newYorkTime = new Date().toLocaleTimeString('en-US', options);
console.log("Current time in New York:", newYorkTime);

