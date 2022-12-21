import React, {ChangeEvent, useState} from 'react'
import './css/styles.css'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'
import Search from './components/Search/Search'
import CardContainer from './components/Containers/CardContainer'
import MainContainer from './components/Containers/MainContainer'
import nftsList from './db/nft'
import {nftType} from './types/types'

function App() {
  const [nfts, setNfts] = useState<nftType[]>(nftsList)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const filteredList = nftsList.filter(nft => {
      return (
        nft.title.toLowerCase().includes(value.toLowerCase()) ||
        nft.description.toLowerCase().includes(value.toLowerCase()) ||
        nft.creator.toLowerCase().includes(value.toLowerCase())
      )
    })
    setNfts(filteredList)
  }

  return (
    <MainContainer>
      <Search onChange={handleChange} />
      <CardContainer>
        {nfts.map((nft, index) => {
          return <Card key={index} nft={nft} />
        })}
      </CardContainer>
      <Footer />
    </MainContainer>
  )
}

export default App
