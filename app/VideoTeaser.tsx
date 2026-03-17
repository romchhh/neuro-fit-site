'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function VideoTeaser() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingBottom: '56.25%',
        borderRadius: 24,
        overflow: 'hidden',
        boxShadow: '0 22px 55px rgba(64, 26, 75, 0.22)',
        background: '#000',
      }}
    >
      {!isPlaying && (
        <>
          <Image
            src="/neuro-fit/hero-mobile-neurofit.png"
            alt="NeuroFit video teaser"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            priority={false}
          />
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            aria-label="Play video"
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                width: 82,
                height: 82,
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                boxShadow: '0 4px 32px rgba(0,0,0,0.32)',
              }}
            >
              <span
                style={{
                  marginLeft: 4,
                  width: 0,
                  height: 0,
                  borderTop: '12px solid transparent',
                  borderBottom: '12px solid transparent',
                  borderLeft: '20px solid rgba(255,255,255,0.96)',
                }}
              />
            </span>
          </button>
        </>
      )}

      {isPlaying && (
        <iframe
          src="https://www.youtube.com/embed/0gx4cuCOReE?autoplay=1"
          title="NeuroFit video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        />
      )}
    </div>
  );
}

