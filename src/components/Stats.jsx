import React from 'react'
import BigGraph from './BigGraph';

function Stats({data}) {
    // console.log(data.data)

  return (
    <>
    <BigGraph data={data.data}/>
    </>
  )
}

export default Stats