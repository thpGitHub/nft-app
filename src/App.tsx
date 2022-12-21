import React from "react";
import "./css/styles.css";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import CardContainer from "./components/Containers/CardContainer";
import MainContainer from "./components/Containers/MainContainer";
import nftsList from "./db/nft";

function App() {
  return (
    <MainContainer>
      <Search></Search>
      <CardContainer>
        {nftsList.map((nft, index) => {
          return <Card key={index} nft={nft} />;
        })}
      </CardContainer>
      <Footer></Footer>
    </MainContainer>
  );
}

export default App;
