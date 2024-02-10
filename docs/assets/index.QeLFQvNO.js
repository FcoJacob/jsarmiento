import{f as x,d as v,D as g,g as R,e as r,M as T,a1 as S,t as h,u as O,$ as k,a2 as D,p as M,J as P,j as z,a as b}from"./default.mrsinCZE.js";import"./entry.R9p48-CP.js";import"./nuxt-link.bkTdg56L.js";function F(i){const o=i.initialPosition,{dx:n,dy:s}=x(o,i.position),e=Math.abs(n),a=Math.abs(s),{maxDistance:t}=i.retina,u=t.horizontal,f=t.vertical;if(!(!u&&!f)){if((u&&e>=u||f&&a>=f)&&!i.misplaced)i.misplaced=!!u&&e>u||!!f&&a>f,u&&(i.velocity.x=i.velocity.y/2-i.velocity.x),f&&(i.velocity.y=i.velocity.x/2-i.velocity.y);else if((!u||e<u)&&(!f||a<f)&&i.misplaced)i.misplaced=!1;else if(i.misplaced){const y=i.position,d=i.velocity;u&&(y.x<o.x&&d.x<0||y.x>o.x&&d.x>0)&&(d.x*=-v()),f&&(y.y<o.y&&d.y<0||y.y>o.y&&d.y>0)&&(d.y*=-v())}}}function A(i,o,n,s,e,a){U(i,a);const t=i.gravity,u=t!=null&&t.enable&&t.inverse?-1:1;e&&n&&(i.velocity.x+=e*a.factor/(60*n)),t!=null&&t.enable&&n&&(i.velocity.y+=u*(t.acceleration*a.factor)/(60*n));const f=i.moveDecay;i.velocity.multTo(f);const y=i.velocity.mult(n);t!=null&&t.enable&&s>0&&(!t.inverse&&y.y>=0&&y.y>=s||t.inverse&&y.y<=0&&y.y<=-s)&&(y.y=u*s,n&&(i.velocity.y=y.y/n));const d=i.options.zIndex,m=(1-i.zIndexFactor)**d.velocityRate;y.multTo(m);const{position:c}=i;c.addTo(y),o.vibrate&&(c.x+=Math.sin(c.x*Math.cos(c.y)),c.y+=Math.cos(c.y*Math.sin(c.x)))}function L(i,o){const n=i.container;if(!i.spin)return;const s={x:i.spin.direction==="clockwise"?Math.cos:Math.sin,y:i.spin.direction==="clockwise"?Math.sin:Math.cos};i.position.x=i.spin.center.x+i.spin.radius*s.x(i.spin.angle),i.position.y=i.spin.center.y+i.spin.radius*s.y(i.spin.angle),i.spin.radius+=i.spin.acceleration;const e=Math.max(n.canvas.size.width,n.canvas.size.height);i.spin.radius>e/2?(i.spin.radius=e/2,i.spin.acceleration*=-1):i.spin.radius<0&&(i.spin.radius=0,i.spin.acceleration*=-1),i.spin.angle+=o/100*(1-i.spin.radius/e)}function U(i,o){var t;const n=i.options,s=n.move.path;if(!s.enable)return;if(i.lastPathTime<=i.pathDelay){i.lastPathTime+=o.value;return}const a=(t=i.pathGenerator)==null?void 0:t.generate(i,o);a&&i.velocity.addTo(a),s.clamp&&(i.velocity.x=g(i.velocity.x,-1,1),i.velocity.y=g(i.velocity.y,-1,1)),i.lastPathTime-=i.pathDelay}function I(i){return i.slow.inRange?i.slow.factor:1}const E=2;class B{constructor(){this._initSpin=o=>{const n=o.container,s=o.options,e=s.move.spin;if(!e.enable)return;const a=e.position??{x:50,y:50},t={x:a.x/100*n.canvas.size.width,y:a.y/100*n.canvas.size.height},u=o.getPosition(),f=R(u,t),y=r(e.acceleration);o.retina.spinAcceleration=y*n.retina.pixelRatio,o.spin={center:t,direction:o.velocity.x>=0?"clockwise":"counter-clockwise",angle:o.velocity.angle,radius:f,acceleration:o.retina.spinAcceleration}}}init(o){const n=o.options,s=n.move.gravity;o.gravity={enable:s.enable,acceleration:r(s.acceleration),inverse:s.inverse},this._initSpin(o)}isEnabled(o){return!o.destroyed&&o.options.move.enable}move(o,n){var p,w;const s=o.options,e=s.move;if(!e.enable)return;const a=o.container,t=a.retina.pixelRatio,u=I(o),f=((p=o.retina).moveSpeed??(p.moveSpeed=r(e.speed)*t))*a.retina.reduceFactor,y=(w=o.retina).moveDrift??(w.moveDrift=r(o.options.move.drift)*t),d=T(s.size.value)*t,m=e.size?o.getRadius()/d:1,c=f*m*u*(n.factor||1)/E,C=o.retina.maxSpeed??a.retina.maxSpeed;e.spin.enable?L(o,c):A(o,e,c,C,y,n),F(o)}}async function _(i,o=!0){await i.addMover("base",()=>new B,o)}class H{draw(o,n,s){n.circleRange||(n.circleRange={min:0,max:Math.PI*2});const e=n.circleRange;o.arc(0,0,s,e.min,e.max,!1)}getSidesCount(){return 12}particleInit(o,n){const s=n.shapeData,e=(s==null?void 0:s.angle)??{max:360,min:0};n.circleRange=S(e)?{min:e.min*Math.PI/180,max:e.max*Math.PI/180}:{min:0,max:e*Math.PI/180}}}async function j(i,o=!0){await i.addShape("circle",new H,o)}function l(i,o,n,s,e){if(!o||!n.enable||(o.maxLoops??0)>0&&(o.loops??0)>(o.maxLoops??0)||(o.time||(o.time=0),(o.delayTime??0)>0&&o.time<(o.delayTime??0)&&(o.time+=i.value),(o.delayTime??0)>0&&o.time<(o.delayTime??0)))return;const a=h(n.offset),t=(o.velocity??0)*i.factor+a*3.6,u=o.decay??1;!e||o.status==="increasing"?(o.value+=t,o.value>s&&(o.loops||(o.loops=0),o.loops++,e&&(o.status="decreasing",o.value-=o.value%s))):(o.value-=t,o.value<0&&(o.loops||(o.loops=0),o.loops++,o.status="increasing",o.value+=o.value)),o.velocity&&u!==1&&(o.velocity*=u),o.value>s&&(o.value%=s)}function N(i,o){const{h:n,s,l:e}=i.options.color.animation,{color:a}=i;if(!a)return;const{h:t,s:u,l:f}=a;t&&l(o,t,n,360,!1),u&&l(o,u,s,100,!0),f&&l(o,f,e,100,!0)}class ${constructor(o){this.container=o}init(o){const n=O(o.options.color,o.id,o.options.reduceDuplicates);n&&(o.color=k(n,o.options.color.animation,this.container.retina.reduceFactor))}isEnabled(o){const{h:n,s,l:e}=o.options.color.animation,{color:a}=o;return!o.destroyed&&!o.spawning&&((a==null?void 0:a.h.value)!==void 0&&n.enable||(a==null?void 0:a.s.value)!==void 0&&s.enable||(a==null?void 0:a.l.value)!==void 0&&e.enable)}update(o,n){N(o,n)}}async function G(i,o=!0){await i.addParticleUpdater("color",n=>new $(n),o)}function J(i,o,n,s){switch(i.options.opacity.animation.destroy){case"max":o>=s&&i.destroy();break;case"min":o<=n&&i.destroy();break}}function q(i,o){const n=i.opacity;if(i.destroyed||!(n!=null&&n.enable)||(n.maxLoops??0)>0&&(n.loops??0)>(n.maxLoops??0))return;const s=n.min,e=n.max,a=n.decay??1;if(n.time||(n.time=0),(n.delayTime??0)>0&&n.time<(n.delayTime??0)&&(n.time+=o.value),!((n.delayTime??0)>0&&n.time<(n.delayTime??0))){switch(n.status){case"increasing":n.value>=e?(n.status="decreasing",n.loops||(n.loops=0),n.loops++):n.value+=(n.velocity??0)*o.factor;break;case"decreasing":n.value<=s?(n.status="increasing",n.loops||(n.loops=0),n.loops++):n.value-=(n.velocity??0)*o.factor;break}n.velocity&&n.decay!==1&&(n.velocity*=a),J(i,n.value,s,e),i.destroyed||(n.value=g(n.value,s,e))}}class K{constructor(o){this.container=o}init(o){const n=o.options.opacity;o.opacity=D(n,1);const s=n.animation;s.enable&&(o.opacity.velocity=r(s.speed)/100*this.container.retina.reduceFactor,s.sync||(o.opacity.velocity*=v()))}isEnabled(o){return!o.destroyed&&!o.spawning&&!!o.opacity&&o.opacity.enable&&((o.opacity.maxLoops??0)<=0||(o.opacity.maxLoops??0)>0&&(o.opacity.loops??0)<(o.opacity.maxLoops??0))}reset(o){o.opacity&&(o.opacity.time=0,o.opacity.loops=0)}update(o,n){this.isEnabled(o)&&q(o,n)}}async function Q(i,o=!0){await i.addParticleUpdater("opacity",n=>new K(n),o)}function W(i){if(i.outMode!=="bounce"&&i.outMode!=="bounce-horizontal"&&i.outMode!=="bounceHorizontal"&&i.outMode!=="split"||i.direction!=="left"&&i.direction!=="right")return;i.bounds.right<0&&i.direction==="left"?i.particle.position.x=i.size+i.offset.x:i.bounds.left>i.canvasSize.width&&i.direction==="right"&&(i.particle.position.x=i.canvasSize.width-i.size-i.offset.x);const o=i.particle.velocity.x;let n=!1;if(i.direction==="right"&&i.bounds.right>=i.canvasSize.width&&o>0||i.direction==="left"&&i.bounds.left<=0&&o<0){const e=M(i.particle.options.bounce.horizontal);i.particle.velocity.x*=-e,n=!0}if(!n)return;const s=i.offset.x+i.size;i.bounds.right>=i.canvasSize.width&&i.direction==="right"?i.particle.position.x=i.canvasSize.width-s:i.bounds.left<=0&&i.direction==="left"&&(i.particle.position.x=s),i.outMode==="split"&&i.particle.destroy()}function X(i){if(i.outMode!=="bounce"&&i.outMode!=="bounce-vertical"&&i.outMode!=="bounceVertical"&&i.outMode!=="split"||i.direction!=="bottom"&&i.direction!=="top")return;i.bounds.bottom<0&&i.direction==="top"?i.particle.position.y=i.size+i.offset.y:i.bounds.top>i.canvasSize.height&&i.direction==="bottom"&&(i.particle.position.y=i.canvasSize.height-i.size-i.offset.y);const o=i.particle.velocity.y;let n=!1;if(i.direction==="bottom"&&i.bounds.bottom>=i.canvasSize.height&&o>0||i.direction==="top"&&i.bounds.top<=0&&o<0){const e=M(i.particle.options.bounce.vertical);i.particle.velocity.y*=-e,n=!0}if(!n)return;const s=i.offset.y+i.size;i.bounds.bottom>=i.canvasSize.height&&i.direction==="bottom"?i.particle.position.y=i.canvasSize.height-s:i.bounds.top<=0&&i.direction==="top"&&(i.particle.position.y=s),i.outMode==="split"&&i.particle.destroy()}class Y{constructor(o){this.container=o,this.modes=["bounce","bounce-vertical","bounce-horizontal","bounceVertical","bounceHorizontal","split"]}update(o,n,s,e){if(!this.modes.includes(e))return;const a=this.container;let t=!1;for(const[,c]of a.plugins)if(c.particleBounce!==void 0&&(t=c.particleBounce(o,s,n)),t)break;if(t)return;const u=o.getPosition(),f=o.offset,y=o.getRadius(),d=P(u,y),m=a.canvas.size;W({particle:o,outMode:e,direction:n,bounds:d,canvasSize:m,offset:f,size:y}),X({particle:o,outMode:e,direction:n,bounds:d,canvasSize:m,offset:f,size:y})}}class Z{constructor(o){this.container=o,this.modes=["destroy"]}update(o,n,s,e){if(!this.modes.includes(e))return;const a=this.container;switch(o.outType){case"normal":case"outside":if(z(o.position,a.canvas.size,b.origin,o.getRadius(),n))return;break;case"inside":{const{dx:t,dy:u}=x(o.position,o.moveCenter),{x:f,y}=o.velocity;if(f<0&&t>o.moveCenter.radius||y<0&&u>o.moveCenter.radius||f>=0&&t<-o.moveCenter.radius||y>=0&&u<-o.moveCenter.radius)return;break}}a.particles.remove(o,void 0,!0)}}class V{constructor(o){this.container=o,this.modes=["none"]}update(o,n,s,e){if(!this.modes.includes(e)||o.options.move.distance.horizontal&&(n==="left"||n==="right")||o.options.move.distance.vertical&&(n==="top"||n==="bottom"))return;const a=o.options.move.gravity,t=this.container,u=t.canvas.size,f=o.getRadius();if(a.enable){const y=o.position;(!a.inverse&&y.y>u.height+f&&n==="bottom"||a.inverse&&y.y<-f&&n==="top")&&t.particles.remove(o)}else{if(o.velocity.y>0&&o.position.y<=u.height+f||o.velocity.y<0&&o.position.y>=-f||o.velocity.x>0&&o.position.x<=u.width+f||o.velocity.x<0&&o.position.x>=-f)return;z(o.position,t.canvas.size,b.origin,f,n)||t.particles.remove(o)}}}class oo{constructor(o){this.container=o,this.modes=["out"]}update(o,n,s,e){if(!this.modes.includes(e))return;const a=this.container;switch(o.outType){case"inside":{const{x:t,y:u}=o.velocity,f=b.origin;f.length=o.moveCenter.radius,f.angle=o.velocity.angle+Math.PI,f.addTo(b.create(o.moveCenter));const{dx:y,dy:d}=x(o.position,f);if(t<=0&&y>=0||u<=0&&d>=0||t>=0&&y<=0||u>=0&&d<=0)return;o.position.x=Math.floor(h({min:0,max:a.canvas.size.width})),o.position.y=Math.floor(h({min:0,max:a.canvas.size.height}));const{dx:m,dy:c}=x(o.position,o.moveCenter);o.direction=Math.atan2(-c,-m),o.velocity.angle=o.direction;break}default:{if(z(o.position,a.canvas.size,b.origin,o.getRadius(),n))return;switch(o.outType){case"outside":{o.position.x=Math.floor(h({min:-o.moveCenter.radius,max:o.moveCenter.radius}))+o.moveCenter.x,o.position.y=Math.floor(h({min:-o.moveCenter.radius,max:o.moveCenter.radius}))+o.moveCenter.y;const{dx:t,dy:u}=x(o.position,o.moveCenter);o.moveCenter.radius&&(o.direction=Math.atan2(u,t),o.velocity.angle=o.direction);break}case"normal":{const t=o.options.move.warp,u=a.canvas.size,f={bottom:u.height+o.getRadius()+o.offset.y,left:-o.getRadius()-o.offset.x,right:u.width+o.getRadius()+o.offset.x,top:-o.getRadius()-o.offset.y},y=o.getRadius(),d=P(o.position,y);n==="right"&&d.left>u.width+o.offset.x?(o.position.x=f.left,o.initialPosition.x=o.position.x,t||(o.position.y=v()*u.height,o.initialPosition.y=o.position.y)):n==="left"&&d.right<-o.offset.x&&(o.position.x=f.right,o.initialPosition.x=o.position.x,t||(o.position.y=v()*u.height,o.initialPosition.y=o.position.y)),n==="bottom"&&d.top>u.height+o.offset.y?(t||(o.position.x=v()*u.width,o.initialPosition.x=o.position.x),o.position.y=f.top,o.initialPosition.y=o.position.y):n==="top"&&d.bottom<-o.offset.y&&(t||(o.position.x=v()*u.width,o.initialPosition.x=o.position.x),o.position.y=f.bottom,o.initialPosition.y=o.position.y);break}}break}}}}class io{constructor(o){this.container=o,this._updateOutMode=(n,s,e,a)=>{for(const t of this.updaters)t.update(n,a,s,e)},this.updaters=[new Y(o),new Z(o),new oo(o),new V(o)]}init(){}isEnabled(o){return!o.destroyed&&!o.spawning}update(o,n){const s=o.options.move.outModes;this._updateOutMode(o,n,s.bottom??s.default,"bottom"),this._updateOutMode(o,n,s.left??s.default,"left"),this._updateOutMode(o,n,s.right??s.default,"right"),this._updateOutMode(o,n,s.top??s.default,"top")}}async function no(i,o=!0){await i.addParticleUpdater("outModes",n=>new io(n),o)}function so(i,o,n,s){switch(i.options.size.animation.destroy){case"max":o>=s&&i.destroy();break;case"min":o<=n&&i.destroy();break}}function eo(i,o){const n=i.size;if(i.destroyed||!n||!n.enable||(n.maxLoops??0)>0&&(n.loops??0)>(n.maxLoops??0))return;const s=(n.velocity??0)*o.factor,e=n.min,a=n.max,t=n.decay??1;if(n.time||(n.time=0),(n.delayTime??0)>0&&n.time<(n.delayTime??0)&&(n.time+=o.value),!((n.delayTime??0)>0&&n.time<(n.delayTime??0))){switch(n.status){case"increasing":n.value>=a?(n.status="decreasing",n.loops||(n.loops=0),n.loops++):n.value+=s;break;case"decreasing":n.value<=e?(n.status="increasing",n.loops||(n.loops=0),n.loops++):n.value-=s}n.velocity&&t!==1&&(n.velocity*=t),so(i,n.value,e,a),i.destroyed||(n.value=g(n.value,e,a))}}class to{init(o){const n=o.container,s=o.options.size,e=s.animation;e.enable&&(o.size.velocity=(o.retina.sizeAnimationSpeed??n.retina.sizeAnimationSpeed)/100*n.retina.reduceFactor,e.sync||(o.size.velocity*=v()))}isEnabled(o){return!o.destroyed&&!o.spawning&&o.size.enable&&((o.size.maxLoops??0)<=0||(o.size.maxLoops??0)>0&&(o.size.loops??0)<(o.size.maxLoops??0))}reset(o){o.size.loops=0}update(o,n){this.isEnabled(o)&&eo(o,n)}}async function ao(i,o=!0){await i.addParticleUpdater("size",()=>new to,o)}async function co(i,o=!0){await _(i,!1),await j(i,!1),await G(i,!1),await Q(i,!1),await no(i,!1),await ao(i,!1),await i.refresh(o)}export{co as loadBasic};
