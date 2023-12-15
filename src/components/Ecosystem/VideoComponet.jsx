import { useRef, useEffect } from 'react';

const VideoComponent = () => {
  const videoRef = useRef(null);
const linkVideo = `https://s3-figma-videos-production-sig.figma.com/video/1202758027319615295/TEAM/6134/f3cc/-460c-45cf-97e0-3d8c185f1256?Expires=1703462400&Signature=dIHb5Y2e9JCAF00yQZLhsA0xweQBFq5JinBdv9hYcRr9gQwKryhmrirxnEtbDUeFmP94G3xZXvei2h4K4Vwqs1EXcgFrqhFSdUuLh47uHDubnhWcgGF~DGvrPnDqUjOt6290rpAG62nQ20Wxw7VY1VitABysejwOUMBwlbguZDPetaPMt1J7p6ilQt~uMy21Y3TcUPGjwRa-OTEBkhW8g16oRWA8q8VZN23SvNbbg9DYHeA2Ov7~l78eMlWDX9Z5imN1PYoFIh3mGBkYpbLawUMUhLUOAZ80YDEntzbXGj4GM-fhKZ~iMu035dL0fdHNN6xaJVvJgZ0j5gWYrHz4Eg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`
  useEffect(() => {
    // Iniciamos la reproducción del video y configuramos el bucle al montar el componente
    videoRef.current.play();
    videoRef.current.addEventListener('ended', () => {
      videoRef.current.play();
    });

    // Limpiamos el evento cuando el componente se desmonta
    return () => {
      videoRef.current.removeEventListener('ended', () => {
        videoRef.current.play();
      });
    };
  }, []); // El segundo argumento vacío asegura que el efecto se ejecute solo una vez al montar el componente

  return (
    <div className="video-container">
      <video ref={linkVideo} autoPlay loop muted>
        <source src="tu_video.mp4" type="video/mp4" />
        Tu navegador no admite el elemento de video.
      </video>
    </div>
  );
};

export default VideoComponent;