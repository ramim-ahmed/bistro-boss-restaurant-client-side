import FoodCard from "@/components/FoodCard";
import shopBannerImg from "../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
export default function Shop() {
  return (
    <div>
      <div
        className="h-[800px] object-cover bg-center bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${shopBannerImg})` }}
      >
        <div className="bg-black w-2/3 bg-opacity-40 p-20 text-center text-white">
          <h1 className=" cinzel-font text-5xl font-medium">OUR SHOP</h1>
          <p className="uppercase">Would like to try dish</p>
        </div>
      </div>
      <div className="py-20 max-w-screen-xl mx-auto px-3">
        <div className="flex justify-center">
          <Tabs>
            <TabList>
              <Tab>SALAD</Tab>
              <Tab>PIZZA</Tab>
              <Tab>DESSERT</Tab>
              <Tab>SOUP</Tab>
              <Tab>DRINK</Tab>
            </TabList>

            <TabPanel>
              <div className="grid lg:grid-cols-3 gap-8">
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid lg:grid-cols-3 gap-8">
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid lg:grid-cols-3 gap-8">
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid lg:grid-cols-3 gap-8">
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid lg:grid-cols-3 gap-8">
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
                <FoodCard />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
