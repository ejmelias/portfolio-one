"use client"
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import simulationVertex from '@/shaders/fbo-particles/simulationVertex.glsl'
import simulationFragment from '@/shaders/fbo-particles/simulationFragment.glsl'

function loadImage(src) {
    return new Promise((resolve, reject) => {
        const image = new THREE.ImageLoader();

        image.load(src, (loadedImage) => {
            const height = loadedImage.height;
            const width = loadedImage.width;
            const canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(loadedImage, 0, 0)
            const imgData = ctx.getImageData(0, 0, width, height);
            const iData = imgData.data;

            const length = width * height * 4;
            const threshold = 34;
            const data = new Float32Array(length);
        
            for(let i = 0; i < length; i++) {
                const stride = i * 4;
        
                if(iData[stride] > threshold) {
                    const grayscale = ((( iData[stride] / 0xFF * 0.299 +iData[stride+1]/0xFF * 0.587 + iData[stride+2] / 0xFF * 0.114 ) * 64) * 0.02)
                    data[stride] = ( ( i % width ) - width  * .5 ) * 0.02;
                    data[stride + 1] = -( parseInt( i / width ) - height * .5 ) * 0.02;
                    data[stride + 2] = 0.0 ;
                    data[stride + 3] = (15.0 * grayscale); //using alpha to pass a value to be used as point size
                }
            }
            resolve({ width: width, height: height, data: data });
        }, undefined, reject);
    });
  }

const generateImagePositions = (src) => {
    const image = new THREE.ImageLoader().load(src); 
    const height = image.height;
    const width = image.width;
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0)
    const imgData = ctx.getImageData(0, 0, width, height);
    const iData = imgData.data;

    const length = width * height * 4;

    const threshold = 34;
    let pointCount = 0;
    for (let i = 0; i < length; i++) {
        const stride = i * 4;
        if(iData[stride] > threshold) pointCount++;
    }

    const data = new Float32Array(length);

    for(let i = 0; i < length; i++) {
        const stride = i * 4;

        if(iData[stride] > threshold) {
            const grayscale = ((( iData[stride] / 0xFF * 0.299 +iData[stride+1]/0xFF * 0.587 + iData[stride+2] / 0xFF * 0.114 ) * 64) * 0.02)
            data[stride] = ( ( i % width ) - width  * .5 ) * 0.02;
            data[stride + 1] = -( parseInt( i / width ) - height * .5 ) * 0.02;
            data[stride + 2] = 0.0 ;
            data[stride + 3] = (15.0 * grayscale); //using alpha to pass a value to be used as point size
        }
    }

    return { width: width, height: height, data: data };
}

const generateSphereSurfacePositions = (width, height) => {
    // we need to create a vec4 since we're passing the positions to the fragment shader
    // data textures need to have 4 components, R, G, B, and A
    const length = width * height * 4; 
    const data = new Float32Array(length);

    // Fill Float32Array here
    for (let i = 0; i < length; i++) {
        const stride = i * 4;

        const radius = 2.5
        const u = Math.random();
        const v = Math.random();
    
        const theta = 2 * Math.PI * u; 
        const phi = Math.acos(2 * v - 1)
    
        data[stride] = radius * Math.sin(phi) * Math.cos(theta)        //x
        data[stride + 1] = radius * Math.sin(phi) * Math.sin(theta);   //y
        data[stride + 2] = (radius * Math.cos(phi));                     //z
        data[stride + 3] = 1.0; // this value will not have any impact
    }

    return data;
};

const generatePlanePositions = (width, height) => {
    const length = width * height * 4;
    const data = new Float32Array(length);

    for (let i = 0; i < length; i++) {
        const stride = i * 4;
    
        data[stride] =  (Math.random() - 0.5) * 10.0;      //x
        data[stride + 1] = (Math.random() - 0.5) * 10.0;   //y
        data[stride + 2] = 0.0;                            //z
        data[stride + 3] = 1.0; // this value will not have any impact
    }
    return data;
}

const generateCubePositions = (width, height) => {
    const length = width * height * 4;
    const data = new Float32Array(length);

    for (let i = 0; i < length; i++) {
        const stride = i * 4;
    
        data[stride] = ((Math.random() - 0.5) * 3.0);         //x
        data[stride + 1] = (Math.random() - 0.5) * 3.0;     //y
        data[stride + 2] = (Math.random() - 0.5) * 3.0;     //z
        data[stride + 3] = 1.0; // this value will not have any impact
    }
    return data;
}

const generateSpherePositions = (width, height) => {
    const length = width * height * 4;
    const data = new Float32Array(length);

    for (let i = 0; i < length; i++) {
        const stride = i * 4;
    
        const distance = Math.sqrt(Math.random()) * 2.0;
        const theta = THREE.MathUtils.randFloatSpread(360); 
        const phi = THREE.MathUtils.randFloatSpread(360); 
    
        data[stride] = distance * Math.sin(theta) * Math.cos(phi);         //x
        data[stride + 1] = distance * Math.sin(theta) * Math.sin(phi);     //y
        data[stride + 2] = distance * Math.cos(theta);                     //z
        data[stride + 3] = 1.0; // this value will not have any impact
    }
    return data;
}

// Create a custom simulation shader material
class SimulationMaterial extends THREE.ShaderMaterial {

    constructor(size) {
        /*//super()
    
        this.image = null;

        loadImage("portrait2.jpg")
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error("Failed to load image:", error);
            });
        
        // Create a Data Texture with our positions data
        const positionsTextureA = new THREE.DataTexture(
            image.data,
            image.width,
            image.height,
            THREE.RGBAFormat,
            THREE.FloatType
        );
        positionsTextureA.needsUpdate = true;
        */
        const positionsTextureA = new THREE.DataTexture(
            generateCubePositions(size, size),
            size,
            size,
            THREE.RGBAFormat,
            THREE.FloatType
        );
        positionsTextureA.needsUpdate = true;

        const positionsTextureB = new THREE.DataTexture(
            generateSphereSurfacePositions(size, size),
            size,
            size,
            THREE.RGBAFormat,
            THREE.FloatType
        );
        positionsTextureB.needsUpdate = true;
        
        const simulationUniforms = {
            // Pass the positions Data Texture as a uniform
            positionsA: { value: positionsTextureA },
            positionsB: { value: positionsTextureB },
            uCoords: {value: new THREE.Vector2(0.0, 0.0)},
            uTime: { value: 0 },
            uMix: { value: 0.0 },
            uMix2: { value: 0.0 },
        };

        super({
            uniforms: simulationUniforms,
            vertexShader: simulationVertex,
            fragmentShader: simulationFragment,
        });
    }

    loadImage(src) {
        return new Promise((resolve, reject) => {
            const image = new THREE.ImageLoader();
    
            image.load(src, (loadedImage) => {
                const height = loadedImage.height;
                const width = loadedImage.width;
                const canvas = document.createElement("canvas");
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(loadedImage, 0, 0)
                const imgData = ctx.getImageData(0, 0, width, height);
                const iData = imgData.data;
    
                const length = width * height * 4;
                const threshold = 34;
                const data = new Float32Array(length);
            
                for(let i = 0; i < length; i++) {
                    const stride = i * 4;
            
                    if(iData[stride] > threshold) {
                        const grayscale = ((( iData[stride] / 0xFF * 0.299 +iData[stride+1]/0xFF * 0.587 + iData[stride+2] / 0xFF * 0.114 ) * 64) * 0.02)
                        data[stride] = ( ( i % width ) - width  * .5 ) * 0.02;
                        data[stride + 1] = -( parseInt( i / width ) - height * .5 ) * 0.02;
                        data[stride + 2] = 0.0 ;
                        data[stride + 3] = (15.0 * grayscale); //using alpha to pass a value to be used as point size
                    }
                }
                resolve({ width: width, height: height, data: data });
            }, undefined, reject);
        });
    }
}

export default SimulationMaterial;
