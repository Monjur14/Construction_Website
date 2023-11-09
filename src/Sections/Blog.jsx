import Heading from "../Components/Heading"

const Blog = () => {
  return (
    <div className="container">
      <div className="section__padding">
        <div>
            <Heading title={"Latest Blogs"} para={"Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary."}/>
        </div>
        <div className="flex flex-col items-center lg:flex-row justify-center gap-10 mt-16 ">
            <div className="w-[330px] h-[330px] xsm:w-[380px] xsm:h-[380px] md:w-[450px] md:h-[450px] img1 flex justify-end items-center rounded-xl md:p-10 flex-col ">
                <h1 className="text-2xl text-white font-bold">Unleash Your Creativity</h1>
                <p className="text-base px-8 text-center md:px-0 md:text-lg text-white mt-2 mb-8">Nine for Mortal Men, doomed to die, One for</p>
                <button className='mb-10 md:mb-0 border py-3 px-8 md:py-4 md:px-10 md:text-lg text-white font-bold rounded-tl-[1.8rem] rounded-br-[1.8rem]'>Read More</button>
            </div>
            <div className="w-[330px] h-[330px] xsm:w-[380px] xsm:h-[380px] md:w-[450px] md:h-[450px] img2 flex justify-end items-center rounded-xl md:p-10 flex-col ">
                <h1 className="text-2xl text-white font-bold">Unleash Your Creativity</h1>
                <p className="text-base px-8 text-center md:px-0 md:text-lg text-white mt-2 mb-8">Nine for Mortal Men, doomed to die, One for</p>
                <button className='mb-10 md:mb-0 border py-3 px-8 md:py-4 md:px-10 md:text-lg text-white font-bold rounded-tl-[1.8rem] rounded-br-[1.8rem]'>Read More</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
