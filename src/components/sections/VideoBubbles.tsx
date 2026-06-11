import React, { useState } from 'react';
import { X } from 'lucide-react';
import './VideoBubbles.css';

export const VideoBubbles: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    "/videos/1-bulles-presentation-etape1.mov",
    "/videos/2-bulles-presentation-etape2.mov",
    "/videos/3-bulles-presentation-etape3.mov"
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
