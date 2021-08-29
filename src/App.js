import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import resumeData from './resumeData';
// import techMenu from './techMenu';
// import Recommendations from './components/Recommendations';
// import Experience from './components/Testimonials';
// import TechMenu from './components/TechMenu';
// import FAQ from './components/FAQ';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <About resumeData={resumeData} />
        {/* <Recommendations resumeData={resumeData} /> */}
        {/* <TechMenu techMenu={techMenu} /> */}
        {/* <FAQ techMenu={techMenu}/> */}
        {/* <Experience resumeData={resumeData} />  */}
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
