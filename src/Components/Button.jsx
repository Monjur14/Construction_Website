const Button = ({title}) => {
  return (
    <button className='bg-blue hover:bg-white hover:text-blue border hover:border duration-300 py-3 px-8 md:py-4 md:px-10 md:text-lg text-white font-bold rounded-tl-[1.8rem] rounded-br-[1.8rem]'>{title}</button>
  )
}

export default Button
