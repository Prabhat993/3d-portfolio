// src/pages/Home.jsx

import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react'; 
import Loader from "../components/Loader";
import HomeInfo from '../components/HomeInfo';

import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";

// Import icons
import { linkedin, github } from '../assets/icons';

const Home = () => {
    // ✅ Add state for rotation and stage tracking
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);

    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.1, 4.7, 0];

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [1, 1, 1];
        }
        return [screenScale, screenPosition, rotation];
    }

    const adjustPlaneForScreenSize = () => {
        let screenScale, screenPosition;
         
        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0];
        } else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }
        return [screenScale, screenPosition];
    }

    // Function to handle CV download
      const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1nZtiqErc5nFaxcve4RJhlJ4Lk4iWw4x2/view?usp=sharing');
};


    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
    const [planeScale, planePosition] = adjustPlaneForScreenSize();

    return (
        <section className="w-full h-screen relative">
            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>
            
            <Canvas
                className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{ near: 0.1, far: 1000 }}>
                <Suspense fallback={<Loader />}>
                    {/* ✅ Add proper lighting */}
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

                    <Bird />
                    <Sky />
                    
                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                    />

                    <Plane 
                        isRotating={isRotating}
                        scale={planeScale}
                        position={planePosition}
                        rotation={[0, 20, 0]}
                    />
                </Suspense>
            </Canvas>

            {/* Social Links and CV Download Section */}
            <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center items-center gap-6">
                {/* LinkedIn Button */}
                <a
                    href="https://www.linkedin.com/in/prabhat-kumar-pal-41a1832ab/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-blue-50 transition-colors duration-300"
                >
                    <img 
                        src={linkedin} 
                        alt="LinkedIn" 
                        className="w-6 h-6"
                    />
                </a>

                {/* GitHub Button */}
                <a
                    href="https://github.com/Prabhat993"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-300"
                >
                    <img 
                        src={github} 
                        alt="GitHub" 
                        className="w-6 h-6"
                    />
                </a>

                {/* Download CV Button */}
                <button
                
                    onClick={handleDownloadCV}
                    className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
                >
                    <svg 
                        className="w-5 h-5" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                        />
                    </svg>
                    Download CV
                </button>
            </div>
        </section>
    )
}

export default Home;