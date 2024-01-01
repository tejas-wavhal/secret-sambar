import AnimatedBreakline from "@/components/client/AnimatedBreakline/AnimatedBreakline";
import TextMaskAnimation from "@/components/client/Animations/TextMaskAnimation";
import RoundedButton from "@/components/client/RoundedButton/RoundedButton";
// import { useEffect } from "react";
import { ImSpoonKnife } from "react-icons/im";
import { BiSolidCoffee, BiSolidBowlHot } from "react-icons/bi"


export default function Home() {

  const welcomeText = "Welcome to Secret Sambar, where authentic South Indian flavors come to life. Explore a culinary journey of tradition and taste, where each dish reflects our commitment to quality and bold, unforgettable experiences. Savor the essence of South India at Secret Sambar."

  const HeroPhrases = [
    "Savor the authentic taste",
    "of South Indian delights",
    "at Secret Sambar."
  ];

  // useEffect(() => {
  //   (
  //     async () => {
  //       const LocomotiveScroll = (await import('locomotive-scroll')).default
  //       const locomotiveScroll = new LocomotiveScroll();
  //     }
  //   )()
  // }, [])

  return (
    <>
      <img src="/pic4.avif" className="fixed -top-2 overflow-hidden w-screen -z-10 h-[105vh] object-cover object-center" alt="" />

      <main className="min-h-screen relative">

        {/* Hero Section  */}
        <section className="w-full">
          <div className="flex flex-col lg:flex-row justify-center items-center bg-[url('/bgWood.jpg')] relative overflow-hidden bg-cover bg-center">
          <div className="bg-black/40 absolute h-full w-full top-0" />
            <div className="relative z-20 pb-10 lg:pb-0 lg:left-14 lg:w-[80vw]">
              <div className="my-10 lg:my-0">
                <TextMaskAnimation phrases={HeroPhrases} />
              </div>
              <div className="relative flex mx-auto justify-center items-center lg:mt-8 lg:ml-0">
                <RoundedButton path="/menu">
                  <p>Check Menu</p>
                </RoundedButton>
              </div>
            </div>
            {/* <div className="bg-mainGray h-[30rem] w-32 relative -right-8 -skew-x-6 hidden lg:block" /> */}
            <img className="relative z-20 h-[30rem] w-[50rem] lg:w-[40vw] object-cover object-center border-t-4 border-t-mainOrange-200 md:border-t-0 lg:border-l-4 border-l-mainOrange-200" src="./pic9.webp" alt="" />
          </div>
        </section>

        {/* Welcome Section  */}
        <section
          className="bg-mainOrange-200"
        >
          <div className="relative z-10 font-caveat font-bold text-center pt-8">
            <h1 className="text-5xl lg:text-7xl text-orange-600 leading-9" >Welcome to Secret Sambar</h1>
            <p className="text-2xl mt-3 lg:text-4xl text-mainGreen">South Indian Cuisine</p>
          </div>
          <AnimatedBreakline />
          <div className="text-black relative -top-20">
            {/* <GradientTextAnimation className="text-center" paragraph={welcomeText} /> */}
            <p className="font-semibold text-2xl lg:text-5xl mx-5 text-center lg:text-justify lg:mx-36">{welcomeText}</p>
          </div>

          <div className="flex justify-center relative -top-10">
            <RoundedButton defaultTextColor="black" backgroundColor={"#2E7037"} borderColor="#2E7037" path={"/mission-and-vision"}>
              <p>More About Us</p>
            </RoundedButton>
          </div>

        </section>

        {/* Banner Section  */}
        <section className="bg-[url('/bgWood.jpg')] py-20 px-14 relative overflow-hidden">
          
          <div className="bg-black/40 absolute h-full w-full top-0" />

          <div className="relative z-50 grid grid-cols-1 gap-y-14 lg:gap-y-0 lg:grid-cols-3 lg:gap-x-10">

            <div className="flex flex-col items-center gap-y-2">
              <ImSpoonKnife className="text-orange-500 text-5xl" />
              <h2 className="text-mainOrange-200 text-2xl font-montserrat font-semibold tracking-wider text-center">BREAKFAST</h2>
              <span className="text-mainOrange-200/90 font-caveat text-3xl font-medium text-center">Awaken your senses with our irresistible breakfast choices.</span>
            </div>

            <div className="flex flex-col items-center gap-y-2">
              <BiSolidBowlHot className="text-orange-500 text-5xl" />
              <h2 className="text-mainOrange-200 text-2xl font-montserrat font-semibold tracking-wider text-center">LUNCH</h2>
              <span className="text-mainOrange-200/90 font-caveat text-3xl font-medium text-center">Indulge in flavors that redefine the art of lunchtime feasting.</span>
            </div>

            <div className="flex flex-col items-center gap-y-2">
              <BiSolidCoffee className="text-orange-500 text-5xl" />
              <h2 className="text-mainOrange-200 text-2xl font-montserrat font-semibold tracking-wider text-center">DRINKS AND SWEETS</h2>
              <span className="text-mainOrange-200/90 font-caveat text-3xl font-medium text-center">Quench your thirst with our refreshing selection of drinks.</span>
            </div>

          </div>

          <div className="flex justify-center relative mt-14 lg:mt-8">
            <RoundedButton path={"/menu"}>
              <p>Explore our Menu</p>
            </RoundedButton>
          </div>

        </section>


        {/* Bg image section*/}
        <div className="h-[35rem]" />


        {/* Healthy Info Section  */}
        <section className="bg-mainGray bg-cover bg-center lg:p-10 relative text-mainOrange-200 flex items-center gap-8 lg:px-40 py-24 lg:py-28 flex-col xl:flex-row">
          <div className="space-y-5">
            <h2 className="font-bold text-4xl text-center uppercase mx-5">Healthy South Indian Fusion</h2>
            <p className="opacity-90 text-2xl text-center mx-5 lg:mx-8">Healthy indulgence takes center stage at Secret Sambar, where our fusion of South Indian cuisine and health-conscious offerings redefines the dining experience. From heart-healthy delights to gluten-free alternatives, each dish harmonizes tradition and nutrition. Discover the joy of wholesome indulgence, proving that at Secret Sambar, healthy dining is as delightful as it is delicious.</p>
          </div>
          <img src="/pic9.webp" className="h-[22rem] max-w-full px-5 object-cover object-center lg:px-0" alt="" />
        </section>

        {/* Other Info Section  */}
        <section className="bg-mainOrange-200 bg-cover bg-center lg:p-10 relative flex items-center gap-8 lg:px-40 py-24 lg:py-28 flex-col lg:flex-row-reverse">
          <div className="space-y-5">
            <h2 className="font-bold text-4xl text-center uppercase mx-5">South Spice Delights: Culinary Magic</h2>
            <p className="opacity-90 text-2xl text-center mx-5 lg:mx-8">Savor culinary magic at South Spice Delights, where each dish captures the essence of South Indian flavors. From aromatic spices to authentic recipes, our menu is a delightful journey into the heart of South India.</p>
          </div>
          <img src="/pic5.webp" className="h-[27rem] max-w-full px-5 object-cover object-center lg:px-0" alt="" />
        </section>


      </main>
    </>
  )
}
