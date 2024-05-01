import React from 'react';

const CreatorCard = ({creator}) => {
  return (
    <div className='bg-tertiary flex flex-col items-center p-3'>
        <img className="w-16 h-16" src={creator.imageURL} alt={creator.name + " profile"} />
        <h1>{creator.name}</h1>
        <p>
            {creator.description}
        </p>
        <div className='flex gap-x-3'>
            <span className="icon-[ph--youtube-logo-fill]"></span>
            <span className="icon-[mdi--twitch]"></span>
            <span className="icon-[ri--twitter-x-fill]"></span>
            <span className="icon-[ri--tiktok-fill]"></span>
            <span className="icon-[mdi--instagram]"></span>
        </div>
    </div>
  )
}

export default CreatorCard