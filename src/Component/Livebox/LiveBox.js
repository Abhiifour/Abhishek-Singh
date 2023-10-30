import React from 'react';
import './LiveBox.scss';

function LiveBox() {
  return (
   <div className="LiveBox-main">
   <div className="Box-header">
    We are Live Now!
   </div>
   <div className="Box-subtitle">
   Our new feature is now <span>Live and ready</span> for you to explore.
    Go ahead and give it a try
   </div>
    <div className="btn">
    Get Started
    </div>
   </div>
  )
}

export default LiveBox