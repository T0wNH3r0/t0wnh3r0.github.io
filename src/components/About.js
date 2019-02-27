import React, { Component } from 'react';
import classNames from 'classnames';
import Icon from '@material-ui/core/Icon';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/kevin.png" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <span>Reach me on social media:</span>
                <ul className="social">
                  {resumeData.socialLinks &&
                    resumeData.socialLinks.map(item => {
                      return (
                        <li key={item.name}>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Icon
                              className={classNames(item.className)}
                              style={{ fontSize: '2em' }}
                            />
                          </a>
                        </li>
                      );
                    })}
                </ul>
             
                  <span>or send me an email: {resumeData.email}</span>
                  <br />
               
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
