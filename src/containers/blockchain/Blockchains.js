import React, {useContext} from "react";
import "./Blockchain.css";

import BlockchainCard from "../../components/blockchainCard/BlockchainCard";
import {blockchainSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Blockchains() {
  const {isDark} = useContext(StyleContext);
  if (!blockchainSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="blockchains">
        <div className="blog-header">
          <h1 className="blog-header-text">{blockchainSection.title}</h1>
          <p
            className={
              isDark ? "dark-mode blog-subtitle" : "subTitle blog-subtitle"
            }
          >
            {blockchainSection.subtitle}
          </p>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {blockchainSection.blockchains.map((blog, i) => {
              return (
                <BlockchainCard
                  key={i}
                  isDark={isDark}
                  blog={{
                    url: blog.url,
                    image: blog.image,
                    iframe: blog.iframe,
                    title: blog.title,
                    description: blog.description
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
