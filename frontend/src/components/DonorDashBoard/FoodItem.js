export default function FoodItem({ food, index }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{food.food_name}</h5>
          <p className="card-text">{food.quantity}</p>
          <p>Description: {food.description}</p>
          <p>{new Date(food.expiration_date).toLocaleDateString()}</p>
          <p>Status: {food.status}</p>
        </div>
      </div>
    </div>
  );
}
