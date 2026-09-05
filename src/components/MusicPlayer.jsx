import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

function MusicPlayer({ started }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!started || !audioRef.current) return;

    audioRef.current
      .play()
      .then(() => {
        setPlaying(true);
      })
      .catch((error) => {
        console.log("Music could not start:", error);
      });
  }, [started]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setPlaying(true);
        })
        .catch((error) => {
          console.log("Music could not play:", error);
        });
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music/Another Love.mp4" loop />

      {started && (
        <button
          className="music-button"
          onClick={toggleMusic}
          aria-label={playing ? "Pause music" : "Play music"}
        >
          {playing ? <Volume2 size={18} /> : <VolumeX size={18} />}

          <span>{playing ? "Playing" : "Music"}</span>
        </button>
      )}
    </>
  );
}

export default MusicPlayer;
