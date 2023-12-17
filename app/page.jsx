"use client"
import AnimatedBreakline from "@/components/client/AnimatedBreakline/AnimatedBreakline";
import GradientTextAnimation from "@/components/client/Animations/GradientTextAnimation";
import TextMaskAnimation from "@/components/client/Animations/TextMaskAnimation";
import RoundedButton from "@/components/client/RoundedButton/RoundedButton";

export default function Home() {

  const welcomeText = "Welcome to Secret Sambar, where authentic South Indian flavors come to life. Explore a culinary journey of tradition and taste, where each dish reflects our commitment to quality and bold, unforgettable experiences. Savor the essence of South India at Secret Sambar."

  return (
    <main className="min-h-screen relative">

      {/* Hero Section  */}
      <section className="w-full">
        <div className="flex justify-center items-center bg-mainGray">
          <div className="relative z-20 left-14 w-[80vw]">
            <TextMaskAnimation />
            <div className="relative mt-8 ml-28">
              <RoundedButton path="/menu">
                <p>Check Menu</p>
              </RoundedButton>
            </div>
          </div>
          <div className="bg-mainGray h-[30rem] w-32 relative -right-8 -skew-x-6" />
          <img className="h-[30rem] w-[50rem] object-cover object-center" src="./pic5.webp" alt="" />
        </div>
      </section>

      {/* Welcome Section  */}
      <section
        className="bg-mainOrange"
      >
        <div className="relative z-10 font-caveat font-bold text-center pt-8">
          <h1 className="text-7xl text-orange-600" >Welcome to Secret Sambar</h1>
          <p className="text-4xl text-mainGreen">South Indian Cuisine</p>
        </div>
        <AnimatedBreakline />
        <div className="text-black text-5xl relative -top-28">
          <GradientTextAnimation className="text-center" paragraph={welcomeText} />
        </div>

        <div className="flex justify-center relative -top-36">
          <RoundedButton path={"/mission-and-vision"}>
            <p>More About Us</p>
          </RoundedButton>
        </div>

      </section>

    </main>
  )
}
