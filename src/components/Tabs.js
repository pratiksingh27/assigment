import React, { useState } from 'react';
import './Tabs.css'; // Assume Tabs.css contains the required styling
// import { BsFillGridFill } from "react-icons/bs";
// import { AiOutlineQuestionCircle } from "react-icons/ai";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faBorderAll } from '@fortawesome/free-solid-svg-icons';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('About Me');

  return (
    <div className="tabs-container">
      <div className='container'>
        <div className='flex'>
          <div>
            {/* <AiOutlineQuestionCircle className='icon' /> */}
            <FontAwesomeIcon icon={faCircleQuestion} className='icon'/>
          </div>
          <div className='tabs-inner'>
            <div className="tabs">
              <button onClick={() => setActiveTab('About Me')} className={activeTab === 'About Me' ? 'active' : ''}>About Me</button>
              <button onClick={() => setActiveTab('Experiences')} className={activeTab === 'Experiences' ? 'active' : ''}>Experiences</button>
              <button onClick={() => setActiveTab('Recommended')} className={activeTab === 'Recommended' ? 'active' : ''}>Recommended</button>
            </div>
          </div>
        </div>
        <div className="tab-content flex">
          <div>
            {/* <BsFillGridFill className='icon' /> */}
            <FontAwesomeIcon icon={faBorderAll} className='icon'/>
          </div>
          {activeTab === 'About Me' && <div className='tabs-text'>Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.<br></br><br></br>

            I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a </div>}
          {activeTab === 'Experiences' && <div className='tabs-text'>Hello! I’m Vishal, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.<br></br><br></br>

            I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a</div>}
          {activeTab === 'Recommended' && <div className='tabs-text'>Hello! I’m rahul, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.<br></br><br></br>

            I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a</div>}
        </div>
      </div>

    </div>
  );
};

export default Tabs;