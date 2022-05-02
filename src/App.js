import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Use Effect");

    const fetchData = async () => {
      const response = await axios.get(
        "https://my-backend-deliveroo-project.herokuapp.com/"
      );
      // console.log(response.data);
      setData(response.data);

      //J'exécute mon SetIsLoading APRES avoir fait mon setData
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement... </span>
  ) : (
    <div className="App">
      {/* <Header /> */}

      {/* console.log(data.categories); */}

      <section className="RestaurantInfos">
        <div className="RestaurantInfo-text">
          <h1>{data.restaurant.name}</h1>
          <p>{data.restaurant.description}</p>
        </div>
        <div className="RestaurantInfo-img">
          <img src={data.restaurant.picture} alt="" />
        </div>
      </section>

      {data.categories.map((categorie, index) => {
        return (
          <div className="globalItem">
            <div key={index} className="menuItem">
              <section>
                <div className="menuItem-Title">
                  <h2>{data.categories[index].name}</h2>
                  {categorie.meals.map((item, index) => {
                    return (
                      <div className="menuItem-card" key={index}>
                        <div className="menuItem-text">
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                          <p>{item.price} €</p>
                        </div>
                        <div className="menuItem-img">
                          {item.picture ? (
                            <img src={item.picture} alt="" />
                          ) : (
                            <div></div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
