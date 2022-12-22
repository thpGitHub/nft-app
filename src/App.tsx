import React, {ChangeEvent, useEffect, useState} from 'react'
import './css/styles.css'
import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'
import Search from './components/Search/Search'
import CardContainer from './components/Containers/CardContainer'
import MainContainer from './components/Containers/MainContainer'
import nftsList from './db/nft'
import {nftType} from './types/types'

type JSONResponse = {
  data?: Array<nftType>
  elements?: number
  errors?: Array<{message: string}>
}

function App() {
  const [allNftsFromApi, setAllNftsFromApi] = useState<nftType[] | undefined>(
    [],
  )
  const [displayNfts, setDisplayNfts] = useState<nftType[] | undefined>([])
  const [elements, setElements] = useState<number | undefined>()
  const [error, setError] = useState<Array<{message: string}> | undefined>()

  useEffect(() => {
    const api = async () => {
      const resp = await fetch(
        'https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/all',
        // 'https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/all/1',
        // 'https://636b20b6c07d8f936dae7fe4.mockapi.io/api/nft/erreur',
        {
          method: 'GET',
        },
      )
      const {data, elements, errors}: JSONResponse = await resp.json()
      if (resp.ok) {
        console.log(data)
        setDisplayNfts(data)
        setAllNftsFromApi(data)
        setElements(elements)
        setError(errors)
      } else {
        setError([{message: `API en erreur : code ${resp.status}`}])
        setDisplayNfts([])
        setAllNftsFromApi([])
        setElements(undefined)
      }
    }
    api()
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const filteredList = allNftsFromApi?.filter(nft => {
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
      {elements && <div className="elements">Il y a {elements} élément(s)</div>}
      {error?.length ? (
        <div className="alert">
          Il y a {error?.length} erreur(s) : {error[0]?.message}
        </div>
      ) : null}
      <CardContainer>
        {displayNfts?.map((nft, index) => {
          return <Card key={index} nft={nft} />
        })}
      </CardContainer>
      <Footer />
    </MainContainer>
  )
}

export default App
