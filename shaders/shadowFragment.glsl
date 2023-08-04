uniform float uTime;
varying vec2 vUv;
void main() {
    vec3 color = vec3(0.5, 0.5, 0.5);
    float strength = 1.0 - distance(vUv, vec2(0.5)) * (3.0 + (sin(uTime)/2.0));

    gl_FragColor = vec4(color, strength);
}