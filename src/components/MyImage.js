import React from 'react'

const MyImage = ({imgs = [{url: ""}]}) => {
  return (
    <div className="main-screen">
        <img src={imgs[0].url} alt={imgs[0].filename} />
    </div>
  )
}

export default MyImage
