import React, { useEffect } from 'react';
import { Application } from '@splinetool/runtime';

const Sunset = () => {
  useEffect(() => {
    
    const canvas = document.getElementById('canvas3d');
    if (canvas instanceof HTMLCanvasElement) {
        const app = new Application(canvas);
        app.load('https://prod.spline.design/yzopg13YOpYqJ4DG/scene.splinecode');
      }
    return () => {
      // Agrega aquí la lógica de limpieza si es necesario
    };
  }, []); // El segundo argumento del useEffect es un array vacío para que se ejecute solo una vez

  return (
    <div>
      <canvas id="canvas3d" /> {/* Asegúrate de tener un elemento con el id 'canvas3d' */}
      {/* Otros componentes de tu aplicación */}
    </div>
  );
};

export default Sunset;