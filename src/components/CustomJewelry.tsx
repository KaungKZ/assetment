import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

import Image from "next/image";

const CustomJewelryContent = [
  {
    list: "01",
    title: "Consultation",
    content: "We discuss your vision and preferences to craft a unique design.",
  },
  {
    list: "02",
    title: "Selecting Materials",
    content: "Choose from exquisite diamonds, precious metals, and gemstones.",
  },
  {
    list: "03",
    title: "Creating a 3D Model",
    content: "Visualize your design with a precise 3D model before production.",
  },
  {
    list: "04",
    title: "Manufacturing",
    content:
      "Expert artisans bring your piece to life with precision and care.",
  },
  {
    list: "05",
    title: "Quality Assurance",
    content: "Every detail is inspected to ensure flawless craftsmanship.",
  },
  {
    list: "06",
    title: "Delivery",
    content: "Your custom jewelry is elegantly packaged and delivered to you.",
  },
];

export default function CustomJewelry() {
  return (
    <>
      <section className="mt-6">
        <MaxWidthWrapper>
          <div>
            <span className="text-accent text-sm">Home</span> /{" "}
            <span className="text-secondary text-sm"> Custom Jewelry</span>
          </div>
          <div className="mt-20 flex gap-16">
            <div className="flex flex-col gap-7">
              <h2 className="text-4xl text-primary">Custom Jewelry</h2>
              <p className="text-secondary tracking-wide text-xl max-w-[480px]">
                Create Your Masterpiece: Bespoke Jewelry Crafted for You
              </p>
              <Image
                src="/ringsshowcase.png"
                height={640}
                width={510}
                className="object-cover"
                alt="rings showcase"
                style={{
                  height: 640,
                  width: 510,
                }}
              />
            </div>
            <div>
              <p className="tracking-wider text-left text-secondary">
                Exquisite design, flawless craftsmanship, and timeless
                elegance—your vision, perfectly crafted.
              </p>
              <div className="mt-10 flex flex-col gap-8">
                {CustomJewelryContent.map((content) => (
                  <div
                    className="flex gap-6 border-b border-border pb-8"
                    key={content.list}
                  >
                    <span className="text-accent text-xl">{content.list}</span>
                    <div className="flex flex-col gap-4">
                      <h3 className="uppercase text-2xl font-sans tracking-widest font-medium">
                        {content.title}
                      </h3>
                      <p className="text-accent text-lg">{content.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
