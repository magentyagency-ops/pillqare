import React, { useState } from 'react';
import { X } from 'lucide-react';
import './VideoBubbles.css';

export const VideoBubbles: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    "/videos/0509 2.MOV",
    "/videos/0521 (1).mov",
    "/videos/0603.MOV"
  ];

  return (
    <>
      <div id="discover" className="video-bubbles-section">
        <div className="video-bubbles-container">
          {videos.map((src, index) => (
            <div 
              key={index} 
              className="video-bubble" 
              title={`Vidéo ${index + 1}`}
              onClick={() => setActiveVideo(src)}
            >
              <video 
                src={src} 
                autoPlay 
                loop 
                muted 
                playsInline 
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Video Modal */}
      <div className={`video-lightbox ${activeVideo ? 'active' : ''}`} onClick={() => setActiveVideo(null)}>
        {activeVideo && (
          <>
            <button className="video-lightbox-close" onClick={() => setActiveVideo(null)}>
              <X size={24} />
            </button>
            <div className="video-lightbox-content" onClick={(e) => e.stopPropagation()}>
              <video 
                src={activeVideo} 
                controls 
                autoPlay 
                playsInline
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};
