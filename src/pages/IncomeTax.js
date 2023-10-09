import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Banner from "../assets/images/e-tax.jpg";
import { TfiDownload } from "react-icons/tfi";
import { IncomeTaxData } from "@/content/data";

export default function IncomeTax() {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/*-----------------------Header---------------------*/}

      <Header />

      {/*-----------------------Banner---------------------*/}

      <section>
        <Image src={Banner} alt="..." className="h-96 w-full" />
      </section>

      <section className="py-10">
        <div className="relative">
          {IncomeTaxData.map((item, key) => (
            <div key={key} className="px-56">
              <h1 className=" text-[44px] font-semibold text-subColor mb-10">
                {item.heading}
              </h1>
              <h1 className=" text-[44px] font-medium text-mainColor nb-6 ">
                {item.heading1}
              </h1>
              {/* <button>button</button> */}
              <h1 className=" text-[44px] font-medium text-mainColor mb-6">
                {item.heading2}
              </h1>

              <div className=" py-3">
                {/* <h1 className="text-2xl font-medium mb-2">{item.title}</h1> */}
                <p className=" text-xl leading-8 font-light mb-4">
                  <span className="text-xl font-medium text-black">
                    {item.title}
                  </span>
                  {item.description}{" "}
                </p>
                <p className="  text-xl leading-8 font-light mb-4">
                  {item.description1}{" "}
                </p>
                <p className="  text-xl leading-8 font-light">
                  {item.description2}{" "}
                </p>

                <p className=" text-xl leading-8 font-light">{item.point}</p>
                <p className=" text-xl leading-8 font-light">{item.point1}</p>
                <p className=" text-xl leading-8 font-light">{item.point2}</p>

                <p className=" text-xl leading-8 font-light">{item.point3} </p>
                <p className="text-xl leading-8 font-light mb-4">
                  {item.line}{" "}
                </p>
              </div>
            </div>
          ))}

          <div className="absolute flex flex-col w-[300px] mr-32 gap-6 border-t border-black right-0 text-black top-5">
            <a className="  text-base tracking-wide font-medium  pt-6" href="">
              DOWNLOADS{" "}
            </a>
            <div className="flex items-center gap-2 hover:underline font-light text-[#2251ff] cursor-pointer">
              <TfiDownload size={14} className="" />
              <h1 className="text-[16px] ">Article (5 pages)</h1>
            </div>
          </div>
        </div>
      </section>

      {/*-----------------------Footer---------------------*/}

      <Footer />
    </>
  );
}