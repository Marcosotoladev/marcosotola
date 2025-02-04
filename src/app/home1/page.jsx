import React from "react";


const VideoBackground = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Video de fondo */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/background-video.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento video.
      </video>

      {/* Overlay opcional para oscurecer el video y mejorar la legibilidad */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Contenido principal */}
      <div className="relative z-20 h-full w-full flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Título Principal
        </h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition-colors">
          Comenzar
        </button>
      </div>
    </div>
  );
};

export default VideoBackground;

