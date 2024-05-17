export default function MenuItem() {
  return (
    <div className="flex items-center space-x-4">
      <div>
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="w-[100px]"
          src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h1>ROAST DUCK BREAST ------------------</h1>
          <p>$14.00</p>
        </div>
        <p className="text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Consequuntur, quae.
        </p>
      </div>
    </div>
  );
}
