

const VideoTitle = ({title , overview}) => {
  return (
    <div className=" w-screen aspect-video pt-[25%] px-14 absolute text-white bg-gradient-to-r from-black">
        <h1 className="font-extrabold text-4xl ">{title}</h1>
        <p className="py-6 text-lg w-2/4">{overview}</p>
        <div className="">
            <button className="bg-white text-black border border-black p-3 rounded-md hover:bg-gray-400 ">▶️Play </button>
            <button className="mx-3 bg-gray-400 text-black border border-black p-3 rounded-md hover:bg-white ">MoreInfo</button>
        </div>
    </div>
  )
}

export default VideoTitle;