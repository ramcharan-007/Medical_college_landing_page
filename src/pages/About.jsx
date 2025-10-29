import React from "react";
import BgGrid from "../../utils/bgGrid";
import Button from "../../utils/Button";
import Card from "../../utils/Card";
import StatsCard from "../../utils/StatsCard";
import ValuesCard from "../../utils/ValuesCard";
import GeometryShapes from "../../utils/GeaometryShapes";

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <GeometryShapes shape="sparkles" className="opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                  <span className="text-blue-600">Inspiring & Enabling</span>
                  <br />
                  <span>Talent to Achieve Their</span>
                  <br />
                  <span>Highest Potential</span>
                </h1>
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  text="Learn More"
                  variant="primary"
                  className="transform hover:scale-105"
                />
              </div>
            </div>

            {/* Right Content - Hero Images Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Top Row */}
                <div className="relative">
                  <div className="bg-blue-400 rounded-2xl p-4 h-48 flex items-center justify-center relative overflow-hidden">
                    <GeometryShapes
                      shape="triangle"
                      size="w-8 h-8"
                      color="text-blue-600"
                      className="absolute top-4 right-4"
                    />
                    <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
                  </div>
                </div>

                <div className="relative mt-8">
                  <div className="bg-yellow-400 rounded-2xl p-4 h-48 flex items-center justify-center relative overflow-hidden">
                    <GeometryShapes
                      shape="triangle"
                      size="w-8 h-8"
                      color="text-yellow-600"
                      className="absolute top-4 left-4"
                    />
                    <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="relative -mt-8">
                  <div className="bg-green-400 rounded-2xl p-4 h-48 flex items-center justify-center relative overflow-hidden">
                    <GeometryShapes
                      shape="triangle"
                      size="w-8 h-8"
                      color="text-green-600"
                      className="absolute bottom-4 left-4"
                    />
                    <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-purple-400 rounded-2xl p-4 h-48 flex items-center justify-center relative overflow-hidden">
                    <GeometryShapes
                      shape="triangle"
                      size="w-8 h-8"
                      color="text-purple-600"
                      className="absolute top-4 right-4"
                    />
                    <div className="w-24 h-24 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Work Backwards from Industry Shortages & Skill Gaps to
              <br />
              <span className="border-b-4 border-yellow-400">
                Set Talent Up for Success
              </span>
            </h2>
          </div>

          {/* Industry Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card
              title="Accounting"
              description=""
              showButton={false}
              className="bg-white text-gray-900 text-center"
              icon={
                <div className="relative w-full h-32 bg-blue-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  <GeometryShapes
                    shape="triangle"
                    size="w-6 h-6"
                    color="text-blue-600"
                    className="absolute top-2 right-2"
                  />
                  <div className="w-16 h-16 bg-gray-400 rounded-full"></div>
                </div>
              }
            />

            <Card
              title="Healthcare"
              description=""
              showButton={false}
              className="bg-white text-gray-900 text-center"
              icon={
                <div className="relative w-full h-32 bg-green-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  <GeometryShapes
                    shape="triangle"
                    size="w-6 h-6"
                    color="text-green-600"
                    className="absolute bottom-2 left-2"
                  />
                  <div className="w-16 h-16 bg-gray-400 rounded-full"></div>
                </div>
              }
            />

            <Card
              title="Business"
              description=""
              showButton={false}
              className="bg-white text-gray-900 text-center"
              icon={
                <div className="relative w-full h-32 bg-yellow-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  <GeometryShapes
                    shape="triangle"
                    size="w-6 h-6"
                    color="text-yellow-600"
                    className="absolute top-2 left-2"
                  />
                  <div className="w-16 h-16 bg-gray-400 rounded-full"></div>
                </div>
              }
            />

            <Card
              title="Technology"
              description=""
              showButton={false}
              className="bg-white text-gray-900 text-center"
              icon={
                <div className="relative w-full h-32 bg-pink-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                  <GeometryShapes
                    shape="triangle"
                    size="w-6 h-6"
                    color="text-pink-600"
                    className="absolute bottom-2 right-2"
                  />
                  <div className="w-16 h-16 bg-gray-400 rounded-full"></div>
                </div>
              }
            />
          </div>
        </div>
      </section>

      {/* HERO Values Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-blue-600">H</span>
              <span className="text-red-500">E</span>
              <span className="text-green-500">R</span>
              <span className="text-teal-500">O</span>
              <span className="text-gray-900"> Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValuesCard
              icon="🏋️"
              title="Hustle & Hard Work"
              description="We embrace relentless dedication to our mission, always going the extra mile. This hustle culture is not just about putting in the hours; it's also about putting our heart into what we do."
              iconColor="text-blue-600"
              iconBg="bg-blue-100"
            />

            <ValuesCard
              icon="❤️"
              title="Emotional Intelligence"
              description="We believe true strength lies in understanding and compassion. By prioritizing emotional intelligence, we foster a collaborative team culture and enhance relationships with clients, partners, and stakeholders."
              iconColor="text-red-500"
              iconBg="bg-red-100"
            />

            <ValuesCard
              icon="✨"
              title="Resilience to Change"
              description="Change is constant, and we thrive by adapting swiftly, evolving through innovative business models, and integrating AI and technology to transform challenges into opportunities."
              iconColor="text-yellow-500"
              iconBg="bg-yellow-100"
            />

            <ValuesCard
              icon="⭐"
              title="Ownership Mindset"
              description="We think and act like owners, taking accountability for outcomes. Our commitment to making an impact is reflected in our drive to lead, excel, and serve."
              iconColor="text-teal-500"
              iconBg="bg-teal-100"
            />
          </div>
        </div>
      </section>

      {/* About Miles Education Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 text-gray-900">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-full h-64 lg:h-80 bg-gray-300 rounded-2xl mb-6 flex items-center justify-center">
                  <div className="text-gray-600">
                    Miles Education Team Image
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold">
                  <span className="border-b-4 border-yellow-400">
                    About Miles Education
                  </span>
                </h2>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    The global talent landscape has critical gaps, but at Miles
                    Education, we're not just filling these voids—we're building
                    pathways to success. Driven by our mission to work backward
                    from industry shortages, skill gaps, and opportunities, we
                    empower businesses and enable talent by combining academic
                    learning with hands-on experience through our unique ED-WORK
                    Pedagogy.
                  </p>

                  <p>
                    This approach equips students with practical skills and
                    real-world insights as we address shortages across
                    accounting, healthcare, business, and technology.
                  </p>

                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Outcomes First:
                    </h3>
                    <p>
                      We don't believe in cookie-cutter education. We start by
                      analyzing industry needs, then meticulously craft
                      transformative learning pathways that prime talent for
                      success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              <span className="border-b-4 border-yellow-400">
                Miles is More Than Education; It's a Revolution
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatsCard number="70k +" label="Alumni" color="text-blue-600" />

            <StatsCard
              number="700 +"
              label="Professionals"
              color="text-teal-500"
            />

            <StatsCard
              number="600 +"
              label="Corporates"
              color="text-yellow-500"
            />

            <StatsCard
              number="100 +"
              label="Universities"
              color="text-red-500"
            />
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  Bootstrapped and Ballistic
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  We're a self-made success story, focusing steadfastly on
                  fundamentals and outcomes rather than external fundraising.
                  Growing at an astonishing CAGR of 70%+ and distinguished as
                  one of the few profitable Ed-Tech companies in India, we are
                  poised for substantial growth.
                </p>
              </div>

              <div>
                <div className="w-full h-64 bg-gray-300 rounded-2xl flex items-center justify-center">
                  <div className="text-gray-600">
                    Miles Education Campus Images
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
