import image from "../assets/home/chef-service.jpg";
export default function About() {
  return (
    <div className="max-w-screen-xl mx-auto px-3">
      <div
        className="h-[570px] flex justify-center items-center bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className=" bg-white w-2/3 p-10 text-center">
          <h1 className="text-2xl font-medium cinzel-font">
            Bistro Boss Restaurant
          </h1>
          <p className="mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim animi
            eos consequatur aperiam dolore quidem reiciendis eius tenetur,
            incidunt autem accusamus voluptate earum beatae. Illum commodi
            veritatis officiis non doloribus.
          </p>
        </div>
      </div>
    </div>
  );
}
