import React from 'react';

const ColorCard = ( { palette } ) => {
  return (
    <div className='bg-tertiary flex flex-col items-center p-3 w-80 h-fit rounded-3xl my-6 gap-y-4 shadow-card'>
        <div className='flex flex-col gap-y-2 items-center'>
            <h1 className='font-bold'>{palette.name.toUpperCase()}</h1>
            <div className='flex gap-x-2 items-center'>
                <span className={`bg-[${palette.primary}] icon-[material-symbols-light--square-rounded]`}></span>
                <h3>{palette.primary}</h3>
            </div>

            <div className='flex gap-x-2 items-center'>
                <span className={`bg-[${palette.secondary}] icon-[material-symbols-light--square-rounded]`}></span>
                <h3>{palette.secondary}</h3>
            </div>

            <div className='flex gap-x-2 items-center'>
                <span className={`bg-[${palette.tertiary}] icon-[material-symbols-light--square-rounded]`}></span>
                <h3>{palette.tertiary}</h3>
            </div>

            <div className='flex gap-x-2 items-center'>
                <span className={`bg-[${palette.quaternary}] icon-[material-symbols-light--square-rounded]`}></span>
                <h3>{palette.quaternary}</h3>
            </div>
        </div>
    </div>
  )
}

export default ColorCard