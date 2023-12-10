const url = 'http://3.94.197.194:5000/api/Transaction/get?tokenId=08dbf947-7daa-4bf4-8918-2d4e92d34bae';

const options = {
  method: 'GET',
  headers: {
    'accept': 'text/plain',
    'Authorization': 'bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJ1c2VyIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiMDhkYmY5NDctNzIxZC00MGVlLThhYWMtNDA1NzAxZjI2NjE4IiwiZXhwIjoxNzAyMjgyNTcxfQ.pYkljztHRqZ_jRgEikW3FiPZbjmZ9X1VR48h3uvEFmGcEUL_3RREy_QI7Kf4THsbnvy58r5dtv8U35MRERlqog'
  }
};

fetch(url, options)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return response.text(); // Change to .json() if the response is JSON
  })
  .then(data => {
    // Handle the data received from the API
    console.log(data);
  })
  .catch(error => {
    // Handle errors during the request
    console.error('There was a problem with the fetch operation:', error);
  });
