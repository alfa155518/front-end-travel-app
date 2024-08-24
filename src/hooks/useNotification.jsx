import toast from "react-hot-toast";

function useNotification() {
  const notify = (message, status) => {
    const options = {
      duration: 3000,
    };

    switch (status) {
      case "success":
        toast.success(message, options);
        break;
      case "error":
        toast.error(message, options);
        break;
      default:
        toast(message, options); // Default toast (no specific status)
        break;
    }
  };
  return [notify];
}

export default useNotification;

