import React from 'react';
import { PalettesData } from '../../assets/color_palettes/data';
import ColorCard from './colors_card';

const Colors = () => {
  return (
    <div className='bg-secondary grid grid-cols-3 justify-items-center min-h-screen h-max'>
        {
            PalettesData.map((palette) => 
                <ColorCard palette={palette}/>
            )
        }
    </div>
    
  )
}

export default Colors