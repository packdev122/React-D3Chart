import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
  		<div className="sidebar">
        <a className="notification-btn" href="">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24">
            <path fill="#FFF" d="M18.901 16.585l-.557-4.822c-.015-3.77-2.585-7.082-6.184-8.047V2.164A2.164 2.164 0 0 0 10 0C8.81 0 7.843.97 7.843 2.164v1.552c-3.6.965-6.17 4.276-6.185 8.047L1.1 16.585c-.686.446-1.1 1.2-1.1 2.03v.18c0 1.662 1.579 1.662 2.427 1.662H6.14C6.405 22.455 8.033 24 10 24c1.967 0 3.595-1.545 3.86-3.543h3.712c.849 0 2.428 0 2.428-1.663v-.178c0-.832-.413-1.584-1.099-2.03zm-8.9 6.297c-1.355 0-2.487-1.045-2.736-2.426h5.472c-.25 1.38-1.381 2.426-2.736 2.426z"/>
          </svg>
          <span></span>
        </a>
        <a className="open-sidebar-btn" href=""><i className="fa fa-arrow-circle-right" /></a>
      </div>
    );
  }
}

export default Sidebar;
