import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";

import "./Notes.css";

const Notes = () => {
  const [createdBy, setCreatedBy] = useState("");
  const [city, setCity] = useState("");
  const [note, setNote] = useState("");
  const [data, setData] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();

    const rawData = {
      id: v4(),
      createdBy: createdBy,
      city: city,
      note: note,
    };

    setData([...data, rawData]);
    setCreatedBy("");
    setCity("");
    setNote("");
  };

  return (
    <div className="Notes">
      <h1>Create a Note</h1>
      <form onSubmit={formHandler}>
        <div className="formStyle">
          <input
            type="text"
            placeholder="Created By ..."
            value={createdBy}
            onChange={(event) => setCreatedBy(event.target.value)}
          />
          <input
            type="text"
            placeholder="City ..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Note ..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <button>Add Note</button>
        </div>
      </form>
      <div className="kumpulanData">
        {data.map((item) => (
          <div key={item.id} className="item">
            <span>Created By : {item.createdBy}</span>
            <span>City : {item.city}</span>
            <span>Note : {item.note}</span>
          </div>
        ))}
      </div>
      <Link className="buttonLink" to={"/"}>
        Kembali ...
      </Link>
    </div>
  );
};

export default Notes;
