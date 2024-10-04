export default function FoodItem({ food, index }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 mb-4" key={index}>
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{food.name}</h5>
          <p className="card-text">{food.quantity}</p>
        </div>
      </div>
    </div>
  );
}
