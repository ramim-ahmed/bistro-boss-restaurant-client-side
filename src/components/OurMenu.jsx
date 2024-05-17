import MenuItem from "./MenuItem";
import SectionHeading from "./SectionHeading";
import { Button } from "./ui/button";

export default function OurMenu() {
  return (
    <div className="max-w-screen-xl px-3 mx-auto py-20">
      <div className="flex justify-center pb-10">
        <SectionHeading
          subHeading="---Check it out---"
          heading="FROM OUR MENU"
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
      <div className="mt-10 flex justify-center">
        <Button variant="outline" className="w-64">
          View All Menu
        </Button>
      </div>
    </div>
  );
}
