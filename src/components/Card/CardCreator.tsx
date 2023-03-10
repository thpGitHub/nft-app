import React from 'react'
import {nftType} from '../../types/types'

type CardCreatorProps = {
  nft: nftType
}
const CardCreator = ({nft}: CardCreatorProps) => {
  const {avatar, creator} = nft
  return (
    <div className="creator-info">
      <img src={avatar} alt={creator} className="avatar" />
      <p className="creator-text">
        Creation of <span className="creator-name">{creator}</span>
      </p>
    </div>
  )
}
export default CardCreator
