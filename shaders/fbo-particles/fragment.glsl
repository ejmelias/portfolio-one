uniform float uTime;

vec3 HueShift (vec3 Color, float Shift) {
    vec3 P = vec3(0.55735)*dot(vec3(0.55735),Color);
    vec3 U = Color-P;
    vec3 V = cross(vec3(0.55735),U);    
    Color = U*cos(Shift*6.2832) + V*sin(Shift*6.2832) + P;
    return vec3(Color);
}

void main() {
    vec3 color = vec3(0.27, 0.32, 0.48);
    //color = HueShift(color, sin(uTime * 0.2));
    gl_FragColor = vec4(color, 1.0 - step(0.5, distance(gl_PointCoord, vec2(0.5))));
}