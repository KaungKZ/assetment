import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

export default function ExploreMore() {
  return (
    <>
      <section className="mt-32 ">
        <MaxWidthWrapper cls="">
          <div className="flex items-center justify-end gap-10">
            <div className="flex flex-col gap-4 ">
              <h2 className="text-3xl text-primary">Explore More</h2>
              <p className="text-accent text-sm max-w-3/4">
                Looking for more diamond guides, buying tips or details about
                the 4Cs? Explore more of our diamond education pages:
              </p>
              <div className="mt-6 grid grid-cols-2 gap-6">
                <div>
                  <Link
                    href="/"
                    className="hover:underline text-secondary font-sm flex gap-6 items-center"
                  >
                    How to Select the Ideal Wedding Band
                    <div className="rounded-full border border-accent p-3 w-[50px] h-[50px] flex items-center justify-center">
                      <ExternalLink className="text-accent" />
                    </div>
                  </Link>
                </div>
                <div>
                  <Link
                    href="/"
                    className="hover:underline text-secondary font-sm flex gap-6 items-center"
                  >
                    How to Choose the Engagement Ring
                    <div className="rounded-full border border-accent p-3 w-[50px] h-[50px] flex items-center justify-center">
                      <ExternalLink className="text-accent" />
                    </div>
                  </Link>
                </div>
                <div>
                  <Link
                    href="/"
                    className="hover:underline text-secondary font-sm flex gap-6 items-center"
                  >
                    Lab Grown Diamond Guide
                    <div className="rounded-full border border-accent p-3 w-[50px] h-[50px] flex items-center justify-center">
                      <ExternalLink className="text-accent" />
                    </div>
                  </Link>
                </div>
                <div>
                  <Link
                    href="/"
                    className="hover:underline text-secondary font-sm flex gap-6 items-center"
                  >
                    Ring Size Guide
                    <div className="rounded-full border border-accent p-3 w-[50px] h-[50px] flex items-center justify-center">
                      <ExternalLink className="text-accent" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/diamondperson.png"
                alt="diamond person cover"
                width={590}
                height={420}
                style={{
                  width: 590,
                  height: 420,
                }}
                className="object-cover"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
