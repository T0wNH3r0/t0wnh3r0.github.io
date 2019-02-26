import React, { Component } from 'react';
import MediaCard from './MediaCard';
import AutoGrid from './AutoGrid';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row portfolio">
          <div className="three columns header-col">
            <h1>
              <span>Portfolio</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <AutoGrid resumeData={resumeData} />
          </div>
        </div>
        
      </section>
    );
  }
}
