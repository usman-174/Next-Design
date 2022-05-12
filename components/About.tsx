import React from "react";
import Divider from "./Divider";
import Image from "next/image";

const About = () => {
  return (
    <>
      <Divider />
      <div className=" py-2 bg-white ">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="relative bg-lightGreen w-5/6 h-52 md:w-[45%] md:h-96">
            <div className="absolute -bottom-5 left-5 w-full h-[90%] ">
              <Image src="/hero1.webp" layout="fill" alt="hero" />
            </div>
          </div>
          <div className="text-xl max-w-lg  text-center mt-4 mx-2">
            <h1
              className="my-4 lg:text-3xl text-2xl font-bold"
              style={{ fontFamily: "Poppins" }}
            >
              About Us
            </h1>
            <p className="text-lg md:text-2xl my-4 text-[#504c4c]  md:my-3">
              Where we are from, is where we give back.
            </p>
            <p className="text-md md:text-lg  mt-2  text-[#767676]  md:my-2">
              Our mission is to create a recognizable and trusted brand, built
              by providing a diverse and quality product offering. We will
              create trust through product education and consistency. The
              Heritage Club aims to create a streamlined retail experience
              in-person and online. <br />
              <br />
              Ultimately, we hope to leverage the work we do and use it to
              enhance the surrounding community. <br />
            </p>
            <p className="text-md md:text-lg  mt-2  text-[#767676]  md:my-2">
              The Heritage Club is currently a Boston and Massachusetts
              provisionally licensed Adult Use Cannabis Dispensary located in
              Charlestown, MA. The Heritage Club was the first dispensary to
              receive a license in Charlestown. The Heritage Club is Black &
              Woman Owned and operated. The company is also a Social Equity
              business, certified by the Cannabis Control Commission (CCC) and
              the Boston Cannabis Board’s (BCB) equity programs. These programs
              were designed to help facilitate full participation by those
              affected by the war on drugs. We aim to raise the bar and do
              things differently.{" "}
            </p>

            <p className="text-lg md:text-2xl my-6 text-[#504c4c]  md:my-3">
              POSITIVE IMPACT PLAN:
            </p>

            <p className="text-md md:text-lg  mt-2  text-[#767676]  md:my-2">
              The Heritage Club plans to launch The Boston Heritage Fund (BHF)
              in 2022. The purpose of the fund is to create a home buying
              assistance program. The program’s focus is to help communities
              affected by the War on Drugs begin to build wealth. BHF will host
              financial planning, credit repair, and home buying seminars. The
              Heritage Club pledges to cover the closing costs for 10 qualifying
              residents per year, up to a total of $150,000/year.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
