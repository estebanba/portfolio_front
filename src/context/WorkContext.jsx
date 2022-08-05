import React, { createContext, useEffect, useState } from "react";

const WorkContext = createContext();

const WorkContextProvider = ({ children }) => {
  const [work, setWork] = useState([]);

  const getData = () => {
    fetch("work.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function(response) {
        // console.log(response);
        return response.json();
      })
      .then(function(myJson) {
        // console.log(myJson);
        setWork(myJson);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <WorkContext.Provider value={{ work }}>{children}</WorkContext.Provider>
  );
};

export { WorkContext, WorkContextProvider };
