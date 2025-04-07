import React, { useState, useRef } from 'react';
import './navbar.css';

const Navbar = () => {
  const [showTransition, setShowTransition] = useState(false);
  const resumeSectionRef = useRef(null);
  const transitionRef = useRef(null);

  const handleResumeClick = () => {
    setShowTransition(true);

    // After transition video plays (1.5s), scroll to resume
    setTimeout(() => {
      setShowTransition(false);

      // Scroll to resume section smoothly
      if (resumeSectionRef.current) {
        resumeSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1500);
  };

  return (
    <div>
      <nav className='navbar'>
        <img src="anyapadoru" alt="anyapadoru" className='anyapaduro'/>
        <div className="desktopMenu">
          {/* Add menu items here */}
        </div>
        <button className="desktopMenuBtn">
          <img src="your-image-path-here" alt="Contact Me" className="desktopMenuImg"/>Contact Me
        </button>
      </nav>

      {/* Resume Section */}
      <section className="slide" id="resume" ref={resumeSectionRef}>
        <h2>My Resume</h2>
        <button id="resumeButton" onClick={handleResumeClick}>
          View Resume
        </button>
      </section>

      {/* Video transition overlay */}
      <video
        ref={transitionRef}
        className={`page_video_transition ${showTransition ? 'active' : ''}`}
        src="bgnana.mp4"
        autoPlay
        muted
        loop
      />
    </div>
  );
}

export default Navbar;
