import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const VideoPlayer = ({ options }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      return;
    }

    // Inicializar el reproductor de video.js
    playerRef.current = videojs(videoRef.current, options);

    // Desmontar el reproductor cuando el componente se desmonte
    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [options]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js" />
    </div>
  );
};

export default VideoPlayer;