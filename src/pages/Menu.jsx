import SectionHeading from "@/components/SectionHeading";
import menuBannerImg from "../assets/menu/banner3.jpg";
import MenuItem from "@/components/MenuItem";
import dessertBannerImg from "../assets/home/chef-service.jpg";
import SectionCover from "@/components/SectionCover";
import { Button } from "@/components/ui/button";
export default function Menu() {
  return (
    <div>
      <div
        className="h-[800px] object-cover bg-center bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${menuBannerImg})` }}
      >
        <div className="bg-black w-2/3 bg-opacity-40 p-20 text-center text-white">
          <h1 className=" cinzel-font text-5xl font-medium">OUR MENU</h1>
          <p className="uppercase">Would like to try dish</p>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-3">
        <div>
          {/* today offer */}
          <div className="flex justify-center py-20">
            <SectionHeading
              subHeading="---Don't miss---"
              heading="TODAY'S OFFER"
            />
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
        </div>
        {/* dessert */}
        <div className="py-20">
          {/* today offer */}
          <SectionCover
            background={dessertBannerImg}
            content={{
              heading: "Desserts",
              description:
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, voluptatibus corporis? Debitis id neque excepturi iste, exercitationem suscipit distinctio! Quod?",
            }}
          />
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 pt-20">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
          <div className="flex justify-center mt-10">
            <Button variant="outline">View All Desserts</Button>
          </div>
        </div>
        {/* pizza */}
        <div className="pb-20">
          {/* today offer */}
          <SectionCover
            background={dessertBannerImg}
            content={{
              heading: "PIZZA",
              description:
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, voluptatibus corporis? Debitis id neque excepturi iste, exercitationem suscipit distinctio! Quod?",
            }}
          />
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 pt-20">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
          <div className="flex justify-center mt-10">
            <Button variant="outline">View All Pizza</Button>
          </div>
        </div>
        {/* salad */}
        <div className="pb-20">
          {/* today offer */}
          <SectionCover
            background={dessertBannerImg}
            content={{
              heading: "SALADS",
              description:
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, voluptatibus corporis? Debitis id neque excepturi iste, exercitationem suscipit distinctio! Quod?",
            }}
          />
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 pt-20">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
          <div className="flex justify-center mt-10">
            <Button variant="outline">View All Salads</Button>
          </div>
        </div>
        {/* soups */}
        <div className="pb-20">
          {/* today offer */}
          <SectionCover
            background={dessertBannerImg}
            content={{
              heading: "SOUPS",
              description:
                " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, voluptatibus corporis? Debitis id neque excepturi iste, exercitationem suscipit distinctio! Quod?",
            }}
          />
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 pt-20">
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
          <div className="flex justify-center mt-10">
            <Button variant="outline">View All Soups</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
