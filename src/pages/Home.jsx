import React from "react";

import BgGrid from "../../utils/bgGrid";
import Button from "../../utils/Button";
import Card from "../../utils/Card";
import GridImage from "../../utils/GridImage";
import HeroSectionGrid from "../../utils/HeroSectionGrid";
import AlumniCard from "../../utils/AlumniCard";
import GeometryShapes from "../../utils/GeaometryShapes";

const Home = () => {
  return (
    <div className="p-0 m-0">
      <div className="p-0 m-0">
        <BgGrid>
          <div className="min-h-screen flex flex-col items-center justify-center p-8">
            <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 ">
                {/* Main Heading */}
                <div className="space-y-4">
                  <h1 className="md:text-[36px]  text-5xl lg:text-4xl font-black text-gray-900 leading-tight">
                    <span className="font-black relative pt-5 pl-5">
                      <GeometryShapes
                        shape="star"
                        size="w-8 h-8"
                        color="text-yellow-400"
                        className="absolute top-0 left-0"
                      />
                      Shaping Tomorrow with an
                    </span>
                    <br />
                    <span className="text-black font-black text-6xl pl-5">
                      Edge in
                    </span>
                    <br />
                    <span className="text-black font-black text-6xl pl-5">
                      Education
                    </span>
                  </h1>
                </div>

                {/* Subheading */}
                <div className="space-y-2 pl-5">
                  <p className="text-xl text-gray-700">
                    Working backwards from{" "}
                    <span className="text-blue-600 font-semibold">
                      industry <br />
                      shortages
                    </span>
                    ,{" "}
                    <span className="text-blue-600 font-semibold">
                      skill gaps
                    </span>{" "}
                    and opportunities to
                    <br />{" "}
                    <span className="relative pr-5">
                      set talent up for success
                      <GeometryShapes
                        shape="star"
                        size="w-8 h-8"
                        color="text-yellow-400"
                        className="absolute top-4 right-10"
                      />
                    </span>
                  </p>

                  {/* Decorative star */}
                  <div className="flex justify-end">
                    <svg
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="flex items-center space-x-4 pl-5">
                  <Button variant="primary">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                    <span>Learn More</span>
                  </Button>
                </div>
              </div>

              {/* Right Content - Hero Images */}
              <div className="relative">
                <HeroSectionGrid />
              </div>
            </div>
            <div className="w-full max-w-7xl mt-16 justify-center flex flex-col gap-10 items-center py-20">
              <h2 className="text-4xl underline decoration-orange-400 underline-offset-8 decoration-4">
                The Problem Statements
              </h2>
              <div className="flex gap-8">
                <Card title="Accounting" />
                <Card title="Healthcare" />
                <Card title="Business" />
                <Card title="Technology" />
              </div>
            </div>
          </div>
        </BgGrid>

        <div className="bg-gray-900  inset-0 rounded-tl-4xl rounded-tr-4xl flex flex-col item-center justify-center w-full">
          <div className="flex items-center justify-center py-16">
            <h3 className="text-4xl text-white underline decoration-orange-400 underline-offset-8 decoration-4">
              Solution Showcase
            </h3>
          </div>

          <div className="flex justify-center items-center pb-16 px-8 gap-52">
            <div className="rounded-full w-96 h-96 overflow-clip backdrop-blur-[100px]">
              <GridImage imageSrc={"./assets/goalie.jpg"} />
            </div>
            <div className="text-white">
              <p className="text-xl pb-2">
                #1 Working backwards from talent shortages
              </p>
              <p className="text-2xl pb-4">
                <span className="text-blue-400">
                  Solving America's talent shortages
                </span>
                <br /> by leveraging the power of STEM.
              </p>
              <p className="text-2xl pb-10">
                Used the Tech playbook to create pathways for <br /> Indian/
                International talent to work in the US.
              </p>
              <div className="flex gap-8">
                <Button
                  text={"Accountants"}
                  showArrow={false}
                  btnClassName="rounded-tl-2xl text-center rounded-tr-2xl rounded-br-2xl bg-transparent border-2 border-white w-40"
                />
                <Button
                  text={"Nurses"}
                  showArrow={false}
                  btnClassName="rounded-tl-2xl text-center rounded-tr-2xl rounded-br-2xl bg-transparent border-2 border-white w-40"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center pb-16 px-8 gap-52">
            <div className="text-white">
              <p className="text-xl pb-2">
                #1 Working backwards from talent shortages
              </p>
              <p className="text-2xl pb-4">
                <span className="text-blue-400">
                  Solving America's talent shortages
                </span>
                <br /> by leveraging the power of STEM.
              </p>
              <p className="text-2xl pb-10">
                Used the Tech playbook to create pathways for <br /> Indian/
                International talent to work in the US.
              </p>
              <div className="flex gap-8">
                <Button
                  text={"Accountants"}
                  showArrow={false}
                  btnClassName="rounded-tl-2xl text-center rounded-tr-2xl rounded-br-2xl bg-transparent border-2 border-white w-40"
                />
                <Button
                  text={"Nurses"}
                  showArrow={false}
                  btnClassName="rounded-tl-2xl text-center rounded-tr-2xl rounded-br-2xl bg-transparent border-2 border-white w-40"
                />
              </div>
            </div>
            <div className="rounded-full w-96 h-96 overflow-clip backdrop-blur-[100px]">
              <GridImage imageSrc={"./assets/goalie.jpg"} />
            </div>
          </div>

          <div className="flex justify-center items-center pb-16 px-8 gap-52">
            <div className="rounded-full w-96 h-96 overflow-clip backdrop-blur-[100px]">
              <GridImage imageSrc={"./assets/goalie.jpg"} />
            </div>
            <div className="text-white">
              <p className="text-xl pb-2">
                #1 Working backwards from talent shortages
              </p>
              <p className="text-2xl pb-4">
                <span className="text-blue-400">
                  Solving America's talent shortages
                </span>
                <br /> by leveraging the power of STEM.
              </p>
              <p className="text-2xl pb-10">
                Used the Tech playbook to create pathways for <br /> Indian/
                International talent to work in the US.
              </p>
              <div className="flex gap-8">
                <Button
                  text={"Accountants"}
                  showArrow={false}
                  btnClassName="rounded-tl-2xl text-center rounded-tr-2xl rounded-br-2xl bg-transparent border-2 border-white w-40"
                />
                <Button
                  text={"Nurses"}
                  showArrow={false}
                  btnClassName="rounded-tl-2xl text-center rounded-tr-2xl rounded-br-2xl bg-transparent border-2 border-white w-40"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center pb-16 px-8 gap-52">
            <div className="text-white">
              <p className="text-xl pb-2">
                #1 Working backwards from talent shortages
              </p>
              <p className="text-2xl pb-4">
                <span className="text-blue-400">
                  Solving America's talent shortages
                </span>
                <br /> by leveraging the power of STEM.
              </p>
              <p className="text-2xl pb-10">
                Used the Tech playbook to create pathways for <br /> Indian/
                International talent to work in the US.
              </p>
              <div className="flex gap-8">
                <Button
                  text={"Accountants"}
                  showArrow={false}
                  btnClassName="rounded-tl-2xl text-center rounded-tr-2xl rounded-br-2xl bg-transparent border-2 border-white w-40"
                />
                <Button
                  text={"Nurses"}
                  showArrow={false}
                  btnClassName="rounded-tl-2xl text-center rounded-tr-2xl rounded-br-2xl bg-transparent border-2 border-white w-40"
                />
              </div>
            </div>
            <div className="rounded-full w-96 h-96 overflow-clip backdrop-blur-[100px]">
              <GridImage imageSrc={"./assets/goalie.jpg"} />
            </div>
          </div>

          <div className="flex justify-center items-center pb-16 px-8 gap-52">
            <div className="rounded-full w-96 h-96 overflow-clip backdrop-blur-[100px]">
              <GridImage imageSrc={"./assets/goalie.jpg"} />
            </div>
            <div className="text-white">
              <p className="text-xl pb-2">
                #1 Working backwards from talent shortages
              </p>
              <p className="text-2xl pb-4">
                <span className="text-blue-400">
                  Solving America's talent shortages
                </span>
                <br /> by leveraging the power of STEM.
              </p>
              <p className="text-2xl pb-10">
                Used the Tech playbook to create pathways for <br /> Indian/
                International talent to work in the US.
              </p>
              <div className="flex gap-8">
                <Button
                  text={"Accountants"}
                  showArrow={false}
                  btnClassName="rounded-tl-2xl text-center rounded-tr-2xl rounded-br-2xl bg-transparent border-2 border-white w-40"
                />
                <Button
                  text={"Nurses"}
                  showArrow={false}
                  btnClassName="rounded-tl-2xl text-center rounded-tr-2xl rounded-br-2xl bg-transparent border-2 border-white w-40"
                />
              </div>
            </div>
          </div>
        </div>
        <BgGrid></BgGrid>
      </div>
    </div>
  );
};

export default Home;
