
const Heading = ({title, para}) => {
  return (
    <>
    <h1 className="font-bold text-center text-3xl xsm:text-4xl md:text-[3rem]">{title}</h1>
    <p className="text-center mt-4 xsm:mt-5 xsm:text-lg md:text-xl md:mt-7">{para}</p>
    </>
  )
}

export default Heading
