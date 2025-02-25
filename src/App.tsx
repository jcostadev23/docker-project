import { useEffect, useState } from "react";
import "./App.css";

type Person = {
  id: number;
  first_name: string;
  last_name: string;
};

function App() {
  const [data, setData] = useState<Array<Person>>([]);
  useEffect(() => {
    fetch("http://localhost:4001/api/data")
      .then((resp) => resp.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((error) => console.log("Error on fetch", error));
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {data.map((person) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <strong>First name: </strong>
          {person.first_name}
          <strong>Last name: </strong>
          {person.last_name}
        </div>
      ))}
    </div>
  );
}

export default App;
