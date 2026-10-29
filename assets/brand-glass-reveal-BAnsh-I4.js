import{c as e,d as t,f as n,l as r}from"./logo-azul-BkGn1NT_.js";var i=`<?xml version="1.0" encoding="UTF-8"?>
<svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 194.22 132.46">
  <defs>
    <style>
      .cls-1 {
        fill: #003c64;
      }
    </style>
  </defs>
  <g id="Capa_1-2" data-name="Capa 1">
    <g>
      <path class="cls-1" d="M127.97,127.92c-.88,2.14-.98,2.4-1.86,4.54H12.02L.02,120.46v-40.13l23.75,23.75h40.13L0,40.19V.05l5.17,5.17,6.69,6.69,116.11,116.01Z"/>
      <path class="cls-1" d="M194.22,0v132.46h-28.38V45.19l-39.96,39.96-5.17,5.17h-3.69L26.7,0h40.13l50.19,50.19h3.69S165.68,5.22,165.68,5.22l.16.16v-.32l5.06-5.06h23.32Z"/>
    </g>
  </g>
</svg>`,a=n(t(),1),o=e(),s={tileSize:256,logoScale:.7,finalScale:.69,logoOffset:[0,0],iconPlate:!1,keepPlate:!1,originalColors:!1,opticalDepth:1.1,dispersion:1.7,colorBleed:1.25,doubleBevel:1,bevelWidth:.14,corner:4.8,cornerPull:2.1,cornerWidth:2.2,cornerFocus:.58,edgeSmear:2.85,stretch:0,tilt:.35,bulge:1,specular:1,halo:0,shadow:1,ripple:1,bounce:0,response:.42,startSize:.2,startZoom:2.6,glide:2.3,present:2.4,drift:.12,swell:.5,focus:1,sheen:1,lightTurn:.9,glint:1,hold:1,background:`#e9e9eb`,plateColor:`#ffffff`,logoColor:`#0e1428`},c={light:s,dark:{...s,logoScale:.72,finalScale:1,iconPlate:!0,halo:1,shadow:0,ripple:.5,startZoom:1.6,drift:.05,opticalDepth:.75,bevelWidth:.22,dispersion:.9,colorBleed:.45,corner:5,cornerPull:1.4,edgeSmear:1.2,tilt:0,cornerWidth:1.2,cornerFocus:.4,glint:0,background:`#000000`,plateColor:`#05070b`,logoColor:`#ffffff`}},l=1024,u=.75;function d(e){return new Promise((t,n)=>{let r=new Image;e.startsWith(`data:`)||(r.crossOrigin=`anonymous`),r.onload=()=>t(r),r.onerror=()=>n(Error(`GlassIconReveal: the logo could not be loaded`)),r.src=e})}function f(e){return e.trimStart().startsWith(`<`)}function p(e){let t=new DOMParser().parseFromString(e,`image/svg+xml`).documentElement;if(!t||t.nodeName.toLowerCase()!==`svg`)throw Error(`GlassIconReveal: the SVG could not be read`);let n=parseFloat(t.getAttribute(`width`)||``),r=parseFloat(t.getAttribute(`height`)||``),i=(t.getAttribute(`viewBox`)||``).split(/[\s,]+/).map(Number);i.length===4&&i[2]>0&&i[3]>0&&([n,r]=[i[2],i[3]]),n>0&&r>0||(n=r=100);let a=l/Math.max(n,r);t.setAttribute(`width`,String(Math.round(n*a))),t.setAttribute(`height`,String(Math.round(r*a)));let o=new XMLSerializer().serializeToString(t).replace(/currentColor/g,`#ffffff`);return`data:image/svg+xml;charset=utf-8,`+encodeURIComponent(o)}var m=e=>f(e)?p(e):e;function h(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=l;let i=r.getContext(`2d`,{willReadFrequently:!0}),a=Math.min(l/t,l/n),o=(l-t*a)/2,s=(l-n*a)/2;i.drawImage(e,o,s,t*a,n*a);let c=i.getImageData(0,0,l,l).data,d=!0;for(let e=3;e<c.length;e+=388)if(c[e]<250){d=!1;break}let f=[c[0],c[1],c[2]],p=(e,t,n)=>Math.min(1,Math.max(0,(Math.hypot(e-f[0],t-f[1],n-f[2])/441-.08)/.2)),m=l,h=l,g=-1,_=-1;for(let e=0;e<l;e++)for(let t=0;t<l;t++){let n=(e*l+t)*4;(d?p(c[n],c[n+1],c[n+2])*255:c[n+3])>8&&(t<m&&(m=t),t>g&&(g=t),e<h&&(h=e),e>_&&(_=e))}if(g<0)throw Error(`GlassIconReveal: the logo is empty`);let v=g-m+1,y=_-h+1,b=l*u/Math.max(v,y),x=document.createElement(`canvas`);x.width=x.height=l;let S=x.getContext(`2d`,{willReadFrequently:!0});if(S.imageSmoothingQuality=`high`,S.drawImage(e,l/2-(m+v/2-o)*b,l/2-(h+y/2-s)*b,t*a*b,n*a*b),d){let e=S.getImageData(0,0,l,l),t=e.data;for(let e=0;e<t.length;e+=4)t[e+3]=Math.round(t[e+3]*p(t[e],t[e+1],t[e+2]));S.putImageData(e,0,0)}return x}function g(e){let t=l*l,n=e.getContext(`2d`,{willReadFrequently:!0}).getImageData(0,0,l,l).data,r=0x56bc75e2d63100000,i=new Float64Array(t),a=new Float64Array(t);for(let e=0;e<t;e++){let t=n[e*4+3]/255;if(t>=1)i[e]=0,a[e]=r;else if(t<=0)i[e]=r,a[e]=0;else{let n=.5-t;i[e]=n>0?n*n:0,a[e]=n<0?n*n:0}}let o=new Float64Array(l),s=new Float64Array(1025),c=new Uint16Array(l);_(i,o,c,s,r),_(a,o,c,s,r);let u=new Float32Array(t);for(let e=0;e<t;e++)u[e]=(Math.sqrt(i[e])-Math.sqrt(a[e]))/l;return u}function _(e,t,n,r,i){for(let a=0;a<l;a++)v(e,a,l,t,n,r,i);for(let a=0;a<l;a++)v(e,a*l,1,t,n,r,i)}function v(e,t,n,r,i,a,o){i[0]=0,a[0]=-o,a[1]=o,r[0]=e[t];for(let s=1,c=0,u=0;s<l;s++){r[s]=e[t+s*n];let l=s*s;do{let e=i[c];u=(r[s]-r[e]+l-e*e)/(s-e)/2}while(u<=a[c]&&--c>-1);c++,i[c]=s,a[c]=u,a[c+1]=o}for(let o=0,s=0;o<l;o++){for(;a[s+1]<o;)s++;let c=i[s],l=o-c;e[t+o*n]=r[c]+l*l}}var y=new Map;function b(e){let t=y.get(e);return t||(t=d(m(e)).then(e=>{let t=h(e,e.naturalWidth||l,e.naturalHeight||l);return{canvas:t,sdf:g(t)}}),y.set(e,t),t.catch(()=>y.delete(e))),t}var x=`#version 300 es
in vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }`,S=`#version 300 es
precision highp float;
out vec4 outColor;

uniform vec2 uCenter;      // device px, GL coords
uniform float uTile;       // tile size, device px
uniform sampler2D uSdf;    // signed distance, texture units, + outside
uniform sampler2D uCol;    // premultiplied colour, mipmapped
uniform float uTexSize;
uniform float uBoxFrac;

uniform float uPlateScale; // plate size relative to the tile
uniform float uShapeN;     // superellipse exponent: 2 = circle
uniform float uCornerN;    // final exponent, used by the ghost
uniform float uOptics;     // 1 = full refraction, 0 = flat
uniform float uPlateAlpha; // 1 = glass shown, 0 = bare logo
uniform float uLogoHalf;   // logo half size in plate units (zoom included)
uniform vec2 uLogoOff;     // logo centre, plate units
uniform float uBold;       // stroke swell, in logo half-size units
uniform float uBlur;       // edge softness, plate units
uniform float uFrost;      // milky lift inside a young bubble
uniform float uDome;       // lens bulge height
uniform float uDrop;       // 1 while the glass is a round droplet, 0 once it has spread into the tile
uniform float uPinch;      // the face's stretch toward its corners, at the rim
uniform float uTilt;       // extra stretch of the rising diagonal's corners (0–1)
uniform float uRim;
uniform float uHalo;
uniform float uShadow;
uniform float uGhost;
uniform float uRipR;       // ripple radius, plate sizes
uniform float uRipA;
uniform float uBare;       // 1 once the logo may show without glass (the ending)
uniform float uReach;      // the rim band's full width, plate units
uniform float uCornerPull; // how much harder the corners pull than the sides
uniform float uStreak;     // how far a corner smears content along the rim, in band widths
uniform float uWiden;      // how much wider the folding band grows toward the corners
uniform float uSlab;       // how far the slab stands above the logo, plate units
uniform float uEtaSpread;  // index spread across the spectrum (red highest)
uniform float uFocus;      // how far in along the diagonal a corner focuses, plate units
uniform float uFocusK;     // how quickly the view slides back from the focus across the band
uniform float uFocusSplit; // how much further in red meets than violet, plate units
uniform float uRimLine;    // how far across the band the sight line takes to turn in to the focus
uniform float uCornerOn;   // 0 while the glass is round, 1 once it has spread into the tile
uniform float uDissolve;   // 0 → 1 as the glass lets go of the logo
uniform float uGlow;       // colour bleed in the rim, plate units on screen
uniform float uFaceDisp;   // lateral colour across the face
uniform float uVivid;      // chroma lift of the dispersed light

uniform float uDisp;
uniform float uDouble;
uniform float uBevelW;
uniform float uSpec;
uniform float uIconPlate;
uniform float uUseColor;
uniform float uLightScene; // 1 = light backdrop, 0 = dark
uniform float uLightGlass; // the same for what the glass sits on (the plate, when there is one)
uniform float uKeep;       // 1 = the glass settles into a flat plate instead of letting go of it
uniform float uSheen;      // strength of the light band crossing the face
uniform float uSweep;      // where that band is, plate sizes along its diagonal
uniform float uLightAng;   // how far the rim light has turned, radians
uniform float uGlint;      // where the finishing band of light crosses the bare logo, along its diagonal
uniform float uGlintA;     // its strength

uniform vec3 uBg;
uniform vec3 uPlateCol;
uniform vec3 uLogoCol;

float px; // one device pixel in plate units

vec2 rot(vec2 v, float a) { float c = cos(a), s = sin(a); return vec2(c * v.x - s * v.y, s * v.x + c * v.y); }

// aa: footprint of one screen pixel at q, plate units.
vec4 logoAt(vec2 q, float blur, float aa) {
  float L = uLogoHalf;
  float k = 0.5 * uBoxFrac / L;
  vec2 uv = vec2(0.5 + (q.x - uLogoOff.x) * k, 0.5 - (q.y - uLogoOff.y) * k);
  float d = texture(uSdf, uv).r / k;
  float w = 0.75 * aa + blur;
  float a = 1.0 - smoothstep(-w, w, d - uBold * L);
  vec3 c = uLogoCol;
  if (uUseColor > 0.5) {
    float lod = log2(max(1.0, w * k * uTexSize));
    vec4 c0 = textureLod(uCol, uv, lod);
    vec4 c1 = textureLod(uCol, uv, lod + 3.0);
    vec4 c2 = textureLod(uCol, uv, 7.0);
    c = c2.rgb / max(c2.a, 1e-4);
    c = mix(c, c1.rgb / max(c1.a, 1e-4), smoothstep(0.0, 0.06, c1.a));
    c = mix(c, c0.rgb / max(c0.a, 1e-4), smoothstep(0.02, 0.3, c0.a));
  }
  return vec4(c, a);
}

// Superellipse field. Returns signed distance (plate units, − inside); g = 1 on the rim.
float shape(vec2 p, float scale, float n, out vec2 nOut, out float g, out vec2 dg) {
  vec2 pp = p / scale;
  vec2 a = max(abs(pp), vec2(1e-6));
  g = pow(pow(a.x, n) + pow(a.y, n), 1.0 / n);
  dg = sign(pp) * pow(a, vec2(n - 1.0)) * pow(max(g, 1e-6), 1.0 - n);
  float dgl = max(length(dg), 1e-6);
  nOut = dg / dgl;
  return (g - 1.0) / dgl * scale;
}

// Curvature radius (plate units) of the shape's contour through p.
float contourRadius(vec2 p, float scale, float n) {
  vec2 a = max(abs(p / scale), vec2(1e-4));
  vec2 a1 = pow(a, vec2(n - 1.0));
  vec2 a2 = pow(a, vec2(n - 2.0));
  float k = (n - 1.0) * (a2.x * a1.y * a1.y + a2.y * a1.x * a1.x) / pow(max(dot(a1, a1), 1e-30), 1.5);
  return scale / max(k, 1e-3);
}

// Where the glass at x = s / bwF across its rounded edge looks: a slab uSlab above the logo with a
// quarter-round edge of radius bwF. A straight-down sight line bends inward by Snell's law, so the
// outer rim looks deepest and the view eases back to the face across the edge.
vec2 refractSample(float x, float bwF, float eta, float R, vec2 dirOut, vec2 p, float dome, float offMul) {
  float u = clamp(1.0 - x, 0.0, 0.995);
  float th = asin(u), thr = asin(u / eta);
  float z = uSlab + bwF * sqrt(1.0 - u * u);
  float off = offMul * z * tan(th - thr);
  off = off / (1.0 + off / (6.0 * R));
  return p - (dirOut * off + p * dome) * uOptics;
}

float gauss(float x, float c, float w) { float d = (x - c) / w; return exp(-0.5 * d * d); }
float band(float x, float a, float b, float w) { return smoothstep(a - w, a, x) * (1.0 - smoothstep(b, b + w, x)); }

// Visible spectrum, red (0) to violet (1).
float bump(float x, float c, float w) { float d = (x - c) / w; return exp(-0.5 * d * d); }
vec3 spectrum(float x) {
  return vec3(bump(x, 0.34, 0.2) + 0.08 * bump(x, 0.93, 0.05), bump(x, 0.58, 0.1), bump(x, 0.8, 0.11));
}

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

void main() {
  px = 2.0 / uTile;
  vec2 p = (gl_FragCoord.xy - uCenter) * px;

  vec4 lg = logoAt(p, uBlur, px);
  // Once the glass has let go, a band of light crosses the bare logo and leaves it at rest.
  float glintD = dot(p, vec2(0.8, 0.6)) - uGlint;
  vec3 logoLit = mix(lg.rgb, vec3(0.80, 0.93, 0.97), 0.7 * uGlintA * exp(-glintD * glintD / 0.02));
  vec3 plain = mix(uBg, logoLit, lg.a * uBare);

  vec2 nOut, dg; float g;
  float sd = shape(p, uPlateScale, uShapeN, nOut, g, dg);
  float s = -sd;
  float bw = max(uBevelW, 0.004) * uPlateScale;
  float x = clamp(s / bw, 0.0, 1.0);
  float R = contourRadius(p, uPlateScale, uShapeN);
  vec2 pq = p * p;
  float diag = 4.0 * pq.x * pq.y / max((pq.x + pq.y) * (pq.x + pq.y), 1e-6);
  float tilt = mix(1.0 - uTilt, 1.0, smoothstep(-0.02, 0.02, p.x * p.y));
  float pinchPart = uPinch * min(g * g, 1.0) * diag * diag * tilt;
  float dome = uDome * (1.0 - min(g * g, 1.0)) + pinchPart;
  vec2 dirOut = normalize(mix(nOut, p / max(length(p), 1e-4), 0.2));
  // Rounded corners curve both ways, so they draw content in from deeper than the sides.
  float cornerness = max(smoothstep(0.1, 0.9, 4.0 * nOut.x * nOut.x * nOut.y * nOut.y), smoothstep(0.15, 0.75, diag));
  float offMul = 1.0 + 0.4 * max(uCornerPull - 1.0, 0.0) * tilt * cornerness * uCornerOn;
  // Around a corner every sight line meets at one focus a little way in along the diagonal.
  vec2 focus = sign(p) * (pow(0.5, 1.0 / uShapeN) - uFocus * 0.70710678) * uPlateScale;
  float focusW = tilt * cornerness * uOptics * uCornerOn;
  float bwF = max(uReach, 0.004) * (1.0 + uWiden * tilt * cornerness * uCornerOn);
  float xf = clamp(s / bwF, 0.0, 1.0);
  // Footprint of one pixel after refraction, measured in uniform control flow.
  vec2 qc = refractSample(xf, bwF, 1.5, R, dirOut, p, dome, offMul);
  float foot = max(max(length(dFdx(qc)), length(dFdy(qc))), 0.25 * px);

  // Backdrop: anticipation ghost, ripple, soft lift shadow and glow.
  vec3 bg = uBg;
  vec3 lift = mix(uBg + vec3(0.06), mix(uBg, vec3(1.0), 0.55), uLightScene);
  if (uGhost > 0.001) {
    vec2 gn, gdg; float gg;
    float gsd = shape(p, 1.0, uCornerN, gn, gg, gdg);
    bg = mix(bg, lift, uGhost * 0.12 * (1.0 - smoothstep(-0.16, 0.14, gsd)));
    bg *= 1.0 - uGhost * 0.03 * uLightScene * exp(-max(gsd, 0.0) / 0.12) * step(0.0, gsd);
  }
  float outside = max(sd, 0.0);
  if (uRipA > 0.001) {
    float d0 = (uRipR - 1.0) * uPlateScale;
    float rx = (sd - d0) / 0.022;
    float ring = exp(-rx * rx);
    bg += uRipA * ring * (0.04 * (0.55 + 0.45 * dot(nOut, normalize(vec2(-0.5, 0.8))))) * mix(0.5, 1.0, uLightScene);
    bg -= uRipA * 0.016 * uLightScene * exp(-(rx - 1.6) * (rx - 1.6));
  }
  float shadowFall = max(sd, 0.0) / (0.9 * uPlateScale);
  bg *= 1.0 - uShadow * 0.03 * exp(-shadowFall * shadowFall) * step(0.0, sd);
  vec3 haloCol = mix(vec3(0.62, 0.69, 0.80), vec3(1.0), uLightScene);
  bg = mix(bg, haloCol, clamp(uHalo * (0.30 * exp(-outside / (0.025 * uPlateScale)) + 0.07 * exp(-outside / (0.12 * uPlateScale))), 0.0, 1.0) * step(0.0, sd));

  vec3 col = bg;
  float soft = px + uBlur * 0.8 + 0.06 * uDissolve * (1.0 - uKeep) * uPlateScale;
  if (sd < soft) {
    // Lighting surface: a superellipse quarter, flat toward the face and steep at the rim.
    float y1 = 1.0 - x;
    const float K = 2.6;
    float base1 = max(1.0 - pow(y1, K), 1e-4);
    float db = min(pow(y1, K - 1.0) * pow(base1, 1.0 / K - 1.0), 25.0);
    // A second, lower step just inside the first draws the faint inner line.
    float s1 = bw * 0.62;
    float w2 = bw * 0.22;
    float t2 = clamp((s - s1) / w2, -1.0, 1.0);
    float dh2 = uDouble * bw * 0.16;
    float dd = dh2 * 0.5 * cos(t2 * 1.5707963) * 1.5707963 / w2 * step(abs(t2), 0.999);
    vec2 gDome = -uDome * 2.0 * g * dg * step(g, 1.0);
    vec2 grad = -(db + dd) * nOut + gDome;

    vec3 back = mix(uBg, uPlateCol, uIconPlate);
    vec3 liftG = mix(back + vec3(0.06), mix(back, vec3(1.0), 0.55), uLightGlass);
    float rblur = uBlur + 0.05 * length(qc - p) + min(uGlow * uOptics * (1.0 - xf) * foot / px, 0.04);

    // Each wavelength refracts by its own index, so everything the edge draws in fans into colour
    // while the face stays crisp. Around a corner the samples also smear along the rim.
    float cornerW = smoothstep(0.1, 0.9, 4.0 * nOut.x * nOut.x * nOut.y * nOut.y);
    float streak = 0.35 * uStreak * bw * mix(0.15, 1.0, cornerW) * pow(1.0 - xf, 1.5) * uOptics;
    vec2 tangent = vec2(-nOut.y, nOut.x);
    vec3 acc = vec3(0.0), wsum = vec3(0.0);
    for (int i = 0; i < 20; i++) {
      float lam = (float(i) + 0.5) / 20.0;
      float c = uDisp * (1.0 - 2.0 * lam);
      vec2 along = tangent * (streak * 2.0 * (fract(float(i) * 0.618034 + 0.31) - 0.5));
      float cf = uDisp * (1.0 - 2.0 * lam) * (lam > 0.5 ? 1.0 : 0.5);
      vec2 sp = refractSample(xf, bwF, 1.5 + uEtaSpread * c, R, dirOut, p + along,
                              dome + pinchPart * 0.3 * c, offMul);
      vec2 focusL = focus - sign(p) * (0.70710678 * uFocusSplit * c * uPlateScale);
      float wFocus = pow(1.0 - xf, uFocusK) * smoothstep(0.0, uRimLine * (1.0 + 0.6 * c), xf);
      sp = mix(sp, mix(p + along, focusL, wFocus), focusW);
      float faceOnly = smoothstep(0.7, 1.0, xf) * uOptics;
      sp *= 1.0 + uFaceDisp * cf * faceOnly;
      vec4 l = logoAt(sp, rblur + 0.12 * streak + uFaceDisp * 0.5 * max(c, 0.0) * faceOnly, foot);
      vec3 w = spectrum(lam);
      acc += mix(back, l.rgb, l.a) * w;
      wsum += w;
    }
    vec3 trans = acc / wsum;
    float tl = dot(trans, vec3(0.2126, 0.7152, 0.0722));
    trans = clamp(tl + (trans - tl) * (1.0 + uVivid * uOptics), 0.0, 1.0);
    // A young droplet is milky; the haze only ever lightens.
    float hazeLum = dot(trans, vec3(0.2126, 0.7152, 0.0722));
    float hazeGate = mix(1.0 - smoothstep(0.25, 0.75, hazeLum), smoothstep(0.25, 0.75, hazeLum), uLightGlass);
    trans = mix(trans, liftG, uFrost * 0.45 * hazeGate);

    float glassAmt = pow(1.0 - uDissolve, 1.5);
    float lit = uSpec * glassAmt;
    vec3 rimCol = mix(vec3(0.80, 0.87, 0.97), vec3(1.0), uLightGlass);

    // Light backdrop: the thick edge glows softly white over a clear face, with a hairline that is
    // bright along the top and right and a thin dark silhouette down the left and bottom.
    float sc = uPlateScale;
    float tLum = dot(trans, vec3(0.2126, 0.7152, 0.0722));
    float lightOnly = smoothstep(0.35, 0.85, tLum);
    float hw = smoothstep(-0.85, 0.5, dot(nOut, rot(vec2(0.5, 0.866), uLightAng)));
    float tileBand = band(s, 0.016 * sc, 0.075 * sc, 0.022 * sc);
    float dropBand = (1.0 - smoothstep(0.06 * sc, 0.13 * sc, s)) * smoothstep(0.0, 0.004 * sc, s);
    float glow = mix(0.32 * tileBand, 0.75 * dropBand, uDrop) * lightOnly;
    float edgeLine = gauss(s, 0.005 * sc, 0.0045 * sc);
    float lip = gauss(s, 0.15 * sc, 0.007 * sc) * uDouble * (1.0 - uDrop);
    vec3 lightGlass = mix(trans, vec3(1.0), glow * glassAmt);
    lightGlass += (0.075 * hw * edgeLine + 0.06 * (0.4 + 0.6 * hw) * lip) * lit;
    lightGlass *= 1.0 - 0.05 * (1.0 - hw) * edgeLine * glassAmt * (1.0 - uDrop);
    lightGlass = mix(lightGlass, vec3(1.0), 0.55 * uDrop * glassAmt * edgeLine);

    // Dark backdrop: a cool rim light that grows toward the steep edge, and a small key highlight.
    vec3 Nl = normalize(vec3(-grad, 1.0));
    float edge = 1.0 - Nl.z;
    vec2 ldir = rot(normalize(vec2(-0.62, 0.78)), uLightAng);
    float side = dot(nOut, ldir);
    float fres = pow(edge, 1.5);
    vec3 rim = rimCol * fres * (0.35 + 0.65 * max(side, -side * 0.8)) * uRim * 0.65;
    vec3 Hv = normalize(normalize(vec3(-0.45, 0.6, 0.66)) + vec3(0.0, 0.0, 1.0));
    float spc = pow(max(dot(Nl, Hv), 0.0), 140.0) * 0.8 * smoothstep(0.0, 0.25, y1);
    vec3 darkGlass = trans * (1.0 - 0.25 * fres) + (rim + vec3(spc)) * lit;
    darkGlass = mix(darkGlass, rimCol, uDrop * 0.4 * uSpec * (1.0 - smoothstep(0.0, 0.1 * uPlateScale, s)));
    vec3 glass = mix(darkGlass, lightGlass, uLightGlass);

    // While the glass holds the logo a soft band of light crosses the face, brightest near the rim.
    float sweepD = dot(p / uPlateScale, normalize(vec2(0.8, 0.6))) - uSweep;
    float sheen = uSheen * glassAmt * exp(-sweepD * sweepD / 0.03) * (0.55 + 0.45 * (1.0 - x));
    glass = mix(glass, vec3(1.0), sheen * mix(0.22, 0.42, uLightGlass));

    float cov = clamp(0.5 - sd / soft, 0.0, 1.0);
    col = mix(bg, glass, cov);
  }

  vec3 outc = mix(plain, col, uPlateAlpha);
  outc += (hash(gl_FragCoord.xy) - 0.5) / 255.0;
  outColor = vec4(outc, 1.0);
}`;function C(e){let t=e.getContext(`webgl2`,{antialias:!1,premultipliedAlpha:!1});if(!t)return null;let n=(e,n)=>{let r=t.createShader(e);if(t.shaderSource(r,n),t.compileShader(r),!t.getShaderParameter(r,t.COMPILE_STATUS))throw Error(t.getShaderInfoLog(r)||`shader`);return r},r=t.createProgram();if(t.attachShader(r,n(t.VERTEX_SHADER,x)),t.attachShader(r,n(t.FRAGMENT_SHADER,S)),t.linkProgram(r),!t.getProgramParameter(r,t.LINK_STATUS))throw Error(t.getProgramInfoLog(r)||`program`);t.useProgram(r),t.bindBuffer(t.ARRAY_BUFFER,t.createBuffer()),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW);let i=t.getAttribLocation(r,`aPos`);t.enableVertexAttribArray(i),t.vertexAttribPointer(i,2,t.FLOAT,!1,0,0);let a={},o=t.getProgramParameter(r,t.ACTIVE_UNIFORMS);for(let e=0;e<o;e++){let n=t.getActiveUniform(r,e);a[n.name]=t.getUniformLocation(r,n.name)}let s=t.createTexture(),c=t.createTexture();t.uniform1i(a.uSdf,0),t.uniform1i(a.uCol,1);let d=!1,f=e=>{t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)};function p(e){t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,s),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.texImage2D(t.TEXTURE_2D,0,t.R16F,l,l,0,t.RED,t.FLOAT,e.sdf),f(t.LINEAR),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,c),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA8,t.RGBA,t.UNSIGNED_BYTE,e.canvas),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.generateMipmap(t.TEXTURE_2D),f(t.LINEAR_MIPMAP_LINEAR),d=!0}function m(e,n,r,i){if(d){t.viewport(0,0,n,r),t.uniform2f(a.uCenter,n/2,r/2),t.uniform1f(a.uTile,i),t.uniform1f(a.uTexSize,l),t.uniform1f(a.uBoxFrac,u);for(let n in e){let r=e[n];typeof r==`number`&&a[n]&&t.uniform1f(a[n],r)}t.uniform3fv(a.uBg,e.uBg),t.uniform3fv(a.uPlateCol,e.uPlateCol),t.uniform3fv(a.uLogoCol,e.uLogoCol),t.uniform2fv(a.uLogoOff,e.uLogoOff),t.drawArrays(t.TRIANGLES,0,3)}}function h(){t.getExtension(`WEBGL_lose_context`)?.loseContext()}return{setLogo:p,render:m,dispose:h}}var w=1.1,T=.5,E=e=>e.present+w,D=e=>e<0?0:e>1?1:e,O=(e,t,n)=>e+(t-e)*n,k=(e,t,n)=>{let r=D((n-e)/(t-e));return r*r*(3-2*r)},A=(e,t,n)=>{let r=D((n-e)/(t-e));return r*r*r*(r*(r*6-15)+10)};function j(e){let t=e.replace(`#`,``);t.length===3&&(t=t.replace(/./g,`$&$&`));let n=parseInt(t.slice(0,6),16)||0;return[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255]}var M=([e,t,n])=>.2126*e+.7152*t+.0722*n;function N(e,t,n){if(e<=0)return 0;let r=2*Math.PI/t;if(n>=1)return 1-Math.exp(-r*e)*(1+r*e);let i=r*Math.sqrt(1-n*n);return 1-Math.exp(-n*r*e)*(Math.cos(i*e)+n*r/i*Math.sin(i*e))}var P=new Map;function F(e,t,n){let r=`${e}/${t}/${n}`,i=P.get(r);if(i===void 0){let a=0,o=3;for(let r=0;r<40;r++){let r=(a+o)/2;N(r,t,n)<e?a=r:o=r}P.set(r,i=o)}return i}function I(e,t,n=0){let r=t.present,i=+!!t.keepPlate,a=1-t.bounce,o=N(e+.01,t.response,a),s=F(.85,t.response,a)-.01,c=N(e-(F(.92,t.response,a)-.01),.4,1),l=1-k(.05,1,c),u=k(0,.08,e),d=t.drift*N(e-.3,2.2,1),f=.25*N(e,.7,1)+.75*A(0,t.glide,e),p=N(e-.5,2.4,1),m=N(e-r,.95,1),h=N(e-r-.05,.8,1),g=r+.25,_=.15*t.bulge*(1-k(.4,.95,o)),v=(1+(t.startZoom-1)*(1-f))*(1-.045*p)*O(1,t.finalScale,m)*(1-.06*n),y=O(t.bevelWidth,Math.max(t.bevelWidth,.4),l),b=O(t.startSize,1,o)*(1+d)*(1+.14*h*(1-i))*(1-i*(.03*h+.06*n)),x=j(t.background);return{uPlateScale:b,uShapeN:O(2,t.corner,c),uCornerN:t.corner,uOptics:1-k(.55,1,h),uPlateAlpha:i?u*(1-n):u*(1-k(.45,1,h)),uLogoHalf:t.logoScale*v,uLogoOff:[t.logoOffset[0]*v,t.logoOffset[1]*v],uKeep:i,uSheen:t.sheen,uSweep:O(-1.6,1.6,A(.75,r-.1,e)),uLightAng:t.lightTurn*A(.4,r+.4,e),uGlint:O(-1.3,1.3,1-(1-D(e-g))**2),uGlintA:t.glint,uBold:t.swell*.03*(1-f),uBlur:t.focus*.05*(1-k(.3,.95,o))+.03*n,uFrost:t.focus*(1-k(.5,.95,o)),uPinch:.38*t.stretch*k(.1,.9,c)*k(.75,.97,f),uTilt:t.tilt,uDome:_,uDrop:l,uRim:1+.8*l,uHalo:t.halo*(.5+.5*l)*(1-i*h),uShadow:Math.max(t.shadow*k(.45,.8,o)*(1-k(0,.6,c)),.8*t.shadow*i*h),uGhost:k(0,.03,e)*(1-k(.04,.08,e)),uRipR:1+.9*Math.max(0,e-s),uRipA:t.ripple*k(s,s+.06,e)*Math.exp(-Math.max(0,e-s)/.6),uBare:(1-i)*k(r-.25,r,e)*(1-n),uReach:y*b,uCornerPull:t.cornerPull,uStreak:t.edgeSmear,uWiden:t.cornerWidth,uSlab:.3*t.opticalDepth,uEtaSpread:.06,uFocus:t.cornerFocus,uFocusK:1,uFocusSplit:.056*t.colorBleed,uRimLine:.09,uCornerOn:k(.35,1,c),uGlow:.012*t.colorBleed,uFaceDisp:.012*t.dispersion,uVivid:.85,uDissolve:h,uDisp:t.dispersion,uDouble:t.doubleBevel,uBevelW:y*(1-h),uSpec:t.specular,uIconPlate:+!!t.iconPlate,uUseColor:+!!t.originalColors,uLightScene:+(M(x)>.5),uLightGlass:+(M(t.iconPlate?j(t.plateColor):x)>.5),uBg:x,uPlateCol:j(t.plateColor),uLogoCol:j(t.logoColor)}}function L({logo:e,look:t=`light`,background:n,logoColor:i,plateColor:s,iconPlate:l,keepPlate:d,originalColors:f,tileSize:p,logoScale:h,finalScale:g,logoOffset:_,loop:v=!0,hold:y,speed:x=1,time:S,tuning:C,label:w=`Logo`,className:T,style:E,onClick:D,...O}){let k=a.useRef(null),A=a.useRef(null),[j,M]=a.useState(!1),N=JSON.stringify(C??{}),P=_?_.join(`,`):``,F=a.useMemo(()=>{let e=Object.fromEntries(Object.entries({background:n,logoColor:i,plateColor:s,iconPlate:l,keepPlate:d,originalColors:f,tileSize:p,logoScale:h,finalScale:g,hold:y}).filter(([,e])=>e!==void 0));return P&&(e.logoOffset=P.split(`,`).map(Number)),{...c[t],...e,...JSON.parse(N)}},[t,n,i,s,l,d,f,p,h,g,y,P,N]),I=a.useRef({settings:F,loop:v,speed:x,time:S});I.current={settings:F,loop:v,speed:x,time:S},a.useEffect(()=>{let e=k.current;if(!e)return;let t=R(e,I);if(!t)M(!0);else return A.current=t,()=>{A.current=null,t.dispose()}},[]),a.useEffect(()=>{A.current?.invalidate()},[F,v,x,S]),a.useEffect(()=>{let t=!1;return b(e).then(e=>{t||A.current?.setLogo(e)},e=>console.error(e)),()=>{t=!0}},[e]);let L=a.useMemo(()=>j?m(e):``,[j,e]);return(0,o.jsx)(`div`,{ref:k,role:`img`,"aria-label":w,className:r(`relative isolate cursor-pointer overflow-hidden select-none`,T),style:{backgroundColor:F.background,...E},onClick:e=>{A.current?.replay(),D?.(e)},...O,children:j&&(0,o.jsx)(`span`,{"aria-hidden":!0,className:`absolute inset-0 m-auto block`,style:{width:F.tileSize*F.logoScale*F.finalScale*u,height:F.tileSize*F.logoScale*F.finalScale*u,maxWidth:`40%`,maxHeight:`40%`,backgroundColor:F.logoColor,maskImage:`url("${L}")`,WebkitMaskImage:`url("${L}")`,maskSize:`contain`,WebkitMaskSize:`contain`,maskRepeat:`no-repeat`,WebkitMaskRepeat:`no-repeat`,maskPosition:`center`,WebkitMaskPosition:`center`}})})}function R(e,t){let n=document.createElement(`canvas`);n.setAttribute(`aria-hidden`,`true`),n.style.cssText=`position:absolute;inset:0;width:100%;height:100%;display:block`,e.appendChild(n);let r=null;try{r=C(n)}catch(e){console.error(e)}if(!r)return n.remove(),null;let i=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,a=null,o=i?1.4:0,s=!i,c=0,l=0,u=!0,d=!1,f=!1,p=0,m=0,h=1,g=16,_=0;function v(e){p=0;let i=e-m,y=Math.min(.1,i/1e3);m=e;let{settings:b,loop:x,speed:S,time:C}=t.current,w=E(b);if(C!==void 0)s=!1,o=C,l=D((C-w-Math.max(.05,b.hold))/T);else if(s&&a){if(c>0){c-=y;let e=l;l=D(1-c/T),c<=0&&(c=0,l=0,o=0,h=1,g=16),(l!==e||o===0)&&(u=!0)}else i<250&&(g+=(i-g)*.15),g>45&&h>.5&&e-_>350&&(h=Math.max(.5,h*.8),_=e),o+=y*S,o>=w&&(o=w,h=1,x?c=Math.max(.05,b.hold)+T:s=!1),u=!0}if(u&&a&&r&&!f){let e=Math.min(window.devicePixelRatio||1,2)*h,t=n.clientWidth,i=n.clientHeight,a=Math.max(1,Math.round(t*e)),s=Math.max(1,Math.round(i*e));(n.width!==a||n.height!==s)&&(n.width=a,n.height=s);let c=Math.min(b.tileSize,Math.min(t,i)/1.75);r.render(I(Math.min(o,w),b,l),a,s,c*e),u=!1}d&&s&&a&&!f&&(p=requestAnimationFrame(v))}function y(){p||!d||f||(m=performance.now(),p=requestAnimationFrame(v))}let b=new IntersectionObserver(([e])=>{d=e.isIntersecting,d?y():p&&=(cancelAnimationFrame(p),0)});b.observe(e);let x=new ResizeObserver(()=>{u=!0,y()});x.observe(e);let S=e=>{e.preventDefault(),f=!0},w=()=>{f=!1;try{r=C(n),r&&a&&r.setLogo(a)}catch(e){console.error(e)}u=!0,y()};return n.addEventListener(`webglcontextlost`,S),n.addEventListener(`webglcontextrestored`,w),{setLogo(e){a=e,r?.setLogo(e),i||(o=0,s=!0,c=0,l=0,h=1,g=16),u=!0,y()},replay(){o=0,s=!0,c=0,l=0,h=1,g=16,u=!0,y()},invalidate(){u=!0,y()},dispose(){p&&cancelAnimationFrame(p),b.disconnect(),x.disconnect(),n.removeEventListener(`webglcontextlost`,S),n.removeEventListener(`webglcontextrestored`,w),r?.dispose(),n.remove()}}}var z=`#e8ecef`;function B({tuning:e,...t}){return(0,o.jsx)(L,{logo:i,label:`Isotipo de JMEDICAL`,look:`light`,background:z,logoColor:`#003c64`,tileSize:360,logoScale:.76,finalScale:.9,loop:!1,...t,tuning:{startZoom:2.3,present:1.95,glide:2.2,...e}})}export{L as n,i as r,B as t};