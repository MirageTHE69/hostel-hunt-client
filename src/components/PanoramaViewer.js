// PanoramaViewer.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PanoramaViewer = ({ image }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas });
    const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    const scene = new THREE.Scene();

    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);

    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(image);
    const material = new THREE.MeshBasicMaterial({ map: texture });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.set(0, 0, 0.1);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);

      // Rotate the camera to animate the panorama
      camera.rotation.y += 0.001; // Adjust rotation speed as needed
    };

    animate();

    const handleResize = () => {
      const { clientWidth, clientHeight } = canvas;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      renderer.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, [image]);

  const handleFullScreen = () => {
    const canvas = canvasRef.current;
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen();
    } else if (canvas.msRequestFullscreen) {
      canvas.msRequestFullscreen();
    }
  };

  return (
    <div>
      <canvas ref={canvasRef} />
      <button onClick={handleFullScreen}>Toggle Fullscreen</button>
    </div>
  );
};

export default PanoramaViewer;
