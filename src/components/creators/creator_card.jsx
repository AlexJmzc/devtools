import React from 'react';

const CreatorCard = ({creator}) => {

  const redirect = (url) => {
    window.location.href = url;
  }

  return (
    <div className='bg-tertiary flex flex-col items-center p-3 w-80 h-fit rounded-3xl my-6 gap-y-4 shadow-card'>
        <img className="w-16 h-16 rounded-3xl" src={creator.imageURL} alt={creator.name + " profile"} />
        <h1 className='font-bold'>{creator.name}</h1>
        <p className='text-justify'>
            {creator.description}
        </p>
        <div className='flex gap-x-3'>
            {creator.youtubeURL !== "" ? (<span className="w-5 h-5 icon-[ph--youtube-logo-fill] hover:cursor-pointer" onClick={() => redirect(creator.youtubeURL)}></span>) : (<></>)}
            {creator.twitchURL !== "" ? (<span className="w-5 h-5 icon-[mdi--twitch] hover:cursor-pointer" onClick={() => redirect(creator.twitchURL)}></span>) : (<></>)}
            {creator.twitterURL !== "" ? (<span className="w-5 h-5 icon-[ri--twitter-x-fill] hover:cursor-pointer" onClick={() => redirect(creator.twitterURL)}></span>) : (<></>)}
            {creator.tiktokURL !== "" ? (<span className="w-5 h-5 icon-[ri--tiktok-fill] hover:cursor-pointer" onClick={() => redirect(creator.tiktokURL)}></span>) : (<></>)}
            {creator.instagramURL !== "" ? (<span className="w-5 h-5 icon-[mdi--instagram] hover:cursor-pointer" onClick={() => redirect(creator.instagramURL)}></span>) : (<></>)}
        </div>
    </div>
  )
}

export default CreatorCard