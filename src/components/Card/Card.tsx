import React from "react";
import CardImage from "./CardImage";
import CardContent from "./CardContent";
import { nftType } from "../../types/types";

type nftProps = {
  nft: nftType;
};

function Card({ nft }: nftProps) {
  return (
    <section className="main-card">
      <CardImage imgSrc={nft.img} />
      <CardContent nft={nft} />
    </section>
  );
}

export default Card;
