'use client';

import { useRef, useState } from 'react';
import AutomationIcon from './AutomationIcon';
import styles from './HomePage.module.css';

const VIDEO_SRC = '/videos/sgp-automation.mp4';

export default function AutomationVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const [error, setError] = useState(false);

  async function play() {
    const video = videoRef.current;
    if (!video) return;
    setError(false);
    try {
      // Called directly from a user gesture; never request audible autoplay.
      await video.play();
      video.focus();
    } catch {
      setError(true);
    }
  }

  return (
    <figure className={styles.film} aria-labelledby="sgp-film-title">
      <div className={styles.filmTopline}>
        <span><span className={styles.statusDot} /> THE SGP FILM</span>
        <span>01:13</span>
      </div>
      <div className={styles.videoFrame}>
        <video ref={videoRef} width="1920" height="1080"
          poster="/_next/image?url=%2Fvideos%2Fsgp-automation-poster.jpg&w=1080&q=75" controls playsInline preload="none"
          tabIndex={0} aria-label="SGP Digital Solutions automation film"
          aria-describedby="sgp-film-overview"
          onPlay={() => { setStarted(true); setError(false); }}
          onError={() => setError(true)}>
          <source src={VIDEO_SRC} type="video/mp4" onError={() => setError(true)} />
          Your browser cannot play this video. <a href={VIDEO_SRC}>Open the film</a> instead.
        </video>
        {!started && !error && (
          <button type="button" className={styles.playButton} onClick={play}
            aria-label="Watch the film: SGP automation with sound">
            <AutomationIcon name="play" />
            <span>Watch the film</span>
          </button>
        )}
      </div>
      <figcaption className={styles.filmCaption}>
        <p id="sgp-film-title">Business shouldn&apos;t feel this complicated.</p>
        <span>See a different way to work.</span>
      </figcaption>
      {error && (
        <p role="status" className={styles.videoError}>
          The film couldn&apos;t start. Try the player controls or <a href={VIDEO_SRC}>open the video directly</a>.
        </p>
      )}
      <details className={styles.videoOverview}>
        <summary>Read the film overview</summary>
        <p id="sgp-film-overview">An introduction to SGP Digital Solutions: less repetitive admin,
          fewer disconnected systems and workflows built around your business. From understanding
          the process to building the solution, we help make the day-to-day work simpler.</p>
      </details>
    </figure>
  );
}
