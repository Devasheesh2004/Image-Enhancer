import React, { useEffect } from 'react'

const upload = ({image,setloading,setpreImage,setenhancedImage}) => {

  useEffect(() => {
    if(image){
      setloading(true)
    }
  }, [])
  
  const handleDelete=()=>{
    setpreImage(null)
    setenhancedImage(null)
  }


  return (
    <div className='relative flex flex-col justify-between items-center rounded-lg bg-white h-full w-2/4 shadow-xl shadow-bg-slate-700'>
      <div className='relative w-full bg-stone-500 rounded-t-lg h-11 flex justify-center items-center text-white font-bold'>
        <div>
          Uploaded Image
        </div>
      <span className='absolute right-[0] h-3/4 w-[3vw]' onClick={handleDelete}>
        <lord-icon
          className="hover:cursor-pointer h-full w-full"
          src="https://cdn.lordicon.com/skkahier.json"
          trigger="hover"
        >

        </lord-icon>
      </span>
      </div>
      {image?(
        <img src={image} alt="" className='w-full h-full'/>
      ):(
      <p className='relative bottom-[10%]' >No photo uploaded</p>
      )
      }
    </div>
  )
}

export default upload
