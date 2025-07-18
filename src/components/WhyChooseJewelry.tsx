import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";

export default function WhyChooseJewelry() {
  return (
    <section className="mt-64 max-xlmx:mt-32">
      <MaxWidthWrapper>
        <div>
          <h1 className="section-title">Why Choose MyJewel</h1>
          <div className="mt-16 grid grid-cols-3 gap-5">
            <div className="[box-shadow:0px_2px_15px_0px_#7A7A7A1A] flex flex-col gap-5 p-5 rounded-s justify-center items-center bg-white">
              <Image
                src="/circlecheck.svg"
                alt="circle check"
                width={45}
                height={45}
                style={{
                  width: 45,
                  height: 45,
                }}
              />
              <h3 className="text-xl text-[#15274b] font-semibold text-center">
                Personal Design Consultation
              </h3>
              <p className="text-accent text-center">
                Work with our designers to create your perfect piece.
              </p>
            </div>
            <div className="[box-shadow:0px_2px_15px_0px_#7A7A7A1A] flex flex-col gap-5 p-5 rounded-s justify-center items-center bg-white">
              <Image
                src="/axediamond.svg"
                alt="axe and diamond"
                width={45}
                height={45}
                style={{
                  width: 45,
                  height: 45,
                }}
              />
              <h3 className="text-xl text-[#15274b] font-semibold text-center">
                Crafted with Luxury Materials
              </h3>
              <p className="text-accent text-center">
                Only the finest diamonds, gemstones, and precious metals used.
              </p>
            </div>
            <div className="[box-shadow:0px_2px_15px_0px_#7A7A7A1A] flex flex-col gap-5 p-5 rounded-s justify-center items-center bg-white">
              <Image
                src="/ribbonoutline.svg"
                alt="warranty"
                width={45}
                height={45}
                style={{
                  width: 45,
                  height: 45,
                }}
              />
              <h3 className="text-xl text-[#15274b] font-semibold text-center">
                Lifetime Warranty
              </h3>
              <p className="text-accent text-center">
                Lifetime warranty on every piece, ensuring quality and lasting
                beauty.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
