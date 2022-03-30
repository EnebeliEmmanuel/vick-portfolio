import React, {useContext} from "react";
import "./Blockchain.css";

import BlogCard from "../../components/blogCard/BlogCard";
import {blockchainSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
export default function Blockchains() {
  const {isDark} = useContext(StyleContext);
  if (!blockchainSection.display) {
    return null;
  }
  return (
    <div id="events" class="projects-section">
      <p >Blockchain <span class="text-secondary">Events</span></p>
      <p>I am also good at giving speeches/educating the public <br/> on different concepts in the blockchain space.<br/>Feel free to reach out to me on upcoming blockchain events!</p>
      <div class="project-grid">
        <div >
          <div class="a-project-card">
            <div class="project-image-container">
              <img class="project-image" src="https://user-images.githubusercontent.com/58889001/160825363-1aae2f7e-506d-4d0f-a50c-2862f5311b22.png" alt="" />
            </div>
            <div class="project-content">
              <p>Wallet By Victoria Enebeli</p>
              <div class="about-project">
               Improving your solidity skills
              </div>
              <div class="check-project">
               
                <a href="https://www.youtube.com/watch?v=xJWcjDP3Nd8" target="_blank" rel="noopener noreferrer"
                  ><i class="fas fa-external-link-alt"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div >
          <div class="a-project-card">
            <div class="project-image-container">
              <img class="project-image" src="https://user-images.githubusercontent.com/58889001/160826288-f019ef00-2654-4591-917d-f27bc4cde11b.png" alt="" />
            </div>
            <div class="project-content">
              <p>Onboarding</p>
              <div class="about-project">
                This is me welcoming the interns into Blockgames
              </div>
              <div class="check-project">
               
                <a href="https://www.youtube.com/watch?v=rPP7tDpF93Q" target="_blank" rel="noopener noreferrer"
                  ><i class="fas fa-external-link-alt"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div class="a-project-card">
            <div class="project-image-container">
              <img class="project-image" src="https://user-images.githubusercontent.com/58889001/160827662-5c5a67cd-8b99-4596-ae95-a039ff11db92.png" alt="" />
            </div>
            <div class="project-content">
              <p>Introduction To Ethereum Network/Blockchain</p>
              <div class="about-project">
               Introduction to Ethereum Blockchain- Learn how to build on top of the blockchain.
              </div>
              <div class="check-project">
                
                <a href="https://www.youtube.com/watch?v=RZKhslGrWJA" target="_blank" rel="noopener noreferrer"
                  ><i class="fas fa-external-link-alt"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        
        <div >
          <div class="a-project-card">
            <div class="project-image-container">
              <img class="project-image" src="https://user-images.githubusercontent.com/58889001/160828627-940cb43b-d3d2-485e-a217-324ce73f92b0.png" alt=""  />
            </div>
            <div class="project-content">
              <p>Finalty in Blockchain</p>
              <div class="about-project">
                Why is transanction finalty essential.
              </div>
              <div class="check-project">
               
                <a href="https://www.youtube.com/watch?v=aZ6UyazaDHI" target="_blank" rel="noopener noreferrer"
                  ><i class="fas fa-external-link-alt"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div class="a-project-card">
            <div class="project-image-container">
              <img class="project-image" src="https://user-images.githubusercontent.com/58889001/160829039-27d36757-0ebb-4705-ade9-57e75cef1cd4.png" alt="" />
            </div>
            <div class="project-content">
              <p>Event attended</p>
              <div class="about-project">
                Join us as we build a community of blockchain enthusiasist.
              </div>
              <div class="check-project">
               
                
              </div>
            </div>
          </div>
        </div>

        <div >
          <div class="a-project-card">
            <div class="project-image-container">
              <img class="project-image" src="https://user-images.githubusercontent.com/58889001/160830129-d0d01bb3-76b4-4976-8667-d44d356cc4b6.png" alt="" />
            </div>
            <div class="project-content">
              <p>Multisig wallet</p>
              <div class="about-project">
              Multisig stands for multi-signature, read and learn more.
              </div>
              <div class="check-project">
                
                <a href="https://medium.com/@enebelivicki/multisig-wallet-558247618024" target="_blank" rel="noopener noreferrer"
                  ><i class="fas fa-external-link-alt"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        


  );
}
