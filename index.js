import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import pic from "./yh2.me.jpg";
import gif from "./bojne.gif";
const destination = document.getElementById("root");

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className = 'content'>
            <div className='main'>
                <h1> Yueh Han Huang </h1>
                <img id='bojne' src={gif} alt="What is bojne?" />
            </div>
            <div className="box">
                <div classname='picture'>
                    <img className="image" src={pic} alt="Yueh Han's Hinking Pic" />
                </div>
                <div className='about'>
                        <div>
                            <h2>Current</h2>
                            <p> 👨🏻‍🎓 Learning at Minerva Schools at KGI </p>
                            <p> 👨🏻‍💻 Analyze data for better decision making at <a href="https://www.netlify.com/" target="_blank">Netlify</a></p>
                        </div>
                        <div>
                            <h2>Projects</h2>
                            <p> 👨🏻‍🎨 <a href="http://collager.party/" target="_blank">Collager.party </a></p>
                            <p> 👨🏻‍🔬 <a href="https://inspiration.tw/" target="_blank">Inspiration.tw</a></p>
                        </div>
                        <div>
                            <h2>Links</h2>
                            <p> 📙
                                <a href="https://www.notion.so/yhhuang/My-Favorite-Blogs-and-News-e7fb5feed9df4c3d9be4b85184809f2b" target="_blank"> Reading List</a>・
                                <a href="https://medium.com/@Johann016/" target="_blank">Medium</a>・
                                <a href="https://www.are.na/yueh-han-huang" target="_blank">Are.na</a>
                            </p>
                            <p> 🔗 
                                <a href="https://www.facebook.com/bojne.john"target="_blank"> FB</a>・
                                <a href="http://vsco.co/yuehan18" target="_blank">VSCO</a>・
                                <a href="https://github.com/bojne" target="_blank">GitHub</a>・ 
                                <a href='https://bojne.github.io' target="_blank">v1</a>
                            </p>
                        </div>
                    </div>
            </div>
            
            
        </div>   
    )
    }
}

ReactDOM.render(<App />, destination);