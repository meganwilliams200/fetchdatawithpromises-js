document.getElementById('fetchData').addEventListener('click', () => {
    const dataDiv = document.getElementById('data');
    dataDiv.textContent = 'Loading...'; // Display loading message

    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data && data.message) {
                // Successfully received data
                dataDiv.innerHTML = <img src="${data.message}" alt="Random Dog Image">;
            } else {
                // Handle unexpected data format
                dataDiv.textContent = 'Unexpected data format.';
            }
        })
        .catch(error => {
            // Handle errors
            dataDiv.textContent = An error occurred: ${error.message};
        });
});