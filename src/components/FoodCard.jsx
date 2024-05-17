import { Button } from "./ui/button";

export default function FoodCard() {
  return (
    <div className="border p-3">
      <div>
        <img
          src="https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Caeser Salad</h2>
        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
      </div>
      <div className="mt-1">
        <Button>Add To Cart</Button>
      </div>
    </div>
  );
}
