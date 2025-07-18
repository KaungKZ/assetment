import Image from "next/image";
import axios from "axios";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import CustomJewelry from "@/components/CustomJewelry";

import ExploreMore from "@/components/ExploreMore";
import WhyChooseJewelry from "@/components/WhyChooseJewelry";
import Testimonials from "@/components/Testimonials";
import DiamondGroup from "../../public/diamondgroup.png";
import SingleDiamond from "../../public/singlediamond.png";
import DiamondRing from "../../public/diamondring.png";

export default async function Home() {
  const getTestimonials = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=12");

      if (
        !response.data ||
        !Array.isArray(response.data.results) ||
        response.data.results.length === 0
      ) {
        throw new Error("No testimonials found in response.");
      }

      return response.data.results;
    } catch (error) {
      console.error("Failed to fetch testimonials:", error);
      return [];
    }
  };

  const data = await getTestimonials();

  return (
    <main className="w-full ">
      <section className="bg-[#f0f0f0] h-[420px] bg-[url(/headerbg.png)] bg-cover bg-no-repeat relative">
        <Image
          src={DiamondGroup}
          alt="diamond groups"
          className="absolute left-0 bottom-0 object-cover"
        />
        <MaxWidthWrapper cls="h-full">
          <div className="flex flex-col items-center justify-center h-full gap-10">
            <h1 className="section-title">Custom Jewelry</h1>
            <p className="text-xl text-secondary">
              Create Your Masterpiece: Bespoke Jewelry Crafted for You
            </p>
          </div>
        </MaxWidthWrapper>
        <div>
          <Image
            src={SingleDiamond}
            alt="single diamond"
            className="absolute right-0 top-0 object-cover"
          />
        </div>
        <div>
          <Image
            src={DiamondRing}
            alt="diamond groups"
            className="absolute right-0 bottom-0 object-cover"
          />
        </div>
      </section>
      <CustomJewelry />
      <div className="relative overflow-hidden">
        <WhyChooseJewelry />
        <div>
          <Image
            src={"/circlebg.png"}
            alt="circle background"
            width={800}
            height={800}
            className="absolute -right-[50px] top-[400px] -z-10 object-contain"
          />
        </div>
        <ExploreMore />
        {data && <Testimonials data={data} />}
      </div>
    </main>
  );
}
