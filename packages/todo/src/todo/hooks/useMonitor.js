import { useEffect } from "react";

const useMonitor = () => {
  useEffect(() => {
    const interval = setInterval(() => {}, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
};

export default useMonitor;
