import About from "@/components/About";
import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import ContactUs from "@/components/ContactUs";
import OurMenu from "@/components/OurMenu";

export default function Home() {
  return (
    <div>
      <Banner />
      <Categories />
      <About />
      <OurMenu />
      <ContactUs />
    </div>
  );
}
