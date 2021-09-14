import React, { useState } from "react";
import "../Tracker.css";
import "../App.css";

function Tracker({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  if (document.querySelector("body > nav")) {
    var el = document.querySelector("body > nav");
    el.style.visibility = "hiddenn";
    el.style.display = "none";
  }

  return (
    <div className="App">
      <div className="App-header">
        <div className="search">
          <div className="searchInputs App">
            <input
              type="text"
              placeholder={placeholder}
              value={wordEntered}
              onChange={handleFilter}
            />
          </div>
          {filteredData.length !== 0 && (
            <div className="dataResult App">
              {filteredData
                .slice(0, 15)
                .sort((a, b) => (Number(a.price) > Number(b.price) ? 1 : -1))
                .map((value, key) => {
                  return (
                    <a
                      className="dataItem App"
                      href={value.link}
                    >
                      <p style={{ textAlign: "center" }}>
                        {value.shop} - {value.name} (${value.price})
                      </p>
                    </a>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tracker;
