precision mediump float;

varying vec3 pos;
varying vec2 vUv;

void main() {
	vec3 normal = normalize(cross(dFdx(pos), dFdy(pos)));
    vec3 color = vec3(0.98, 0.68, 0.36) + normal  * (1.0 - vUv.y);

    gl_FragColor = vec4(color, 1.0);
}