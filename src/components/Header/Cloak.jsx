import { useState, useEffect } from "react";

export default function Cloak() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <span className="header-item">Время {time.toLocaleTimeString()} </span>
  );
}
