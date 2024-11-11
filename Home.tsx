import { useEffect } from 'react';


const Home = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.37/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
  <spline-viewer 
    url="https://prod.spline.design/g6YQoo2faLb6jSb8/scene.splinecode" 
    className="w-full h-full sm:h-screen"
  ></spline-viewer>
</div>

  );
};

export default Home;
