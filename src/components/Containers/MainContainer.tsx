import React, { ReactNode } from 'react'

type MainContainerProps = {
    children: ReactNode
}

function MainContainer({children}: MainContainerProps) {
  return (
    <main className="container">{children}</main>
  )
}

export default MainContainer