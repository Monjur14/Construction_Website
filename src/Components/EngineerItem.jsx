import {AiFillStar} from "react-icons/ai"
import {BsThreeDotsVertical} from "react-icons/bs"


const EngineerItem = ({img, name, address, num, email}) => {
  return (
    <div className="min-w-[20rem] mb-6 flex flex-col items-center bg-white p-6 box_shadow rounded-md">
                <div className="flex justify-between w-full">
                  <AiFillStar color="#F0BB00" size={25}/>
                  <BsThreeDotsVertical size={25}/>
                </div>
                <div className="mt-3">
                  <img src={img} alt="" />
                </div>
                <div className="mt-3 text-center">
                  <h3 className="font-bold text-xl">{name}</h3>
                  <p>{address}</p>
                </div>
                <div className="text-center mt-5 mb-4">
                  <p>{num}</p>
                  <p>{email}</p>
                </div>
              </div>
  )
}

export default EngineerItem
