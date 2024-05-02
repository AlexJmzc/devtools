import React from 'react';
import { CreatorsData } from '../../assets/creators/data';
import CreatorCard from './creator_card';

const Creators = () => {
  return (
    <div className='bg-secondary grid grid-cols-3 justify-items-center min-h-screen h-max'>
        {CreatorsData.map((creator) => 
            <CreatorCard creator={creator}/>
        )}
    </div>
  )
}

export default Creators