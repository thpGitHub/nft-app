import React from "react";
import "./css/styles.css";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import CardContainer from "./components/Containers/CardContainer";
import MainContainer from "./components/Containers/MainContainer";

function App() {
  return (
    <MainContainer>
      <Search></Search>
      <CardContainer>
        <Card />
      </CardContainer>
      <Footer></Footer>
    </MainContainer>
  );
}

export default App;
