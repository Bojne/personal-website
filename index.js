import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import pic from "./yh2.me.jpg";

const destination = document.getElementById("root");

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div className = 'content'>
            <h1> Yueh Han Huang </h1>
            <div className="box">
                <div className='about'>
                        <div>
                            <h2>Current</h2>
                            <p> 👨🏻‍🎓 Learning at Minerva Schools at KGI </p>
                            <p> 👨🏻‍💻 Analyze Data at Netlify </p>
                        </div>
                        <div>
                            <h2>Project</h2>
                            <p> 👨🏻‍🎨 <a href="http://collager.party/">Collager.party </a></p>
                        </div>
                        <div>
                            <h2>Links</h2>
                            <p> 🔗 
                                <a href="https://medium.com/@Johann016/" target="_blank"> Medium(1.6k)</a>・
                                <a href="http://vsco.co/yuehan18" target="_blank">VSCO</a>・
                                <a href="https://github.com/bojne" target="_blank">GitHub</a>・ 
                                <a href="https://www.facebook.com/bojne.john"target="_blank">FB</a>・ 
                                <a href='https://bojne.github.io' target="_blank">_</a>
                                </p>
                        </div>
                    </div>
                <div classname='picture'>
                    <img className="image" src={pic} alt="Yueh Han's Hinking Pic" />
                </div>
            </div>
            
            
        </div>   
    )
    }
}

ReactDOM.render(<App />, destination);