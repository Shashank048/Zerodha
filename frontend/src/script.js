// frontend/script.js
const apiUrl = 'http://localhost:3000'; // your backend server URL

document.getElementById('signup-btn').addEventListener('click', async () => {
  try {
    const response = await fetch('${apiUrl}/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'example@example.com',
        password: 'password123',
      }),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
});