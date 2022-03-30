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
              <img class="project-image" src="./images/staking-ui.png" alt="" />
            </div>
            <div class="project-content">
              <p>React app for staking</p>
              <div class="about-project">
                Built a simple mvp(still improving) react app to interact with #smartcontract on #Rinkeby test network.
              </div>
              <div class="check-project">
               
                <a href="https://kokotoken-ui.koko-code.tech/" target="_blank" rel="noopener noreferrer"
                  ><i class="fas fa-external-link-alt"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div >
          <div class="a-project-card">
            <div class="project-image-container">
              <img class="project-image" src="./images/countdown-timer.png" alt="" />
            </div>
            <div class="project-content">
              <p>Launchdown-timer</p>
              <div class="about-project">
                This is just a simple and beautiful design of a launchdown-timer using html,css and javascript
              </div>
              <div class="check-project">
               
                <a href="http://countdown-sepia.vercel.app/" target="_blank" rel="noopener noreferrer"
                  ><i class="fas fa-external-link-alt"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div class="a-project-card">
            <div class="project-image-container">
              <img class="project-image" src="./images/woodlanding-page.png" alt="" />
            </div>
            <div class="project-content">
              <p>wood-landing-page</p>
              <div class="about-project">
                A simple and beatiful wood-landing-page with a simple and intuitive UI. Built with html, css,javascript to advertis ur finest woods.
              </div>
              <div class="check-project">
                
                <a href="http://wood-landing-page.vercel.app/" target="_blank" rel="noopener noreferrer"
                  ><i class="fas fa-external-link-alt"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        
        <div >
          <div class="a-project-card">
            <div class="project-image-container">
              <img class="project-image" src="./images/responsive-code-compnent.png" alt=""  />
            </div>
            <div class="project-content">
              <p>responsive-code-compnent</p>
              <div class="about-project">
                well this is just a simple responsive-code-component built with html,css and flex-box
              </div>
              <div class="check-project">
               
                <a href="http://flex-box-project-ivory.vercel.app/" target="_blank" rel="noopener noreferrer"
                  ><i class="fas fa-external-link-alt"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div >
          <div class="a-project-card">
            <div class="project-image-container">
              <img class="project-image" src="./images/blog-landing-page.jpg" alt="" />
            </div>
            <div class="project-content">
              <p>blog-landing-page</p>
              <div class="about-project">
                A simple blog-landing-page with a simple and intuitive UI. Built with html, css,javascript, and tailwind css.
              </div>
              <div class="check-project">
               
                <a href="https://EnebeliEmmanuel.github.io/blog-landing-page" target="_blank" rel="noopener noreferrer"
                  ><i class="fas fa-external-link-alt"></i
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div >
          <div class="a-project-card">
            <div class="project-image-container">
              <img class="project-image" src="./images/social-proof-section.jpg" alt="" />
            </div>
            <div class="project-content">
              <p>social-proof-section</p>
              <div class="about-project">
                social-proof-section is a simple layout with the idea of you being able to monitor your buisness growth feedbacks
              </div>
              <div class="check-project">
                
                <a href="http://social-proof-section-vert.vercel.app/" target="_blank" rel="noopener noreferrer"
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
