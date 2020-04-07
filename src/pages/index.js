import React from "react"
import Layout from '../components/layout'
import SEO from '../components/seo'

export default () => (

 <Layout>
   <SEO title='Duane McFarlane' description='Duane Portfolio Site' />
  <div>
   
    <p className='bodyText'>
      Hi there, I'm a NYC-based software engineer focusing on JavaScript, with a background of building scaleable <span className='boldText'>react/redux/node </span>applications. Most recently I co-created an electron tool for devs to see their micro-service communication, for the open-source community. Having been around JavaScript for almost a decade, I find great joy in learning new concepts/patterns everyday. 
    </p>

    <p>
      Prior to becoming an engineer, I was a designer for over 10 years. During my tenure, I started doing UI (at the time jQuery was the popular library). Over the years, I my passion for engineering outgrew my passion for design and I realized I wanted to make a pivot.
    </p>

    <p>
        Seeking out my next challenge, I enrolled in an immersive software engineering residency in NYC. It was equally the most challenging and rewarding thing I've ever done. I met great people, that I still keep in contact with daily, and learned how to "navigate the unknown" and to not be afraid to get my hands dirty, learning a new technology.
    </p>

    <p>
        Outside of work, I enjoy teaching my daughter how to play basketball, cooking, watching sci-fi movies/shows and reading new articles on blogs like medium and sitepoint, etc.
    </p>
  </div>
  </Layout>
)