"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import MaxWidthWrapper from "./MaxWidthWrapper";
import {
  UserCircle,
  Heart,
  ShoppingCart,
  CalendarDays,
  ChevronDown,
  Search,
} from "lucide-react";

import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <>
      <div className="w-full border-b border-[#d9d9d9]">
        <MaxWidthWrapper cls="min-h-[35px] py-2.5 ">
          <div className="flex w-full justify-between items-center">
            <Button
              variant={"ghost"}
              className="cursor-pointer hover:bg-transparent uppercase flex items-start text-[#15274B] text-[13px]"
            >
              <CalendarDays /> Book an appointment
            </Button>
            <div>
              <span className="text-[#15274B] text-[13px]">
                Exclusive Collection Launch: Discover Timeless Elegance Today
              </span>
            </div>
            <div className="flex gap-5">
              <Link href={"/"}>
                <UserCircle className="text-[#15274B] w-4.5" />
              </Link>
              <Link href={"/"}>
                <Heart className="text-[#15274B] w-4.5" />
              </Link>
              <Link href={"/"}>
                <ShoppingCart className="text-[#15274B] w-4.5" />
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
      <nav className="border-b border-border">
        <MaxWidthWrapper>
          <div className="flex items-center justify-between">
            <div className="py-5 border-r border-border px-10">
              <Image
                src={"/MyJewel.svg"}
                width={130}
                height={35}
                style={{ width: 130, height: 35 }}
                alt="logo"
              />
            </div>
            <div className="py-5">
              <ul className="flex gap-6">
                <li className="text-secondary uppercase tracking-wider group relative">
                  <Link
                    href={"/"}
                    className="flex gap-1 items-center text-[13px] "
                  >
                    Jewelry{" "}
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-all" />
                  </Link>
                  <div className="opacity-[0] group-hover:opacity-100 transition-all group-hover:z-10 absolute top-[calc(100%+10px)] left-0 -z-10 py-1 bg-white [box-shadow:0px_2px_15px_0px_#7A7A7A1A] rounded-sm border border-border min-w-fit max-w-[150px]">
                    <ul className="">
                      <li className="text-secondary">
                        <Link
                          href=""
                          className="text-[13px] px-2.5 py-2.5 block"
                        >
                          Jewelry
                        </Link>
                      </li>
                      <li className="text-secondary">
                        <Link
                          href=""
                          className="text-[13px] px-2.5 py-2.5 block"
                        >
                          Jewelry
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="text-secondary uppercase tracking-wider group relative">
                  <Link
                    href={"/"}
                    className="flex gap-1 items-center text-[13px]"
                  >
                    Love and Engagement{" "}
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-all" />
                  </Link>
                  <div className="opacity-[0] group-hover:opacity-100 transition-all group-hover:z-10 absolute top-[calc(100%+10px)] left-0 -z-10 py-1 bg-white [box-shadow:0px_2px_15px_0px_#7A7A7A1A] rounded-sm border border-border min-w-fit max-w-[150px]">
                    <ul className="">
                      <li className="text-secondary">
                        <Link
                          href=""
                          className="text-[13px] px-2.5 py-2.5 block"
                        >
                          Love and Engagement
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="text-secondary uppercase tracking-wider relative group">
                  <Link
                    href={"/"}
                    className="flex gap-1 items-center text-[13px]"
                  >
                    Gifts{" "}
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-all" />
                  </Link>
                  <div className="opacity-[0] group-hover:opacity-100 transition-all group-hover:z-10 absolute top-[calc(100%+10px)] left-0 -z-10 py-1 bg-white [box-shadow:0px_2px_15px_0px_#7A7A7A1A] rounded-sm border border-border min-w-fit max-w-[150px]">
                    <ul className="">
                      <li className="text-secondary">
                        <Link
                          href=""
                          className="text-[13px] px-2.5 py-2.5 block"
                        >
                          Gifts
                        </Link>
                      </li>
                      <li className="text-secondary">
                        <Link
                          href=""
                          className="text-[13px] px-2.5 py-2.5 block"
                        >
                          Gifts
                        </Link>
                      </li>
                      <li className="text-secondary">
                        <Link
                          href=""
                          className="text-[13px] px-2.5 py-2.5 block"
                        >
                          Gifts
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="text-secondary uppercase tracking-wider text-[13px]">
                  <Link href={"/"}>Custom Jewelry</Link>
                </li>
                <li className="text-secondary uppercase tracking-wider text-[13px]">
                  <Link href={"/"}>About</Link>
                </li>
                <li className="text-secondary uppercase tracking-wider text-[13px]">
                  <Link href={"/"}>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="py-5 border-l border-border pl-10">
              <Button
                variant={"ghost"}
                className="hover:bg-transparent cursor-pointer"
              >
                <Search className="!w-6 !h-6" />
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </nav>
    </>
  );
}
