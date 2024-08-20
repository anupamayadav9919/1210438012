import { useEffect } from 'react';

function App() {
  const url = 'http://20.244.56.144/test/primes';

  const getData = async () => {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0MTYxMDE0LCJpYXQiOjE3MjQxNjA3MTQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImRhZjM3MWJjLTFjMzEtNGY2Yi05NjBlLTI3ZDc3NjE0MWY0NiIsInN1YiI6IkFudXBhbWF5OTkxOUBiYmR1LmFjLmluIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiJkYWYzNzFiYy0xYzMxLTRmNmItOTYwZS0yN2Q3NzYxNDFmNDYiLCJjbGllbnRTZWNyZXQiOiJZQmF5a0RVaGZIdXhWTUpGIiwib3duZXJOYW1lIjoiQW51cGFtYSIsIm93bmVyRW1haWwiOiJBbnVwYW1heTk5MTlAYmJkdS5hYy5pbiIsInJvbGxObyI6IjEyMTA0MzgwMTIifQ.yf7GBHyDydKi3fO3sgQMMhnkcAKz6_gfqGT784Pe9xw',
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ');
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  // Call the function
  getData();

  return (
    <div>

    </div>
  ); 
}

export default App;
