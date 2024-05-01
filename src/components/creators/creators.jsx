import React from 'react';
import { CreatorsData } from '../../assets/creators/data';
import CreatorCard from './creator_card';

const Creators = () => {
  return (
    <div className='bg-secondary grid grid-cols-2 justify-items-center h-screen'>
        {CreatorsData.map((creator) => 
            <CreatorCard creator={creator}/>
        )}
    </div>
  )
}

export default Creators