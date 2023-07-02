
function fetchDataFromAPI() {
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
  
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Usage
  fetchDataFromAPI()
    .then(data => {
      console.log('Data:', data);
      // Do something with the data
    });
  