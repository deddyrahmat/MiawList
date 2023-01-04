import Buttons from 'components/atoms/Buttons'
import React from 'react'

import './card.css'

function Card({data}) {
    // console.log('data', data)
  return (
    <>
        <div className="border rounded-lg border-2 p-5 flex flex-col ">
            <div className='flex-1 min-h-[180px]'>
                <p className="text-slate-600 text-sm">{data.origin}</p>
                <p className="text-black text-lg font-bold mt-2 font-roboto">{data.name}</p>
                <p className='mt-1 mb-3 text-sm text-slate-400'>
                    {data.temperament}
                </p>
                <p className='truncate-2'>
                    {data.description}
                </p>
            </div>
            <Buttons className='mt-3 flex-1 bg-sky-400 rounded-lg text-white py-2 text-lg shadow'>Detail</Buttons>
        </div>
    </>
  )
}

export default Card