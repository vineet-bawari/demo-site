import React from "react";
import { Inter } from "next/font/google";
import Head from "next/head";
import Home from "./home";
const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <>
      <Head>
        <title>ERS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Home />
    </>
  );
}