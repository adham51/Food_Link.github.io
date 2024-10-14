import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FoodItem.css"; // For additional custom styling

export default function FoodItem({ food, index }) {
  const [charityInfo, setCharityInfo] = useState(null);
  console.log(food.food_id);

  useEffect(() => {
    // Fetch charity info if the food is claimed
    if (food.status === "claimed") {
      axios
        .get(`/charityinfo/food/${food.food_id}`)
        .then((response) => {
          setCharityInfo(response.data[0]); // Assuming response is an array with one object
        })
        .catch((error) => {
          console.log("Error fetching charity info", error);
        });
    }
  }, [food.status, food.food_id]);

  return (
    <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
      <div className={`card h-100 ${food.status === "claimed" ? "claimed-card" : "available-card"}`}>
        <div className="card-body">
          <h5 className="card-title">{food.food_name}</h5>
          <p className="card-text">Quantity: {food.quantity}</p>
          <p className="card-description">Description: {food.description}</p>
          <p className="card-expiration">
            Expiration Date: <strong>{new Date(food.expiration_date).toLocaleDateString()}</strong>
          </p>
          <p className={`food-status ${food.status === "claimed" ? "text-danger" : "text-success"}`}>
            Status: {food.status}
          </p>

          {/* Display charity info if the food is claimed */}
          {food.status === "claimed" && charityInfo && (
            <div className="charity-info mt-3">
              <p className="claimed-by">
                <strong>Claimed by:</strong> {charityInfo.name}
              </p>
              <p className="charity-email">
                <strong>Charity Email:</strong> {charityInfo.email}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}