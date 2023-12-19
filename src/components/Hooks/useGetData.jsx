import axios from 'axios';
import { useEffect, useState } from 'react';

function useGetData(url) {
  // Define a state variable 'data' and a function 'setData' to update it
  const [data, setData] = useState(null);

  // Define an asynchronous function 'fetchData' to make the API request
  const fetchData = async () => {
    try {
      // Make a GET request using Axios to the specified 'url'
      const res = await axios.get(url);

      // Update the 'data' state with the response data (assuming the response has a 'WhoWeAreContent' property)
      setData(res.data?.WhoWeAreContent);
    } catch (error) {
      // If an error occurs during the API request, log the error to the console
      console.log(error);

      // You might want to add error handling here, such as sending the error to a tracking service or displaying a user-friendly error message
      // Example: sendErrorToTrackingService(error);
      // Example: displayErrorMessage("An error occurred. Please try again later.");
    }
  };

  // Use the 'useEffect' hook to trigger the 'fetchData' function when the 'url' prop changes
  useEffect(() => {
    fetchData();
  }, [url]);

  // Return the 'data' state variable so that it can be used by the component that calls this hook
  return { data };
}

// Export the 'useGetData' hook to be used in other components
export default useGetData;