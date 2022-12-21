import React, {ReactNode} from 'react'

type CardContainerProps = {
  children: ReactNode
}

function CardContainer({children}: CardContainerProps) {
  return <div className="card-container">{children}</div>
}

export default CardContainer
