uniform float uTime;

varying vec2 vUv;
varying float vTime;
varying vec4 vPosition;

void main()
{  
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * instanceMatrix * vec4(position, 1.0);

    vUv = uv;
    vTime = uTime;
    vPosition = instanceMatrix * vec4(position, 1.0);
}