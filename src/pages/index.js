import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO />
    <h1
      style={{
        maxWidth: 960,
        padding: `2rem 0 0 0`,
      }}
    >
      Yueh Han Huang
    </h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
    <div className="box">
      <Image />
      <div className="about">
        <div>
          <h2
            style={{
              maxWidth: 960,
              padding: `1rem 0 0 0`,
            }}
          >
            Current
          </h2>
          <p> 👨🏻‍🎓 Learning at Minerva Schools at KGI </p>
          <p>
            {" "}
            👨🏻‍💻 Analyzing data at{" "}
            <a href="https://www.netlify.com/" target="_blank">
              Netlify
            </a>
          </p>
        </div>
        <div>
          <h2>Projects</h2>
          <p>
            {" "}
            👨🏻‍🎨{" "}
            <a href="http://collager.party/" target="_blank">
              Collager.party{" "}
            </a>
          </p>
          <p>
            {" "}
            👨🏻‍🔬{" "}
            <a href="https://inspiration.tw/" target="_blank">
              Inspiration.tw
            </a>
          </p>
        </div>
        <div>
          <h2>My Pins</h2>
          <p>
            <a
              href="https://www.notion.so/yhhuang/Things-I-read-9fd8e49d8f6546a182bf9e6dc6b9d187"
              target="_blank"
            >
              🆕 Things I read・
            </a>
            <a
              href="https://www.notion.so/yhhuang/Yueh-Han-s-Digital-Brain-cb37f31f4856425a9d403208f526f723"
              target="_blank"
            >
              {" "}
              My Digital Brain
            </a>
          </p>
          <p>
            🔗
            <a
              href="https://medium.com/@Johann016/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Medium・
            </a>
            <a
              href="https://www.are.na/yueh-han-huang"
              target="_blank"
              rel="noopener noreferrer"
            >
              Are.na・
            </a>
            <a
              href="https://www.facebook.com/bojne.john"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              FB・
            </a>
            <a
              href="http://vsco.co/yuehan18"
              target="_blank"
              rel="noopener noreferrer"
            >
              VSCO・
            </a>
            <a
              href="https://github.com/bojne"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
