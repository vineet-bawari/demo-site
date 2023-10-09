import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {NewsCard} from "@/components/media";
import Banner from "../assets/images/news-banner.jpg"
import Newses from "../assets/images/news.jpg"

export default function News() {
  const newses = [
    {
      img: Newses,
      url: "/NewsDetails",
      title: "Family Safari Vacations",
      date: "April 21, 2023",
      description: "Outgoing Eswatini Electricity Company (EEC) Board Chairman Dr Phil Mnisi has urged his successor P to prioritise ensuring that Eswatini has sufficient power supply...",
    },
    {
      img: Newses,
      url: "/NewsDetails",
      title: "Travelagent India",
      date: "April 22, 2023",
      description: "Outgoing Eswatini Electricity Company (EEC) Board Chairman Dr Phil Mnisi has urged his successor P to prioritise ensuring that Eswatini has sufficient power supply...",
    },
    {
      img: Newses,
      url: "/NewsDetails",
      title: "Perfect Scrambled Eggs",
      date: "April 23, 2023",
      description: "Outgoing Eswatini Electricity Company (EEC) Board Chairman Dr Phil Mnisi has urged his successor P to prioritise ensuring that Eswatini has sufficient power supply...",
    },
    {
      img: Newses,
      url: "/NewsDetails",
      title: "Famous Names in Barbecue",
      date: "April 24, 2023",
      description: "Outgoing Eswatini Electricity Company (EEC) Board Chairman Dr Phil Mnisi has urged his successor P to prioritise ensuring that Eswatini has sufficient power supply...",
    }
  ]

  return (
    <>
      <Head>
        <title>Media</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/*-----------------------Header---------------------*/}

      <Header />

      {/*-----------------------Banner---------------------*/}

      <section>
        <Image src={Banner} alt="..." className="h-96 w-full" />
      </section>

      {/*------------------------News----------------------*/}

      <section className="py-16 px-14">
        <div className="grid grid-cols-2 gap-5">
          {newses.map((item, key) => (
          <NewsCard 
            key={key}
            img={item.img}
            url={item.url}
            title={item.title}
            date={item.date}
            description={item.description}
          />  
          ))}
        </div>
      </section>

      {/*-----------------------Footer---------------------*/}

      <Footer />
    </>
  );
}