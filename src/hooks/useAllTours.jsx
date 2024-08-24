import axios from "axios";
import { useState } from "react";

function useAllTours() {
  const [limit] = useState(6);
  const [page, setPage] = useState(1);

  console.log(page);
  const getAllTours = async (queryKey) => {
    try {
      const [, { page, limit }] = queryKey;
      const response = await axios.get(`http://localhost:8000/api/v1/tours`, {
        params: {
          page,
          limit,
        },
      });
      return response.data.data;
    } catch (error) {
      console.error("Error fetching tours:", error);
      throw error;
    }
  };
  return [getAllTours, limit, page, setPage];
}

export default useAllTours;
