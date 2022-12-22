import React, {ChangeEvent, useEffect, useState} from 'react'
import './css/styles.css'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'
import Search from './components/Search/Search'
import CardContainer from './components/Containers/CardContainer'
import MainContainer from './components/Containers/MainContainer'
import nftsList from './db/nft'
import {nftType} from './types/types'

function App() {
  const [allNftsFromApi, setAllNftsFromApi] = useState<nftType[]>([])
  const [displayNfts, setDisplayNfts] = useState<nftType[]>([])

  useEffect(() => {
    const api = async () => {
      const data = await fetch('https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/all', {
        method: 'GET',
      })
      const jsonData = await data.json()
      console.log(jsonData)
      setDisplayNfts(jsonData.data)
      setAllNftsFromApi(jsonData.data)
    }
    api()
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const filteredList = allNftsFromApi.filter(nft => {
      return (
        nft.title.toLowerCase().includes(value.toLowerCase()) ||
        nft.description.toLowerCase().includes(value.toLowerCase()) ||
        nft.creator.toLowerCase().includes(value.toLowerCase())
      )
    })
    setDisplayNfts(filteredList)
  }

  return (
    <MainContainer>
      <Search onChange={handleChange} />
      <CardContainer>
        {displayNfts.map((nft, index) => {
          return <Card key={index} nft={nft} />
        })}
      </CardContainer>
      <Footer />
    </MainContainer>
  )
}

export default App
