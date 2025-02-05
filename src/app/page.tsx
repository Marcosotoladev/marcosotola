import HomePage from "./home/page";

export default function Home() {
  return (
    <div >
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
        <div className="relative z-20 h-full w-full flex flex-col  text-white p-4">
        <HomePage />
        </div>
      </div>
    </div>
  );
}
