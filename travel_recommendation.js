document.addEventListener('DOMContentLoaded', () => {
    fetch('travel_recommendation.json')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Verify the data
            // Add your logic to display recommendations
        })
        .catch(error => console.error('Error fetching data:', error));
});
document.getElementById('searchbtn').addEventListener('click', () => {
    const keyword = document.getElementById('Recommendation').value.toLowerCase();
    
    if (keyword.includes('beach')) {
        // Display beach recommendations
    } else if (keyword.includes('temple')) {
        // Display temple recommendations
    } else if (keyword.includes('country')) {
        // Display country recommendations
    }
});
function displayRecommendations(data, keyword) {
    const results = data.filter(item => item.category.includes(keyword));
    
    results.forEach(result => {
        // Append result to DOM
        const resultDiv = document.createElement('div');
        resultDiv.innerHTML = `
            <h3>${result.name}</h3>
            <img src="${result.imageUrl}" alt="${result.name}">
            <p>${result.description}</p>
        `;
        document.getElementById('results').appendChild(resultDiv);
    });
}
document.getElementById('resetbtn').addEventListener('click', () => {
    document.getElementById('Recommendation').value = '';
    document.getElementById('results').innerHTML = ''; // Clear displayed results
});
const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
const newYorkTime = new Date().toLocaleTimeString('en-US', options);
console.log("Current time in New York:", newYorkTime);
