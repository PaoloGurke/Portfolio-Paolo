import React, { useState, useRef } from 'react';
import Navbar from "./components/NavBar/navbar";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const audioRef = useRef(null);
  const transitionRef = useRef(null);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

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

      {/* Background music toggle button */}
      <button onClick={handlePlayPause} style={{ padding: '10px', fontSize: '16px' }}>
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>

      {/* Background music */}
      <audio ref={audioRef} id="bgAudio" loop autoPlay>
        <source src="/bgmperf.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/* Resume Section */}
      <section className="slide" id="resume">
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

export default App;
