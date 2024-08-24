import axios from "axios";

function usePopularTours() {
  const getPopularTours = async (queryKey) => {
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
  return [getPopularTours];
}

export default usePopularTours;
