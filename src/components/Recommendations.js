import React, { Component } from 'react';
import SimpleCard from './SimpleCard';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="recommendations">
        <div className="row recommendations">
          <div className="twelve columns collapsed">
            <h1>
              <span>Recommendations</span>
            </h1>
            <div
              id="recommendations-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.recommendations &&
                resumeData.recommendations.map(item => {
                  return (
                    <div className="columns">
                      <SimpleCard
                        imgurl={item.imgurl}
                        name={item.name}
                        description={item.description}
                        url={item.url}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
