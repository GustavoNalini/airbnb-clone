import Image from "next/image"

function MediumCard ({img, title}) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 easy-out"> 
      <div className="relative h-80 w-80">
        <Image 
          src={img}
          layout='fill'
          className="rounded-xl"
          alt='Live Anywhere'
          />
      </div>
      <h3 className="text-xl mt-3">{title}</h3>
    </div>
  )
}

export default MediumCard