import React, { useState, useRef } from 'react';
import Navbar from "./components/NavBar/navbar";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const audioRef = useRef(null);
  const transitionRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const slidesRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slidesRef.current.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

<div className="slideshow-container">
  {[
    { src: "aca1.png", caption: "Acanavi's UI Showcase" },
    { src: "aca3.png", caption: "Acanavi's Dashboard Concept" },
    { src: "aca2.png", caption: "Acanavi's Grading System" },
    { src: "aca4.png", caption: "Acanavi's UI Showcase" },
    { src: "comm1.png", caption: "Acanavi's Commercial" },
    { src: "fq1.png", caption: "FoodQuest's Prototype" },
    { src: "fq2.png", caption: "FoodQuest's Logo" },
    { src: "fq3.png", caption: "FoodQuest's Homepage" },
    { src: "fq4.png", caption: "Ordering in FoodQuest" },
    { src: "aft1.png", caption: "Editing using AFter Effects" },
  ].map((slide, index) => (
    <div
      key={index}
      className="slide"
      style={{ display: index === slideIndex ? "block" : "none" }}
      ref={(el) => (slidesRef.current[index] = el)}
    >
      <img src={slide.src} alt={slide.caption} style={{ width: "100%" }} />
      <div className="caption">{slide.caption}</div>
    </div>
  ))}
</div>



  

  const handleResumeClick = () => {
    setShowTransition(true);

    // Hide transition after 1.5s
    setTimeout(() => {
      setShowTransition(false);
    }, 1500);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

    

      {/* Resume Section */}
      <section className="slide" id="resume">
                <button id="resumeButton" onClick={handleResumeClick}>
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

export default App;
