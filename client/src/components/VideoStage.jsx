import React, { useEffect, useRef } from 'react';
import { Camera, Bot } from 'lucide-react';

const VideoStage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const startWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) videoRef.current.srcObject = stream;
      } catch (err) {
        console.error("Webcam error:", err);
      }
    };
    startWebcam();
  }, []);

  return (
    <div className="flex flex-col md:flex-row gap-4 h-[350px] w-full mb-6">
      
      {/* Left: User Webcam */}
      <div className="flex-1 bg-black rounded-xl overflow-hidden relative shadow-md border border-gray-200">
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          muted 
          className="w-full h-full object-cover transform scale-x-[-1]" 
        />
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded flex items-center gap-1">
          <Camera size={12} /> <span>User Input</span>
        </div>
      </div>

      {/* Right: Avatar Output */}
      <div className="flex-1 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex flex-col items-center justify-center relative shadow-md border border-gray-200">
        <Bot size={48} className="text-gray-300 mb-2" />
        <p className="text-gray-500 text-sm font-medium">Avatar Animation</p>
        <p className="text-gray-400 text-xs">(Blender Render)</p>
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-700 text-xs px-2 py-1 rounded flex items-center gap-1 shadow-sm">
          <Bot size={12} /> <span>AI Assistant</span>
        </div>
      </div>
    </div>
  );
};

export default VideoStage;