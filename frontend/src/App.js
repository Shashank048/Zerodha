


//import React, { useEffect, useState } from 'react';
//import axios from 'axios';

//const ExampleComponent = () => {
  //const [data, setData] = useState(null);
    //const backendUrl = process.env.REACT_APP_BACKEND_URL;

    //useEffect(() => {
      //  const fetchData = async () => {
        //    try {
          //      const response = await axios.get(`${backendUrl}/endpoint`);
            //    setData(response.data);
            //} catch (error) {
            //    console.error('Error fetching data:', error);
           // }
       // };

        //fetchData();
    //}, [backendUrl]);

   // return (
     //   <div>
      //      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
     //   </div>
  //  );
//};

//export default ExampleComponent;

const apiUrl = process.env.REACT_APP_API_URL;
const token = 'your-auth-token';

fetch(`${apiUrl}/api/data`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
})
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    return response.text().then(text => {
      throw new TypeError(`Expected JSON, got ${contentType}: ${text}`);
    });
  }
  return response.json();
})
.then(data => {
  console.log(data);
})
.catch(error => {
  if (error instanceof TypeError) {
    console.error('Type Error:', error.message);
  } else if (error instanceof Error) {
    console.error('Error:', error.message);
  } else {
    console.error('Unknown Error:', error);
  }
});

