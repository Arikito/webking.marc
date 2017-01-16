/**

 * SVGIcons
 * icons content and animation
 */

var SVGIcons;
SVGIcons = (function (document) {



    // ------------------
    // Super class
    // ------------------

    function Super(node) {
        this.$root = node;
        this.$root.innerHTML = this.content;
        this.init();
        this.stop();
    }

    Super.prototype = {

        constructor: Super,

        animations: [],

        play: function () {
            for (var i = 0; i < this.animations.length; i++) {
                this.animations[i].play();
            }
        },
        stop: function () {
            for (var i = 0; i < this.animations.length; i++) {
                this.animations[i].stop();
            }
        },

        animate: function (keyframes, callback, easing) {
            this.animations.push(Animate(
                keyframes,
                callback.bind(this),
                easing
            ));
        }

    };


    // ------------------
    // Types
    // ------------------

    var Icon = {};

    
    /* radar */
    
    Icon.radar = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>Radar</title> <path d="M-5659.63-254.22a84.62,84.62,0,0,1-84.61-84.62,84.62,84.62,0,0,1,84.61-84.61A84.62,84.62,0,0,1-5575-338.84,84.62,84.62,0,0,1-5659.63-254.22Zm0-184.62a100,100,0,0,0-100,100,100,100,0,0,0,100,100,100,100,0,0,0,100-100A100,100,0,0,0-5659.63-438.84Z" transform="translate(5760.63 439.84)" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <g id="spin"> <path d="M-5659.63-423.45v73.08a11.54,11.54,0,0,1,11.54,11.54H-5575A84.62,84.62,0,0,0-5659.63-423.45Z" transform="translate(5760.63 439.84)" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <path d="M-5659.63-286.69a52.2,52.2,0,0,1-52.14-52.15A52.2,52.2,0,0,1-5659.63-391a52.2,52.2,0,0,1,52.14,52.14A52.2,52.2,0,0,1-5659.63-286.69Z" transform="translate(5760.63 439.84)" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M-5659.63-323.24a15.62,15.62,0,0,1-15.6-15.6,15.62,15.62,0,0,1,15.6-15.6,15.62,15.62,0,0,1,15.6,15.6A15.62,15.62,0,0,1-5659.63-323.24Z" transform="translate(5760.63 439.84)" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="c1" cx="80.46" cy="80.33" r="6.67" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="c2" cx="38.5" cy="126.52" r="3.33" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="c3" cx="158.32" cy="69.52" r="5" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="c4" cx="120.05" cy="75.42" r="2.5" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="c5" cx="121" cy="164.93" r="5" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="16.39" y1="101" x2="85.41" y2="101" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="101" y1="116.94" x2="101" y2="185.53" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>',
    
        keyframes: {
            spin: {
                '0':    {a: 0},
                '3200': {a: 360}
            },
            c1: {
                '0':    {o: 0, r: 7},
                '2000': {o: 0, r: 7},
                '2400': {o: 1, r: 14},
                '2800': {o: 0, r: 7},
                '3200': {o: 0, r: 7}
            },
            c2: {
                '0':    {o: 0, r: 3},
                '1400': {o: 0, r: 3},
                '1800': {o: 1, r: 6},
                '2200': {o: 0, r: 3},
                '3200': {o: 0, r: 3}
            },
            c3: {
                '-240': {o: 0, r: 5},
                '160':  {o: 1, r: 10},
                '560':  {o: 0, r: 5},
                '2960': {o: 0, r: 5}
            },
            c4: {
                '-460': {o: 0, r: 2.5},
                '-60':  {o: 1, r: 5},
                '340':  {o: 0, r: 2.5},
                '2740': {o: 0, r: 0}
            },
            c5: {
                '0':    {o: 0, r: 5},
                '640':  {o: 0, r: 5},
                '1040': {o: 1, r: 10},
                '1440': {o: 0, r: 5},
                '3200': {o: 0, r: 5}
            }
        },
    
        spin: function(data) {
            this.$spin.setAttribute('transform', 'rotate(' + data.a + ', 101, 101)');
        },
    
        c1: function(data) {
            this.$c1.setAttribute('r', data.r);
            this.$c1.setAttribute('opacity', data.o);
        },
    
        c2: function(data) {
            this.$c2.setAttribute('r', data.r);
            this.$c2.setAttribute('opacity', data.o);
        },
    
        c3: function(data) {
            this.$c3.setAttribute('r', data.r);
            this.$c3.setAttribute('opacity', data.o);
        },
    
        c4: function(data) {
            this.$c4.setAttribute('r', data.r);
            this.$c4.setAttribute('opacity', data.o);
        },
    
        c5: function(data) {
            this.$c5.setAttribute('r', data.r);
            this.$c5.setAttribute('opacity', data.o);
        },
    
        init: function() {
            this.$spin = this.$root.querySelector('#spin');
            this.$c1 = this.$root.querySelector('#c1');
            this.$c2 = this.$root.querySelector('#c2');
            this.$c3 = this.$root.querySelector('#c3');
            this.$c4 = this.$root.querySelector('#c4');
            this.$c5 = this.$root.querySelector('#c5');
            this.animate(this.keyframes.spin, this.spin, 'linear');
            this.animate(this.keyframes.c1, this.c1, 'inOut');
            this.animate(this.keyframes.c2, this.c2, 'inOut');
            this.animate(this.keyframes.c3, this.c3, 'inOut');
            this.animate(this.keyframes.c4, this.c4, 'inOut');
            this.animate(this.keyframes.c5, this.c5, 'inOut');
        }
    
    });
    
    
    /* user */
    
    Icon.user = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <defs> <clipPath id="clip"> <rect id="rect" x="0" y="0" width="202" height="110"/> </clipPath> </defs> <title>User</title> <path d="M-5737.92-25.82V-44.26c0-6.11,2.31-9.63,6.13-12.22C-5714.54-67.93-5683-68.69-5683-87c0-12.21-12.26-18.32-12.26-42.75v-6.11c0-24.43,18.4-30.54,30.61-30.54s30.61,6.11,30.61,30.54v6.11c0,24.43-12.23,30.54-12.23,42.75,0,18.32,31.58,19.09,48.83,30.54,3.82,2.59,6.08,6.11,6.08,12.22v18.44h-146.59Z" transform="translate(5765.63 197.12)" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polyline points="201 65.87 201 1 136.13 1" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polyline points="65.87 1 1 1 1 65.87" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polyline points="1 136.13 1 201 65.87 201" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polyline points="136.13 201 201 201 201 136.13" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <g clip-path="url(#clip)"> <path d="M-5737.92-25.82V-44.26c0-6.11,2.31-9.63,6.13-12.22C-5714.54-67.93-5683-68.69-5683-87c0-12.21-12.26-18.32-12.26-42.75v-6.11c0-24.43,18.4-30.54,30.61-30.54s30.61,6.11,30.61,30.54v6.11c0,24.43-12.23,30.54-12.23,42.75,0,18.32,31.58,19.09,48.83,30.54,3.82,2.59,6.08,6.11,6.08,12.22v18.44h-146.59Z" transform="translate(5765.63 197.12)" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <line id="line" x1="11.33" y1="110" x2="187.23" y2="110" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>',
    
        keyframes: {
            clip: {
                '0':    {y: 16},
                '1200': {y: 186},
                '2400': {y: 16}
            }
        },
    
        clip: function(data) {
            this.$rect.setAttribute('height', data.y);
            this.$line.setAttribute('y1', data.y);
            this.$line.setAttribute('y2', data.y);
    
        },
    
        init: function() {
            this.$rect = this.$root.querySelector('#rect');
            this.$line = this.$root.querySelector('#line');
            this.animate(this.keyframes.clip, this.clip, 'inOut');
        }
    
    });
    
    
    
    /* planet */
    
    Icon.planet = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>planet-2</title> <g id="u1"> <g id="u2"> <path d="M57.24,183V172.08c0-3.61,1.37-5.7,3.63-7.23,10.21-6.78,28.89-7.23,28.89-18.07,0-7.23-7.26-10.84-7.26-25.3v-3.61c0-14.46,10.89-18.07,18.12-18.07s18.12,3.61,18.12,18.07v3.61c0,14.46-7.24,18.07-7.24,25.3,0,10.84,18.69,11.3,28.9,18.07,2.26,1.53,3.6,3.61,3.6,7.23V183H57.24Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> </g> <circle cx="100.49" cy="100.49" r="82.49" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <ellipse cx="100.49" cy="101.17" rx="43.46" ry="81.82" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="100.49" y1="18" x2="100.49" y2="182.98" fill="none" stroke="#2e9afe" stroke-miterlimit="10" stroke-width="2"/> <line x1="182.98" y1="100.49" x2="18" y2="100.49" fill="none" stroke="#2e9afe" stroke-miterlimit="10" stroke-width="2"/> <ellipse cx="100.49" cy="101.17" rx="81.82" ry="43.46" fill="none" stroke="#2e9afe" stroke-miterlimit="10" stroke-width="2"/> <circle id="c1" cx="100.49" cy="100.49" r="9.19" fill="#82c2fe" stroke="#2e9afe" stroke-width="2"/> <circle id="c2" cx="100.49" cy="100.49" r="9.19" fill="#82c2fe" stroke="#2e9afe" stroke-width="2"/> <circle id="c3" cx="100.49" cy="100.49" r="9.19" fill="#82c2fe" stroke="#2e9afe" stroke-width="2"/> <circle id="c4" cx="100.49" cy="100.49" r="9.19" fill="#82c2fe" stroke="#2e9afe" stroke-width="2"/> <circle id="c5" cx="100.49" cy="100.49" r="13.67" fill="#e0f0ff" stroke="#2e9afe" stroke-width="2"/> <circle id="c6" cx="100.49" cy="100.49" r="13.67" fill="#e0f0ff" stroke="#2e9afe" stroke-width="2"/> <g id="u3"> <g id="u4"> <path d="M57.24,183V172.08c0-3.61,1.37-5.7,3.63-7.23,10.21-6.78,28.89-7.23,28.89-18.07,0-7.23-7.26-10.84-7.26-25.3v-3.61c0-14.46,10.89-18.07,18.12-18.07s18.12,3.61,18.12,18.07v3.61c0,14.46-7.24,18.07-7.24,25.3,0,10.84,18.69,11.3,28.9,18.07,2.26,1.53,3.6,3.61,3.6,7.23V183H57.24Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> </g> </svg>',
    
        keyframes: {
            c1: {
                '0':    {s: 0, a: -Math.PI / 2},
                '1000': {s: 1, a: 0},
                '2000': {s: 0, a: Math.PI / 2}
            },
            c2: {
                '-1300': {s: 0, a: -Math.PI / 2},
                '-300':  {s: 1, a: -Math.PI},
                '700':   {s: 0, a: -Math.PI / 2 * 3}
            },
            c3: {
                '0':    {s: 0, a: -Math.PI},
                '1000': {s: 1, a: -Math.PI / 2},
                '2000': {s: 0, a: 0}
            },
            c4: {
                '-700': {s: 0, a: Math.PI},
                '300':  {s: 1, a: Math.PI / 2},
                '1300': {s: 0, a: 0}
            },
            c5: {
                '0':    {s: 0, a: 0},
                '1000': {s: 1, a: -Math.PI / 2},
                '2000': {s: 0, a: -Math.PI}
            },
            c6: {
                '-700': {s: 0, a: 0},
                '300':  {s: 1, a: Math.PI / 2},
                '1300': {s: 0, a: Math.PI}
            },
            u1: {
                '0':    {x: 90},
                '1000': {x: 90},
                '3000': {x: -90},
                '4000': {x: -90}
            },
            u2: {
                '0':    {s: 0},
                '1000': {s: 0},
                '2000': {s: 1},
                '3000': {s: 0},
                '4000': {s: 0}
            },
            u3: {
                '-1000': {x: -90},
                '1000':  {x: 90},
                '3000':  {x: -90}
            },
            u4: {
                '-1000': {s: 0},
                '0':     {s: 1},
                '1000':  {s: 0},
                '3000':  {s: 0}
            }
        },
    
        circle: function($circle, a, b, data) {
            var x = 101.17 - a * Math.cos(data.a);
            var y = 100.49 + b * Math.sin(data.a);
            $circle.setAttribute('cx', x);
            $circle.setAttribute('cy', y);
            $circle.setAttribute('r', data.s * 14);
        },
    
        c1: function(data) {
            this.circle(this.$c1, 43.46, 81.82, data);
        },
    
        c2: function(data) {
            this.circle(this.$c2, 43.46, 81.82, data);
        },
    
        c3: function(data) {
            this.circle(this.$c3, 81.82, 43.46, data);
        },
    
        c4: function(data) {
            this.circle(this.$c4, 81.82, 43.46, data);
        },
    
        c5: function(data) {
            this.circle(this.$c5, 81.82, 43.46, data);
        },
    
        c6: function(data) {
            this.circle(this.$c6, 81.82, 43.46, data);
        },
    
        u1: function(data) {
            this.$u1.setAttribute('transform', 'translate(' + data.x + ' 0)');
        },
    
        u2: function(data) {
            this.$u2.setAttribute('transform', 'translate(101 0) scale(' + data.s + ' 1) translate(-101 0)');
        },
    
        u3: function(data) {
            this.$u3.setAttribute('transform', 'translate(' + data.x + ' 0)');
        },
    
        u4: function(data) {
            this.$u4.setAttribute('transform', 'translate(101 0) scale(' + data.s + ' 1) translate(-101 0)');
        },
    
        init: function() {
            this.$c1 = this.$root.querySelector('#c1');
            this.$c2 = this.$root.querySelector('#c2');
            this.$c3 = this.$root.querySelector('#c3');
            this.$c4 = this.$root.querySelector('#c4');
            this.$c5 = this.$root.querySelector('#c5');
            this.$c6 = this.$root.querySelector('#c6');
            this.$u1 = this.$root.querySelector('#u1');
            this.$u2 = this.$root.querySelector('#u2');
            this.$u3 = this.$root.querySelector('#u3');
            this.$u4 = this.$root.querySelector('#u4');
            this.animate(this.keyframes.c1, this.c1, 'linear');
            this.animate(this.keyframes.c2, this.c2, 'linear');
            this.animate(this.keyframes.c3, this.c3, 'linear');
            this.animate(this.keyframes.c4, this.c4, 'linear');
            this.animate(this.keyframes.c5, this.c5, 'linear');
            this.animate(this.keyframes.c6, this.c6, 'linear');
            this.animate(this.keyframes.u1, this.u1, 'inOut');
            this.animate(this.keyframes.u2, this.u2, 'linear');
            this.animate(this.keyframes.u3, this.u3, 'inOut');
            this.animate(this.keyframes.u4, this.u4, 'linear');
        }
    
    });
    
    
    /* network */
    
    Icon.network = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>network</title> <path d="M71.76,63.51V56.17a5.32,5.32,0,0,1,2.45-4.87c6.88-4.57,19.48-4.87,19.48-12.19,0-4.87-4.89-7.31-4.89-17.06V19.61C88.8,9.86,96.14,7.42,101,7.42s12.22,2.44,12.22,12.19v2.44c0,9.75-4.88,12.19-4.88,17.06,0,7.31,12.6,7.62,19.49,12.19a5.31,5.31,0,0,1,2.43,4.87v7.36H71.76v0Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect id="l3" fill="#2e9afe" x="0" y="185.26" height="2" width="102" rx="1" ry="1"/> <rect id="l4" fill="#2e9afe" x="100" y="185.26" height="2" width="202" rx="1" ry="1"/> <rect x="19.83" y="90.23" width="71.33" height="57.83" rx="5" ry="5" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="38.98" y1="157.7" x2="72" y2="157.7" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/> <line x1="19.83" y1="133.73" x2="91.15" y2="133.73" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/> <rect x="44.65" y="148.06" width="21.69" height="9.64" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/> <rect x="110.85" y="90.23" width="71.33" height="57.83" rx="5" ry="5" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="130" y1="157.7" x2="163.02" y2="157.7" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/> <line x1="110.85" y1="133.73" x2="182.17" y2="133.73" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/> <rect x="135.67" y="148.06" width="21.69" height="9.64" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/> <rect id="l1" fill="#2e9afe" x="54.49" y="167.95" width="2" height="11" rx="1" ry="1"/> <rect id="l2" fill="#2e9afe" x="145.51" y="167.95" width="2" height="11" rx="1" ry="1"/> <circle id="c2" cx="55.49" cy="186.26" r="8.33" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="53" stroke-dashoffset="53" transform="rotate(-90, 55.49, 186.26)"/> <circle id="c1" cx="146.51" cy="186.26" r="8.33" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="53" stroke-dashoffset="53" transform="rotate(-90, 146.51, 186.26)"/> <g id="sign" transform="translate(38.91, 35.46) scale(0) translate(-38.91, -35.46)"> <circle cx="38.91" cy="35.46" r="23.47" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polyline points="28.63 36.07 35.07 42.52 49.19 28.4" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g></svg>',
    
        keyframes: {
            sign: {
                '0': {s: 0},
                '1100': {s: 0},
                '1500': {s: 1.2},
                '1700': {s: 1},
                '4000': {s: 1}
            },
            c1: {
                '0': {o: 53, a: 0},
                '220': {o: 53, a: 0},
                '1100': {o: 9, a: 1},
                '1280': {o: 0, a: 1},
                '4000': {o: 0, a: 1}
            },
            c2: {
                '0': {o: 53, a: 0},
                '220': {o: 53, a: 0},
                '1100': {o: 97, a: 1},
                '1280': {o: 106, a: 1},
                '4000': {o: 106, a: 1}
            },
            l12: {
                '0':   {h: 0},
                '220': {h: 11},
                '2200': {h: 11},
                '4000': {h: 11}
            },
            l3: {
                '0': {w: 0, x: 55},
                '1100': {w: 0, x: 55},
                '1600': {w: 102, x: 0},
                '4000': {w: 102, x: 0}
            },
            l4: {
                '0': {w: 0, x: 146},
                '1100': {w: 0, x: 146},
                '1600': {w: 102, x: 100},
                '4000': {w: 102, x: 100}
            }
        },
    
        sign: function(data) {
            this.$sign.setAttribute('transform', 'translate(38.91, 35.46) scale(' + data.s + ') translate(-38.91, -35.46)');
        },
    
        c1: function(data) {
            this.$c1.setAttribute('stroke-dashoffset', data.o);
            this.$c1.setAttribute('fill-opacity', data.a);
        },
    
        c2: function(data) {
            this.$c2.setAttribute('stroke-dashoffset', data.o);
            this.$c2.setAttribute('fill-opacity', data.a);
        },
    
        l12: function (data) {
            this.$l1.setAttribute('height', data.h);
            this.$l2.setAttribute('height', data.h);
        },
    
        l3: function(data) {
            this.$l3.setAttribute('width', data.w);
            this.$l3.setAttribute('x', data.x);
        },
    
        l4: function(data) {
            this.$l4.setAttribute('width', data.w);
            this.$l4.setAttribute('x', data.x);
        },
    
        init: function() {
            this.$sign = this.$root.querySelector('#sign');
            this.$c1 = this.$root.querySelector('#c1');
            this.$c2 = this.$root.querySelector('#c2');
            this.$l1 = this.$root.querySelector('#l1');
            this.$l2 = this.$root.querySelector('#l2');
            this.$l3 = this.$root.querySelector('#l3');
            this.$l4 = this.$root.querySelector('#l4');
            this.animate(this.keyframes.sign, this.sign, 'inOut');
            this.animate(this.keyframes.l12, this.l12, 'linear');
            this.animate(this.keyframes.c1, this.c1, 'linear');
            this.animate(this.keyframes.c2, this.c2, 'linear');
            this.animate(this.keyframes.l3, this.l3, 'linear');
            this.animate(this.keyframes.l4, this.l4, 'linear');
        }
    
    });
    
    
    /* book */
    
    Icon.book = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>Book</title> <rect x="1" y="27.87" width="200" height="157.72" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect x="17.06" y="153.77" width="167.87" height="14.82" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M 90, 16.4 Q 101, 16.4, 101, 27.87 L 101, 165.47 Q 101, 154, 90, 154 L 17, 154 L 17 16.4 L 90, 16.4" fill="#ffffff" stroke="#2e9afe" stroke-width="2" stroke-linecap="round"/> <path d="M 112.45, 16.4 Q 101, 16.4, 101, 27.87 L 101, 165.47 Q 101, 154, 112.45, 154 L 185, 154 L 185 16.4 L 112.45, 16.4" fill="#ffffff" stroke="#2e9afe" stroke-width="2" stroke-linecap="round"/> <polyline id="s1" points="46.75 47.45 54.45 55.16 71.31 38.3" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <g id="s2"> <line x1="134.54" y1="55.16" x2="151.4" y2="38.3" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="134.54" y1="38.3" x2="151.4" y2="55.16" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <rect id="l1b" x="44.12" y="72.65" width="41" height="2" rx="1" ry="1" fill="#2e9afe"/> <rect id="l2b" x="44.12" y="92.58" width="41" height="2" rx="1" ry="1" fill="#2e9afe"/> <rect id="l3b" x="44.12" y="112.51" width="41" height="2" rx="1" ry="1" fill="#2e9afe"/> <rect id="l4b" x="44.12" y="132.44" width="41" height="2" rx="1" ry="1" fill="#2e9afe"/> <rect id="l1s" x="29.65" y="72.65" width="3.38" height="2" rx="1" ry="1" fill="#2e9afe"/> <rect id="l2s" x="29.65" y="92.58" width="3.38" height="2" rx="1" ry="1" fill="#2e9afe"/> <rect id="l3s" x="29.65" y="112.51" width="3.38" height="2" rx="1" ry="1" fill="#2e9afe"/> <rect id="l4s" x="29.65" y="132.44" width="3.38" height="2" rx="1" ry="1" fill="#2e9afe"/> <rect id="l5b" x="129.79" y="72.65" width="41" height="2" rx="1" ry="1" fill="#2e9afe"/> <rect id="l6b" x="129.79" y="92.58" width="41" height="2" rx="1" ry="1" fill="#2e9afe"/> <rect id="l7b" x="129.79" y="112.51" width="41" height="2" rx="1" ry="1" fill="#2e9afe"/> <rect id="l8b" x="129.79" y="132.44" width="41" height="2" rx="1" ry="1" fill="#2e9afe"/> <rect id="l5s" x="115.32" y="72.65" width="3.38" height="2" rx="1" ry="1" fill="#2e9afe"/> <rect id="l6s" x="115.32" y="92.58" width="3.38" height="2" rx="1" ry="1" fill="#2e9afe"/> <rect id="l7s" x="115.32" y="112.51" width="3.38" height="2" rx="1" ry="1" fill="#2e9afe"/> <rect id="l8s" x="115.32" y="132.44" width="3.38" height="2" rx="1" ry="1" fill="#2e9afe"/> <path id="flip2" d="M 112.45, 16.4 Q 101, 16.4, 101, 27.87 L 101, 165.47 Q 101, 154, 112.45, 154 L 185, 154 L 185 16.4 L 112.45, 16.4" fill="#ffffff" stroke="#2e9afe" stroke-width="2" stroke-linecap="round"/> <path id="flip1" d="M 112.45, 16.4 Q 101, 16.4, 101, 27.87 L 101, 165.47 Q 101, 154, 112.45, 154 L 185, 154 L 185 16.4 L 112.45, 16.4" fill="#ffffff" stroke="#2e9afe" stroke-width="2" stroke-linecap="round"/></svg>',
    
        keyframes: {
            flip: {
                '0': {
                    x1: 185, y1: 16.42,
                    x7: 185, y7: 16.42,
                    x8: 185, y8: 16.42,
                    a2: Math.PI,
                    a3: Math.PI,
                    x4: 185, y4: 16.42,
                    x5: 185, y5: 16.42,
                    x6: 185, y6: 16.42
                },
                '3000': {
                    x1: 185, y1: 16.42,
                    x7: 185, y7: 16.42,
                    x8: 185, y8: 16.42,
                    a2: Math.PI,
                    a3: Math.PI,
                    x4: 185, y4: 16.42,
                    x5: 185, y5: 16.42,
                    x6: 185, y6: 16.42
                },
                '3400': {
                    x1: 148, y1: 16.42,
                    x7: 148, y7: 16.42,
                    x8: 148, y8: 16.42,
                    a2: Math.PI * 0.6,
                    a3: Math.PI,
                    x4: 185, y4: 154,
                    x5: 185, y5: 154,
                    x6: 185, y6: 154
                },
                '3900': {
                    x1: 101, y1: 16.42,
                    x7: 101, y7: 16.42,
                    x8: 101, y8: 16.42,
                    a2: Math.PI * 0.1,
                    a3: Math.PI * 0.2,
                    x4: 101, y4: 154,
                    x5: 101, y5: 154,
                    x6: 101, y6: 154
                },
                '4000': {
                    x1: 90, y1: 16.42,
                    x7: 101, y7: 28,
                    x8: 101, y8: 16.42,
                    a2: 0,
                    a3: 0,
                    x4: 90, y4: 154,
                    x5: 101, y5: 154,
                    x6: 101, y6: 165
                }
            },
            l1b: {'0':  {w: 0, x: 29.65}, '700': {w: 50, x: 44.12}, '1000': {w: 41, x: 44.12}, '4000': {w: 41, x: 44.12}},
            l2b: {'0':  {w: 0, x: 29.65}, '150':  {w: 0, x: 29.65}, '850': {w: 50, x: 44.12}, '1150': {w: 41, x: 44.12}, '4000': {w: 41, x: 44.12}},
            l3b: {'0':  {w: 0, x: 29.65}, '300':  {w: 0, x: 29.65}, '1000': {w: 50, x: 44.12}, '1300': {w: 41, x: 44.12}, '4000': {w: 41, x: 44.12}},
            l4b: {'0':  {w: 0, x: 29.65}, '450':  {w: 0, x: 29.65}, '1150': {w: 50, x: 44.12}, '1450': {w: 41, x: 44.12}, '4000': {w: 41, x: 44.12}},
            l5b: {'0':  {w: 0, x: 115.32}, '1250':  {w: 0, x: 115.32}, '1950': {w: 50, x: 129.79}, '2250': {w: 41, x: 129.79}, '4000': {w: 41, x: 129.79}},
            l6b: {'0':  {w: 0, x: 115.32}, '1400':  {w: 0, x: 115.32}, '2100': {w: 50, x: 129.79}, '2400': {w: 41, x: 129.79}, '4000': {w: 41, x: 129.79}},
            l7b: {'0':  {w: 0, x: 115.32}, '1550':  {w: 0, x: 115.32}, '2250': {w: 50, x: 129.79}, '2550': {w: 41, x: 129.79}, '4000': {w: 41, x: 129.79}},
            l8b: {'0':  {w: 0, x: 115.32}, '1700':  {w: 0, x: 115.32}, '2400': {w: 50, x: 129.79}, '2700': {w: 41, x: 129.79}, '4000': {w: 41, x: 129.79}},
    
            l1s: {'0': {w: 0}, '700': {w: 3.38}, '4000': {w: 3.38}},
            l2s: {'0': {w: 0}, '150': {w: 0}, '850': {w: 3.38}, '4000': {w: 3.38}},
            l3s: {'0': {w: 0}, '300': {w: 0}, '1000': {w: 3.38}, '4000': {w: 3.38}},
            l4s: {'0': {w: 0}, '450': {w: 0}, '1150': {w: 3.38}, '4000': {w: 3.38}},
            l5s: {'0': {w: 0}, '1250': {w: 0}, '1950': {w: 3.38}, '4000': {w: 3.38}},
            l6s: {'0': {w: 0}, '1400': {w: 0}, '2100': {w: 3.38}, '4000': {w: 3.38}},
            l7s: {'0': {w: 0}, '1550': {w: 0}, '2250': {w: 3.38}, '4000': {w: 3.38}},
            l8s: {'0': {w: 0}, '1700': {w: 0}, '2400': {w: 3.38}, '4000': {w: 3.38}},
    
            s1: {
                '0': {s: 0},
                '1000': {s: 1.5},
                '1500': {s: 1},
                '4000': {s: 1}
            },
    
            s2: {
                '0': {s: 0},
                '1500': {s: 0},
                '2500': {s: 1.5},
                '3000': {s: 1},
                '4000': {s: 1}
            }
    
        },
    
        large: function(line, data) {
            line.setAttribute('width', data.w);
            line.setAttribute('x', data.x);
        },
    
        l1b: function(data) {
            this.large(this.$l1b, data);
        },
    
        l2b: function(data) {
            this.large(this.$l2b, data);
    
        },
    
        l3b: function(data) {
            this.large(this.$l3b, data);
    
        },
    
        l4b: function(data) {
            this.large(this.$l4b, data);
        },
    
        l5b: function(data) {
            this.large(this.$l5b, data);
        },
    
        l6b: function(data) {
            this.large(this.$l6b, data);
        },
    
        l7b: function(data) {
            this.large(this.$l7b, data);
        },
    
        l8b: function(data) {
            this.large(this.$l8b, data);
        },
    
        l1s: function(data) {
            this.$l1s.setAttribute('width', data.w)
        },
    
        l2s: function(data) {
            this.$l2s.setAttribute('width', data.w)
        },
    
        l3s: function(data) {
            this.$l3s.setAttribute('width', data.w)
        },
    
        l4s: function(data) {
            this.$l4s.setAttribute('width', data.w)
        },
    
        l5s: function(data) {
            this.$l5s.setAttribute('width', data.w)
        },
    
        l6s: function(data) {
            this.$l6s.setAttribute('width', data.w)
        },
    
        l7s: function(data) {
            this.$l7s.setAttribute('width', data.w)
        },
    
        l8s: function(data) {
            this.$l8s.setAttribute('width', data.w)
        },
    
        s1: function(data) {
            this.$s1.setAttribute('transform', 'translate(59 46.7) scale(' + data.s + ') translate(-59 -46.7)');
        },
    
        s2: function(data) {
            this.$s2.setAttribute('transform', 'translate(143 46.7) scale(' + data.s + ') translate(-143 -46.7)');
        },
    
        flip: function(data) {
            var x2 = 101 - 84 * Math.cos(data.a2);
            var y2 = 16.42 + 20 * Math.sin(data.a2);
            var x3 = data.a3 === Math.PI ? data.x4 : 101 - 84 * Math.cos(data.a3);
            var y3 = data.a3 === Math.PI ? data.y4 : 154 + 30 * Math.sin(data.a3);
            var rx1 = data.x1 >= 101 ? data.x1 : 101 + (101 - data.x1);
            var rx4 = data.x4 >= 101 ? data.x4 : 101 + (101 - data.x4);
            this.$flip1.setAttribute('d', 'M' + data.x1 + ',' + data.y1 + 'L' + x2 + ',' + y2 + 'L' + x3 + ',' + y3 + 'L' + data.x4 + ',' + data.y4 + 'Q' + data.x5 + ',' + data.y5 + ',' + data.x6 + ',' + data.y6 + 'L' + data.x7 + ',' + data.y7 + 'Q' + data.x8 + ',' + data.y8 + ',' + data.x1 + ',' + data.y1);
            this.$flip2.setAttribute('d', 'M' + rx1 + ',' + data.y1 + 'L185,16.42L185,' + data.y4 + 'L' + rx4 + ',' + data.y4 + 'Q' + data.x5 + ',' + data.y5 + ',' + data.x6 + ',' + data.y6 + 'L' + data.x7 + ',' + data.y7 + 'Q' + data.x8 + ',' + data.y8 + ',' + rx1 + ',' + data.y1);
        },
    
        init: function() {
            this.$flip1 = this.$root.querySelector('#flip1');
            this.$flip2 = this.$root.querySelector('#flip2');
            this.$l1b = this.$root.querySelector('#l1b');
            this.$l2b = this.$root.querySelector('#l2b');
            this.$l3b = this.$root.querySelector('#l3b');
            this.$l4b = this.$root.querySelector('#l4b');
            this.$l5b = this.$root.querySelector('#l5b');
            this.$l6b = this.$root.querySelector('#l6b');
            this.$l7b = this.$root.querySelector('#l7b');
            this.$l8b = this.$root.querySelector('#l8b');
            this.$l1s = this.$root.querySelector('#l1s');
            this.$l2s = this.$root.querySelector('#l2s');
            this.$l3s = this.$root.querySelector('#l3s');
            this.$l4s = this.$root.querySelector('#l4s');
            this.$l5s = this.$root.querySelector('#l5s');
            this.$l6s = this.$root.querySelector('#l6s');
            this.$l7s = this.$root.querySelector('#l7s');
            this.$l8s = this.$root.querySelector('#l8s');
            this.$s1 = this.$root.querySelector('#s1');
            this.$s2 = this.$root.querySelector('#s2');
            this.animate(this.keyframes.flip, this.flip, 'linear');
            this.animate(this.keyframes.l1b, this.l1b, 'inOut');
            this.animate(this.keyframes.l2b, this.l2b, 'inOut');
            this.animate(this.keyframes.l3b, this.l3b, 'inOut');
            this.animate(this.keyframes.l4b, this.l4b, 'inOut');
            this.animate(this.keyframes.l5b, this.l5b, 'inOut');
            this.animate(this.keyframes.l6b, this.l6b, 'inOut');
            this.animate(this.keyframes.l7b, this.l7b, 'inOut');
            this.animate(this.keyframes.l8b, this.l8b, 'inOut');
            this.animate(this.keyframes.l1s, this.l1s, 'inOut');
            this.animate(this.keyframes.l2s, this.l2s, 'inOut');
            this.animate(this.keyframes.l3s, this.l3s, 'inOut');
            this.animate(this.keyframes.l4s, this.l4s, 'inOut');
            this.animate(this.keyframes.l5s, this.l5s, 'inOut');
            this.animate(this.keyframes.l6s, this.l6s, 'inOut');
            this.animate(this.keyframes.l7s, this.l7s, 'inOut');
            this.animate(this.keyframes.l8s, this.l8s, 'inOut');
            this.animate(this.keyframes.s1, this.s1, 'inOut');
            this.animate(this.keyframes.s2, this.s2, 'inOut');
        }
    
    });
    
    
    /* exchange */
    
    Icon.exchange = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>Exchange</title> <g id="g1"> <rect x="68.8" y="69.63" width="65.9" height="53.44" rx="3.75" ry="3.75" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/> <line x1="86.5" y1="131.97" x2="117" y2="131.97" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/> <line x1="68.8" y1="109.82" x2="134.7" y2="109.82" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/> <rect x="91.74" y="123.07" width="20.04" height="8.9" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/> </g> <g id="g2"> <rect x="68.8" y="69.63" width="65.9" height="53.44" rx="3.75" ry="3.75" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="86.5" y1="131.97" x2="117" y2="131.97" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/> <line x1="68.8" y1="109.82" x2="134.7" y2="109.82" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/> <rect x="91.74" y="123.06" width="20.04" height="8.9" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/> </g> <g id="g3"> <path d="M54.49,108v19.44a15.19,15.19,0,0,0,15.19,15.19H89.11" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/> <polygon points="85.63 134.67 93.58 142.62 85.63 150.58 85.63 134.67" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <g id="g4"> <path d="M147.52,86.28V66.85a15.19,15.19,0,0,0-15.19-15.19H112.89" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"/> <polygon points="115.51 59.72 107.56 51.76 115.51 43.81 115.51 59.72" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g></svg>',
    
        keyframes: {
    
            spin: {
                '0': {a: 360, o1: 0, o2: 1},
                '2000': {a: 180, o1: 1, o2: 0},
                '4000': {a: 0, o1: 0, o2: 1}
            }
    
        },
    
        spin: function(data) {
            var rad1 = (data.a - 135) / 180 * Math.PI;
            var x1 = 60 * Math.cos(rad1);
            var y1 = 60 * Math.sin(rad1);
            var rad2 = (data.a + 45) / 180 * Math.PI;
            var x2 = 60 * Math.cos(rad2);
            var y2 = 60 * Math.sin(rad2);
            this.$g1.setAttribute('fill-opacity', data.o1);
            this.$g2.setAttribute('fill-opacity', data.o2);
            this.$g1.setAttribute('transform', 'translate('+x1+' '+y1+')');
            this.$g2.setAttribute('transform', 'translate('+x2+' '+y2+')');
            this.$g3.setAttribute('transform', 'translate(101 101) rotate(' + data.a + ') translate(-101 -101)');
            this.$g4.setAttribute('transform', 'translate(101 101) rotate(' + data.a + ') translate(-101 -101)');
    
    
        },
    
        init: function() {
            this.$g1 = this.$root.querySelector('#g1');
            this.$g2 = this.$root.querySelector('#g2');
            this.$g3 = this.$root.querySelector('#g3');
            this.$g4 = this.$root.querySelector('#g4');
            this.$s1 = this.$root.querySelector('#s1');
            this.$s2 = this.$root.querySelector('#s2');
            this.animate(this.keyframes.spin, this.spin, 'inOut');
        }
    
    });
    
    
    /* window */
    
    Icon.window = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>Window</title> <defs> <clipPath id="wheel"> <path id="cut" d="M194.91,115.94h0a5.86,5.86,0,0,1-5.62-4.23,41.82,41.82,0,0,0-3.48-8.59,5.85,5.85,0,0,1,1.09-6.95h0a5.91,5.91,0,0,0,.07-8.36h0l-2.32-2.36a5.91,5.91,0,0,0-8.36-.07h0a5.85,5.85,0,0,1-6.95,1,41.87,41.87,0,0,0-8.53-3.62,5.86,5.86,0,0,1-4.15-5.67h0a5.91,5.91,0,0,0-5.86-6h0l-3.27,0a5.91,5.91,0,0,0-6,5.86h0a5.86,5.86,0,0,1-4.23,5.62A41.88,41.88,0,0,0,128.74,86,5.85,5.85,0,0,1,121.79,85h0a5.91,5.91,0,0,0-8.36-.07h0l-2.36,2.32a5.91,5.91,0,0,0-.07,8.36h0a5.85,5.85,0,0,1,1,6.95c-0.32.58-.61,1.15-0.92,1.75h0a41.86,41.86,0,0,0-2.71,6.85,5.75,5.75,0,0,1-.35.89,5.89,5.89,0,0,1-5.3,3.19h0a6,6,0,0,0-6,5.91l0,3.27a5.91,5.91,0,0,0,5.86,6h0a5.86,5.86,0,0,1,5.62,4.23,41.82,41.82,0,0,0,3.48,8.59,5.85,5.85,0,0,1-1.09,6.95h0a5.91,5.91,0,0,0-.07,8.36h0l2.32,2.36a5.91,5.91,0,0,0,8.36.07h0a5.85,5.85,0,0,1,7-1,41.87,41.87,0,0,0,8.53,3.62,5.86,5.86,0,0,1,4.15,5.67h0a5.91,5.91,0,0,0,5.86,6h0l3.27,0a5.91,5.91,0,0,0,6-5.86h0a5.86,5.86,0,0,1,4.23-5.62,41.88,41.88,0,0,0,8.59-3.48,5.85,5.85,0,0,1,6.95,1.09h0a5.91,5.91,0,0,0,8.36.07h0l2.36-2.32a5.91,5.91,0,0,0,.07-8.36h0a5.85,5.85,0,0,1-1-6.95c0.32-.58.61-1.15,0.92-1.75h0a41.87,41.87,0,0,0,2.71-6.85,5.71,5.71,0,0,1,.35-0.89,5.89,5.89,0,0,1,5.3-3.19h0a6,6,0,0,0,6-5.91l0-3.27a5.91,5.91,0,0,0-5.85-6h0Z"/> </clipPath> <clipPath id="body"> <rect x="1" y="50.84" width="151" height="92"/> </clipPath> </defs> <path d="M152.94,87.06v54.26a2.76,2.76,0,0,1-3,2.42H4a2.76,2.76,0,0,1-3-2.42V32a2.76,2.76,0,0,1,3-2.42H149.94a2.76,2.76,0,0,1,3,2.42V87.06Z" transform="translate(0 0)" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M1,50.84" transform="translate(0 0)" fill="#fff" stroke="#67939e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polygon id="p2" points="61.26 115.97 61.26 118.58 15.41 118.58 15.41 100.11 61.26 100.11 61.26 102.72 61.26 115.97" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polygon id="p1" points="61.26 83.48 61.26 86.09 15.41 86.09 15.41 67.64 61.26 67.64 61.26 70.23 61.26 83.48" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <g clip-path="url(#body)"> <line id="g4" x1="15.01" y1="129.97" x2="48.18" y2="129.97" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <g clip-path="url(#body)"> <g id="g3"> <line x1="84.4" y1="67.64" x2="136.68" y2="67.64" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="84.4" y1="79.03" x2="121.41" y2="79.03" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="84.4" y1="90.42" x2="136.68" y2="90.42" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="84.4" y1="101.82" x2="121.41" y2="101.82" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="84.4" y1="113.21" x2="136.68" y2="113.21" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> </g> <path d="M149.94,29.56H4A2.76,2.76,0,0,0,1,32V50.84H152.94V32A2.76,2.76,0,0,0,149.94,29.56Z" transform="translate(0 0)" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle cx="12.56" cy="40.2" r="3.3" fill="#2e9afe"/> <circle cx="23.73" cy="40.2" r="3.3" fill="#2e9afe"/> <circle cx="34.91" cy="40.2" r="3.3" fill="#2e9afe"/> <path id="spin" d="M194.91,115.94h0a5.86,5.86,0,0,1-5.62-4.23,41.82,41.82,0,0,0-3.48-8.59,5.85,5.85,0,0,1,1.09-6.95h0a5.91,5.91,0,0,0,.07-8.36h0l-2.32-2.36a5.91,5.91,0,0,0-8.36-.07h0a5.85,5.85,0,0,1-6.95,1,41.87,41.87,0,0,0-8.53-3.62,5.86,5.86,0,0,1-4.15-5.67h0a5.91,5.91,0,0,0-5.86-6h0l-3.27,0a5.91,5.91,0,0,0-6,5.86h0a5.86,5.86,0,0,1-4.23,5.62A41.88,41.88,0,0,0,128.74,86,5.85,5.85,0,0,1,121.79,85h0a5.91,5.91,0,0,0-8.36-.07h0l-2.36,2.32a5.91,5.91,0,0,0-.07,8.36h0a5.85,5.85,0,0,1,1,6.95c-0.32.58-.61,1.15-0.92,1.75h0a41.86,41.86,0,0,0-2.71,6.85,5.75,5.75,0,0,1-.35.89,5.89,5.89,0,0,1-5.3,3.19h0a6,6,0,0,0-6,5.91l0,3.27a5.91,5.91,0,0,0,5.86,6h0a5.86,5.86,0,0,1,5.62,4.23,41.82,41.82,0,0,0,3.48,8.59,5.85,5.85,0,0,1-1.09,6.95h0a5.91,5.91,0,0,0-.07,8.36h0l2.32,2.36a5.91,5.91,0,0,0,8.36.07h0a5.85,5.85,0,0,1,7-1,41.87,41.87,0,0,0,8.53,3.62,5.86,5.86,0,0,1,4.15,5.67h0a5.91,5.91,0,0,0,5.86,6h0l3.27,0a5.91,5.91,0,0,0,6-5.86h0a5.86,5.86,0,0,1,4.23-5.62,41.88,41.88,0,0,0,8.59-3.48,5.85,5.85,0,0,1,6.95,1.09h0a5.91,5.91,0,0,0,8.36.07h0l2.36-2.32a5.91,5.91,0,0,0,.07-8.36h0a5.85,5.85,0,0,1-1-6.95c0.32-.58.61-1.15,0.92-1.75h0a41.87,41.87,0,0,0,2.71-6.85,5.71,5.71,0,0,1,.35-0.89,5.89,5.89,0,0,1,5.3-3.19h0a6,6,0,0,0,6-5.91l0-3.27a5.91,5.91,0,0,0-5.85-6h0Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <g clip-path="url(#wheel)"> <g id="g2" transform="translate(5 -5)"> <path d="M139.67,122.37l12.82,12.82-7.43,7.43a5.89,5.89,0,0,1-8.26,0L132.22,138a5.89,5.89,0,0,1,0-8.26l7.43-7.43Z" transform="translate(0 0)" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="148.22" y1="120.68" x2="143.89" y2="125" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="154.15" y1="126.61" x2="149.82" y2="130.93" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="134.5" y1="140.32" x2="108.59" y2="166.22" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> </g> <g clip-path="url(#wheel)"> <g id="g1" transform="translate(-5 5)"> <path d="M149.94,112.07l12.82,12.82,7.43-7.43a5.89,5.89,0,0,0,0-8.26l-4.58-4.58a5.89,5.89,0,0,0-8.26,0L149.92,112Z" transform="translate(0 0)" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="192.78" y1="82.04" x2="168.87" y2="105.96" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> </g></svg>',
    
        keyframes: {
            spin: {
                '0': {a: 0},
                '4000': {a: 360}
            },
            g1: {
                '0':    {x: 40, y: -40},
                '1000': {x: 0, y: 0},
                '1500': {x: -5, y: 5},
                '3500': {x: -5, y: 5},
                '4000': {x: 30, y: -30}
            },
            g2: {
                '0':    {x: -40, y: 40},
                '1000': {x: 0, y: 0},
                '1500': {x: 5, y: -5},
                '3500': {x: 5, y: -5},
                '4000': {x: -40, y: 40}
            },
            g34: {
                '0': {x: 69, y: 14},
                '1800': {x: 69, y: 14},
                '2400': {x: 0, y: 0},
                '3500': {x: 0, y: 0},
                '4000': {x: 69, y: 14}
            },
            p1: {
                '0': {x: -61},
                '1300': {x: -61},
                '1900': {x: 12},
                '2100': {x: 0},
                '3400': {x: 0},
                '3900': {x: -61},
                '4000': {x: -61}
            },
            p2: {
                '0': {x: -61},
                '1500': {x: -61},
                '2100': {x: 12},
                '2300': {x: 0},
                '3500': {x: 0},
                '4000': {x: -61}
            }
    
        },
    
        spin: function(data) {
            this.$spin.setAttribute('transform', 'translate(149 123) rotate(' + data.a + ') translate(-149 -123)');
            this.$cut.setAttribute('transform', 'translate(149 123) rotate(' + data.a + ') translate(-149 -123)');
        },
    
        g1: function(data) {
            this.$g1.setAttribute('transform', 'translate(' + data.x + ' ' + data.y + ')');
        },
    
        g2: function(data) {
            this.$g2.setAttribute('transform', 'translate(' + data.x + ' ' + data.y + ')');
        },
    
        g34: function(data) {
            this.$g3.setAttribute('transform', 'translate(' + data.x + ' 0)');
            this.$g4.setAttribute('transform', 'translate(0 ' + data.y + ')');
        },
    
        p1: function(data) {
            this.$p1.setAttribute('transform', 'translate(' + data.x + ' 0)');
        },
    
        p2: function(data) {
            this.$p2.setAttribute('transform', 'translate(' + data.x + ' 0)');
        },
    
        init: function() {
            this.$cut = this.$root.querySelector('#cut');
            this.$spin = this.$root.querySelector('#spin');
            this.$g1 = this.$root.querySelector('#g1');
            this.$g2 = this.$root.querySelector('#g2');
            this.$g3 = this.$root.querySelector('#g3');
            this.$g4 = this.$root.querySelector('#g4');
            this.$p1 = this.$root.querySelector('#p1');
            this.$p2 = this.$root.querySelector('#p2');
            this.animate(this.keyframes.spin, this.spin, 'linear');
            this.animate(this.keyframes.g1, this.g1, 'inOut');
            this.animate(this.keyframes.g2, this.g2, 'inOut');
            this.animate(this.keyframes.g34, this.g34, 'inOut');
            this.animate(this.keyframes.p1, this.p1, 'inOut');
            this.animate(this.keyframes.p2, this.p2, 'inOut');
        }
    
    });
    
    
    /* list */
    
    Icon.list = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>List</title> <defs> <clipPath id="head"> <circle cx="33.97" cy="40.34" r="15.83"/> </clipPath> <clipPath id="test"> <path d="M 13, 67.85 H 54.94 a 11,11,0,0,1,11,11 v 55.32 H 47.89 V 177.51 H 20.05 V 134.15 H 2 V 77.85 A 11,11,0,0,1,13,67.85"/> </clipPath> </defs> <path d="M165.79,19.39H78.62V182.61H201v-128Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect id="l1" x="138.87" y="84.21" rx="1" ry="1" width="39.28" height="2" fill="#2e9afe"/> <rect id="l2" x="138.87" y="116.58" rx="1" ry="1" width="39.28" height="2" fill="#2e9afe"/> <rect id="l3" x="138.87" y="148.94" rx="1" ry="1" width="39.28" height="2" fill="#2e9afe"/> <polyline id="s1" points="100.52 83.92 107.68 91.08 119.45 79.31" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polyline id="s2" points="100.52 116.31 107.68 123.45 119.45 111.69" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polyline id="s3" points="100.52 148.68 107.68 155.84 119.45 144.06" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polyline points="165.29 20.39 164.75 54.97 200.01 54.97" fill="#fff" opacity="0.7" style="isolation:isolate"/> <polyline points="164.19 19.75 164.19 55.13 200.26 55.13" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle cx="33.97" cy="40.34" r="16.83" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect id="u1" clip-path="url(#head)" x="17.14" y="23.15" width="33" height="20" fill="#82C2FE"/> <path d="M 13, 67.85 H 54.94 a 11,11,0,0,1,11,11 v 55.32 H 47.89 V 177.51 H 20.05 V 134.15 H 2 V 77.85 A 11,11,0,0,1,13,67.85" fill="#e0f0ff"/> <rect id="u2" clip-path="url(#test)" x="1" y="66.85" width="66" height="100" fill="#82C2FE"/> <path d="M13,66.85H54.94a12,12,0,0,1,12,12h0v56.32H1V78.85A12,12,0,0,1,13,66.85Z" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="19.05" y1="178.51" x2="19.05" y2="101.01" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="48.89" y1="178.51" x2="48.89" y2="101.01" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="48.89" y1="178.51" x2="19.05" y2="178.51" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="33.97" y1="178.51" x2="33.97" y2="135.15" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>',
    
        keyframes: {
    
            u1: {
                '0': {h: 0},
                '170': {h: 0},
                '500': {h: 33},
                '3000': {h: 33}
            },
    
            u2: {
                '0': {h: 0},
                '500': {h: 0},
                '1610': {h: 111.66},
                '3000': {h: 111.66}
            },
    
            l1: {
                '0': {w: 0},
                '500': {w: 50},
                '900': {w: 39},
                '3000': {w: 39}
            },
    
            l2: {
                '0': {w: 0},
                '300': {w: 0},
                '800': {w: 50},
                '1000': {w: 39},
                '3000': {w: 39}
            },
    
            l3: {
                '0': {w: 0},
                '600': {w: 0},
                '1100': {w: 50},
                '1500': {w: 39},
                '3000': {w: 39}
            },
    
            s1: {
                '0': {s: 0},
                '500': {s: 0},
                '800': {s: 1.5},
                '1000': {s: 1},
                '3000': {s: 1}
            },
    
            s2: {
                '0': {s: 0},
                '800': {s: 0},
                '1100': {s: 1.5},
                '1300': {s: 1},
                '3000': {s: 1}
            },
    
            s3: {
                '0': {s: 0},
                '1100': {s: 0},
                '1400': {s: 1.5},
                '1600': {s: 1},
                '3000': {s: 1}
            }
    
        },
    
        u1: function(data) {
            this.$u1.setAttribute('height', data.h);
        },
    
        u2: function(data) {
            this.$u2.setAttribute('height', data.h);
        },
    
        l1: function(data) {
            this.$l1.setAttribute('width', data.w);
        },
    
        l2: function(data) {
            this.$l2.setAttribute('width', data.w);
        },
    
        l3: function(data) {
            this.$l3.setAttribute('width', data.w);
        },
    
        s1: function(data) {
            this.$s1.setAttribute('transform', 'translate(110 85.2) scale(' + data.s + ') translate(-110 -85.2)');
        },
    
        s2: function(data) {
            this.$s2.setAttribute('transform', 'translate(110 117.57) scale(' + data.s + ') translate(-110 -117.57)');
        },
    
        s3: function(data) {
            this.$s3.setAttribute('transform', 'translate(110 149.95) scale(' + data.s + ') translate(-110 -149.95)');
        },
    
        init: function() {
            this.$u1 = this.$root.querySelector('#u1');
            this.$u2 = this.$root.querySelector('#u2');
            this.$l1 = this.$root.querySelector('#l1');
            this.$l2 = this.$root.querySelector('#l2');
            this.$l3 = this.$root.querySelector('#l3');
            this.$s1 = this.$root.querySelector('#s1');
            this.$s2 = this.$root.querySelector('#s2');
            this.$s3 = this.$root.querySelector('#s3');
            this.animate(this.keyframes.u1, this.u1, 'linear');
            this.animate(this.keyframes.u2, this.u2, 'inOut');
            this.animate(this.keyframes.l1, this.l1, 'inOut');
            this.animate(this.keyframes.l2, this.l2, 'inOut');
            this.animate(this.keyframes.l3, this.l3, 'inOut');
            this.animate(this.keyframes.s1, this.s1, 'inOut');
            this.animate(this.keyframes.s2, this.s2, 'inOut');
            this.animate(this.keyframes.s3, this.s3, 'inOut');
        }
    
    });
    
    
    /* chart */
    
    Icon.chart = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>chart</title> <g id="s1" transform="translate(31.48 52.86) scale(0.5) translate(-31.48 -52.86)"> <path d="M31.48,52.83l7.89-29.44A30.6,30.6,0,0,0,1,52.86H1A30.47,30.47,0,0,0,31.48,83.33h0A30.47,30.47,0,0,0,62,52.87h0A30.49,30.49,0,0,0,61,45Z" transform="translate(0)" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path id="s2" d="M32.26,52.06l46.27-12.4A48,48,0,0,0,44.65,5.77Z" transform="translate(0)" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <g id="p1" transform="translate(-150.57 95.49)"> <g id="p2"> <polygon points="201 66.33 156.46 21.77 201 21.77 201 66.33" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> </g> <rect id="l1" x="27.16" y="138.54" rx="1" ry="1" width="95.86" height="2" fill="#2e9afe" transform="rotate(-45 28.16 139.54)"/> <rect id="l2" x="93.53" y="72.17" rx="1" ry="1" width="41.81" height="2" fill="#2e9afe" transform="rotate(45 94.53 73.17)"/> <rect id="l3" x="121.68" y="100.32" rx="1" ry="1" width="79.5" height="2" fill="#2e9afe" transform="rotate(-45 122.68 101.32)"/> <rect id="b1" x="50.42" y="154.1" width="33.93" height="42.12" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" transform="translate(84.35 196.22) scale(1 1) translate(-84.35 -196.22)"/> <rect id="b2" x="108.74" y="131.32" width="33.93" height="64.9" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect id="b3" x="167.07" y="99.02" width="33.93" height="97.2" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>',
    
        keyframes: {
            p1: {
                '0': {x: -150.57, y: 95.49, a: 0, s: 0.5},
                '480': {x: -84.2, y: 29.12, a: 0, s: 0.64},
                '780': {x: -84.2, y: 29.12, a: 90, s: 0.73},
                '990': {x: -56.05, y: 57.27, a: 90, s: 0.79},
                '1290': {x: -56.05, y: 57.27, a: 0, s: 0.88},
                '1690': {x: 0, y: 0, a: 0, s: 1.0},
                '3000': {x: 0, y: 0, a: 0, s: 1.0}
            },
            l1: {
                '0': {w: 0},
                '480': {w: 95.86},
                '3000': {w: 95.86}
            },
            l2: {
                '0': {w: 0},
                '780': {w: 0},
                '990': {w: 41.81},
                '3000': {w: 41.81}
            },
            l3: {
                '0': {w: 0},
                '1290': {w: 0},
                '1690': {w: 79.5},
                '3000': {w: 79.5}
            },
            b1: {
                '0': {s: 0},
                '400': {s: 0},
                '900': {s: 1.2},
                '1100': {s: 1},
                '3000': {s: 1}
            },
            b2: {
                '0': {s: 0},
                '1100': {s: 0},
                '1600': {s: 1.2},
                '1800': {s: 1},
                '3000': {s: 1}
            },
            b3: {
                '0': {s: 0},
                '1600': {s: 0},
                '2000': {s: 1.2},
                '2200': {s: 1},
                '3000': {s: 1}
            },
            s1: {
                '0': {s: 0, a: 0},
                '400': {s: 0, a: 0},
                '1600': {s: 1, a: 360},
                '3000': {s: 1, a: 360}
            },
            s2: {
                '0': {s: 0.63},
                '1200': {s: 0.63},
                '1600': {s: 1.1},
                '1800': {s: 1},
                '3000': {s: 1}
            }
    
        },
    
        p1: function(data) {
            var rx = 178.73 + data.x;
            var ry = 44.05 + data.y;
            this.$p1.setAttribute('transform', 'rotate(' + data.a + ' ' + rx + ' ' + ry + ')');
            this.$p2.setAttribute('transform', 'translate(' + rx + ' ' + ry + ') scale(' + data.s + ') translate(' + -rx + ' ' + -ry + ') translate(' + data.x + ' ' + data.y + ')');
        },
    
        l1: function(data) {
            this.$l1.setAttribute('width', data.w);
        },
    
        l2: function(data) {
            this.$l2.setAttribute('width', data.w);
        },
    
        l3: function(data) {
            this.$l3.setAttribute('width', data.w);
        },
    
        b1: function(data) {
            this.$b1.setAttribute('transform', 'translate(84.35 196.22) scale(1 ' + data.s + ') translate(-84.35 -196.22)');
        },
    
        b2: function(data) {
            this.$b2.setAttribute('transform', 'translate(142.67 196.22) scale(1 ' + data.s + ') translate(-142.67 -196.22)');
        },
    
        b3: function(data) {
            this.$b3.setAttribute('transform', 'translate(201 196.22) scale(1 ' + data.s + ') translate(-201 -196.22)');
        },
    
        s1: function(data) {
            this.$s1.setAttribute('transform', 'translate(31.48 52.86) scale(' + data.s + ') translate(-31.48 -52.86) rotate(' + data.a + ' 31.48 52.86)');
        },
    
        s2: function(data) {
            this.$s2.setAttribute('transform', 'translate(31.48 52.86) scale(' + data.s + ') translate(-31.48 -52.86)');
        },
    
        init: function() {
            this.$p1 = this.$root.querySelector('#p1');
            this.$p2 = this.$root.querySelector('#p2');
            this.$l1 = this.$root.querySelector('#l1');
            this.$l2 = this.$root.querySelector('#l2');
            this.$l3 = this.$root.querySelector('#l3');
            this.$b1 = this.$root.querySelector('#b1');
            this.$b2 = this.$root.querySelector('#b2');
            this.$b3 = this.$root.querySelector('#b3');
            this.$s1 = this.$root.querySelector('#s1');
            this.$s2 = this.$root.querySelector('#s2');
            this.animate(this.keyframes.p1, this.p1, 'linear');
            this.animate(this.keyframes.l1, this.l1, 'linear');
            this.animate(this.keyframes.l2, this.l2, 'linear');
            this.animate(this.keyframes.l3, this.l3, 'linear');
            this.animate(this.keyframes.b1, this.b1, 'inOut');
            this.animate(this.keyframes.b2, this.b2, 'inOut');
            this.animate(this.keyframes.b3, this.b3, 'inOut');
            this.animate(this.keyframes.s1, this.s1, 'inOut');
            this.animate(this.keyframes.s2, this.s2, 'inOut');
        }
    
    });
    
    
    /* mail */
    
    Icon.mail = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>Mail</title> <g id="shake"> <path d="M68.23,51.06a18.54,18.54,0,0,0-31.64,13.1v54.11H73.65V64.16A18.46,18.46,0,0,0,68.23,51.06Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path id="s1" d="M68.23,51.06a18.54,18.54,0,0,0-31.64,13.1v54.11H73.65V64.16A18.46,18.46,0,0,0,68.23,51.06Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path id="s2" transform="translate(0 118.27) scale(1 0) translate(0 -118.27)" d="M68.23,170.87a18.54,18.54,0,0,1-31.64-13.1v-39.5H73.65v39.5A18.44,18.44,0,0,1,68.23,170.87Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <g id="mail" transform="translate(20 0)"> <rect x="14.24" y="77.59" width="59.49" height="40.68" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polygon points="73.72 118.27 43.98 92.17 14.23 118.27 73.72 118.27" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polygon points="73.72 77.59 43.98 103.69 14.23 77.59 73.72 77.59" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <path id="line" d="M73.65,65.77h-4.9A15.82,15.82,0,0,1,52.94,50h0A15.82,15.82,0,0,1,68.76,34.13H139.07" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="125" stroke-width="2"/> <g id="plane"> <polygon points="142.82 34.15 89.08 34.15 80.39 12.47 142.82 34.15" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polygon points="142.82 34.15 89.08 34.15 100.69 1 142.82 34.15" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <path d="M187.77,118.27H73.65V64.16a18.54,18.54,0,0,0,-18.54,-18.54H169.24a18.54,18.54,0,0,1,18.53,18.53v54.11h0Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="165.45" y1="106.62" x2="122.03" y2="106.62" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect x="122.03" y="118.27" width="17.37" height="82.73" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle cx="97.85" cy="99.67" r="6.95" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="98.79" y1="92.79" x2="98.79" y2="64.16" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect x="98.79" y="64.16" width="16.96" height="12.16" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <path d="M164.25,201a15.06,15.06,0,0,0-14.3-10.38,14.89,14.89,0,0,0-6.31,1.4,28,28,0,0,0-52,9h72.6Z" transform="translate(0 0)" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>',
    
        keyframes: {
            shake: {
                '0': {a: 0},
                '400': {a: 5},
                '700': {a: -8},
                '1000': {a: 2},
                '1200': {a: 0},
                '4200': {a: 0}
            },
            s1: {
                '0': {s: 1},
                '600': {s: 1},
                '800': {s: 0},
                '4100': {s: 0},
                '4200': {s: 1}
            },
            s2: {
                '0': {s: 0},
                '800': {s: 0},
                '1000': {s: 1},
                '4000': {s: 1},
                '4100': {s: 0},
                '4200': {s: 0}
            },
            mail: {
                '0': {x: 60},
                '1200': {x: 60},
                '1800': {x: 0},
                '3400': {x: 0},
                '4000': {x: 60},
                '4200': {x: 60}
            },
            plane: {
                '0': {x: -110, a: 180},
                '1800': {x: -110, a: 180},
                '2200': {x: -30, a: 180},
                '2800': {x: -30, a: 360},
                '3400': {x: 55, a: 360},
                '4200': {x: 55, a: 360}
            },
            line: {
                '0': {o: 125},
                '2200': {o: 125},
                '3400': {o: 0},
                '4200': {o: 0}
            },
            opacity: {
                '0': {o: 1},
                '2800': {o: 1},
                '3400': {o: 0},
                '4200': {o: 0}
            }
        },
    
        shake: function(data) {
            this.$shake.setAttribute('transform', 'rotate(' + data.a + ' 130.7 201)');
        },
    
        s1: function(data) {
            this.$s1.setAttribute('transform', 'translate(0 118.27) scale(1 ' + data.s + ') translate(0 -118.27)');
        },
    
        s2: function(data) {
            this.$s2.setAttribute('transform', 'translate(0 118.27) scale(1 ' + data.s + ') translate(0 -118.27)');
        },
    
        mail: function(data) {
            this.$mail.setAttribute('transform', 'translate(' + data.x + ' 0)');
        },
    
        plane: function(data) {
            this.$plane.setAttribute('transform', 'rotate(' + data.a + ' 68.76 49.95) translate(' + data.x + ' 0)')
        },
    
        line: function(data) {
            this.$line.setAttribute('stroke-dashoffset', data.o);
        },
    
        opacity: function(data) {
            this.$line.setAttribute('stroke-opacity', data.o);
            this.$plane.setAttribute('stroke-opacity', data.o);
            this.$plane.setAttribute('fill-opacity', data.o);
        },
    
        init: function () {
            this.$shake = this.$root.querySelector('#shake');
            this.$s1 = this.$root.querySelector('#s1');
            this.$s2 = this.$root.querySelector('#s2');
            this.$mail = this.$root.querySelector('#mail');
            this.$plane = this.$root.querySelector('#plane');
            this.$line = this.$root.querySelector('#line');
            this.animate(this.keyframes.shake, this.shake, 'inOut');
            this.animate(this.keyframes.s1, this.s1, 'linear');
            this.animate(this.keyframes.s2, this.s2, 'linear');
            this.animate(this.keyframes.mail, this.mail, 'inOut');
            this.animate(this.keyframes.plane, this.plane, 'linear');
            this.animate(this.keyframes.line, this.line, 'linear');
            this.animate(this.keyframes.opacity, this.opacity, 'linear');
        }
    
    });
    
    
    /* chain */
    
    Icon.chain = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>Chain</title> <rect id="r1" x="64.52" y="5.68" width="71.95" height="36.59" rx="6" ry="6" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect id="r2" x="64.52" y="57.03" width="71.95" height="36.59" rx="6" ry="6" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect id="r3" x="64.52" y="108.38" width="71.95" height="36.59" rx="6" ry="6" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect id="r4" x="64.52" y="159.74" width="71.95" height="36.59" rx="6" ry="6" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path id="l1" d="M37.61,73.74H8.74A7.72,7.72,0,0,1,1,66V31.68A7.72,7.72,0,0,1,8.74,24H51.16" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="130"/> <path id="l3" d="M37.61,173.21H8.74a7.72,7.72,0,0,1-7.7-7.7V131.16a7.72,7.72,0,0,1,7.7-7.7H51.16" transform="translate(0 0)" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="130"/> <path id="l2" d="M164.38,123.46h28.91a7.72,7.72,0,0,0,7.7-7.7V81.42a7.72,7.72,0,0,0-7.7-7.7H150.87" transform="translate(0 0)" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="130"/> <polygon id="a1" points="35.13 57.73 51.12 73.72 35.13 89.7 35.13 57.73" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polygon id="a3" points="35.13 157.22 51.12 173.21 35.13 189.19 35.13 157.22" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polygon id="a2" points="166.87 107.48 150.88 123.47 166.87 139.44 166.87 107.48" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>',
    
        keyframes: {
            r1: {
                '0': {s: 0},
                '300': {s: 1.2},
                '500': {s: 1},
                '2500': {s: 1}
            },
            r2: {
                '0': {s: 0},
                '500': {s: 0},
                '800': {s: 1.2},
                '1000': {s: 1},
                '2500': {s: 1}
            },
            r3: {
                '0': {s: 0},
                '1000': {s: 0},
                '1300': {s: 1.2},
                '1500': {s: 1},
                '2500': {s: 1}
            },
            r4: {
                '0': {s: 0},
                '1500': {s: 0},
                '1800': {s: 1.2},
                '2000': {s: 1},
                '2500': {s: 1}
            },
            l1: {
                '0': {o: 130},
                '500': {o: 260},
                '2500': {o: 260}
            },
            l2: {
                '0': {o: 130},
                '500': {o: 130},
                '1000': {o: 260},
                '2500': {o: 260}
            },
            l3: {
                '0': {o: 130},
                '1000': {o: 130},
                '1500': {o: 260},
                '2500': {o: 260}
            },
            a1: {
                '0': {o: 0},
                '400': {o: 0},
                '500': {o: 1},
                '2500': {o: 1}
            },
            a2: {
                '0': {o: 0},
                '900': {o: 0},
                '1000': {o: 1},
                '2500': {o: 1}
            },
            a3: {
                '0': {o: 0},
                '1400': {o: 0},
                '1500': {o: 1},
                '2500': {o: 1}
            }
        },
    
        r1: function(data) {
            this.$r1.setAttribute('transform', 'translate(100.5 24) scale(' + data.s + ') translate(-100.5 -24)');
        },
    
        r2: function(data) {
            this.$r2.setAttribute('transform', 'translate(100.5 75.33) scale(' + data.s + ') translate(-100.5 -75.33)');
        },
    
        r3: function(data) {
            this.$r3.setAttribute('transform', 'translate(100.5 126.68) scale(' + data.s + ') translate(-100.5 -126.68)');
        },
    
        r4: function(data) {
            this.$r4.setAttribute('transform', 'translate(100.5 178.03) scale(' + data.s + ') translate(-100.5 -178.03)');
        },
    
        l1: function(data) {
            this.$l1.setAttribute('stroke-dashoffset', data.o);
        },
    
        l2: function(data) {
            this.$l2.setAttribute('stroke-dashoffset', data.o);
        },
    
        l3: function(data) {
            this.$l3.setAttribute('stroke-dashoffset', data.o);
        },
    
        a1: function(data) {
            this.$a1.setAttribute('stroke-opacity', data.o);
            this.$a1.setAttribute('fill-opacity', data.o);
        },
    
        a2: function(data) {
            this.$a2.setAttribute('stroke-opacity', data.o);
            this.$a2.setAttribute('fill-opacity', data.o);
        },
    
        a3: function(data) {
            this.$a3.setAttribute('stroke-opacity', data.o);
            this.$a3.setAttribute('fill-opacity', data.o);
        },
    
        init: function() {
            this.$r1 = this.$root.querySelector('#r1');
            this.$r2 = this.$root.querySelector('#r2');
            this.$r3 = this.$root.querySelector('#r3');
            this.$r4 = this.$root.querySelector('#r4');
            this.$l1 = this.$root.querySelector('#l1');
            this.$l2 = this.$root.querySelector('#l2');
            this.$l3 = this.$root.querySelector('#l3');
            this.$a1 = this.$root.querySelector('#a1');
            this.$a2 = this.$root.querySelector('#a2');
            this.$a3 = this.$root.querySelector('#a3');
            this.animate(this.keyframes.r1, this.r1, 'inOut');
            this.animate(this.keyframes.r2, this.r2, 'inOut');
            this.animate(this.keyframes.r3, this.r3, 'inOut');
            this.animate(this.keyframes.r4, this.r4, 'inOut');
            this.animate(this.keyframes.l1, this.l1, 'linear');
            this.animate(this.keyframes.l2, this.l2, 'linear');
            this.animate(this.keyframes.l3, this.l3, 'linear');
            this.animate(this.keyframes.a1, this.a1, 'inOut');
            this.animate(this.keyframes.a2, this.a2, 'inOut');
            this.animate(this.keyframes.a3, this.a3, 'inOut');
        }
    
    });
    
    
    /* lock */
    
    Icon.lock = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"><title>lock</title> <g id="lock"> <path id="spin" d="M110.5,92.24V66.5a29,29,0,0,1,29-29h0a29,29,0,0,1,29,29V92.24" transform="translate(0)" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M91.38,92.24h96.16A3.47,3.47,0,0,1,191,95.71V161a3.47,3.47,0,0,1-3.47,3.47H91.38A3.46,3.46,0,0,1,87.91,161V95.71a3.47,3.47,0,0,1,3.47-3.47Z" fill="#82c2fe" stroke="#2e9afe" stroke-miterlimit="10" stroke-width="2"/> </g> <rect x="11" y="76.44" width="126.88" height="58.4" rx="4.5" ry="4.5" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path id="p1" d="M47.86,93.84A2.29,2.29,0,0,1,48.73,97a2.34,2.34,0,0,1-.17.26L43,104.48v0.15l8.76-1.16a2.23,2.23,0,0,1,2.51,1.92,2.27,2.27,0,0,1,0,.3h0a2.23,2.23,0,0,1-2.22,2.24l-0.28,0-8.79-1V107L48.58,114a2.23,2.23,0,0,1-.64,3.34l-0.26.15a2.23,2.23,0,0,1-3.16-1.06L41,108.22H40.86l-3.79,8.23a2.23,2.23,0,0,1-3,1.1l-0.26-.14h0a2.23,2.23,0,0,1-.7-3.08l0.13-.19,5.59-7.2v-0.15l-8.54,1.1a2.23,2.23,0,0,1-2.5-1.93,2.26,2.26,0,0,1,0-.29h0A2.23,2.23,0,0,1,30,103.43l0.29,0,8.47,1.1v-0.15l-5.4-7a2.29,2.29,0,0,1,.42-3.21L34.08,94l0.09-.05a2.29,2.29,0,0,1,3.12.85l0.1,0.2,3.6,8.1h0.15L44.69,95a2.29,2.29,0,0,1,3-1.19l0.21,0.11h0Z" transform="translate(0)" fill="#2e9afe"/> <path id="p2" d="M78.89,93.84A2.29,2.29,0,0,1,79.75,97a2.34,2.34,0,0,1-.17.26l-5.52,7.26v0.15l8.76-1.16a2.23,2.23,0,0,1,2.51,1.92,2.27,2.27,0,0,1,0,.3h0a2.23,2.23,0,0,1-2.22,2.24l-0.28,0-8.79-1V107L79.6,114a2.23,2.23,0,0,1-.64,3.34l-0.26.15a2.23,2.23,0,0,1-3.16-1.06L72,108.22H71.86l-3.79,8.23a2.23,2.23,0,0,1-3,1.1l-0.26-.14h0a2.23,2.23,0,0,1-.7-3.08l0.13-.19,5.59-7.2v-0.15l-8.54,1.1a2.23,2.23,0,0,1-2.5-1.93,2.26,2.26,0,0,1,0-.29h0A2.23,2.23,0,0,1,61,103.43l0.29,0,8.47,1.1v-0.15l-5.4-7a2.29,2.29,0,0,1,.42-3.21L65.07,94l0.09-.05a2.29,2.29,0,0,1,3.12.85l0.1,0.2,3.6,8.1h0.15L75.68,95a2.29,2.29,0,0,1,3-1.19l0.21,0.11h0Z" transform="translate(0)" fill="#2e9afe"/> <path id="p3" d="M109.91,93.84a2.29,2.29,0,0,1,.86,3.12,2.34,2.34,0,0,1-.17.26l-5.52,7.26v0.15l8.76-1.16a2.23,2.23,0,0,1,2.51,1.92,2.27,2.27,0,0,1,0,.3h0a2.23,2.23,0,0,1-2.22,2.24l-0.28,0-8.79-1V107l5.54,6.93a2.23,2.23,0,0,1-.64,3.34l-0.26.15a2.23,2.23,0,0,1-3.16-1.06l-3.5-8.16h-0.15l-3.79,8.23a2.23,2.23,0,0,1-3,1.1l-0.26-.14h0a2.23,2.23,0,0,1-.7-3.08l0.13-.19,5.59-7.2v-0.15l-8.54,1.1a2.23,2.23,0,0,1-2.5-1.93,2.26,2.26,0,0,1,0-.29h0a2.23,2.23,0,0,1,2.23-2.23l0.29,0,8.47,1.1v-0.15l-5.4-7a2.29,2.29,0,0,1,.42-3.21L96.12,94l0.09-.05a2.29,2.29,0,0,1,3.12.85l0.1,0.2,3.6,8.1h0.15l3.55-8.1a2.29,2.29,0,0,1,3-1.19L110,93.89h0Z" transform="translate(0)" fill="#2e9afe"/></svg>',
    
        keyframes: {
            p1: {
                '0': {s: 0},
                '300': {s: 1.2},
                '500': {s: 1},
                '2000': {s: 1},
                '2200': {s: 0},
                '3000': {s: 0}
            },
            p2: {
                '0': {s: 0},
                '300': {s: 0},
                '600': {s: 1.2},
                '800': {s: 1},
                '2200': {s: 1},
                '2400': {s: 0},
                '3000': {s: 0}
            },
            p3: {
                '0': {s: 0},
                '600': {s: 0},
                '900': {s: 1.2},
                '1100': {s: 1},
                '2400': {s: 1},
                '2600': {s: 0},
                '3000': {s: 0}
            },
            lock: {
                '0': {x: 1, y: 1},
                '1100': {x: 1, y: 1},
                '1400': {x: 1.1, y: 0.9},
                '1700': {x: 1, y: 1.05},
                '2000': {x: 1, y: 1},
                '3000': {x: 1, y: 1}
            },
            spin: {
                '0': {a: 0},
                '1100': {a: 0},
                '1400': {a: 10},
                '1700': {a: -30},
                '2400': {a: -30},
                '3000': {a: 0}
            }
        },
    
        p1: function(data) {
            this.$p1.setAttribute('transform', 'translate(34.41 106.19) scale(' + data.s + ') translate(-34.41 -106.19)');
        },
    
        p2: function(data) {
            this.$p2.setAttribute('transform', 'translate(68.86 106.19) scale(' + data.s + ') translate(-68.86 -106.19)');
        },
    
        p3: function(data) {
            this.$p3.setAttribute('transform', 'translate(103.35 106.19) scale(' + data.s + ') translate(-103.35 -106.19)');
        },
    
        lock: function(data) {
            this.$lock.setAttribute('transform', 'translate(143.73 171.5) scale(' + data.x + ' ' + data.y + ') translate(-143.73 -171.5)')
        },
    
        spin: function(data) {
            this.$spin.setAttribute('transform', 'rotate(' + data.a + ' 110.5 92.24)');
        },
    
        init: function() {
            this.$p1 = this.$root.querySelector('#p1');
            this.$p2 = this.$root.querySelector('#p2');
            this.$p3 = this.$root.querySelector('#p3');
            this.$lock = this.$root.querySelector('#lock');
            this.$spin = this.$root.querySelector('#spin');
            this.animate(this.keyframes.p1, this.p1, 'inOut');
            this.animate(this.keyframes.p2, this.p2, 'inOut');
            this.animate(this.keyframes.p3, this.p3, 'inOut');
            this.animate(this.keyframes.lock, this.lock, 'inOut');
            this.animate(this.keyframes.spin, this.spin, 'inOut');
        }
    
    });
    
    
    /* letter */
    
    Icon.letter = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>file</title> <polygon id="p2" points="17.52 84.73 68.28 135.49 133.74 135.49 184.5 84.73 131.69 31.93 68.28 31.93 17.52 84.73" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <g id="letter" transform="translate(0 0)"> <path d="M125.65,1H43V155.84H159.05V34.39Z" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polyline points="124.11 1 124.11 34.9 158.71 34.9" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <g id="spin"> <path d="M91.16,44.86h0a5.75,5.75,0,0,0-2.17.42l-2,.79A5.78,5.78,0,0,0,83.8,53.6h0v0a1.74,1.74,0,0,1-.5,2l-1,.79-0.09.08a28.83,28.83,0,0,0-3.53,3.63,1.64,1.64,0,0,1-.19.2,1.71,1.71,0,0,1-1.11.39,1.79,1.79,0,0,1-.7-0.14h0a5.74,5.74,0,0,0-2.21-.44,5.87,5.87,0,0,0-5.36,3.55L68.3,65.65a5.83,5.83,0,0,0,3.08,7.56h0A1.75,1.75,0,0,1,72.47,75a28.76,28.76,0,0,0,0,6.37,1.74,1.74,0,0,1-1.1,1.76,5.72,5.72,0,0,0-3.18,7.44l0,0.08,0.79,2a5.79,5.79,0,0,0,7.53,3.19,1.81,1.81,0,0,1,.68-0.13,1.68,1.68,0,0,1,1.34.63A28.78,28.78,0,0,0,83,100.88a1.75,1.75,0,0,1,.48,2,5.83,5.83,0,0,0,3.1,7.57l2,0.82a5.76,5.76,0,0,0,7.56-3v0h0a1.77,1.77,0,0,1,1.59-1.06h0.2a29.49,29.49,0,0,0,6.4.05h0.17a1.76,1.76,0,0,1,1.6,1.11,5.79,5.79,0,0,0,7.53,3.19l2-.79a5.78,5.78,0,0,0,3.19-7.53h0a1.74,1.74,0,0,1,.5-2l1-.78,0.09-.08a28.85,28.85,0,0,0,3.52-3.63,1.65,1.65,0,0,1,.19-0.2,1.71,1.71,0,0,1,1.11-.39,1.79,1.79,0,0,1,.7.14h0a5.74,5.74,0,0,0,2.24.45,5.87,5.87,0,0,0,5.36-3.55l0.82-2a5.79,5.79,0,0,0-3.07-7.57h0a1.75,1.75,0,0,1-1.06-1.79,28.76,28.76,0,0,0,0-6.37,1.74,1.74,0,0,1,1.1-1.76,5.79,5.79,0,0,0,3.19-7.53l-0.79-2A5.79,5.79,0,0,0,126.18,61a1.81,1.81,0,0,1-.68.13,1.68,1.68,0,0,1-1.34-.63A28.79,28.79,0,0,0,119.69,56a1.75,1.75,0,0,1-.48-2,5.83,5.83,0,0,0-3.1-7.57l-2-.82a5.94,5.94,0,0,0-7.74,3.11h0a1.77,1.77,0,0,1-1.6,1h-0.2a29.49,29.49,0,0,0-6.4,0H98a1.76,1.76,0,0,1-1.6-1.11A5.76,5.76,0,0,0,91,45h0Z" fill="#E0F0FF" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle cx="101.6" cy="78.37" r="12.5" fill="#FFF" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> </g> <polygon id="p1" points="16.8 85.73 185.21 85.73 132.24 135.49 68.27 135.49" fill="#82c2fe"/> <polygon points="133.74 135.49 68.28 135.49 17.52 84.73 16.8 84.73 16.8 201 185.21 201 185.21 84.73 184.5 84.73 133.74 135.49" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="68.27" y1="135.49" x2="16.79" y2="201" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="183.71" y1="201" x2="132.24" y2="135.49" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>',
    
        keyframes: {
            p1: {
                '0': {y: 135.49},
                '200': {y: 85.73},
                '2500': {y: 85.73},
                '2600': {y: 135.49},
                '3000': {y: 135.49}
    
            },
            p2: {
                '0': {y: 84.73},
                '200': {y: 84.73},
                '400': {y: 31.93},
                '2400': {y: 31.93},
                '2500': {y: 84.73},
                '3000': {y: 84.73}
            },
            letter: {
                '0': {y: 136},
                '400': {y: 136},
                '1000': {y: 0},
                '1200': {y: 10},
                '2000': {y: 10},
                '2600': {y: 136},
                '3000': {y: 136}
            },
            spin: {
                '0': {a: 0},
                '3000': {a: 360}
            }
        },
    
        p1: function(data) {
            this.$p1.setAttribute('points', '16.8 85.73 185.21 85.73 132.24 ' + data.y + ' 68.27 ' + data.y);
        },
    
        p2: function(data) {
            this.$p2.setAttribute('points', '17.52 84.73 68.28 135.49 133.74 135.49 184.5 84.73 131.69 ' + data.y + ' 68.28 ' + data.y + ' 17.52 84.73');
        },
    
        letter: function(data) {
            this.$letter.setAttribute('transform', 'translate(0 ' + data.y + ')')
        },
    
        spin: function(data) {
            this.$spin.setAttribute('transform', 'rotate(' + data.a + ' 101.13 78.39)')
        },
    
        init: function() {
            this.$p1 = this.$root.querySelector('#p1');
            this.$p2 = this.$root.querySelector('#p2');
            this.$letter = this.$root.querySelector('#letter');
            this.$spin = this.$root.querySelector('#spin');
            this.animate(this.keyframes.p1, this.p1, 'linear');
            this.animate(this.keyframes.p2, this.p2, 'linear');
            this.animate(this.keyframes.letter, this.letter, 'inOut');
            this.animate(this.keyframes.spin, this.spin, 'linear');
        }
    
    });
    
    
    /* board */
    
    Icon.board = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>board</title> <defs> <clipPath id="area"> <rect x="23.08" y="32.25" width="155.83" height="112.4"/> </clipPath> </defs> <g id="board"> <path d="M148.15,193.37L101,146.21l-4.72,4.72h0L53.83,193.37A4.5,4.5,0,0,0,57,201h0a4.5,4.5,0,0,0,3.16-1.31L101,158.84l40.84,40.84A4.5,4.5,0,0,0,145,201h0A4.5,4.5,0,0,0,148.15,193.37Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M96.5,154.95h9v43.15a2.91,2.91,0,0,1-2.91,2.91H99.43a2.91,2.91,0,0,1-2.93-2.88V154.95h0Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect x="23.08" y="32.25" width="155.83" height="113.4" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect x="11" y="145.65" width="180" height="9.3" rx="3.02" ry="3.02" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect x="11" y="22.95" width="180" height="9.3" rx="3.02" ry="3.02" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <g id="spin"> <path id="pie" transform="translate(-18.7 18.7)" d="M73.6,80.53l28.8-7.72A29.87,29.87,0,0,0,81.32,51.73Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M58.9,95.25l6.46-24.12A25,25,0,0,0,33.93,95.25h0a25,25,0,0,0,25,25h0a25,25,0,0,0,25-25h0A25,25,0,0,0,83,88.79Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <rect id="l1" x="116.34" y="57.03" rx="1" ry="1" width="52.73" height="2" fill="#2e9afe"/> <rect id="l2" x="116.34" y="73.14" rx="1" ry="1" width="27.36" height="2" fill="#2e9afe"/> <rect id="l3" x="116.34" y="89.25" rx="1" ry="1" width="52.73" height="2" fill="#2e9afe"/> <g clip-path="url(#area)"> <rect transform="translate(0 20)" id="rect" x="116.45" y="108.37" width="51.61" height="22.53" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> </g></svg>',
    
        keyframes: {
            board: {
                '0': {x: 1, y: 1},
                '400': {x: 1.05, y: 0.9},
                '800': {x: 0.9, y: 1.1},
                '1400': {x: 1, y: 1},
                '3100': {x: 1, y: 1}
            },
            l1: {
                '0': {w: 0},
                '400': {w: 58.00},
                '600': {w: 52.73},
                '2500': {w: 52.73},
                '2700': {w: 0},
                '3100': {w: 0}
            },
            l2: {
                '0': {w: 0},
                '200': {w: 0},
                '600': {w: 32.82},
                '800': {w: 27.36},
                '2600': {w: 27.36},
                '2800': {w: 0},
                '3100': {w: 0}
            },
            l3: {
                '0': {w: 0},
                '400': {w: 0},
                '800': {w: 58.00},
                '1000': {w: 52.73},
                '2700': {w: 52.73},
                '2900': {w: 0},
                '3100': {w: 0}
            },
            spin: {
                '0': {a: 0, s: 0},
                '1000': {a: 360, s: 1.15},
                '1400': {a: 360, s: 1},
                '2500': {a: 360, s: 1},
                '3100': {a: 0, s: 0}
            },
            pie: {
                '0': {t: -18.7},
                '600': {t: -18.7},
                '1000': {t: 0},
                '2500': {t: 0},
                '2700': {t: -18.7},
                '3100': {t: -18.7}
            },
            rect: {
                '0': {y: 38},
                '400': {y: 38},
                '800': {y: -7},
                '1200': {y: 0},
                '2500': {y: 0},
                '2800': {y: 38},
                '3100': {y: 38}
            }
        },
    
        board: function(data) {
            this.$board.setAttribute('transform', 'translate(101 202) scale(' + data.x + ' ' + data.y + ') translate(-101 -202)');
        },
    
        l1: function(data) {
            this.$l1.setAttribute('width', data.w);
        },
    
        l2: function(data) {
            this.$l2.setAttribute('width', data.w);
        },
    
        l3: function(data) {
            this.$l3.setAttribute('width', data.w);
        },
    
        spin: function(data) {
            this.$spin.setAttribute('transform', 'rotate(' + data.a + ' 58.9 95.25) translate(58.9 95.25) scale(' + data.s + ') translate(-58.9 -95.25)')
        },
    
        pie: function(data) {
            this.$pie.setAttribute('transform', 'translate(' + data.t + ' ' + -data.t + ')');
        },
    
        rect: function(data) {
            this.$rect.setAttribute('transform', 'translate(0 ' + data.y + ')')
        },
    
        init: function() {
            this.$board = this.$root.querySelector('#board');
            this.$l1 = this.$root.querySelector('#l1');
            this.$l2 = this.$root.querySelector('#l2');
            this.$l3 = this.$root.querySelector('#l3');
            this.$spin = this.$root.querySelector('#spin');
            this.$pie = this.$root.querySelector('#pie');
            this.$rect = this.$root.querySelector('#rect');
            this.animate(this.keyframes.board, this.board, 'inOut');
            this.animate(this.keyframes.l1, this.l1, 'inOut');
            this.animate(this.keyframes.l2, this.l2, 'inOut');
            this.animate(this.keyframes.l3, this.l3, 'inOut');
            this.animate(this.keyframes.spin, this.spin, 'inOut');
            this.animate(this.keyframes.pie, this.pie, 'inOut');
            this.animate(this.keyframes.rect, this.rect, 'inOut');
        }
    
    });
    
    
    /* loupe */
    
    Icon.loupe = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>loupe</title> <defs> <clipPath id="zoom"> <circle id="clip" cx="89.78" cy="98.4" r="27.34"/> </clipPath> </defs> <path id="s1" d="M109.93,113.42a3.84,3.84,0,0,1-3.57-2.4,2.84,2.84,0,0,0-2.59-1.78h-0.28a24.12,24.12,0,0,1-5.36,0H97.8a2.82,2.82,0,0,0-2.58,1.73h0a3.85,3.85,0,0,1-5.05,2l-1.73-.73a3.89,3.89,0,0,1-2.07-5,2.83,2.83,0,0,0-.79-3.29,24.27,24.27,0,0,1-3.77-3.82,2.76,2.76,0,0,0-2.19-1,2.88,2.88,0,0,0-1.08.21,3.84,3.84,0,0,1-5-2.12l-0.7-1.74a3.82,3.82,0,0,1,2.1-5,2.83,2.83,0,0,0,1.77-2.87,24.26,24.26,0,0,1,0-5.37A2.83,2.83,0,0,0,75,79.2a3.85,3.85,0,0,1-2-5.05l0.73-1.73a3.9,3.9,0,0,1,5.08-2.05h0a2.86,2.86,0,0,0,1.12.23,2.72,2.72,0,0,0,2.14-1,24.29,24.29,0,0,1,3-3.06l0,0c0.28-.24.56-0.47,0.84-0.7a2.83,2.83,0,0,0,.83-3.27,3.86,3.86,0,0,1,2.13-5l1.74-.71a3.84,3.84,0,0,1,5,2.12,2.84,2.84,0,0,0,2.6,1.78h0.28a24.12,24.12,0,0,1,5.36,0h0.32A2.82,2.82,0,0,0,106.75,59h0a3.85,3.85,0,0,1,5.05-2l1.73,0.73a3.85,3.85,0,0,1,2,5.05,2.83,2.83,0,0,0,.79,3.29,24.27,24.27,0,0,1,3.77,3.82,2.76,2.76,0,0,0,2.19,1,2.87,2.87,0,0,0,1.08-.21,3.84,3.84,0,0,1,5,2.12l0.7,1.74a3.86,3.86,0,0,1-2.12,5,2.83,2.83,0,0,0-1.77,2.88,24.23,24.23,0,0,1,0,5.37,2.83,2.83,0,0,0,1.72,2.91A3.89,3.89,0,0,1,129,95.8l-0.73,1.73a3.94,3.94,0,0,1-3.58,2.36h0a3.83,3.83,0,0,1-1.5-.3h0a2.86,2.86,0,0,0-1.12-.23,2.8,2.8,0,0,0-1.83.67,2.74,2.74,0,0,0-.31.32,24.29,24.29,0,0,1-3,3.06l0,0q-0.41.36-.84,0.69a2.83,2.83,0,0,0-.83,3.27,3.82,3.82,0,0,1-2.1,5l-1.74.71A3.83,3.83,0,0,1,109.93,113.42Zm-8.83-42.1A13.92,13.92,0,1,0,114,80a13.84,13.84,0,0,0-12.9-8.69h0Z" fill="#e0f0ff" stroke-width="1" stroke="#2e9afe"/> <g id="loupe"> <circle cx="89.78" cy="98.4" r="37.4" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle cx="89.78" cy="98.4" r="28.34" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line id="line" x1="116.22" y1="124.84" x2="142.38" y2="151" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <g clip-path="url(#zoom)"> <g transform="translate(101 85) scale(1.5) translate(-101 -85)"> <path id="s2" d="M109.93,113.42a3.84,3.84,0,0,1-3.57-2.4,2.84,2.84,0,0,0-2.59-1.78h-0.28a24.12,24.12,0,0,1-5.36,0H97.8a2.82,2.82,0,0,0-2.58,1.73h0a3.85,3.85,0,0,1-5.05,2l-1.73-.73a3.89,3.89,0,0,1-2.07-5,2.83,2.83,0,0,0-.79-3.29,24.27,24.27,0,0,1-3.77-3.82,2.76,2.76,0,0,0-2.19-1,2.88,2.88,0,0,0-1.08.21,3.84,3.84,0,0,1-5-2.12l-0.7-1.74a3.82,3.82,0,0,1,2.1-5,2.83,2.83,0,0,0,1.77-2.87,24.26,24.26,0,0,1,0-5.37A2.83,2.83,0,0,0,75,79.2a3.85,3.85,0,0,1-2-5.05l0.73-1.73a3.9,3.9,0,0,1,5.08-2.05h0a2.86,2.86,0,0,0,1.12.23,2.72,2.72,0,0,0,2.14-1,24.29,24.29,0,0,1,3-3.06l0,0c0.28-.24.56-0.47,0.84-0.7a2.83,2.83,0,0,0,.83-3.27,3.86,3.86,0,0,1,2.13-5l1.74-.71a3.84,3.84,0,0,1,5,2.12,2.84,2.84,0,0,0,2.6,1.78h0.28a24.12,24.12,0,0,1,5.36,0h0.32A2.82,2.82,0,0,0,106.75,59h0a3.85,3.85,0,0,1,5.05-2l1.73,0.73a3.85,3.85,0,0,1,2,5.05,2.83,2.83,0,0,0,.79,3.29,24.27,24.27,0,0,1,3.77,3.82,2.76,2.76,0,0,0,2.19,1,2.87,2.87,0,0,0,1.08-.21,3.84,3.84,0,0,1,5,2.12l0.7,1.74a3.86,3.86,0,0,1-2.12,5,2.83,2.83,0,0,0-1.77,2.88,24.23,24.23,0,0,1,0,5.37,2.83,2.83,0,0,0,1.72,2.91A3.89,3.89,0,0,1,129,95.8l-0.73,1.73a3.94,3.94,0,0,1-3.58,2.36h0a3.83,3.83,0,0,1-1.5-.3h0a2.86,2.86,0,0,0-1.12-.23,2.8,2.8,0,0,0-1.83.67,2.74,2.74,0,0,0-.31.32,24.29,24.29,0,0,1-3,3.06l0,0q-0.41.36-.84,0.69a2.83,2.83,0,0,0-.83,3.27,3.82,3.82,0,0,1-2.1,5l-1.74.71A3.83,3.83,0,0,1,109.93,113.42Zm-8.83-42.1A13.92,13.92,0,1,0,114,80a13.84,13.84,0,0,0-12.9-8.69h0Z" fill="#e0f0ff" stroke-width="1" stroke="#2e9afe"/> </g> </g></svg>',
    
        keyframes: {
            loupe: {
                '0': {x: -25, y: -10},
                '1000': {x: 25, y: 25},
                '2000': {x: 40, y: -50},
                '3000': {x: -25, y: -10}
            },
            line: {
                '0': {a: 0},
                '1000': {a: 60},
                '2000': {a: 90},
                '3000': {a: 0}
            },
            spin: {
                '0': {a: 0},
                '3000': {a: 360}
            }
        },
    
        loupe: function(data) {
            this.$loupe.setAttribute('transform', 'translate(' + data.x + ' ' + data.y + ')');
            this.$clip.setAttribute('cx', 89.78 + data.x);
            this.$clip.setAttribute('cy', 98.4 + data.y);
        },
    
        spin: function(data) {
            this.$s1.setAttribute('transform', 'rotate(' + data.a + ' 101 85)');
            this.$s2.setAttribute('transform', 'rotate(' + data.a + ' 101 85)');
        },
    
        line: function(data) {
            this.$line.setAttribute('transform', 'rotate(' + data.a + ' 89.78 98.4)')
        },
    
        init: function() {
            this.$clip = this.$root.querySelector('#clip');
            this.$loupe = this.$root.querySelector('#loupe');
            this.$line = this.$root.querySelector('#line');
            this.$s1 = this.$root.querySelector('#s1');
            this.$s2 = this.$root.querySelector('#s2');
            this.animate(this.keyframes.loupe, this.loupe, 'inOut');
            this.animate(this.keyframes.spin, this.spin, 'linear');
            this.animate(this.keyframes.line, this.line, 'inOut');
        }
    
    });
    
    
    /* file */
    
    Icon.file = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>file</title> <defs> <clipPath id="test"> <path d="M127.34,32.1H47.76V170.77H156.69V61.45Z"/> </clipPath> </defs> <path d="M127.35,31.1H46.76V171.77H157.69V61.45Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect id="fill" clip-path="url(#test)" x="0" y="16" width="202" height="170" fill="#82c2fe"/> <line x1="67.32" y1="59.92" x2="106.04" y2="59.92" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="67.32" y1="87.82" x2="137.14" y2="87.82" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="67.32" y1="115.72" x2="137.14" y2="115.72" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="67.32" y1="143.62" x2="137.14" y2="143.62" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polyline points="125.97 31.1 125.97 61.9 157.38 61.9" fill="#fff" opacity="0.7" style="isolation: isolate"/> <polyline points="125.97 31.1 125.97 61.9 157.38 61.9" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polyline points="201 65.87 201 1 136.13 1" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polyline points="65.87 1 1 1 1 65.87" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polyline points="1 136.13 1 201 65.87 201" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polyline points="136.13 201 201 201 201 136.13" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line id="line" x1="11.33" y1="186" x2="187.23" y2="186" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>',
    
        keyframes: {
            file: {
                '0': {y: 16},
                '1500': {y: 186},
                '3000': {y: 16}
            }
        },
    
        file: function(data) {
            this.$fill.setAttribute('height', data.y - 16);
            this.$line.setAttribute('y1', data.y);
            this.$line.setAttribute('y2', data.y);
        },
    
        init: function() {
            this.$fill = this.$root.querySelector('#fill');
            this.$line = this.$root.querySelector('#line');
            this.animate(this.keyframes.file, this.file, 'inOut');
        }
    
    });
    
    
    /* meeting */
    
    Icon.meeting = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>Meeting</title> <polyline points="58.33 69.64 85.19 69.64 85.19 97.52" fill="none" stroke="#e0f0ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polyline points="143.65 69.64 116.79 69.64 116.79 97.52" fill="none" stroke="#e0f0ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="100.99" y1="97.51" x2="100.99" y2="57.21" fill="none" stroke="#e0f0ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path id="u1" d="M19.26,85.15V81.08a2.94,2.94,0,0,1,1.35-2.69c3.81-2.55,10.76-2.69,10.76-6.73,0-2.69-2.7-4-2.7-9.43V60.89c0-5.39,4.05-6.73,6.75-6.73s6.75,1.34,6.75,6.73V62.2c0,5.39-2.69,6.73-2.69,9.43,0,4,7,4.25,10.77,6.73A2.93,2.93,0,0,1,51.58,81v4.1H19.26Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path id="u2" d="M150.37,85.15V81.08a2.94,2.94,0,0,1,1.35-2.69c3.81-2.55,10.76-2.69,10.76-6.73,0-2.69-2.7-4-2.7-9.43V60.89c0-5.39,4.05-6.73,6.75-6.73s6.71,1.34,6.71,6.73V62.2c0,5.39-2.69,6.73-2.69,9.43,0,4,7,4.25,10.77,6.73A2.93,2.93,0,0,1,182.66,81v4.1H150.37Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path id="u3" d="M84.84,47V42.94a2.94,2.94,0,0,1,1.35-2.69C90,37.69,97,37.55,97,33.51c0-2.69-2.7-4-2.7-9.43V22.74c0-5.39,4-6.75,6.74-6.75s6.75,1.34,6.75,6.73v1.34c0,5.39-2.69,6.73-2.69,9.43,0,4,7,4.25,10.77,6.73a2.93,2.93,0,0,1,1.33,2.71V47H84.84Z" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polyline points="137.09 89.72 137.09 185.99 64.91 185.99 64.91 89.72" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <g id="spin"> <g id="scale"> <path d="M96.12,162.71L99.52,150a13.08,13.08,0,1,0,9.28,9.27Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path id="pie" d="M96.29,162.55L120.75,156a25.36,25.36,0,0,0-17.91-17.91Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> </g> <line x1="74.34" y1="104.84" x2="127.64" y2="104.84" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="74.34" y1="115.55" x2="100.99" y2="115.55" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="74.34" y1="126.26" x2="127.64" y2="126.26" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>',
    
        keyframes: {
            user: {
                '0': {s: 1},
                '1000': {s: 1},
                '1500': {s: 1.4},
                '2000': {s: 0.9},
                '2200': {s: 1},
                '4000': {s: 1}
            },
            spin: {
                '0': {a: 360},
                '1000': {a: 360},
                '2200': {a: 0},
                '3000': {a: 0},
                '4000': {a: 360}
            },
            scale: {
                '0': {s: 0},
                '1000': {s: 0},
                '2000': {s: 1.1},
                '2200': {s: 1},
                '3000': {s: 1},
                '4000': {s: 0}
            },
            pie: {
                '0': {s: 0.53},
                '1600': {s: 0.53},
                '2000': {s: 1.1},
                '2200': {s: 1},
                '4000': {s: 1}
            }
        },
    
        user: function(data) {
            this.$u1.setAttribute('transform', 'translate(35.42 69.65) scale(' + data.s + ') translate(-35.42 -69.65)');
            this.$u2.setAttribute('transform', 'translate(166.52 69.65) scale(' + data.s + ') translate(-166.52 -69.65)');
            this.$u3.setAttribute('transform', 'translate(101 31.5) scale(' + data.s + ') translate(-101 -31.5)');
        },
    
        spin: function(data) {
            this.$spin.setAttribute('transform', 'rotate(' + data.a + ' 96.15 162.68)');
        },
    
        scale: function(data) {
            this.$scale.setAttribute('transform', 'translate(96.15 162.68) scale(' + data.s + ') translate(-96.15 -162.68)');
        },
    
        pie: function(data) {
            this.$pie.setAttribute('transform', 'translate(96.15 162.68) scale(' + data.s + ') translate(-96.15 -162.68)');
        },
    
        init: function() {
            this.$u1 = this.$root.querySelector('#u1');
            this.$u2 = this.$root.querySelector('#u2');
            this.$u3 = this.$root.querySelector('#u3');
            this.$spin = this.$root.querySelector('#spin');
            this.$scale = this.$root.querySelector('#scale');
            this.$pie = this.$root.querySelector('#pie');
            this.animate(this.keyframes.user, this.user, 'inOut');
            this.animate(this.keyframes.spin, this.spin, 'inOut');
            this.animate(this.keyframes.scale, this.scale, 'inOut');
            this.animate(this.keyframes.pie, this.pie, 'inOut');
        }
    
    });
    
    
    /* clock */
    
    Icon.clock = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>clock</title> <path id="spin" d="M79.87,74.53h0a4.26,4.26,0,0,1-2.59-4.4,30.39,30.39,0,0,0,.05-6.73A4.25,4.25,0,0,1,80,59h0a4.29,4.29,0,0,0,2.37-5.59h0l-0.9-2.23a4.29,4.29,0,0,0-5.59-2.37h0A4.25,4.25,0,0,1,71,47.58a30.42,30.42,0,0,0-4.73-4.8,4.26,4.26,0,0,1-1.21-5h0a4.29,4.29,0,0,0-2.27-5.63h0l-2.21-.9a4.29,4.29,0,0,0-5.63,2.27h0a4.26,4.26,0,0,1-4.4,2.59,30.41,30.41,0,0,0-6.73-.05,4.25,4.25,0,0,1-4.35-2.7h0A4.29,4.29,0,0,0,33.83,31h0l-2.23.9a4.29,4.29,0,0,0-2.37,5.59h0A4.25,4.25,0,0,1,28,42.48c-0.38.3-.75,0.6-1.11,0.9h0a30.42,30.42,0,0,0-3.73,3.84,4.16,4.16,0,0,1-.48.5,4.28,4.28,0,0,1-4.45.68h0a4.35,4.35,0,0,0-5.67,2.31l-0.9,2.21a4.29,4.29,0,0,0,2.27,5.63h0A4.26,4.26,0,0,1,16.5,63a30.39,30.39,0,0,0-.05,6.73A4.25,4.25,0,0,1,13.75,74h0a4.29,4.29,0,0,0-2.37,5.59h0l0.9,2.23a4.29,4.29,0,0,0,5.59,2.37h0a4.25,4.25,0,0,1,4.94,1.27,30.42,30.42,0,0,0,4.73,4.8,4.26,4.26,0,0,1,1.21,5h0A4.29,4.29,0,0,0,31,100.9h0l2.21,0.9a4.29,4.29,0,0,0,5.63-2.27h0a4.26,4.26,0,0,1,4.4-2.59A30.41,30.41,0,0,0,50,97a4.25,4.25,0,0,1,4.35,2.7h0A4.29,4.29,0,0,0,60,102.05h0l2.23-.9a4.29,4.29,0,0,0,2.37-5.59h0a4.25,4.25,0,0,1,1.27-4.94c0.38-.3.75-0.6,1.11-0.9h0a30.42,30.42,0,0,0,3.73-3.84,4.15,4.15,0,0,1,.48-0.5,4.28,4.28,0,0,1,4.45-.67h0a4.35,4.35,0,0,0,5.67-2.31l0.9-2.21a4.29,4.29,0,0,0-2.27-5.63h0ZM53.92,84A18.47,18.47,0,0,1,29.87,73.83h0A18.47,18.47,0,0,1,40,49.77h0A18.47,18.47,0,0,1,64.1,59.94h0A18.47,18.47,0,0,1,53.92,84h0Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M92.71,180.17A68.16,68.16,0,1,1,160.87,112,68.24,68.24,0,0,1,92.71,180.17Z" fill="#e0f0ff"/> <path d="M92.71,44.75A67.25,67.25,0,1,1,25.46,112,67.26,67.26,0,0,1,92.71,44.75m0-1.8A69.06,69.06,0,1,0,161.77,112,69.14,69.14,0,0,0,92.71,42.94h0Z" fill="#2e9afe"/> <circle cx="92.71" cy="112.01" r="42.34" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <g id="mail"> <rect x="118.59" y="147.85" width="42.28" height="32.32" rx="2.46" ry="2.46" fill="#e0f0ff"/> <path d="M158.41,148.75a1.56,1.56,0,0,1,1.56,1.56v27.39a1.56,1.56,0,0,1-1.56,1.56H121a1.56,1.56,0,0,1-1.58-1.54V150.3a1.56,1.56,0,0,1,1.56-1.56h37.36m0-1.8H121a3.37,3.37,0,0,0-3.36,3.36v27.4A3.37,3.37,0,0,0,121,181h37.36a3.37,3.37,0,0,0,3.38-3.35h0V150.3a3.37,3.37,0,0,0-3.36-3.36h0Z" fill="#2e9afe"/> <polyline points="120.65 149.6 139.73 165.84 158.81 149.6" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <circle cx="153.61" cy="59.33" r="20.38" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle cx="153.61" cy="59.33" r="9.08" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <g id="arrow"> <line x1="153.61" y1="59.33" x2="179.79" y2="33.14" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polygon points="179.61 39.52 173.92 39.01 173.41 33.32 184.8 21.93 185.32 27.62 191 28.13 179.61 39.52" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <g id="hr"> <rect x="88.77" y="81.25" width="9.84" height="33.4" rx="3.56" ry="3.56" fill="#e0f0ff"/> <path d="M95,82.15a2.7,2.7,0,0,1,2.7,2.7v26.24a2.7,2.7,0,0,1-2.7,2.7h-2.7a2.7,2.7,0,0,1-2.7-2.7V84.81a2.7,2.7,0,0,1,2.7-2.7H95m0-1.8h-2.7a4.5,4.5,0,0,0-4.5,4.5v26.28a4.5,4.5,0,0,0,4.5,4.5H95a4.5,4.5,0,0,0,4.5-4.5V84.81a4.5,4.5,0,0,0-4.5-4.5h0Z" fill="#2e9afe"/> <path d="M97.24,83.45H89.67a2.8,2.8,0,0,1-2-1l-3.8-4.56a2.77,2.77,0,0,1-.64-1.8v-7.9A2.77,2.77,0,0,1,86,65.43h3.68V58a2.75,2.75,0,0,1,5.5,0V65.4h6.19a2.77,2.77,0,0,1,2.76,2.76V75.7a2.75,2.75,0,0,1-.77,1.92l-4,4.91-0.06.07a2.75,2.75,0,0,1-2,.81H97.22Z" fill="#82c2fe"/> <path d="M92.47,56.19a1.86,1.86,0,0,1,1.8,1.8V66.3h7.09a1.86,1.86,0,0,1,1.86,1.86h0V75.7a1.86,1.86,0,0,1-.55,1.32L98.7,82a1.86,1.86,0,0,1-1.32.55H89.65a1.86,1.86,0,0,1-1.32-.67l-3.8-4.56a1.86,1.86,0,0,1-.43-1.2v-7.9A1.86,1.86,0,0,1,86,66.33h4.58V58a1.86,1.86,0,0,1,1.92-1.8h0m0-1.8a3.67,3.67,0,0,0-3.66,3.66v6.51H86a3.67,3.67,0,0,0-3.66,3.66v7.9a3.67,3.67,0,0,0,.85,2.35L87,83a3.68,3.68,0,0,0,2.59,1.31h7.84A3.6,3.6,0,0,0,100,83.28l0.13-.14,3.92-4.89a3.6,3.6,0,0,0,1-2.51V68.21a3.67,3.67,0,0,0-3.66-3.66H96.07V58a3.67,3.67,0,0,0-3.6-3.6h0Z" fill="#2e9afe"/> <path d="M88.66,59.56a1.93,1.93,0,0,0-1.93,1.94v8.69a1.93,1.93,0,1,0,3.87,0V61.49A1.93,1.93,0,0,0,88.66,59.56Z" fill="#2e9afe"/> </g> <g id="min"> <path d="M77.49,131.58a3.55,3.55,0,0,1-2.52-1l-1.91-1.91a3.6,3.6,0,0,1,0-5L91.63,105a3.56,3.56,0,0,1,5,0l1.91,1.91a3.6,3.6,0,0,1,0,5L80,130.53A3.55,3.55,0,0,1,77.49,131.58Z" fill="#e0f0ff"/> <path d="M94.15,104.86a2.7,2.7,0,0,1,1.89.78L98,107.56a2.7,2.7,0,0,1,0,3.77L79.39,129.89a2.65,2.65,0,0,1-3.76,0L73.72,128a2.7,2.7,0,0,1,0-3.77l18.57-18.57a2.7,2.7,0,0,1,1.88-.78m0-1.8a4.44,4.44,0,0,0-3.16,1.3L72.44,122.94a4.5,4.5,0,0,0,0,6.3l1.91,1.91a4.48,4.48,0,0,0,6.32,0l18.57-18.57a4.48,4.48,0,0,0,0-6.32l-1.91-1.91a4.44,4.44,0,0,0-3.16-1.3h0v0Z" fill="#2e9afe"/> <path d="M58.48,149.65a2.76,2.76,0,0,1-2-4.72l5.24-5.24-4.37-4.37a2.76,2.76,0,0,1,0-3.91l5.33-5.33a2.7,2.7,0,0,1,1.9-.81l6.3-.68H71a2.76,2.76,0,0,1,2.07.9l5.34,5.4a2.8,2.8,0,0,1,.72,2.12l-0.54,5.91a2.77,2.77,0,0,1-.8,1.7l-5.59,5.59a2.76,2.76,0,0,1-3.91,0l-2.6-2.6-5.24,5.24a2.75,2.75,0,0,1-2,.81h0Z" fill="#82c2fe"/> <path d="M71,125.49a1.86,1.86,0,0,1,1.4.63l5.4,5.4a1.86,1.86,0,0,1,.46,1.4l-0.54,5.91a1.86,1.86,0,0,1-.54,1.15l-5.59,5.59a1.87,1.87,0,0,1-2.65,0l-3.24-3.24-5.88,5.88a1.87,1.87,0,0,1-2.65-2.63h0L63,139.7l-5-5a1.86,1.86,0,0,1,0-2.63h0l5.33-5.33a1.86,1.86,0,0,1,1.31-.55h0l6.3-.68m0-1.8h-0.2l-6.24.67a3.6,3.6,0,0,0-2.48,1.07l-5.33,5.33a3.67,3.67,0,0,0,0,5.18l3.73,3.74-4.6,4.6a3.67,3.67,0,0,0,5.18,5.18l4.6-4.6,2,2a3.67,3.67,0,0,0,5.18,0l5.59-5.59A3.67,3.67,0,0,0,79.45,139L80,133.07a3.68,3.68,0,0,0-.9-2.76L79,130.24l-5.34-5.4a3.67,3.67,0,0,0-2.7-1.19h0v0Z" fill="#2e9afe"/> <path d="M62.23,148.46a1.93,1.93,0,0,0,2.7,0l6.15-6.15a1.91,1.91,0,1,0-2.7-2.7l-6.15,6.15A1.93,1.93,0,0,0,62.23,148.46Z" fill="#2e9afe"/> </g> <line x1="143.1" y1="113.75" x2="152.53" y2="113.75" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="90.98" y1="162.39" x2="90.98" y2="171.83" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="42.32" y1="110.27" x2="32.89" y2="110.27" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="58.31" y1="75.16" x2="51.64" y2="68.49" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="129.57" y1="77.61" x2="136.24" y2="70.94" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>',
    
        keyframes: {
            hr: {
                '0': {a: 0},
                '4000': {a: 360}
            },
            min: {
                '0': {a: 0},
                '2000': {a: 360}
            },
            mail: {
                '0': {y: 0},
                '2000': {y: 14},
                '4000': {y: 0}
            },
            arrow: {
                '0': {a: -25},
                '2000': {a: 25},
                '4000': {a: -25}
            }
        },
    
        hr: function(data) {
            this.$spin.setAttribute('transform', 'rotate(' + data.a + ' 46.89 66.54)');
            this.$hr.setAttribute('transform', 'rotate(' + data.a + ' 92.71 111.99)');
        },
    
        mail: function(data) {
            this.$mail.setAttribute('transform', 'translate(0 ' + data.y + ')');
        },
    
        arrow: function(data) {
            this.$arrow.setAttribute('transform', 'rotate(' + data.a + ' 153.6 59.32)');
        },
    
        min: function(data) {
            this.$min.setAttribute('transform', 'rotate(' + data.a + ' 92.71 111.99)');
        },
    
        init: function() {
            this.$spin = this.$root.querySelector('#spin');
            this.$mail = this.$root.querySelector('#mail');
            this.$arrow = this.$root.querySelector('#arrow');
            this.$hr = this.$root.querySelector('#hr');
            this.$min = this.$root.querySelector('#min');
            this.animate(this.keyframes.hr, this.hr, 'linear');
            this.animate(this.keyframes.min, this.min, 'linear');
            this.animate(this.keyframes.mail, this.mail, 'inOut');
            this.animate(this.keyframes.arrow, this.arrow, 'inOut');
        }
    
    });
    
    
    /* case */
    
    Icon.case = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>case</title> <g id="spin"> <path d="M169.93,122.32a5.44,5.44,0,0,1-5.07-3.41,3.55,3.55,0,0,0-3.25-2.23h-0.35a32.79,32.79,0,0,1-7.3,0h-0.4a3.52,3.52,0,0,0-3.24,2.18,5.45,5.45,0,0,1-7.16,2.9l-2.33-1a5.52,5.52,0,0,1-2.94-7.16,3.53,3.53,0,0,0-1-4.11,33,33,0,0,1-5.12-5.2,3.45,3.45,0,0,0-2.74-1.3,3.6,3.6,0,0,0-1.36.27,5.48,5.48,0,0,1-7.12-3l-0.95-2.35a5.42,5.42,0,0,1,3-7.12,3.52,3.52,0,0,0,2.21-3.59,33,33,0,0,1,.06-7.3,3.54,3.54,0,0,0-2.16-3.64,5.52,5.52,0,0,1-2.94-7.16l1-2.33A5.49,5.49,0,0,1,128,63.81a3.58,3.58,0,0,0,1.41.28,3.33,3.33,0,0,0,2.67-1.24,33.05,33.05,0,0,1,4-4.16l0.08-.06,1.12-1a3.52,3.52,0,0,0,1-4.08,5.47,5.47,0,0,1,3-7.12l2.35-1a5.48,5.48,0,0,1,7.13,3A3.55,3.55,0,0,0,154,50.77h0.35a32.79,32.79,0,0,1,7.3,0h0.41a3.52,3.52,0,0,0,3.24-2.18,5.45,5.45,0,0,1,7.16-2.9l2.33,0.95a5.52,5.52,0,0,1,2.94,7.16,3.53,3.53,0,0,0,.95,4.11,33,33,0,0,1,5.12,5.2,3.45,3.45,0,0,0,2.74,1.3,3.59,3.59,0,0,0,1.36-.27,5.48,5.48,0,0,1,7.13,3L196,69.56a5.41,5.41,0,0,1-3,7.12,3.52,3.52,0,0,0-2.21,3.59,33,33,0,0,1-.06,7.3,3.53,3.53,0,0,0,2.16,3.64,5.47,5.47,0,0,1,2.91,7.16l-0.95,2.33a5.57,5.57,0,0,1-5.08,3.37h0a5.42,5.42,0,0,1-2.13-.44,3.58,3.58,0,0,0-1.41-.28,3.51,3.51,0,0,0-2.28.84,3.37,3.37,0,0,0-.39.4,33,33,0,0,1-4,4.16l-0.07.06-1.13.95a3.52,3.52,0,0,0-1,4.08,5.47,5.47,0,0,1-3,7.13l-2.35,1A5.44,5.44,0,0,1,169.93,122.32ZM158,65.59a18.48,18.48,0,1,0,17.1,11.54A18.37,18.37,0,0,0,158,65.59h0Z" fill="#e0f0ff"/> <path d="M145.84,46A4.52,4.52,0,0,1,150,48.9h0a4.48,4.48,0,0,0,4.12,2.85h0.45a31.9,31.9,0,0,1,7.11.06,4.38,4.38,0,0,0,.51,0A4.49,4.49,0,0,0,166.33,49h0a4.51,4.51,0,0,1,5.92-2.39l2.33,0.95A4.51,4.51,0,0,1,177,53.51h0a4.47,4.47,0,0,0,1.26,5.22,32,32,0,0,1,5,5,4.41,4.41,0,0,0,3.48,1.67,4.56,4.56,0,0,0,1.71-.33h0a4.5,4.5,0,0,1,5.88,2.52l1,2.35a4.51,4.51,0,0,1-2.48,5.88h0a4.47,4.47,0,0,0-2.8,4.57,32,32,0,0,1-.06,7.08,4.47,4.47,0,0,0,2.73,4.63h0A4.51,4.51,0,0,1,195,98.05h0l-1,2.33a4.55,4.55,0,0,1-6,2.42h0a4.54,4.54,0,0,0-1.77-.36,4.46,4.46,0,0,0-2.91,1.06,4.35,4.35,0,0,0-.5.52,32,32,0,0,1-3.92,4h0c-0.38.33-.77,0.65-1.16,1a4.47,4.47,0,0,0-1.33,5.2h0A4.51,4.51,0,0,1,174,120.1h0l-2.35,1a4.5,4.5,0,0,1-5.88-2.52h0a4.48,4.48,0,0,0-4.12-2.85h-0.45a31.9,31.9,0,0,1-7.11-.06,4.38,4.38,0,0,0-.51,0,4.49,4.49,0,0,0-4.11,2.76h0a4.51,4.51,0,0,1-5.92,2.39l-2.33-1a4.51,4.51,0,0,1-2.41-5.91h0a4.47,4.47,0,0,0-1.26-5.22,32,32,0,0,1-5-5,4.41,4.41,0,0,0-3.48-1.67,4.57,4.57,0,0,0-1.72.33h0a4.5,4.5,0,0,1-5.88-2.52l-1-2.35a4.51,4.51,0,0,1,2.48-5.88h0a4.47,4.47,0,0,0,2.8-4.57,32,32,0,0,1,.06-7.08,4.47,4.47,0,0,0-2.73-4.63h0a4.51,4.51,0,0,1-2.41-5.91h0L121.75,67a4.54,4.54,0,0,1,6-2.42h0a4.54,4.54,0,0,0,1.77.36,4.46,4.46,0,0,0,2.91-1.06,4.38,4.38,0,0,0,.5-0.52,32,32,0,0,1,3.92-4h0c0.38-.33.77-0.65,1.16-0.95a4.47,4.47,0,0,0,1.33-5.2h0a4.51,4.51,0,0,1,2.48-5.88h0l2.35-.95a4.5,4.5,0,0,1,1.69-.33M158,103.49A19.43,19.43,0,1,0,140,91.35h0a19.43,19.43,0,0,0,18,12.13M145.82,44.15h0a6.38,6.38,0,0,0-2.41.48l-2.35.95a6.36,6.36,0,0,0-3.5,8.36,2.57,2.57,0,0,1-.75,3c-0.36.28-.73,0.59-1.13,0.95l-0.1.08a34,34,0,0,0-4.15,4.28,2.48,2.48,0,0,1-.29.29,2.55,2.55,0,0,1-1.64.59,2.63,2.63,0,0,1-1-.21h0a6.38,6.38,0,0,0-2.47-.49,6.48,6.48,0,0,0-5.95,4l-1,2.33a6.47,6.47,0,0,0,3.45,8.41,2.58,2.58,0,0,1,1.59,2.65,33.92,33.92,0,0,0-.06,7.51,2.57,2.57,0,0,1-1.62,2.61,6.42,6.42,0,0,0-3.53,8.36l1,2.35a6.4,6.4,0,0,0,8.36,3.53,2.65,2.65,0,0,1,1-.2,2.5,2.5,0,0,1,2,.95,34,34,0,0,0,5.26,5.35,2.58,2.58,0,0,1,.71,3h0a6.45,6.45,0,0,0,3.45,8.38l2.33,1a6.4,6.4,0,0,0,8.41-3.39h0a2.57,2.57,0,0,1,2.37-1.6H154a33.86,33.86,0,0,0,7.5.06h0.25a2.59,2.59,0,0,1,2.37,1.63,6.4,6.4,0,0,0,8.36,3.53l2.35-1a6.36,6.36,0,0,0,3.5-8.36,2.57,2.57,0,0,1,.75-3c0.36-.28.73-0.59,1.13-0.95l0.1-.08a34,34,0,0,0,4.15-4.28,2.43,2.43,0,0,1,.29-0.29,2.55,2.55,0,0,1,1.65-.59,2.63,2.63,0,0,1,1,.21,6.37,6.37,0,0,0,2.5.51,6.48,6.48,0,0,0,5.95-4l1-2.33a6.42,6.42,0,0,0-3.41-8.41,2.58,2.58,0,0,1-1.59-2.65,33.92,33.92,0,0,0,.06-7.51,2.57,2.57,0,0,1,1.62-2.61,6.42,6.42,0,0,0,3.53-8.36l-1-2.35a6.4,6.4,0,0,0-8.36-3.53,2.65,2.65,0,0,1-1,.2,2.5,2.5,0,0,1-2-1,33.94,33.94,0,0,0-5.26-5.35,2.58,2.58,0,0,1-.72-3h0a6.42,6.42,0,0,0-3.41-8.41l-2.33-1a6.4,6.4,0,0,0-8.41,3.4h0a2.57,2.57,0,0,1-2.36,1.59H162a33.86,33.86,0,0,0-7.5-.06h-0.25a2.59,2.59,0,0,1-2.37-1.63,6.39,6.39,0,0,0-5.95-4h-0.12ZM158,101.59a17.6,17.6,0,1,1,6.57-1.32,17.46,17.46,0,0,1-6.57,1.32h0v0Z" fill="#2e9afe"/> </g> <g id="c1"> <g id="c2"> <path d="M40.07,81.95H138.2a5.22,5.22,0,0,1,5.22,5.22v64.47a5.23,5.23,0,0,1-5.23,5.23H40.07a5.23,5.23,0,0,1-5.23-5.23V87.17A5.22,5.22,0,0,1,40.07,81.95Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect x="71.76" y="92.56" width="34.75" height="45.19" rx="6.33" ry="6.33" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M28.3,109.24a6.49,6.49,0,0,0,4.18,6c15.14,5.87,35,9.43,56.66,9.43s41.51-3.56,56.66-9.43a6.49,6.49,0,0,0,4.18-6v-26a6.46,6.46,0,0,0-6.46-6.46H34.75a6.46,6.46,0,0,0-6.46,6.46h0v26Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M71,76.79V65.57a7.3,7.3,0,0,1,7.28-7.28H100a7.3,7.3,0,0,1,7.28,7.28V76.79" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> </g> <g id="scale"> <circle cx="28.3" cy="76.48" r="22.74" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line id="hr" x1="28.3" y1="76.48" x2="34.55" y2="76.48" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line id="min" x1="28.3" y1="76.48" x2="28.3" y2="87.65" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g></svg>',
    
        keyframes: {
            spin: {
                '0': {a: 360},
                '3000': {a: 0}
            },
            scale: {
                '0': {s: 1},
                '750': {s: 1.2},
                '1500': {s: 1},
                '2250': {s: 1.2},
                '3000': {s: 1}
            },
            hr: {
                '0': {a: 0},
                '3000': {a: 360}
            },
            min: {
                '0': {a: 0},
                '1500': {a: 360}
            },
            c1: {
                '0': {y: 5},
                '900': {y: -10},
                '2100': {y: -10},
                '3000': {y: 5}
            },
            c2: {
                '0': {a: 0},
                '900': {a: 0},
                '1200': {a: 8},
                '1500': {a: -8},
                '1800': {a: 8},
                '2100': {a: -8},
                '2400': {a: 4},
                '3000': {a: 0}
            }
        },
    
        spin: function(data) {
            this.$spin.setAttribute('transform', 'rotate(' + data.a + ' 158 83.7)');
        },
    
        scale: function(data) {
            this.$scale.setAttribute('transform', 'translate(28.29 76.48) scale(' + data.s + ') translate(-28.29 -76.48)');
        },
    
        hr: function(data) {
            this.$hr.setAttribute('transform', 'rotate(' + data.a + ' 28.29 76.48)');
        },
    
        min: function(data) {
            this.$min.setAttribute('transform', 'rotate(' + data.a + ' 28.29 76.48)');
        },
    
        c1: function(data) {
            this.$c1.setAttribute('transform', 'translate(0 ' + data.y + ')');
        },
    
        c2: function(data) {
            this.$c2.setAttribute('transform', 'rotate(' + data.a + ' 89.13 58.29)');
        },
    
        init: function() {
            this.$spin = this.$root.querySelector('#spin');
            this.$scale = this.$root.querySelector('#scale');
            this.$hr = this.$root.querySelector('#hr');
            this.$min = this.$root.querySelector('#min');
            this.$c1 = this.$root.querySelector('#c1');
            this.$c2 = this.$root.querySelector('#c2');
            this.animate(this.keyframes.spin, this.spin, 'linear');
            this.animate(this.keyframes.scale, this.scale, 'inOut');
            this.animate(this.keyframes.hr, this.hr, 'linear');
            this.animate(this.keyframes.min, this.min, 'linear');
            this.animate(this.keyframes.c1, this.c1, 'inOut');
            this.animate(this.keyframes.c2, this.c2, 'inOut');
        }
    
    });
    
    
    /* calendar */
    
    Icon.calendar = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>Calendar</title> <g id="calendar"> <rect x="20.19" y="66.1" width="113.11" height="98.76" rx="5.38" ry="5.38" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path id="p3" d="M38.41,150a6.44,6.44,0,0,0,4.93-2.12,6.81,6.81,0,0,0,.24-9.62l-0.24-.24a6.82,6.82,0,0,0-9.64-.24l-0.24.24A6.44,6.44,0,0,0,31.35,143a7.62,7.62,0,0,0,2.12,4.93A6.44,6.44,0,0,0,38.41,150Z" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M38.41,126.06a6.44,6.44,0,0,0,4.93-2.12,6.81,6.81,0,0,0,.24-9.62l-0.24-.24a6.82,6.82,0,0,0-9.64-.24l-0.24.24A7,7,0,0,0,38.41,126.06Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M64,150a6.44,6.44,0,0,0,4.93-2.12,6.81,6.81,0,0,0,.24-9.62l-0.24-.24a6.82,6.82,0,0,0-9.64-.24l-0.24.24a6.81,6.81,0,0,0-.24,9.62L59,147.93A6.44,6.44,0,0,0,64,150Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path id="p1" d="M64,126.06a6.44,6.44,0,0,0,4.93-2.12,6.81,6.81,0,0,0,.24-9.62l-0.24-.24a6.82,6.82,0,0,0-9.64-.24l-0.24.24a6.81,6.81,0,0,0-.24,9.62L59,123.94A6.44,6.44,0,0,0,64,126.06Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path id="p4" d="M89.52,150a7,7,0,0,0,4.93-12,6.82,6.82,0,0,0-9.61-.18l-0.24.24a6.81,6.81,0,0,0-.24,9.62L84.6,148A6.44,6.44,0,0,0,89.52,150Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path id="p2" d="M89.52,126.06a7.23,7.23,0,0,0,7-7,7.62,7.62,0,0,0-2.12-4.93,6.82,6.82,0,0,0-9.64-.24l-0.24.24a6.81,6.81,0,0,0-.24,9.62l0.24,0.24A6.44,6.44,0,0,0,89.52,126.06Z" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M115.08,126.06a7.23,7.23,0,0,0,7-7,7.62,7.62,0,0,0-2.12-4.93,6.82,6.82,0,0,0-9.64-.24l-0.24.24a6.81,6.81,0,0,0-.24,9.62l0.24,0.24A6.44,6.44,0,0,0,115.08,126.06Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M25.58,66.1H127.93a5.38,5.38,0,0,1,5.38,5.38h0V96.7H20.19V71.49a5.38,5.38,0,0,1,5.37-5.39h0Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M105,78a5.06,5.06,0,0,1-5.08,5h0a5.06,5.06,0,0,1-5.08-5V60.3a5.06,5.06,0,0,1,5.08-5h0a5.06,5.06,0,0,1,5.08,5V78Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M58.7,78a5.06,5.06,0,0,1-5.08,5h0a5.06,5.06,0,0,1-5.08-5V60.3a5.06,5.06,0,0,1,5.08-5h0a5.06,5.06,0,0,1,5.08,5V78Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <g id="spin"> <path d="M159.82,101.36a4.6,4.6,0,0,1-4.23-2.86,3,3,0,0,0-2.7-1.85H152.6a27.39,27.39,0,0,1-6.06,0H146.2a2.93,2.93,0,0,0-2.71,1.75h0a4.6,4.6,0,0,1-6,2.43l-1.94-.8a4.6,4.6,0,0,1-2.42-6,2.93,2.93,0,0,0-.8-3.45,27.6,27.6,0,0,1-4.27-4.34,2.86,2.86,0,0,0-2.3-1.08,3,3,0,0,0-1.15.22,4.6,4.6,0,0,1-5.95-2.52l-0.8-2a4.47,4.47,0,0,1,2.46-5.83l0.16-.06a2.93,2.93,0,0,0,1.84-3,27.51,27.51,0,0,1,0-6.08,2.94,2.94,0,0,0-1.78-3,4.6,4.6,0,0,1-2.46-6l0.8-1.94a4.6,4.6,0,0,1,6-2.46h0a3,3,0,0,0,1.15.23,2.91,2.91,0,0,0,1.9-.69,2.78,2.78,0,0,0,.32-0.33,27.51,27.51,0,0,1,3.37-3.45h0.07l0.94-.81a2.93,2.93,0,0,0,.86-3.45,4.6,4.6,0,0,1,2.52-6l2-.81a4.6,4.6,0,0,1,5.95,2.52,3,3,0,0,0,2.7,1.85h0.29a27.39,27.39,0,0,1,6.06,0h0.33A2.93,2.93,0,0,0,156,39.84h0a4.6,4.6,0,0,1,6-2.43l1.94,0.81a4.6,4.6,0,0,1,2.42,6h0a2.93,2.93,0,0,0,.8,3.45A27.6,27.6,0,0,1,171.43,52a2.86,2.86,0,0,0,2.3,1.08,3,3,0,0,0,1.15-.22,4.6,4.6,0,0,1,6,2.52l0.8,2a4.47,4.47,0,0,1-2.37,5.87l-0.14.06a2.93,2.93,0,0,0-1.84,3,27.51,27.51,0,0,1,0,6.08,2.94,2.94,0,0,0,1.78,3,4.6,4.6,0,0,1,2.36,6l-0.8,1.94a4.6,4.6,0,0,1-4.21,2.86h0a4.6,4.6,0,0,1-1.78-.36,3,3,0,0,0-1.15-.23,2.91,2.91,0,0,0-1.9.69,2.78,2.78,0,0,0-.32.33A27.53,27.53,0,0,1,167.9,90h-0.07l-0.93.8a2.93,2.93,0,0,0-.86,3.45,4.6,4.6,0,0,1-2.52,6l-2,.8A4.6,4.6,0,0,1,159.82,101.36Z" fill="#e0f0ff"/> <path d="M139.74,37.74a3.77,3.77,0,0,1,3.45,2.3,3.75,3.75,0,0,0,3.45,2.3H147a26.55,26.55,0,0,1,5.9,0h0.43a3.75,3.75,0,0,0,3.45-2.3h0a3.76,3.76,0,0,1,4.93-2h0l1.94,0.81a3.77,3.77,0,0,1,2,4.93h0a3.74,3.74,0,0,0,1.06,4.36,26.67,26.67,0,0,1,4.14,4.21,3.68,3.68,0,0,0,2.9,1.39,3.81,3.81,0,0,0,1.44-.28h0a3.78,3.78,0,0,1,4.91,2.08l0.8,2a3.77,3.77,0,0,1-2.08,4.9h0a3.73,3.73,0,0,0-2.3,3.82,26.66,26.66,0,0,1,0,5.91,3.74,3.74,0,0,0,2.3,3.85h0a3.77,3.77,0,0,1,2,4.93L180,82.85A3.85,3.85,0,0,1,175,85l-0.1,0h0a3.78,3.78,0,0,0-1.48-.3,3.71,3.71,0,0,0-2.42.89,3.62,3.62,0,0,0-.41.44,26.69,26.69,0,0,1-3.27,3.37h0c-0.31.28-.63,0.54-1,0.8a3.73,3.73,0,0,0-1.15,4.34h0a3.77,3.77,0,0,1-2.08,4.9l-2,.8a3.78,3.78,0,0,1-4.91-2.08h0a3.75,3.75,0,0,0-3.45-2.3h-0.37a26.55,26.55,0,0,1-5.9,0h-0.43a3.75,3.75,0,0,0-3.45,2.3h0a3.76,3.76,0,0,1-4.93,2h0l-1.94-.8a3.77,3.77,0,0,1-2-4.93h0A3.74,3.74,0,0,0,132.76,90a26.67,26.67,0,0,1-4.14-4.21,3.68,3.68,0,0,0-2.9-1.39,3.81,3.81,0,0,0-1.44.28h0a3.78,3.78,0,0,1-4.91-2.08l-0.8-2a3.77,3.77,0,0,1,2.08-4.9h0a3.73,3.73,0,0,0,2.3-3.82,26.63,26.63,0,0,1,0-5.91,3.74,3.74,0,0,0-2.3-3.85h0a3.77,3.77,0,0,1-2-4.93l0.8-1.94a3.74,3.74,0,0,1,1.15-1.48,3.92,3.92,0,0,1,3.88-.51h0a3.8,3.8,0,0,0,1.48.3,3.71,3.71,0,0,0,2.41-.89,3.65,3.65,0,0,0,.41-0.44,26.68,26.68,0,0,1,3.27-3.37h0c0.31-.28.63-0.54,1-0.81a3.73,3.73,0,0,0,1.15-4.34,3.77,3.77,0,0,1,2.08-4.9l2-.81a3.75,3.75,0,0,1,1.41-.28m0-1.61h0a5.35,5.35,0,0,0-2,.39l-2,.81a5.34,5.34,0,0,0-3,6.94l0,0.06a2.13,2.13,0,0,1-.61,2.46c-0.31.24-.61,0.49-1,0.81l-0.08.07a28.36,28.36,0,0,0-3.45,3.58,2.06,2.06,0,0,1-.23.24,2.09,2.09,0,0,1-1.36.49,2.16,2.16,0,0,1-.85-0.17h0a5.35,5.35,0,0,0-2.08-.41,5.49,5.49,0,0,0-4.91,3.22l-0.8,1.94a5.38,5.38,0,0,0,2.86,7,2.14,2.14,0,0,1,1.3,2.19,28.3,28.3,0,0,0,0,6.27,2.12,2.12,0,0,1-1.33,2.16,5.38,5.38,0,0,0-3,7l0.8,2a5.37,5.37,0,0,0,7,3h0a2.18,2.18,0,0,1,.8-0.16,2.06,2.06,0,0,1,1.61.8,28.34,28.34,0,0,0,4.39,4.46,2.13,2.13,0,0,1,.59,2.48h0a5.41,5.41,0,0,0,2.89,7l1.94,0.8a5.37,5.37,0,0,0,7-2.86h0a2.13,2.13,0,0,1,1.94-1.3h0.24a27.91,27.91,0,0,0,6.27,0h0.21a2.14,2.14,0,0,1,1.94,1.36,5.37,5.37,0,0,0,7,3h0l2-.8a5.46,5.46,0,0,0,2.88-7.06,2.13,2.13,0,0,1,.61-2.46,11.24,11.24,0,0,0,.94-0.8l0.08-.07A28.38,28.38,0,0,0,171.8,87a2,2,0,0,1,.23-0.24,2.09,2.09,0,0,1,1.36-.49,2.16,2.16,0,0,1,.85.17h0a5.35,5.35,0,0,0,2.08.41,5.49,5.49,0,0,0,5-3.31l0.8-1.94a5.42,5.42,0,0,0-2.87-7h0A2.13,2.13,0,0,1,178,72.4a28.3,28.3,0,0,0,0-6.27A2.13,2.13,0,0,1,179.29,64a5.34,5.34,0,0,0,3-6.94l0-.06-0.78-1.89a5.37,5.37,0,0,0-6.9-3,2.19,2.19,0,0,1-.8.16,2.06,2.06,0,0,1-1.61-.81A28.31,28.31,0,0,0,167.64,47a2.13,2.13,0,0,1-.6-2.46h0a5.38,5.38,0,0,0-2.81-7.08l0,0-1.94-.81a5.37,5.37,0,0,0-7,2.85h0a2.13,2.13,0,0,1-1.94,1.3H153a27.91,27.91,0,0,0-6.27,0h-0.21a2.14,2.14,0,0,1-1.91-1.39,5.35,5.35,0,0,0-5-3.36h0Z" fill="#2e9afe"/> </g> <circle cx="149.78" cy="69.34" r="14.65" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line id="hr" x1="149.78" y1="69.14" x2="153.79" y2="69.14" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line id="min" x1="149.78" y1="69.14" x2="149.78" y2="76.33" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect width="202" height="202" fill="none"/></svg>',
    
        keyframes: {
            p1: {
                '0': {o: 0},
                '400': {o: 1},
                '1600': {o: 1},
                '2000': {o: 0},
                '3200': {o: 0}
            },
            p2: {
                '0': {o: 0},
                '1200': {o: 0},
                '1600': {o: 1},
                '2800': {o: 1},
                '3200': {o: 0}
            },
            p3: {
                '0': {o: 0},
                '800': {o: 0},
                '1200': {o: 1},
                '2400': {o: 1},
                '2800': {o: 0},
                '3200': {o: 0}
            },
            p4: {
                '0': {o: 0},
                '400': {o: 0},
                '800': {o: 1},
                '2000': {o: 1},
                '2400': {o: 0},
                '3200': {o: 0}
            },
            hr: {
                '0': {a: 0},
                '3200': {a: 360}
            },
            min: {
                '0': {a: 0},
                '1600': {a: 360}
            },
            calendar: {
                '0': {a: 0},
                '400': {a: 8},
                '800': {a: -4},
                '1200': {a: 4},
                '1600': {a: -2},
                '2000': {a: 0},
                '3200': {a: 0}
            }
        },
    
        p1: function(data) {
            this.$p1.setAttribute('fill-opacity', data.o);
        },
    
        p2: function(data) {
            this.$p2.setAttribute('fill-opacity', data.o);
        },
    
        p3: function(data) {
            this.$p3.setAttribute('fill-opacity', data.o);
        },
    
        p4: function(data) {
            this.$p4.setAttribute('fill-opacity', data.o);
        },
    
        hr: function(data) {
            this.$spin.setAttribute('transform', 'rotate(' + data.a + ' 149.74 69.14)');
            this.$hr.setAttribute('transform', 'rotate(' + data.a + ' 149.74 69.14)');
        },
    
        min: function(data) {
            this.$min.setAttribute('transform', 'rotate(' + data.a + ' 149.74 69.14)');
        },
    
        calendar: function(data) {
            this.$calendar.setAttribute('transform', 'rotate(' + data.a + ' 76.75 66.1)');
        },
    
        init: function() {
            this.$p1 = this.$root.querySelector('#p1');
            this.$p2 = this.$root.querySelector('#p2');
            this.$p3 = this.$root.querySelector('#p3');
            this.$p4 = this.$root.querySelector('#p4');
            this.$spin = this.$root.querySelector('#spin');
            this.$hr = this.$root.querySelector('#hr');
            this.$min = this.$root.querySelector('#min');
            this.$calendar = this.$root.querySelector('#calendar');
            this.animate(this.keyframes.p1, this.p1, 'inOut');
            this.animate(this.keyframes.p2, this.p2, 'inOut');
            this.animate(this.keyframes.p3, this.p3, 'inOut');
            this.animate(this.keyframes.p4, this.p4, 'inOut');
            this.animate(this.keyframes.hr, this.hr, 'linear');
            this.animate(this.keyframes.min, this.min, 'linear');
            this.animate(this.keyframes.calendar, this.calendar, 'inOut');
        }
    
    });
    
    
    /* key */
    
    Icon.key = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>key</title> <g id="key"> <polyline id="l1" points="90.37 94.08 115.64 68.81 159.07 68.81" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="80"/> <line id="l2" x1="126.35" y1="88.08" x2="180.89" y2="88.08" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="55"/> <line id="l3" x1="132.96" y1="110.52" x2="158.46" y2="110.52" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="26"/> <polyline id="l4" points="92.43 98.51 127.11 133.19 161.47 133.19" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="84"/> <circle id="c1" cx="159.07" cy="68.81" r="5.11" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="c2" cx="180.89" cy="88.08" r="5.11" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="c3" cx="159.07" cy="110.52" r="5.11" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="c4" cx="161.9" cy="133.18" r="5.11" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M131.19,88.7a2.63,2.63,0,0,0-1.7-.63H73.72a30,30,0,1,0,0,22.44H92a2.71,2.71,0,0,0,2-.85l4.82-5.17,4.84,5.17a2.71,2.71,0,0,0,3.94,0l4.84-5.19,4.82,5.18a2.75,2.75,0,0,0,2,.85,2.55,2.55,0,0,0,2-.85l4.83-5.17,4.83,5.17a2.7,2.7,0,0,0,3.88.06l0.2-.22,6.8-8.5a2.72,2.72,0,0,0-.37-3.77ZM40.81,99.28a8.5,8.5,0,1,1-8.5-8.5A8.5,8.5,0,0,1,40.81,99.28Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g></svg>',
    
        keyframes: {
            key: {
                '0': {s: 1},
                '400': {s: 0.9},
                '1000': {s: 1.15},
                '1500': {s: 1},
                '5000': {s: 1}
            },
            c1: {
                '0': {x: -68.7, y: 25.27, r: 5.11},
                '800': {x: -68.7, y: 25.27, r: 5.11},
                '1100': {x: -43.43, y: 0, r: 5.11},
                '1460': {x: 0, y: 0, r: 5.11},
                '1660': {x: 0, y: 0, r: 8.11},
                '1860': {x: 0, y: 0, r: 5.11},
                '4250': {x: 0, y: 0, r: 5.11},
                '4450': {x: 0, y: 0, r: 8.11},
                '4650': {x: 0, y: 0, r: 5.11},
                '4830': {x: -43.43, y: 0, r: 5.11},
                '4980': {x: -68.7, y: 25.27, r: 5.11},
                '5000': {x: -68.7, y: 25.27, r: 5.11}
            },
            c2: {
                '0': {x: -60.54, y: 6, r: 5.11},
                '1200': {x: -60.54, y: 6, r: 5.11},
                '1280': {x: -54.54, y: 0, r: 5.11},
                '1740': {x: 0, y: 0, r: 5.11},
                '1940': {x: 0, y: 0, r: 8.11},
                '2140': {x: 0, y: 0, r: 5.11},
                '3970': {x: 0, y: 0, r: 5.11},
                '4170': {x: 0, y: 0, r: 8.11},
                '4370': {x: 0, y: 0, r: 5.11},
                '4600': {x: -54.54, y: 0, r: 5.11},
                '4640': {x: -60.54, y: 6, r: 5.11},
                '5000': {x: -60.54, y: 6, r: 5.11}
            },
            c3: {
                '0': {x: -37.5, y: -12, r: 5.11},
                '1260': {x: -37.5, y: -12, r: 5.11},
                '1580': {x: -16.5, y: 0, r: 5.11},
                '2020': {x: 0, y: 0, r: 5.11},
                '2220': {x: 0, y: 0, r: 8.11},
                '2420': {x: 0, y: 0, r: 5.11},
                '3690': {x: 0, y: 0, r: 5.11},
                '3890': {x: 0, y: 0, r: 8.11},
                '4090': {x: 0, y: 0, r: 5.11},
                '4310': {x: -16.5, y: 0, r: 5.11},
                '4470': {x: -37.5, y: -12, r: 5.11},
                '5000': {x: -37.5, y: -12, r: 5.11}
            },
            c4: {
                '0': {x: -69.05, y: -34.67, r: 5.11},
                '1580': {x: -69.05, y: -34.67, r: 5.11},
                '2000': {x: -34.37, y: 0, r: 5.11},
                '2300': {x: 0, y: 0, r: 5.11},
                '2500': {x: 0, y: 0, r: 8.11},
                '2700': {x: 0, y: 0, r: 5.11},
                '3600': {x: 0, y: 0, r: 5.11},
                '3800': {x: 0, y: 0, r: 8.11},
                '4000': {x: 0, y: 0, r: 5.11},
                '4150': {x: -34.37, y: 0, r: 5.11},
                '4410': {x: -69.05, y: -34.67, r: 5.11},
                '5000': {x: -69.05, y: -34.67, r: 5.11}
            },
            l1: {
                '0': {o: 80},
                '800': {o: 80},
                '1460': {o: 0},
                '4650': {o: 0},
                '4980': {o: 80},
                '5000': {o: 80}
            },
            l2: {
                '0': {o: 55},
                '1280': {o: 55},
                '1740': {o: 0},
                '4370': {o: 0},
                '4600': {o: 55},
                '5000': {o: 55}
            },
            l3: {
                '0': {o: 26},
                '1500': {o: 26},
                '2020': {o: 0},
                '4010': {o: 0},
                '4390': {o: 26},
                '5000': {o: 26}
            },
            l4: {
                '0': {o: 84},
                '1580': {o: 84},
                '2300': {o: 0},
                '4000': {o: 0},
                '4410': {o: 84},
                '5000': {o: 84}
            }
        },
    
        key: function(data) {
            this.$key.setAttribute('transform', 'translate(79.16 99.29) scale(' + data.s + ') translate(-79.16 -99.29)');
        },
    
        c1: function(data) {
            this.$c1.setAttribute('transform', 'translate(' + data.x + ' ' + data.y + ')');
            this.$c1.setAttribute('r', data.r);
        },
    
        c2: function(data) {
            this.$c2.setAttribute('transform', 'translate(' + data.x + ' ' + data.y + ')');
            this.$c2.setAttribute('r', data.r);
        },
    
        c3: function(data) {
            this.$c3.setAttribute('transform', 'translate(' + data.x + ' ' + data.y + ')');
            this.$c3.setAttribute('r', data.r);
        },
    
        c4: function(data) {
            this.$c4.setAttribute('transform', 'translate(' + data.x + ' ' + data.y + ')');
            this.$c4.setAttribute('r', data.r);
        },
    
        l1: function(data) {
            this.$l1.setAttribute('stroke-dashoffset', data.o);
        },
    
        l2: function(data) {
            this.$l2.setAttribute('stroke-dashoffset', data.o);
        },
    
        l3: function(data) {
            this.$l3.setAttribute('stroke-dashoffset', data.o);
        },
    
        l4: function(data) {
            this.$l4.setAttribute('stroke-dashoffset', data.o);
        },
    
        init: function() {
            this.$key = this.$root.querySelector('#key');
            this.$c1 = this.$root.querySelector('#c1');
            this.$c2 = this.$root.querySelector('#c2');
            this.$c3 = this.$root.querySelector('#c3');
            this.$c4 = this.$root.querySelector('#c4');
            this.$l1 = this.$root.querySelector('#l1');
            this.$l2 = this.$root.querySelector('#l2');
            this.$l3 = this.$root.querySelector('#l3');
            this.$l4 = this.$root.querySelector('#l4');
            this.animate(this.keyframes.key, this.key, 'inOut');
            this.animate(this.keyframes.c1, this.c1, 'linear');
            this.animate(this.keyframes.c2, this.c2, 'linear');
            this.animate(this.keyframes.c3, this.c3, 'linear');
            this.animate(this.keyframes.c4, this.c4, 'linear');
            this.animate(this.keyframes.l1, this.l1, 'linear');
            this.animate(this.keyframes.l2, this.l2, 'linear');
            this.animate(this.keyframes.l3, this.l3, 'linear');
            this.animate(this.keyframes.l4, this.l4, 'linear');
        }
    
    });
    
    
    /* zoom */
    
    Icon.zoom = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>zoom</title> <defs> <clipPath id="clip"> <circle id="circle" cx="112.46" cy="94.43" r="27.34"/> </clipPath> </defs> <g> <path d="M122,45.25H58.1V156.76H146V69.29Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="74.39" y1="68.09" x2="105.08" y2="68.09" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="99.93" y1="90.2" x2="129.73" y2="90.2" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="99.93" y1="112.31" x2="129.73" y2="112.31" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="99.93" y1="134.42" x2="129.73" y2="134.42" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polyline points="73.05 89.33 77.94 94.22 85.98 86.18" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="75.49" y1="116.33" x2="83.53" y2="108.29" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="75.49" y1="108.29" x2="83.53" y2="116.33" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="75.49" y1="138.44" x2="83.53" y2="130.4" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="75.49" y1="130.4" x2="83.53" y2="138.44" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polyline points="121.98 45.24 121.98 69.29 146.02 69.29 121.98 45.24" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <g id="zoom"> <line id="line" x1="138.9" y1="120.87" x2="165.06" y2="147.03" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle cx="112.46" cy="94.43" r="37.39" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle cx="112.46" cy="94.43" r="28.34" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <g clip-path="url(#clip)"> <g transform="translate(101 101) scale(1.5) translate(-101 -101)"> <path d="M122,45.25H58.1V156.76H146V69.29Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="74.39" y1="68.09" x2="105.08" y2="68.09" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="99.93" y1="90.2" x2="129.73" y2="90.2" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="99.93" y1="112.31" x2="129.73" y2="112.31" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="99.93" y1="134.42" x2="129.73" y2="134.42" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polyline points="73.05 89.33 77.94 94.22 85.98 86.18" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="75.49" y1="116.33" x2="83.53" y2="108.29" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="75.49" y1="108.29" x2="83.53" y2="116.33" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="75.49" y1="138.44" x2="83.53" y2="130.4" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="75.49" y1="130.4" x2="83.53" y2="138.44" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polyline points="121.98 45.24 121.98 69.29 146.02 69.29 121.98 45.24" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> </g></svg>',
    
        keyframes: {
    
            zoom: {
                '0': {x: 18, y: 0},
                '800': {x: -38, y: -10},
                '1400': {x: -38, y: 20},
                '2000': {x: -38, y: 50},
                '2800': {x: 18, y: 0}
            },
    
            line: {
                '0': {a: 0},
                '800': {a: 55},
                '1400': {a: 70},
                '2000': {a: 85},
                '2800': {a: 0}
            }
    
        },
    
        zoom: function(data) {
            this.$zoom.setAttribute('transform', 'translate(' + data.x + ' ' + data.y + ')');
            this.$circle.setAttribute('cx', 112.46 + data.x);
            this.$circle.setAttribute('cy', 94.43 + data.y);
        },
    
        line: function(data) {
            this.$line.setAttribute('transform', 'rotate(' + data.a + ' 112.46 94.43)');
        },
    
        init: function() {
            this.$circle = this.$root.querySelector('#circle');
            this.$line = this.$root.querySelector('#line');
            this.$zoom = this.$root.querySelector('#zoom');
            this.animate(this.keyframes.zoom, this.zoom, 'inOut');
            this.animate(this.keyframes.line, this.line, 'inOut');
        }
    
    });
    
    
    /* settings */
    
    Icon.settings = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>settings</title> <path id="spin" d="M163,94.49h0a8.15,8.15,0,0,1-5-8.43,58.22,58.22,0,0,0,.1-12.9,8.1,8.1,0,0,1,5.1-8.33h0a8.23,8.23,0,0,0,4.5-10.72L166,49.84a8.23,8.23,0,0,0-10.72-4.5h0a8.1,8.1,0,0,1-9.46-2.43,58.26,58.26,0,0,0-9.05-9.2,8.15,8.15,0,0,1-2.3-9.51h0a8.23,8.23,0,0,0-4.35-10.79h0l-4.25-1.8A8.23,8.23,0,0,0,115.06,16v0h0a8.15,8.15,0,0,1-8.43,5,58.26,58.26,0,0,0-12.9-.1,8.1,8.1,0,0,1-8.33-5.1h0a8.23,8.23,0,0,0-10.72-4.5L70.41,13a8.23,8.23,0,0,0-4.5,10.72h0a8.1,8.1,0,0,1-2.43,9.46c-0.72.57-1.42,1.15-2.12,1.76h0a58.26,58.26,0,0,0-7.15,7.36,8,8,0,0,1-.9,1A8.19,8.19,0,0,1,44.8,44.5h0a8.34,8.34,0,0,0-10.85,4.43l-1.8,4.24A8.23,8.23,0,0,0,36.5,64h0a8.15,8.15,0,0,1,5,8.43,58.22,58.22,0,0,0-.1,12.9,8.1,8.1,0,0,1-5.1,8.33h0a8.23,8.23,0,0,0-4.5,10.72l1.73,4.27a8.23,8.23,0,0,0,10.72,4.5h0a8.1,8.1,0,0,1,9.46,2.43,58.26,58.26,0,0,0,9.05,9.2,8.15,8.15,0,0,1,2.3,9.51h0A8.23,8.23,0,0,0,69.4,145h0l4.25,1.8a8.23,8.23,0,0,0,10.74-4.44h0a8.15,8.15,0,0,1,8.43-5,58.26,58.26,0,0,0,12.9.1,8.1,8.1,0,0,1,8.32,5.1h0a8.23,8.23,0,0,0,10.72,4.5l4.27-1.73a8.23,8.23,0,0,0,4.5-10.72h0a8.1,8.1,0,0,1,2.43-9.46c0.72-.57,1.42-1.15,2.12-1.76h0a58.28,58.28,0,0,0,7.15-7.36,7.93,7.93,0,0,1,.9-1,8.19,8.19,0,0,1,8.51-1.29h0a8.34,8.34,0,0,0,10.85-4.43l1.8-4.25A8.23,8.23,0,0,0,163,94.49Zm-49.7,18.14a35.38,35.38,0,0,1-46.08-19.5h0A35.38,35.38,0,0,1,86.68,47l0,0a35.38,35.38,0,0,1,46.07,19.52v0a35.38,35.38,0,0,1-19.5,46.08h0Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect x="19.08" y="84.69" width="163.83" height="106.81" rx="8.45" ry="8.45" fill="#e0f0ff"/> <path d="M174.41,85.59A7.55,7.55,0,0,1,182,93.14v89.91a7.55,7.55,0,0,1-7.55,7.55H27.49a7.55,7.55,0,0,1-7.55-7.55V93.14a7.55,7.55,0,0,1,7.55-7.55H174.41m0-1.8H27.49a9.36,9.36,0,0,0-9.35,9.35v89.91a9.36,9.36,0,0,0,9.35,9.35H174.41a9.36,9.36,0,0,0,9.35-9.35V93.14a9.36,9.36,0,0,0-9.35-9.35h0Z" fill="#2e9afe"/> <line x1="36.55" y1="110.52" x2="165.44" y2="110.52" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="36.55" y1="139.54" x2="165.44" y2="139.54" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="36.55" y1="168.56" x2="165.44" y2="168.56" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="c1" cx="127.26" cy="110.52" r="7.92" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="c2" cx="71.21" cy="139.54" r="7.92" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="c3" cx="99.76" cy="168.56" r="7.92" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>',
    
        keyframes: {
            c1: {
                '0': {x: 0},
                '800': {x: -25},
                '1600': {x: 0},
                '2400': {x: -40},
                '3200': {x: 0},
                '4000': {x: 0}
            },
            c2: {
                '0': {x: 0},
                '800': {x: 70},
                '1600': {x: -20},
                '2400': {x: 40},
                '3200': {x: 0},
                '4000': {x: 0}
            },
            c3: {
                '0': {x: 0},
                '800': {x: -40},
                '1600': {x: 50},
                '2400': {x: 20},
                '3200': {x: 0},
                '4000': {x: 0}
            },
            spin: {
                '0': {a: 0},
                '800': {a: 70},
                '1600': {a: -20},
                '2400': {a: 40},
                '3200': {a: 0},
                '4000': {a: 0}
            }
        },
    
        c1: function(data) {
            this.$c1.setAttribute('transform', 'translate(' + data.x + ' 0)');
        },
    
        c2: function(data) {
            this.$c2.setAttribute('transform', 'translate(' + data.x + ' 0)');
        },
    
        c3: function(data) {
            this.$c3.setAttribute('transform', 'translate(' + data.x + ' 0)');
        },
    
        spin: function(data) {
             this.$spin.setAttribute('transform', 'rotate(' + data.a + ' 99.76 79.19)')
        },
    
        init: function() {
            this.$c1 = this.$root.querySelector('#c1');
            this.$c2 = this.$root.querySelector('#c2');
            this.$c3 = this.$root.querySelector('#c3');
            this.$spin = this.$root.querySelector('#spin');
            this.animate(this.keyframes.c1, this.c1, 'inOut');
            this.animate(this.keyframes.c2, this.c2, 'inOut');
            this.animate(this.keyframes.c3, this.c3, 'inOut');
            this.animate(this.keyframes.spin, this.spin, 'inOut');
        }
    
    });
    
    
    /* filter */
    
    Icon.filter = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 203 202"> <title>filter</title> <line x1="1" y1="30.56" x2="179.89" y2="30.56" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="1" y1="97.32" x2="179.89" y2="97.32" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="1" y1="164.07" x2="179.89" y2="164.07" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="c1" cx="136.18" cy="30.56" r="18.21" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="c2" cx="49.37" cy="97.32" r="18.21" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="c3" cx="160" cy="164.07" r="18.21" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M145.72,190.66A56.28,56.28,0,1,1,202,134.38,56.34,56.34,0,0,1,145.72,190.66Z" transform="translate(0 0)" fill="#e0f0ff"/> <path d="M145.72,79.11A55.28,55.28,0,0,1,201,134.38h0a55.28,55.28,0,0,1-55.28,55.28h0a55.28,55.28,0,0,1,0-110.56h0m0-2A57.28,57.28,0,1,0,203,134.38,57.34,57.34,0,0,0,145.72,77.1h0Z" transform="translate(0 0)" fill="#2e9afe"/> <polygon id="scale" points="175.06 113.06 116.39 113.06 140.1 142.69 140.1 166.28 151.34 166.28 151.34 142.69 175.06 113.06" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>',
    
        keyframes: {
            c1: {
                '0': {x: 0},
                '1000': {x: -100},
                '2000': {x: 0},
                '2500': {x: 0}
            },
            c2: {
                '0': {x: 0},
                '1000': {x: 70},
                '2000': {x: 0},
                '2500': {x: 0}
            },
            c3: {
                '0': {x: 0},
                '1000': {x: -95},
                '2000': {x: 0},
                '2500': {x: 0}
            },
            scale: {
                '0': {s: 1},
                '1000': {s: 1.4},
                '2000': {s: 1},
                '2500': {s: 1}
            }
        },
    
        c1: function(data) {
            this.$c1.setAttribute('transform', 'translate(' + data.x + ' 0)');
        },
    
        c2: function(data) {
            this.$c2.setAttribute('transform', 'translate(' + data.x + ' 0)');
        },
    
        c3: function(data) {
            this.$c3.setAttribute('transform', 'translate(' + data.x + ' 0)');
        },
    
        scale: function(data) {
            this.$scale.setAttribute('transform', 'translate(145.72 139.67) scale(' + data.s + ') translate(-145.72 -139.67)');
        },
    
        init: function() {
            this.$c1 = this.$root.querySelector('#c1');
            this.$c2 = this.$root.querySelector('#c2');
            this.$c3 = this.$root.querySelector('#c3');
            this.$scale = this.$root.querySelector('#scale');
            this.animate(this.keyframes.c1, this.c1, 'inOut');
            this.animate(this.keyframes.c2, this.c2, 'inOut');
            this.animate(this.keyframes.c3, this.c3, 'inOut');
            this.animate(this.keyframes.scale, this.scale, 'inOut');
        }
    
    });
    
    
    /* share */
    
    Icon.share = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>share</title> <g id="u1"> <line id="l11" x1="163.6" y1="18.69" x2="131.12" y2="10.13" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="138.8" y1="58.14" x2="159.48" y2="36.57" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line id="l12" x1="180.53" y1="36.57" x2="193.69" y2="68.39" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="c12" cx="193.69" cy="68.39" r="7.31" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="c11" cx="131.12" cy="10.13" r="7.31" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M154.9,36.57V32.93a2.63,2.63,0,0,1,1.21-2.41c3.4-2.26,9.63-2.41,9.63-6,0-2.41-2.42-3.61-2.42-8.43v-1.2c0-4.82,3.63-6,6-6s6,1.2,6,6v1.2c0,4.82-2.41,6-2.41,8.43,0,3.61,6.23,3.76,9.63,6a2.63,2.63,0,0,1,1.2,2.41v3.64H154.9Z" transform="translate(0)" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <g id="u2"> <line x1="122.35" y1="154.49" x2="150.49" y2="175.65" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M141.86,199.17v-3.64a2.63,2.63,0,0,1,1.21-2.41c3.4-2.26,9.63-2.41,9.63-6,0-2.41-2.42-3.61-2.42-8.43v-1.2c0-4.82,3.63-6,6-6s6,1.2,6,6v1.2c0,4.82-2.41,6-2.41,8.43,0,3.61,6.23,3.76,9.63,6a2.63,2.63,0,0,1,1.2,2.41v3.64H141.86Z" transform="translate(0)" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <g id="u3"> <line x1="46.69" y1="101.72" x2="64" y2="95.81" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line id="l31" x1="35.5" y1="78.42" x2="42.81" y2="44.05" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line id="l32" x1="26.19" y1="83.65" x2="8.31" y2="55.45" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line id="l33" x1="27.9" y1="105.36" x2="20.01" y2="144.25" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M17.75,105.36v-3.64A2.63,2.63,0,0,1,19,99.31c3.4-2.26,9.63-2.41,9.63-6,0-2.41-2.42-3.61-2.42-8.43v-1.2c0-4.82,3.63-6,6-6s6,1.2,6,6v1.2c0,4.82-2.41,6-2.41,8.43,0,3.61,6.23,3.76,9.63,6a2.63,2.63,0,0,1,1.2,2.41v3.64H17.75Z" transform="translate(0)" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="c31" cx="42.81" cy="44.05" r="7.31" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="c32" cx="8.31" cy="55.45" r="7.31" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="c33" cx="20.01" cy="144.25" r="7.31" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <rect x="64" y="68.39" width="64.55" height="86.11" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polyline id="depth" points="74.25 58.15 138.8 58.15 138.8 144.25" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <g id="spin"> <path d="M91.92,133.67l3-11.33a11.77,11.77,0,1,0,8.33,8.33Z" transform="translate(0)" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path transform="translate(91.92 133.67) scale(0.53) translate(-91.92 -133.67)" id="pie" d="M92.07,133.53l21.88-5.86a22.69,22.69,0,0,0-16-16Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <line x1="72.44" y1="81.91" x2="120.11" y2="81.91" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="72.44" y1="91.49" x2="96.28" y2="91.49" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="72.44" y1="101.07" x2="120.11" y2="101.07" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>',
    
        keyframes: {
            spin: {
                '0': {s: 0, a: 0},
                '1000': {s: 1, a: 360},
                '3000': {s: 1, a: 360}
            },
            pie: {
                '0': {s: 0.53},
                '500': {s: 0.53},
                '1000': {s: 1},
                '3000': {s: 1}
            },
            depth: {
                '0': {t: 10.2},
                '1000': {t: 10.2},
                '1400': {t: 0},
                '3000': {t: 0}
            },
            u1: {
                '0': {t: 62},
                '1200': {t: 62},
                '1800': {t: 0},
                '3000': {t: 0}
            },
            u2: {
                '0': {t: 45},
                '1700': {t: 45},
                '2100': {t: 0},
                '3000': {t: 0}
            },
            u3: {
                '0': {t: 47},
                '1000': {t: 47},
                '1400': {t: 0},
                '3000': {t: 0}
            },
            c11: {
                '0': {x: 32.48, y: 8.56, s: 0},
                '1800': {x: 32.48, y: 8.56, s: 0},
                '2200': {x: 0, y: 0, s: 1},
                '3000': {x: 0, y: 0, s: 1}
            },
            l11: {
                '0': {x: 163.6, y: 18.69},
                '1800': {x: 163.6, y: 18.69},
                '2200': {x: 131.12, y: 10.13},
                '3000': {x: 131.12, y: 10.13}
            },
            c12: {
                '0': {x: -13.16, y: -31.82, s: 0},
                '1800': {x: -13.16, y: -31.82, s: 0},
                '2100': {x: 0, y: 0, s: 1},
                '3000': {x: 0, y: 0, s: 1}
            },
            l12: {
                '0': {x: 180.53, y: 36.57},
                '1800': {x: 180.53, y: 36.57},
                '2100': {x: 193.69, y: 68.39},
                '3000': {x: 193.69, y: 68.39}
            },
            l31: {
                '0': {x: 35.5, y: 78.42},
                '1400': {x: 35.5, y: 78.42},
                '1700': {x: 42.81, y: 44.05},
                '3000': {x: 42.81, y: 44.05}
            },
            l32: {
                '0': {x: 26.19, y: 83.65},
                '1400': {x: 26.19, y: 83.65},
                '1700': {x: 8.31, y: 55.45},
                '3000': {x: 8.31, y: 55.45}
            },
            l33: {
                '0': {x: 27.9, y: 105.36},
                '1400': {x: 27.9, y: 105.36},
                '1700': {x: 20.01, y: 144.25},
                '3000': {x: 20.01, y: 144.25}
            },
            c31: {
                '0': {x: -7.31, y: 34.37, s: 0},
                '1400': {x: -7.31, y: 34.37, s: 0},
                '1700': {x: 0, y: 0, s: 1},
                '3000': {x: 0, y: 0, s: 1}
            },
            c32: {
                '0': {x: 17.88, y: 28.2, s: 0},
                '1400': {x: 17.88, y: 28.2, s: 0},
                '1700': {x: 0, y: 0, s: 1},
                '3000': {x: 0, y: 0, s: 1}
            },
            c33: {
                '0': {x: 7.89, y: -38.89, s: 0},
                '1400': {x: 7.89, y: -38.89, s: 0},
                '1700': {x: 0, y: 0, s: 1},
                '3000': {x: 0, y: 0, s: 1}
            }
        },
    
        spin: function(data) {
            this.$spin.setAttribute('transform', 'translate(91.92 133.67) scale(' + data.s + ') translate(-91.92 -133.67) rotate(' + data.a + ' 91.92 133.67)');
        },
    
        pie: function(data) {
            this.$pie.setAttribute('transform', 'translate(91.92 133.67) scale(' + data.s + ') translate(-91.92 -133.67)');
        },
    
        depth: function(data) {
            this.$depth.setAttribute('transform', 'translate(-' + data.t + ' ' + data.t + ')');
        },
    
        u1: function(data) {
            this.$u1.setAttribute('transform', 'translate(-' + data.t + ' ' + data.t + ')');
        },
    
        u2: function(data) {
            this.$u2.setAttribute('transform', 'translate(-' + data.t + ' -' + data.t + ')');
        },
    
        u3: function(data) {
            this.$u3.setAttribute('transform', 'translate(' + data.t + ' 0)');
        },
    
        c11: function(data) {
            this.$c11.setAttribute('transform', 'translate(' + data.x + ' ' + data.y + ')');
            this.$c11.setAttribute('r', 7.31 * data.s);
        },
    
        l11: function(data) {
            this.$l11.setAttribute('x2', data.x);
            this.$l11.setAttribute('y2', data.y);
        },
    
        c12: function(data) {
            this.$c12.setAttribute('transform', 'translate(' + data.x + ' ' + data.y + ')');
            this.$c12.setAttribute('r', 7.31 * data.s);
        },
    
        l12: function(data) {
            this.$l12.setAttribute('x2', data.x);
            this.$l12.setAttribute('y2', data.y);
        },
    
        l31: function(data) {
            this.$l31.setAttribute('x2', data.x);
            this.$l31.setAttribute('y2', data.y);
        },
    
        l32: function(data) {
            this.$l32.setAttribute('x2', data.x);
            this.$l32.setAttribute('y2', data.y);
        },
    
        l33: function(data) {
            this.$l33.setAttribute('x2', data.x);
            this.$l33.setAttribute('y2', data.y);
        },
    
        c31: function(data) {
            this.$c31.setAttribute('transform', 'translate(' + data.x + ' ' + data.y + ')');
            this.$c31.setAttribute('r', 7.31 * data.s);
        },
    
        c32: function(data) {
            this.$c32.setAttribute('transform', 'translate(' + data.x + ' ' + data.y + ')');
            this.$c32.setAttribute('r', 7.31 * data.s);
        },
    
        c33: function(data) {
            this.$c33.setAttribute('transform', 'translate(' + data.x + ' ' + data.y + ')');
            this.$c33.setAttribute('r', 7.31 * data.s);
        },
    
        init: function() {
            this.$u1 = this.$root.querySelector('#u1');
            this.$u2 = this.$root.querySelector('#u2');
            this.$u3 = this.$root.querySelector('#u3');
            this.$l11 = this.$root.querySelector('#l11');
            this.$l12 = this.$root.querySelector('#l12');
            this.$l31 = this.$root.querySelector('#l31');
            this.$l32 = this.$root.querySelector('#l32');
            this.$l33 = this.$root.querySelector('#l33');
            this.$c11 = this.$root.querySelector('#c11');
            this.$c12 = this.$root.querySelector('#c12');
            this.$c31 = this.$root.querySelector('#c31');
            this.$c32 = this.$root.querySelector('#c32');
            this.$c33 = this.$root.querySelector('#c33');
            this.$depth = this.$root.querySelector('#depth');
            this.$spin = this.$root.querySelector('#spin');
            this.$pie = this.$root.querySelector('#pie');
            this.animate(this.keyframes.spin, this.spin, 'inOut');
            this.animate(this.keyframes.pie, this.pie, 'inOut');
            this.animate(this.keyframes.depth, this.depth, 'inOut');
            this.animate(this.keyframes.u1, this.u1, 'inOut');
            this.animate(this.keyframes.u2, this.u2, 'inOut');
            this.animate(this.keyframes.u3, this.u3, 'inOut');
            this.animate(this.keyframes.c11, this.c11, 'inOut');
            this.animate(this.keyframes.l11, this.l11, 'inOut');
            this.animate(this.keyframes.c12, this.c12, 'inOut');
            this.animate(this.keyframes.l12, this.l12, 'inOut');
            this.animate(this.keyframes.l31, this.l31, 'inOut');
            this.animate(this.keyframes.l32, this.l32, 'inOut');
            this.animate(this.keyframes.l33, this.l33, 'inOut');
            this.animate(this.keyframes.c31, this.c31, 'inOut');
            this.animate(this.keyframes.c32, this.c32, 'inOut');
            this.animate(this.keyframes.c33, this.c33, 'inOut');
        }
    
    });
    
    
    /* puzzle */
    
    Icon.puzzle = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>puzzle</title> <path id="p1" transform="translate(-43 -30) rotate(-40 101 101)" d="M104.61,74A7.12,7.12,0,0,0,100.89,75V61.32H61.2V101H74.93A7.15,7.15,0,0,1,81,90.1h0a7.17,7.17,0,0,1,7.16,7.17h0A7.13,7.13,0,0,1,87.15,101h13.74V87.28a7.16,7.16,0,0,0,10.9-6.1h0A7.17,7.17,0,0,0,104.63,74h0Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path id="p2" transform="translate(60 -40) rotate(-20 101 101)" d="M101.11,61.32V75A7.16,7.16,0,0,1,112,81.18h0a7.17,7.17,0,0,1-7.17,7.15h0a7.12,7.12,0,0,1-3.72-1.06V101h13.73a7.17,7.17,0,0,1,6.1-10.9h0a7.15,7.15,0,0,1,6.12,10.9h13.72V61.32H101.11Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path id="p3" transform="translate(-60 20) rotate(-105 101 101)" d="M104.61,113.68a7.13,7.13,0,0,0-3.72,1.06V101H87.16A7.15,7.15,0,0,0,81,90.1h0a7.17,7.17,0,0,0-7.17,7.17h0A7.12,7.12,0,0,0,74.93,101H61.2v39.68h39.69V127a7.15,7.15,0,0,0,10.9-6.11h0a7.17,7.17,0,0,0-7.17-7.16h0Z" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path id="p4" transform="translate(40 -10) rotate(35 101 101)" d="M126.84,101a7.15,7.15,0,0,0-6.11-10.9h0a7.17,7.17,0,0,0-7.17,7.17h0a7.12,7.12,0,0,0,1.06,3.72H100.89v13.72a7.15,7.15,0,0,1,10.9,6.11h0a7.17,7.17,0,0,1-7.17,7.17h0a7.13,7.13,0,0,1-3.72-1.06v13.73h39.68V101H126.84Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>',
    
        keyframes: {
            p1: {
                '0': {a: 0, x: 0, y: 0},
                '600': {a: -40, x: -43, y: -30},
                '1000': {a: -40, x: -43, y: -30},
                '1200': {a: -40, x: -43, y: -30},
                '2000': {a: 0, x: 0, y: 0},
                '3000': {a: 0, x: 0, y: 0}
            },
            p2: {
                '0': {a: 0, x: 0, y: 0},
                '600': {a: -20, x: 60, y: -40},
                '1000': {a: -20, x: 60, y: -40},
                '1800': {a: 0, x: 0, y: 0},
                '3000': {a: 0, x: 0, y: 0}
            },
            p3: {
                '0': {a: 0, x: 0, y: 0},
                '600': {a: -105, x: -60, y: 30},
                '1000': {a: -105, x: -60, y: 30},
                '1400': {a: -105, x: -60, y: 30},
                '2200': {a: 0, x: 0, y: 0},
                '3000': {a: 0, x: 0, y: 0}
            },
            p4: {
                '0': {a: 0, x: 0, y: 0},
                '600': {a: 35, x: 40, y: -10},
                '1000': {a: 35, x: 40, y: -10},
                '1400': {a: 35, x: 40, y: -10},
                '2200': {a: 0, x: 0, y: 0},
                '3000': {a: 0, x: 0, y: 0}
            }
        },
    
        p1: function(data) {
            this.$p1.setAttribute('transform', 'translate(' + data.x + ' ' + data.y + ') rotate(' + data.a + ' 101 101)')
        },
    
        p2: function(data) {
            this.$p2.setAttribute('transform', 'translate(' + data.x + ' ' + data.y + ') rotate(' + data.a + ' 101 101)')
        },
    
        p3: function(data) {
            this.$p3.setAttribute('transform', 'translate(' + data.x + ' ' + data.y + ') rotate(' + data.a + ' 101 101)')
        },
    
        p4: function(data) {
            this.$p4.setAttribute('transform', 'translate(' + data.x + ' ' + data.y + ') rotate(' + data.a + ' 101 101)')
        },
    
        init: function () {
            this.$p1 = this.$root.querySelector('#p1');
            this.$p2 = this.$root.querySelector('#p2');
            this.$p3 = this.$root.querySelector('#p3');
            this.$p4 = this.$root.querySelector('#p4');
            this.animate(this.keyframes.p1, this.p1, 'inOut');
            this.animate(this.keyframes.p2, this.p2, 'inOut');
            this.animate(this.keyframes.p3, this.p3, 'inOut');
            this.animate(this.keyframes.p4, this.p4, 'inOut');
        }
    
    });
    
    
    /* time */
    
    Icon.time = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>time</title> <defs> <clipPath id="clip"> <path d="M89.9,139.82L106,152.05a8.69,8.69,0,0,1,2.74,2.06c0.46,0.7.7,2.2,0.7,4.52V173H55.07V158.92a7.61,7.61,0,0,1,3.84-7.14c1.27-.88,8.48-7.63,15.68-11.95a3.36,3.36,0,0,0,1.63-2.88v-8.58a3.35,3.35,0,0,0-1.61-2.87l-16.1-12.23a8.63,8.63,0,0,1-2.74-2.06c-0.46-.7-0.7-2.2-0.7-4.52V90h54.37v16.4a7.61,7.61,0,0,1-3.84,7.14c-1.27.88-8.48,7.63-15.68,11.95a3.36,3.36,0,0,0-1.63,2.88v8.58A3.37,3.37,0,0,0,89.9,139.82Z"/> </clipPath> </defs> <path id="spin" d="M152.18,94.38h0a5,5,0,0,1-3-5.16,35.65,35.65,0,0,0,.06-7.9,5,5,0,0,1,3.12-5.1h0a5,5,0,0,0,2.81-6.55h0L154.05,67a5,5,0,0,0-6.55-2.81h0a5,5,0,0,1-5.8-1.48,35.7,35.7,0,0,0-5.54-5.6,5,5,0,0,1-1.4-5.82h0a5,5,0,0,0-2.67-6.6l-2.6-1.1a5,5,0,0,0-6.6,2.67h0a5,5,0,0,1-5.16,3,35.7,35.7,0,0,0-7.9-.06,5,5,0,0,1-5.1-3.12h0a5,5,0,0,0-6.55-2.81h0l-2.62,1.06A5,5,0,0,0,92.72,51h0a5,5,0,0,1-1.48,5.8c-0.44.35-.87,0.7-1.29,1.07h0a35.7,35.7,0,0,0-4.37,4.51,4.9,4.9,0,0,1-.57.59,5,5,0,0,1-5.21.78h0a5.07,5.07,0,0,0-6.65,2.69L72,69a5,5,0,0,0,2.67,6.61h0a5,5,0,0,1,3,5.16,35.65,35.65,0,0,0-.06,7.9,5,5,0,0,1-3.12,5.1h0a5,5,0,0,0-2.81,6.55h0L72.84,103a5,5,0,0,0,6.55,2.81h0a5,5,0,0,1,5.8,1.48,35.7,35.7,0,0,0,5.54,5.6,5,5,0,0,1,1.4,5.82h0a5,5,0,0,0,2.67,6.6l2.6,1.1a5,5,0,0,0,6.6-2.67h0a5,5,0,0,1,5.16-3,35.7,35.7,0,0,0,7.9.06,5,5,0,0,1,5.1,3.12h0a5,5,0,0,0,6.55,2.81h0l2.62-1.06a5,5,0,0,0,2.81-6.55h0a5,5,0,0,1,1.48-5.8c0.44-.35.88-0.7,1.29-1.07h0a35.7,35.7,0,0,0,4.38-4.51,4.9,4.9,0,0,1,.57-0.59,5,5,0,0,1,5.21-.78h0a5.07,5.07,0,0,0,6.65-2.69l1.1-2.6a5,5,0,0,0-2.67-6.61h0Zm-31.11,9.43A19.85,19.85,0,1,1,132,78a19.85,19.85,0,0,1-10.94,25.84h0Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <g id="rotate"> <g id="time"> <path d="M89.9,139.82L106,152.05a8.69,8.69,0,0,1,2.74,2.06c0.46,0.7.7,2.2,0.7,4.52V173H55.07V158.92a7.61,7.61,0,0,1,3.84-7.14c1.27-.88,8.48-7.63,15.68-11.95a3.36,3.36,0,0,0,1.63-2.88v-8.58a3.35,3.35,0,0,0-1.61-2.87l-16.1-12.23a8.63,8.63,0,0,1-2.74-2.06c-0.46-.7-0.7-2.2-0.7-4.52V90h54.37v16.4a7.61,7.61,0,0,1-3.84,7.14c-1.27.88-8.48,7.63-15.68,11.95a3.36,3.36,0,0,0-1.63,2.88v8.58A3.37,3.37,0,0,0,89.9,139.82Z" fill="#fff"/> <g clip-path="url(#clip)"> <path id="p1" d="M55.89,164.23a1.54,1.54,0,0,0-.78,1.53v6.3a0.85,0.85,0,0,0,.75.93h52.41a0.85,0.85,0,0,0,1-.93v-6.3a1.55,1.55,0,0,0-.78-1.53c-3.55-2.65-19.33-10.17-26.27-10.17S59.43,161.58,55.89,164.23Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path id="p2" d="M108.49,98.83a1.54,1.54,0,0,0,.78-1.53V91a0.85,0.85,0,0,0-.75-0.93H56.11a0.85,0.85,0,0,0-1,.93v6.3a1.55,1.55,0,0,0,.78,1.53C59.44,101.48,75.22,109,82.16,109S104.95,101.48,108.49,98.83Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <path d="M89.9,139.82L106,152.05a8.69,8.69,0,0,1,2.74,2.06c0.46,0.7.7,2.2,0.7,4.52V173H55.07V158.92a7.61,7.61,0,0,1,3.84-7.14c1.27-.88,8.48-7.63,15.68-11.95a3.36,3.36,0,0,0,1.63-2.88v-8.58a3.35,3.35,0,0,0-1.61-2.87l-16.1-12.23a8.63,8.63,0,0,1-2.74-2.06c-0.46-.7-0.7-2.2-0.7-4.52V90h54.37v16.4a7.61,7.61,0,0,1-3.84,7.14c-1.27.88-8.48,7.63-15.68,11.95a3.36,3.36,0,0,0-1.63,2.88v8.58A3.37,3.37,0,0,0,89.9,139.82Z" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M50.08,80H115a3.54,3.54,0,0,1,3.54,3.54v2.89A3.53,3.53,0,0,1,115,90H50.08a3.54,3.54,0,0,1-3.54-3.54V83.57A3.54,3.54,0,0,1,50.08,80Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect x="46.55" y="173.04" width="71.99" height="9.96" rx="3.54" ry="3.54" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> </g></svg>',
    
        keyframes: {
            time: {
                '0': {y: 0},
                '400': {y: 10},
                '1200': {y: -70},
                '2000': {y: -140},
                '3000': {y: -140}
            },
            rotate: {
                '0': {a: 0},
                '800': {a: 0},
                '1600': {a: 180},
                '3000': {a: 180}
            },
            spin: {
                '0': {a: 0},
                '3000': {a: 360}
            },
            p1: {
                '0': {y: 0, a: 1},
                '800': {y: 0, a: 1},
                '1200': {y: -26.6, a: 1},
                '1400': {y: -40, a: 0},
                '3000': {y: -40, a: 0}
            },
            p2: {
                '0': {y: 40, a: 0},
                '1000': {y: 40, a: 0},
                '1200': {y: 26.6, a: 1},
                '1600': {y: 0, a: 1},
                '3000': {y: 0, a: 1}
            }
        },
    
        time: function(data) {
            this.$time.setAttribute('transform', 'translate(0 ' + data.y + ')');
        },
    
        rotate: function(data) {
            this.$rotate.setAttribute('transform', 'rotate(' + data.a + ' 82.54 61.5)');
        },
    
        spin: function(data) {
            this.$spin.setAttribute('transform', 'rotate(' + data.a + ' 113.42 85)');
        },
    
        p1: function(data) {
            this.$p1.setAttribute('transform', 'translate(0 ' + data.y + ')');
            this.$p1.setAttribute('opacity', data.a);
        },
    
        p2: function(data) {
            this.$p2.setAttribute('transform', 'translate(0 ' + data.y + ')');
            this.$p2.setAttribute('opacity', data.a);
        },
    
        init: function() {
            this.$time = this.$root.querySelector('#time');
            this.$rotate = this.$root.querySelector('#rotate');
            this.$spin = this.$root.querySelector('#spin');
            this.$p1 = this.$root.querySelector('#p1');
            this.$p2 = this.$root.querySelector('#p2');
            this.animate(this.keyframes.time, this.time, 'inOut');
            this.animate(this.keyframes.rotate, this.rotate, 'inOut');
            this.animate(this.keyframes.spin, this.spin, 'linear');
            this.animate(this.keyframes.p1, this.p1, 'linear');
            this.animate(this.keyframes.p2, this.p2, 'linear');
        }
    
    });
    
    
    /* notebook */
    
    Icon.notebook = create({
    
        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 202 202"> <title>notebook</title> <path d="M194.15,193.83H7.85A6.85,6.85,0,0,1,1,187H1v-3.72H201V187a6.85,6.85,0,0,1-6.85,6.85h0Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M73.08,183.26H124.4a5.66,5.66,0,0,1-5.66,5.66h-40a5.66,5.66,0,0,1-5.66-5.66h0Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M187.62,183.27H17.4V78.83a6.51,6.51,0,0,1,6.51-6.51H181.12a6.51,6.51,0,0,1,6.51,6.51V183.27h0Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect x="26.68" y="82.34" width="151.65" height="90.91" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path id="spin" d="M102.51,100.55v23.52a3.71,3.71,0,0,1,3.71,3.71h23.52A27.24,27.24,0,0,0,102.51,100.55Z" fill="#e0f0ff" stroke="none"/> <path d="M102.51,155A27.24,27.24,0,0,1,75.27,127.8h0a27.24,27.24,0,0,1,27.24-27.24h0a27.24,27.24,0,0,1,27.24,27.24h0A27.24,27.24,0,0,1,102.51,155h0Zm0-59.43a32.19,32.19,0,1,0,32.19,32.19,32.19,32.19,0,0,0-32.19-32.19v0Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M102.51,144.63a16.81,16.81,0,0,1,0-33.61h0a16.81,16.81,0,0,1,0,33.61h0Z" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="c1" cx="120.96" cy="117.66" r="1.61" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="c2" cx="108.95" cy="148.37" r="1.61" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="c3" cx="82.39" cy="136.01" r="1.07" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="c4" cx="95.9" cy="121.14" r="2.15" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle cx="102.51" cy="127.8" r="5.02" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="75.27" y1="127.8" x2="97.49" y2="127.8" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="102.51" y1="132.93" x2="102.51" y2="155" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="107.53" y1="127.8" x2="129.74" y2="127.8" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="102.51" y1="100.55" x2="102.51" y2="122.78" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polyline id="l1" points="70.32 127.8 70.32 65.38 40.61 65.38 40.61 50.76" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="107"/> <line id="l2" x1="102.51" y1="88.96" x2="102.51" y2="50.76" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="39"/> <polyline id="l3" points="134.57 127.8 134.57 65.38 164.28 65.38 164.28 50.76" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke-dasharray="107"/> <g id="s1"> <path d="M20.41,8.82a0.65,0.65,0,0,1,.65-0.65H33.83l4.44,6.22h19.9a0.65,0.65,0,0,1,.65.65v5.58L20.41,42.3V8.82h0Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path id="f1" d="M55.17,41.92a0.5,0.5,0,0,1-.48.37H20.93a0.49,0.49,0,0,1-.4-0.2,0.48,0.48,0,0,1-.11-0.36l8.16-20.39A0.5,0.5,0,0,1,29.06,21H62.82a0.69,0.69,0,0,1,.45.73Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <g id="s2"> <path d="M83.41,8.82a0.65,0.65,0,0,1,.65-0.65H96.83l4.44,6.22h19.9a0.65,0.65,0,0,1,.65.65v5.58L83.41,42.3V8.82h0Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path id="f2" d="M118.17,41.92a0.5,0.5,0,0,1-.48.37H83.93a0.49,0.49,0,0,1-.4-0.2,0.48,0.48,0,0,1-.11-0.36l8.16-20.39A0.5,0.5,0,0,1,92.06,21h33.76a0.69,0.69,0,0,1,.45.73Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <g id="s3"> <path d="M144.76,8.82a0.65,0.65,0,0,1,.65-0.65h12.77l4.44,6.22h19.9a0.65,0.65,0,0,1,.65.65v5.58L144.76,42.3V8.82h0Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path id="f3" d="M179.51,41.92a0.5,0.5,0,0,1-.48.37H145.27a0.49,0.49,0,0,1-.4-0.2,0.48,0.48,0,0,1-.11-0.36l8.16-20.39A0.5,0.5,0,0,1,153.4,21h33.76a0.69,0.69,0,0,1,.45.73Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g></svg>',
    
        keyframes: {
            s1: {
                '0': {s: 1},
                '500': {s: 1.3},
                '1000': {s: 1},
                '4000': {s: 1}
            },
            s2: {
                '0': {s: 1},
                '250': {s: 1},
                '750': {s: 1.3},
                '1250': {s: 1},
                '4000': {s: 1}
            },
            s3: {
                '0': {s: 1},
                '500': {s: 1},
                '1000': {s: 1.3},
                '1500': {s: 1},
                '4000': {s: 1}
            },
            f1: {
                '0': {s: 1},
                '300': {s: 1.2},
                '600': {s: 0.7},
                '900': {s: 1},
                '4000': {s: 1}
            },
            f2: {
                '0': {s: 1},
                '250': {s: 1},
                '550': {s: 1.2},
                '850': {s: 0.7},
                '1150': {s: 1},
                '4000': {s: 1}
            },
            f3: {
                '0': {s: 1},
                '500': {s: 1},
                '800': {s: 1.2},
                '1100': {s: 0.7},
                '1400': {s: 1},
                '4000': {s: 1}
            },
            l1: {
                '0': {t: -107},
                '800': {t: 0},
                '4000': {t: 0}
            },
            l2: {
                '0': {t: -39},
                '250': {t: -39},
                '1050': {t: 0},
                '4000': {t: 0}
            },
            l3: {
                '0': {t: -107},
                '500': {t: -107},
                '1300': {t: 0},
                '4000': {t: 0}
            },
            c1: {
                '0': {s: 0},
                '1300': {s: 0},
                '1400': {s: 1},
                '2000': {s: 0},
                '3800': {s: 0},
                '4000': {s: 1}
            },
            c2: {
                '0': {s: 0},
                '1800': {s: 0},
                '2200': {s: 1},
                '2600': {s: 0},
                '4000': {s: 0}
            },
            c3: {
                '0': {s: 0},
                '2400': {s: 0},
                '2800': {s: 1},
                '3200': {s: 0},
                '4000': {s: 0}
            },
            c4: {
                '0': {s: 0},
                '2800': {s: 0},
                '3200': {s: 1},
                '3600': {s: 0},
                '4000': {s: 0}
            },
            spin: {
                '0': {a: 0},
                '1300': {a: 0},
                '4000': {a: 360}
            }
        },
    
        s1: function(data) {
            this.$s1.setAttribute('transform', 'translate(41.84 25.23) scale(' + data.s + ') translate(-41.84 -25.23)');
        },
    
        s2: function(data) {
            this.$s2.setAttribute('transform', 'translate(104.84 25.23) scale(' + data.s + ') translate(-104.84 -25.23)');
        },
    
        s3: function(data) {
            this.$s3.setAttribute('transform', 'translate(166.19 25.23) scale(' + data.s + ') translate(-166.19 -25.23)');
        },
    
        f1: function(data) {
            this.$f1.setAttribute('transform', 'translate(0 42.29) scale(1 ' + data.s + ') translate(0 -42.29)');
        },
    
        f2: function(data) {
            this.$f2.setAttribute('transform', 'translate(0 42.29) scale(1 ' + data.s + ') translate(0 -42.29)');
        },
    
        f3: function(data) {
            this.$f3.setAttribute('transform', 'translate(0 42.29) scale(1 ' + data.s + ') translate(0 -42.29)');
        },
    
        l1: function(data) {
            this.$l1.setAttribute('stroke-dashoffset', data.t);
        },
    
        l2: function(data) {
            this.$l2.setAttribute('stroke-dashoffset', data.t);
        },
    
        l3: function(data) {
            this.$l3.setAttribute('stroke-dashoffset', data.t);
        },
    
        c1: function(data) {
            this.$c1.setAttribute('transform', 'translate(120.96 117.65) scale(' + data.s + ') translate(-120.96 -117.65)');
        },
    
        c2: function(data) {
            this.$c2.setAttribute('transform', 'translate(108.95 148.36) scale(' + data.s + ') translate(-108.95 -148.36)');
        },
    
        c3: function(data) {
            this.$c3.setAttribute('transform', 'translate(82.39 136) scale(' + data.s + ') translate(-82.39 -136)');
        },
    
        c4: function(data) {
            this.$c4.setAttribute('transform', 'translate(95.9 121.13) scale(' + data.s + ') translate(-95.9 -121.13)');
        },
    
        spin: function(data) {
            this.$spin.setAttribute('opacity', data.a ? 1 : 0);
            this.$spin.setAttribute('transform', 'rotate(' + data.a + ' 102.51 127.8)');
        },
    
        init: function() {
            this.$s1 = this.$root.querySelector('#s1');
            this.$s2 = this.$root.querySelector('#s2');
            this.$s3 = this.$root.querySelector('#s3');
            this.$f1 = this.$root.querySelector('#f1');
            this.$f2 = this.$root.querySelector('#f2');
            this.$f3 = this.$root.querySelector('#f3');
            this.$l1 = this.$root.querySelector('#l1');
            this.$l2 = this.$root.querySelector('#l2');
            this.$l3 = this.$root.querySelector('#l3');
            this.$c1 = this.$root.querySelector('#c1');
            this.$c2 = this.$root.querySelector('#c2');
            this.$c3 = this.$root.querySelector('#c3');
            this.$c4 = this.$root.querySelector('#c4');
            this.$spin = this.$root.querySelector('#spin');
            this.animate(this.keyframes.s1, this.s1, 'inOut');
            this.animate(this.keyframes.s2, this.s2, 'inOut');
            this.animate(this.keyframes.s3, this.s3, 'inOut');
            this.animate(this.keyframes.f1, this.f1, 'inOut');
            this.animate(this.keyframes.f2, this.f2, 'inOut');
            this.animate(this.keyframes.f3, this.f3, 'inOut');
            this.animate(this.keyframes.l1, this.l1, 'inOut');
            this.animate(this.keyframes.l2, this.l2, 'inOut');
            this.animate(this.keyframes.l3, this.l3, 'inOut');
            this.animate(this.keyframes.c1, this.c1, 'inOut');
            this.animate(this.keyframes.c2, this.c2, 'inOut');
            this.animate(this.keyframes.c3, this.c3, 'inOut');
            this.animate(this.keyframes.c4, this.c4, 'inOut');
            this.animate(this.keyframes.spin, this.spin, 'linear');
        }
    
    });

    /* intro */

    Icon.intro = create({

        content: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1142 355.08"> <title>intro</title> <defs> <clipPath id="area"> <rect x="0" y="0" width="1142" height="354"/> </clipPath> <clipPath id="board-area"> <rect x="896.33" y="144.08" width="196.65" height="142.09"/> </clipPath> <clipPath id="screen-area"> <rect x="509.81" y="193.77" width="63" height="95.54"/> </clipPath> <clipPath id="window-area"> <rect x="155.53" y="207.73" width="127.7" height="76.75"/> </clipPath> <clipPath id="loupe-area"> <circle id="loupe-area-circle" cx="369.84" cy="164.97" r="32.6"/> </clipPath> </defs> <g clip-path="url(#area)"> <g id="wheel" transform="rotate(0 557.6 212.3)"> <path d="M401.57,245.95a20.14,20.14,0,0,0-11.11,26.21l4.24,10.45a20.14,20.14,0,0,0,26.23,11.1,19.94,19.94,0,0,1,23.2,6,142.6,142.6,0,0,0,22.11,22.48,20,20,0,0,1,5.64,23.28,20,20,0,0,0-1.56,8.67,30.44,30.44,0,0,0,10.35,17.27c7.11,5.76,18.23,9.06,27,5.33,11.07-4.71,10.58-17.31,23-21.67a24.21,24.21,0,0,1,11.33-1c2.45,0.32,5.12.57,8,.67,2,0.07,3.88.06,5.67,0l9.61-.61c2.1-.12,4.2-0.28,6.3-0.5a19.23,19.23,0,0,1,6.73.5,22.86,22.86,0,0,1,6,2.94c7.67,5.29,7.24,12.22,11.67,17,7.67,8.27,28.35,8.37,38.67-3,5.5-6.06,6.38-13.53,6.55-16.94-0.52-1.71-.26-4.48-1.46-7.38a19.94,19.94,0,0,1,5.94-23.16c1.77-1.39,3.49-2.83,5.18-4.29a142.66,142.66,0,0,0,17.49-18,19.44,19.44,0,0,1,2.26-2.35,20.06,20.06,0,0,1,20.85-3.15A20.41,20.41,0,0,0,718.12,285l4.4-10.39a20.14,20.14,0,0,0-10.7-26.4h0a20,20,0,0,1-12.16-20.64A142.53,142.53,0,0,0,699.9,196a19.94,19.94,0,0,1,12.49-20.39,20.14,20.14,0,0,0,11.1-26.23l-4.24-10.45A20.14,20.14,0,0,0,693,127.76l0,0a19.94,19.94,0,0,1-23.16-5.94,142.6,142.6,0,0,0-22.16-22.51,20,20,0,0,1-5.61-23.25,20.14,20.14,0,0,0-10.7-26.4h0L621,45.25a20.14,20.14,0,0,0-26.4,10.7h0a20,20,0,0,1-20.66,12.13,142.62,142.62,0,0,0-31.58-.24A19.94,19.94,0,0,1,522,55.38a20.14,20.14,0,0,0-26.23-11.1l-10.45,4.24a20.14,20.14,0,0,0-11.15,26.21h0a19.94,19.94,0,0,1-5.94,23.16c-1.77,1.39-3.49,2.83-5.18,4.29a142.63,142.63,0,0,0-17.49,18,19.51,19.51,0,0,1-2.26,2.35,20.06,20.06,0,0,1-20.85,3.15,20.41,20.41,0,0,0-26.58,10.84l-4.4,10.39a20.14,20.14,0,0,0,10.7,26.4h0a20,20,0,0,1,12.16,20.64,142.52,142.52,0,0,0-.24,31.58A19.94,19.94,0,0,1,401.57,245.95Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle cx="557.6" cy="212.35" r="92.16" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M546.77,91a120.35,120.35,0,0,1,102.37,42.58" fill="none" stroke="#c2dff6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M711.26,249.44a21.61,21.61,0,0,1-11.75-12.19A20,20,0,0,0,711.79,255h0a20.06,20.06,0,0,1,10.91,11.26A18.8,18.8,0,0,0,711.26,249.44Z" fill="#fff" opacity="0.7" style="isolation: isolate"/> <path d="M718,139.39A18.76,18.76,0,0,0,693.58,129h0a21.64,21.64,0,0,1-8.16,1.59,20.94,20.94,0,0,1-16.59-8,141.5,141.5,0,0,0-21.94-22.29,20.83,20.83,0,0,1-6.36-8.92,19.7,19.7,0,0,0,7.22,14.7,142.6,142.6,0,0,1,22.16,22.51,19.94,19.94,0,0,0,23.09,6h0a20.14,20.14,0,0,1,26.24,11.08h0l4.23,10.42,0.1,0.26a18.68,18.68,0,0,0-1.37-6.59Z" fill="#fff" opacity="0.7" style="isolation: isolate"/> <path d="M469,99c-1.62,1.27-3.3,2.66-5.13,4.25l-0.71.62h0a141.7,141.7,0,0,0-16.57,17.23,20.9,20.9,0,0,1-2.42,2.51,21.25,21.25,0,0,1-13.85,5.09A21.51,21.51,0,0,1,422,127h-0.11a18.65,18.65,0,0,0-7.31-1.49,19.17,19.17,0,0,0-17.48,11.61l-4.4,10.39a18.67,18.67,0,0,0-1.47,6.86l0.21-.55,4.4-10.39a20.41,20.41,0,0,1,26.58-10.84h0a20.06,20.06,0,0,0,20.85-3.15,19.5,19.5,0,0,0,2.26-2.35,142.63,142.63,0,0,1,17.48-18h0c1.69-1.46,3.41-2.9,5.18-4.29A19.61,19.61,0,0,0,475.59,90,20.71,20.71,0,0,1,469,99Z" fill="#fff" opacity="0.7" style="isolation: isolate"/> <path d="M485.24,55.36l10.46-4.2a20.14,20.14,0,0,1,26.24,11.08h0a19.94,19.94,0,0,0,20.39,12.49,142.61,142.61,0,0,1,31.58.24,20,20,0,0,0,20.64-12.16h0a20.14,20.14,0,0,1,26.38-10.75h0l10.39,4.4a20.06,20.06,0,0,1,10.92,11.29A18.8,18.8,0,0,0,630.8,50.95l-10.39-4.4a18.76,18.76,0,0,0-24.58,10v0h0a21.32,21.32,0,0,1-19.6,13.14,20.85,20.85,0,0,1-2.46-.15,142,142,0,0,0-31.28-.23,20.73,20.73,0,0,1-2.13.11A21.5,21.5,0,0,1,520.69,56a18.76,18.76,0,0,0-24.42-10.36h0l-10.45,4.24a18.8,18.8,0,0,0-11.72,17A20.07,20.07,0,0,1,485.24,55.36Z" fill="#fff" opacity="0.7" style="isolation: isolate"/> </g> </g> <g clip-path="url(#area)"> <g id="shield"> <path d="M806.62,354.08h98.52a168.28,168.28,0,0,0,64.49-132.24,166.42,166.42,0,0,0-17.1-73.79L951,145a6.87,6.87,0,0,0-9.06-3.21l-3.1,1.44a77.51,77.51,0,0,1-77-7l-6-4.23-6,4.23a77.45,77.45,0,0,1-77,7l-3.09-1.43a6.87,6.87,0,0,0-9.06,3.22l-1.5,3.07a166.32,166.32,0,0,0-17.1,73.79A168.28,168.28,0,0,0,806.62,354.08Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M786.69,180.28a122.88,122.88,0,0,0-9.31,47.18,124.17,124.17,0,0,0,78.47,115.36A124.18,124.18,0,0,0,934.3,227.46,122.68,122.68,0,0,0,925,180.28a83,83,0,0,1-69.15-7.51A82.91,82.91,0,0,1,786.69,180.28Z" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M949.74,145.57a5.5,5.5,0,0,0-7.26-2.57l-3.1,1.44A78.85,78.85,0,0,1,861,137.27l-5.2-3.67-5.2,3.67a78.81,78.81,0,0,1-78.35,7.17L769.18,143a5.5,5.5,0,0,0-7.26,2.58l-1.5,3.07a165.26,165.26,0,0,0-14.28,43.29,166.9,166.9,0,0,1,13-37.06l1.5-3.07a6.87,6.87,0,0,1,9.06-3.22l3.09,1.43a77.45,77.45,0,0,0,77-7l6-4.23,6,4.23a77.51,77.51,0,0,0,77,7l3.1-1.44A6.87,6.87,0,0,1,951,151.8l1.51,3.08A167.13,167.13,0,0,1,965.51,192a165.46,165.46,0,0,0-14.28-43.35Z" fill="#fff" opacity="0.7" style="isolation: isolate"/> </g> </g> <g id="screen"> <rect x="379.48" y="167.31" width="193.33" height="156.76" rx="10.94" ry="10.94" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M379.47,299.24v17.33a7.49,7.49,0,0,0,7.49,7.49H565.32a7.49,7.49,0,0,0,7.49-7.49V299.24H379.47Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect x="388.92" y="194" width="120.89" height="95.31" rx="2" ry="2" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect x="388.92" y="194" width="120.89" height="8.61" rx="2" ry="2" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect x="388.92" y="177.77" width="174.81" height="9.24" rx="2" ry="2" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <g clip-path="url(#screen-area)"> <g id="screen-feed" transform="translate(0 0)"> <g> <rect x="515.84" y="193.77" width="47.56" height="38.7" rx="2" ry="2" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="541.22" y1="242.73" x2="555.21" y2="242.73" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="541.1" y1="251.13" x2="557.67" y2="251.13" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="541.1" y1="259.53" x2="551.09" y2="259.53" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="515.11" y1="267.93" x2="556.96" y2="267.93" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M515.84,259.53v-2.29a1.66,1.66,0,0,1,.76-1.52c2.14-1.42,6.06-1.52,6.06-3.79,0-1.52-1.52-2.27-1.52-5.31v-0.76a3.8,3.8,0,0,1,7.6,0v0.76c0,3-1.52,3.79-1.52,5.31,0,2.27,3.92,2.37,6.06,3.79a1.65,1.65,0,0,1,.75,1.52v2.29H515.84Z" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <g transform="translate(0 84)"> <rect x="515.84" y="193.77" width="47.56" height="38.7" rx="2" ry="2" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line transform="translate(-20 0)" x1="541.22" y1="242.73" x2="555.21" y2="242.73" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line transform="translate(-22 0)" x1="541.1" y1="251.13" x2="557.67" y2="251.13" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line transform="translate(-16 0)" x1="541.1" y1="259.53" x2="551.09" y2="259.53" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line transform="translate(5 0)" x1="515.11" y1="267.93" x2="556.96" y2="267.93" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path transform="translate(27 0)" d="M515.84,259.53v-2.29a1.66,1.66,0,0,1,.76-1.52c2.14-1.42,6.06-1.52,6.06-3.79,0-1.52-1.52-2.27-1.52-5.31v-0.76a3.8,3.8,0,0,1,7.6,0v0.76c0,3-1.52,3.79-1.52,5.31,0,2.27,3.92,2.37,6.06,3.79a1.65,1.65,0,0,1,.75,1.52v2.29H515.84Z" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <g transform="translate(0 168)"> <rect x="515.84" y="193.77" width="47.56" height="38.7" rx="2" ry="2" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="541.22" y1="242.73" x2="555.21" y2="242.73" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="541.1" y1="251.13" x2="557.67" y2="251.13" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="541.1" y1="259.53" x2="551.09" y2="259.53" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="515.11" y1="267.93" x2="556.96" y2="267.93" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M515.84,259.53v-2.29a1.66,1.66,0,0,1,.76-1.52c2.14-1.42,6.06-1.52,6.06-3.79,0-1.52-1.52-2.27-1.52-5.31v-0.76a3.8,3.8,0,0,1,7.6,0v0.76c0,3-1.52,3.79-1.52,5.31,0,2.27,3.92,2.37,6.06,3.79a1.65,1.65,0,0,1,.75,1.52v2.29H515.84Z" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <g transform="translate(0 252)"> <rect x="515.84" y="193.77" width="47.56" height="38.7" rx="2" ry="2" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="541.22" y1="242.73" x2="555.21" y2="242.73" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="541.1" y1="251.13" x2="557.67" y2="251.13" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="541.1" y1="259.53" x2="551.09" y2="259.53" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="515.11" y1="267.93" x2="556.96" y2="267.93" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M515.84,259.53v-2.29a1.66,1.66,0,0,1,.76-1.52c2.14-1.42,6.06-1.52,6.06-3.79,0-1.52-1.52-2.27-1.52-5.31v-0.76a3.8,3.8,0,0,1,7.6,0v0.76c0,3-1.52,3.79-1.52,5.31,0,2.27,3.92,2.37,6.06,3.79a1.65,1.65,0,0,1,.75,1.52v2.29H515.84Z" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> </g> </g> <rect x="514.84" y="193.77" width="48.56" height="2" rx="1" ry="1" fill="#2e9afe"/> <rect x="514.84" y="288" width="48.56" height="2" rx="1" ry="1" fill="#2e9afe"/> <polyline id="screen-line" points="401.98 277.39 431.4 251.13 470.74 271.42 495.89 219.38" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="screen-c1" cx="495.89" cy="219.38" r="5.13" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="screen-c2" cx="470.74" cy="271.42" r="5.13" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="screen-c3" cx="431.4" cy="251.13" r="5.13" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle id="screen-c4" cx="401.98" cy="277.39" r="5.13" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect x="446.75" y="324.06" width="58.78" height="25.15" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M435.77,349.22h80.74a4.37,4.37,0,0,1,4.37,4.37v0.13H431.4v-0.13A4.37,4.37,0,0,1,435.77,349.22Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <g id="cloud"> <path id="cloud-path" d="M 715.34 26.64 A 1 1 0 0 1 732.25 15.34 A 1 1 0 0 1 766.14 21.08 A 1 1 0 0 1 748.33 54.42 A 1 1 0 0 1 728.46 54.64 A 1 1 0 0 1 715.34 26.64" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path id="cloud-shadow-1" d="M777.49,38.84a17.78,17.78,0,0,0-11.85-16.48,1.37,1.37,0,0,1-.91-1.25A16.08,16.08,0,0,0,748.58,5.4a16.25,16.25,0,0,0-15.1,10.43,1.37,1.37,0,0,1-1.77.78l-0.23-.11a9.75,9.75,0,0,0-15,8.26A8.54,8.54,0,0,0,716.6,26a11.1,11.1,0,0,1,15.14-4.15l0.48,0.29a17.52,17.52,0,0,1,33.89,5.74A19.19,19.19,0,0,1,777.49,38.84Z" fill="#e0f0ff" opacity="0.3" style="isolation: isolate"/> <path id="cloud-shadow-2" d="M715.29,33.48a10.41,10.41,0,0,1,.44-5.55l-0.18.05a14.58,14.58,0,0,0-11.83,14.31v0.38A16,16,0,0,1,715.29,33.48Z" fill="#e0f0ff" opacity="0.3" style="isolation: isolate"/> </g> <g id="check"> <circle cx="374.82" cy="28.72" r="27.72" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polyline id="check-mark" points="361.47 29.51 369.84 37.88 388.16 19.55" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M374.81,7.84a27.71,27.71,0,0,1,26.27,18.89,26.34,26.34,0,0,0-52.53,0A27.71,27.71,0,0,1,374.81,7.84Z" fill="#fff" opacity="0.7" style="isolation: isolate"/> </g> <g> <path d="M252.33,108.2l20.23-35a5.25,5.25,0,0,1,9.1,0l20.23,35a5.25,5.25,0,0,1-4.55,7.88H256.88A5.25,5.25,0,0,1,252.33,108.2Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M280.48,73.85a3.89,3.89,0,0,0-6.73,0l-20.23,35a3.85,3.85,0,0,0,0,3.89l0.07,0.1,19-32.87a5.25,5.25,0,0,1,9.1,0l19,32.87,0.07-.1a3.85,3.85,0,0,0,0-3.89Z" fill="#fff" opacity="0.7" style="isolation: isolate"/> <line x1="277.12" y1="80.24" x2="277.12" y2="98.74" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle cx="277.12" cy="107.16" r="1.88" fill="#2e9afe"/> </g> <g clip-path="url(#area)"> <g id="user"> <rect x="779.31" y="286.97" width="26.03" height="28.54" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M808.49,304s24.75,3.62,28.4,7.42c3.18,3.32,9.8,35.06,11.33,42h-55.9V305.32Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M792.32,205.31c-12.64,0-32.62,7.18-32.62,40.85,0,19.43,6.34,32.17,9.1,35.69,2.54,3.24,8.8,10.15,23.52,10.15s21-6.9,23.52-10.15c2.76-3.52,9.1-16.25,9.1-35.69C824.94,212.49,805,205.31,792.32,205.31Z" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M776.14,304s-24.75,3.62-28.4,7.42c-3.18,3.32-9.8,35.06-11.33,42h55.9V305.32Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M825.24,248.08c0.21-2,.48-3.93.79-5.89,1.44-9.33,4.79-46.66-33.93-46.66-37.53,0-35.44,33.75-33.88,44.3,0.47,3.18.8,6.39,1,9.6l0.95,6s7.92-10.89,8.58-20.24c15.64,0,29.48-2,41.11-11.63,13.76,0,14.54,31.88,14.54,31.88Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polygon points="790.64 310.03 787.35 343.93 792.32 353.3 797.29 343.93 794 310.03 790.64 310.03" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M796.76,309.75l-4.44,4.44-4.44-4.44,4.44-4.44Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="763.69" y1="338.94" x2="780.18" y2="338.94" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="804.47" y1="338.94" x2="820.96" y2="338.94" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polygon points="792.33 305.32 779.11 300.01 775.86 303.31 782.43 317.89 792.33 305.32" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <polygon points="792.33 305.32 805.54 300.01 808.79 303.31 802.22 317.89 792.33 305.32" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M792.14,196.93c-11.51,0-20.18,3.27-25.74,9.73-4.35,5-6.3,11.43-7,17.4,3.24-11.13,11.84-21.65,32.79-21.65s29.51,10.84,32.82,22.3c-0.82-6.17-2.85-12.76-7.28-17.93C812,200.24,803.45,196.93,792.14,196.93Z" fill="#e0f0ff" opacity="0.3" style="isolation: isolate"/> <path id="user-smile" d="M 783.14,277.08 Q 792.36 282.25 801.59 277.08" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> </g> <g id="window"> <path d="M283,237.48v46a2.34,2.34,0,0,1-2.54,2H156.77a2.34,2.34,0,0,1-2.54-2v-92.7a2.34,2.34,0,0,1,2.54-2H280.5a2.34,2.34,0,0,1,2.54,2v46.7h0Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M283,206.78" fill="#fff" stroke="#67939e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M154.23,206.78" fill="#fff" stroke="#67939e" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <g id="window-lock"> <path id="window-spin" transform="rotate(0 268.4 237.91)" d="M252.4,237.91V230.84a8,8,0,0,1,8-8h0a8,8,0,0,1,8,8v7" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect x="246.2" y="237.91" width="28.3" height="19.82" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <path d="M280.5,188.73H156.77a2.34,2.34,0,0,0-2.54,2v16H283v-16A2.34,2.34,0,0,0,280.5,188.73Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle cx="164.03" cy="197.76" r="2.8" fill="#2e9afe"/> <circle cx="173.51" cy="197.76" r="2.8" fill="#2e9afe"/> <circle cx="182.98" cy="197.76" r="2.8" fill="#2e9afe"/> <path d="M156.69,190.06h124a1.16,1.16,0,0,1,1.16,1.16h0v3H155.53v-3a1.16,1.16,0,0,1,1.16-1.16h0Z" fill="#e0f0ff" opacity="0.3" style="isolation: isolate"/> <g clip-path="url(#window-area)"> <g id="window-f1"> <polygon points="233.62 236.49 233.62 238.14 160.16 238.14 160.16 226.46 233.62 226.46 233.62 228.1 233.62 236.49" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path id="window-t1" transform="translate(165, 229.5)" d="M2.38,2.58a3.39,3.39,0,0,0-.19-0.94A3.48,3.48,0,0,1,2,.72,0.78,0.78,0,0,1,2.13.18,0.54,0.54,0,0,1,2.51,0a0.47,0.47,0,0,1,.37.18A0.79,0.79,0,0,1,3,.71a3,3,0,0,1-.18.86,4.56,4.56,0,0,0-.22,1A3.16,3.16,0,0,0,3.32,2,3.44,3.44,0,0,1,4,1.32a0.91,0.91,0,0,1,.5-0.12,0.52,0.52,0,0,1,.38.15A0.5,0.5,0,0,1,5,1.72a0.59,0.59,0,0,1-.23.45,3,3,0,0,1-1.13.4,5,5,0,0,0-.87.27,3.14,3.14,0,0,0,.87.28,2.45,2.45,0,0,1,1.08.38A0.65,0.65,0,0,1,5,4a0.48,0.48,0,0,1-.15.36,0.5,0.5,0,0,1-.36.15,0.93,0.93,0,0,1-.45-0.14,3.06,3.06,0,0,1-.67-0.64,3.63,3.63,0,0,0-.7-0.63,3.24,3.24,0,0,0,.16.85A4.68,4.68,0,0,1,3.1,5a0.68,0.68,0,0,1-.16.46,0.47,0.47,0,0,1-.35.19,0.64,0.64,0,0,1-.46-0.2A0.63,0.63,0,0,1,2,5a2.51,2.51,0,0,1,.16-0.79q0.16-.46.2-0.64a4.32,4.32,0,0,0,.08-0.52,3.77,3.77,0,0,0-.7.59A4,4,0,0,1,1,4.38a0.7,0.7,0,0,1-.37.11,0.55,0.55,0,0,1-.4-0.16A0.48,0.48,0,0,1,.05,4,0.61,0.61,0,0,1,.19,3.62a1,1,0,0,1,.32-0.3A5.34,5.34,0,0,1,1.35,3.1a4.46,4.46,0,0,0,.88-0.27,3.51,3.51,0,0,0-.88-0.29,3.48,3.48,0,0,1-1-.32A0.66,0.66,0,0,1,0,1.67,0.47,0.47,0,0,1,.19,1.33,0.49,0.49,0,0,1,.51,1.19,1,1,0,0,1,1,1.33a2.72,2.72,0,0,1,.63.58A3.35,3.35,0,0,0,2.38,2.58Z" fill="#2e9afe" opacity="0"/> <path id="window-t2" transform="translate(173, 229.5)" d="M2.38,2.58a3.39,3.39,0,0,0-.19-0.94A3.48,3.48,0,0,1,2,.72,0.78,0.78,0,0,1,2.13.18,0.54,0.54,0,0,1,2.51,0a0.47,0.47,0,0,1,.37.18A0.79,0.79,0,0,1,3,.71a3,3,0,0,1-.18.86,4.56,4.56,0,0,0-.22,1A3.16,3.16,0,0,0,3.32,2,3.44,3.44,0,0,1,4,1.32a0.91,0.91,0,0,1,.5-0.12,0.52,0.52,0,0,1,.38.15A0.5,0.5,0,0,1,5,1.72a0.59,0.59,0,0,1-.23.45,3,3,0,0,1-1.13.4,5,5,0,0,0-.87.27,3.14,3.14,0,0,0,.87.28,2.45,2.45,0,0,1,1.08.38A0.65,0.65,0,0,1,5,4a0.48,0.48,0,0,1-.15.36,0.5,0.5,0,0,1-.36.15,0.93,0.93,0,0,1-.45-0.14,3.06,3.06,0,0,1-.67-0.64,3.63,3.63,0,0,0-.7-0.63,3.24,3.24,0,0,0,.16.85A4.68,4.68,0,0,1,3.1,5a0.68,0.68,0,0,1-.16.46,0.47,0.47,0,0,1-.35.19,0.64,0.64,0,0,1-.46-0.2A0.63,0.63,0,0,1,2,5a2.51,2.51,0,0,1,.16-0.79q0.16-.46.2-0.64a4.32,4.32,0,0,0,.08-0.52,3.77,3.77,0,0,0-.7.59A4,4,0,0,1,1,4.38a0.7,0.7,0,0,1-.37.11,0.55,0.55,0,0,1-.4-0.16A0.48,0.48,0,0,1,.05,4,0.61,0.61,0,0,1,.19,3.62a1,1,0,0,1,.32-0.3A5.34,5.34,0,0,1,1.35,3.1a4.46,4.46,0,0,0,.88-0.27,3.51,3.51,0,0,0-.88-0.29,3.48,3.48,0,0,1-1-.32A0.66,0.66,0,0,1,0,1.67,0.47,0.47,0,0,1,.19,1.33,0.49,0.49,0,0,1,.51,1.19,1,1,0,0,1,1,1.33a2.72,2.72,0,0,1,.63.58A3.35,3.35,0,0,0,2.38,2.58Z" fill="#2e9afe" opacity="0"/> <path id="window-t3" transform="translate(181, 229.5)" d="M2.38,2.58a3.39,3.39,0,0,0-.19-0.94A3.48,3.48,0,0,1,2,.72,0.78,0.78,0,0,1,2.13.18,0.54,0.54,0,0,1,2.51,0a0.47,0.47,0,0,1,.37.18A0.79,0.79,0,0,1,3,.71a3,3,0,0,1-.18.86,4.56,4.56,0,0,0-.22,1A3.16,3.16,0,0,0,3.32,2,3.44,3.44,0,0,1,4,1.32a0.91,0.91,0,0,1,.5-0.12,0.52,0.52,0,0,1,.38.15A0.5,0.5,0,0,1,5,1.72a0.59,0.59,0,0,1-.23.45,3,3,0,0,1-1.13.4,5,5,0,0,0-.87.27,3.14,3.14,0,0,0,.87.28,2.45,2.45,0,0,1,1.08.38A0.65,0.65,0,0,1,5,4a0.48,0.48,0,0,1-.15.36,0.5,0.5,0,0,1-.36.15,0.93,0.93,0,0,1-.45-0.14,3.06,3.06,0,0,1-.67-0.64,3.63,3.63,0,0,0-.7-0.63,3.24,3.24,0,0,0,.16.85A4.68,4.68,0,0,1,3.1,5a0.68,0.68,0,0,1-.16.46,0.47,0.47,0,0,1-.35.19,0.64,0.64,0,0,1-.46-0.2A0.63,0.63,0,0,1,2,5a2.51,2.51,0,0,1,.16-0.79q0.16-.46.2-0.64a4.32,4.32,0,0,0,.08-0.52,3.77,3.77,0,0,0-.7.59A4,4,0,0,1,1,4.38a0.7,0.7,0,0,1-.37.11,0.55,0.55,0,0,1-.4-0.16A0.48,0.48,0,0,1,.05,4,0.61,0.61,0,0,1,.19,3.62a1,1,0,0,1,.32-0.3A5.34,5.34,0,0,1,1.35,3.1a4.46,4.46,0,0,0,.88-0.27,3.51,3.51,0,0,0-.88-0.29,3.48,3.48,0,0,1-1-.32A0.66,0.66,0,0,1,0,1.67,0.47,0.47,0,0,1,.19,1.33,0.49,0.49,0,0,1,.51,1.19,1,1,0,0,1,1,1.33a2.72,2.72,0,0,1,.63.58A3.35,3.35,0,0,0,2.38,2.58Z" fill="#2e9afe" opacity="0"/> <path id="window-t4" transform="translate(189, 229.5)" d="M2.38,2.58a3.39,3.39,0,0,0-.19-0.94A3.48,3.48,0,0,1,2,.72,0.78,0.78,0,0,1,2.13.18,0.54,0.54,0,0,1,2.51,0a0.47,0.47,0,0,1,.37.18A0.79,0.79,0,0,1,3,.71a3,3,0,0,1-.18.86,4.56,4.56,0,0,0-.22,1A3.16,3.16,0,0,0,3.32,2,3.44,3.44,0,0,1,4,1.32a0.91,0.91,0,0,1,.5-0.12,0.52,0.52,0,0,1,.38.15A0.5,0.5,0,0,1,5,1.72a0.59,0.59,0,0,1-.23.45,3,3,0,0,1-1.13.4,5,5,0,0,0-.87.27,3.14,3.14,0,0,0,.87.28,2.45,2.45,0,0,1,1.08.38A0.65,0.65,0,0,1,5,4a0.48,0.48,0,0,1-.15.36,0.5,0.5,0,0,1-.36.15,0.93,0.93,0,0,1-.45-0.14,3.06,3.06,0,0,1-.67-0.64,3.63,3.63,0,0,0-.7-0.63,3.24,3.24,0,0,0,.16.85A4.68,4.68,0,0,1,3.1,5a0.68,0.68,0,0,1-.16.46,0.47,0.47,0,0,1-.35.19,0.64,0.64,0,0,1-.46-0.2A0.63,0.63,0,0,1,2,5a2.51,2.51,0,0,1,.16-0.79q0.16-.46.2-0.64a4.32,4.32,0,0,0,.08-0.52,3.77,3.77,0,0,0-.7.59A4,4,0,0,1,1,4.38a0.7,0.7,0,0,1-.37.11,0.55,0.55,0,0,1-.4-0.16A0.48,0.48,0,0,1,.05,4,0.61,0.61,0,0,1,.19,3.62a1,1,0,0,1,.32-0.3A5.34,5.34,0,0,1,1.35,3.1a4.46,4.46,0,0,0,.88-0.27,3.51,3.51,0,0,0-.88-0.29,3.48,3.48,0,0,1-1-.32A0.66,0.66,0,0,1,0,1.67,0.47,0.47,0,0,1,.19,1.33,0.49,0.49,0,0,1,.51,1.19,1,1,0,0,1,1,1.33a2.72,2.72,0,0,1,.63.58A3.35,3.35,0,0,0,2.38,2.58Z" fill="#2e9afe" opacity="0"/> <path id="window-t5" transform="translate(197, 229.5)" d="M2.38,2.58a3.39,3.39,0,0,0-.19-0.94A3.48,3.48,0,0,1,2,.72,0.78,0.78,0,0,1,2.13.18,0.54,0.54,0,0,1,2.51,0a0.47,0.47,0,0,1,.37.18A0.79,0.79,0,0,1,3,.71a3,3,0,0,1-.18.86,4.56,4.56,0,0,0-.22,1A3.16,3.16,0,0,0,3.32,2,3.44,3.44,0,0,1,4,1.32a0.91,0.91,0,0,1,.5-0.12,0.52,0.52,0,0,1,.38.15A0.5,0.5,0,0,1,5,1.72a0.59,0.59,0,0,1-.23.45,3,3,0,0,1-1.13.4,5,5,0,0,0-.87.27,3.14,3.14,0,0,0,.87.28,2.45,2.45,0,0,1,1.08.38A0.65,0.65,0,0,1,5,4a0.48,0.48,0,0,1-.15.36,0.5,0.5,0,0,1-.36.15,0.93,0.93,0,0,1-.45-0.14,3.06,3.06,0,0,1-.67-0.64,3.63,3.63,0,0,0-.7-0.63,3.24,3.24,0,0,0,.16.85A4.68,4.68,0,0,1,3.1,5a0.68,0.68,0,0,1-.16.46,0.47,0.47,0,0,1-.35.19,0.64,0.64,0,0,1-.46-0.2A0.63,0.63,0,0,1,2,5a2.51,2.51,0,0,1,.16-0.79q0.16-.46.2-0.64a4.32,4.32,0,0,0,.08-0.52,3.77,3.77,0,0,0-.7.59A4,4,0,0,1,1,4.38a0.7,0.7,0,0,1-.37.11,0.55,0.55,0,0,1-.4-0.16A0.48,0.48,0,0,1,.05,4,0.61,0.61,0,0,1,.19,3.62a1,1,0,0,1,.32-0.3A5.34,5.34,0,0,1,1.35,3.1a4.46,4.46,0,0,0,.88-0.27,3.51,3.51,0,0,0-.88-0.29,3.48,3.48,0,0,1-1-.32A0.66,0.66,0,0,1,0,1.67,0.47,0.47,0,0,1,.19,1.33,0.49,0.49,0,0,1,.51,1.19,1,1,0,0,1,1,1.33a2.72,2.72,0,0,1,.63.58A3.35,3.35,0,0,0,2.38,2.58Z" fill="#2e9afe" opacity="0"/> <path id="window-t6" transform="translate(205, 229.5)" d="M2.38,2.58a3.39,3.39,0,0,0-.19-0.94A3.48,3.48,0,0,1,2,.72,0.78,0.78,0,0,1,2.13.18,0.54,0.54,0,0,1,2.51,0a0.47,0.47,0,0,1,.37.18A0.79,0.79,0,0,1,3,.71a3,3,0,0,1-.18.86,4.56,4.56,0,0,0-.22,1A3.16,3.16,0,0,0,3.32,2,3.44,3.44,0,0,1,4,1.32a0.91,0.91,0,0,1,.5-0.12,0.52,0.52,0,0,1,.38.15A0.5,0.5,0,0,1,5,1.72a0.59,0.59,0,0,1-.23.45,3,3,0,0,1-1.13.4,5,5,0,0,0-.87.27,3.14,3.14,0,0,0,.87.28,2.45,2.45,0,0,1,1.08.38A0.65,0.65,0,0,1,5,4a0.48,0.48,0,0,1-.15.36,0.5,0.5,0,0,1-.36.15,0.93,0.93,0,0,1-.45-0.14,3.06,3.06,0,0,1-.67-0.64,3.63,3.63,0,0,0-.7-0.63,3.24,3.24,0,0,0,.16.85A4.68,4.68,0,0,1,3.1,5a0.68,0.68,0,0,1-.16.46,0.47,0.47,0,0,1-.35.19,0.64,0.64,0,0,1-.46-0.2A0.63,0.63,0,0,1,2,5a2.51,2.51,0,0,1,.16-0.79q0.16-.46.2-0.64a4.32,4.32,0,0,0,.08-0.52,3.77,3.77,0,0,0-.7.59A4,4,0,0,1,1,4.38a0.7,0.7,0,0,1-.37.11,0.55,0.55,0,0,1-.4-0.16A0.48,0.48,0,0,1,.05,4,0.61,0.61,0,0,1,.19,3.62a1,1,0,0,1,.32-0.3A5.34,5.34,0,0,1,1.35,3.1a4.46,4.46,0,0,0,.88-0.27,3.51,3.51,0,0,0-.88-0.29,3.48,3.48,0,0,1-1-.32A0.66,0.66,0,0,1,0,1.67,0.47,0.47,0,0,1,.19,1.33,0.49,0.49,0,0,1,.51,1.19,1,1,0,0,1,1,1.33a2.72,2.72,0,0,1,.63.58A3.35,3.35,0,0,0,2.38,2.58Z" fill="#2e9afe" opacity="0"/> <path id="window-t7" transform="translate(213, 229.5)" d="M2.38,2.58a3.39,3.39,0,0,0-.19-0.94A3.48,3.48,0,0,1,2,.72,0.78,0.78,0,0,1,2.13.18,0.54,0.54,0,0,1,2.51,0a0.47,0.47,0,0,1,.37.18A0.79,0.79,0,0,1,3,.71a3,3,0,0,1-.18.86,4.56,4.56,0,0,0-.22,1A3.16,3.16,0,0,0,3.32,2,3.44,3.44,0,0,1,4,1.32a0.91,0.91,0,0,1,.5-0.12,0.52,0.52,0,0,1,.38.15A0.5,0.5,0,0,1,5,1.72a0.59,0.59,0,0,1-.23.45,3,3,0,0,1-1.13.4,5,5,0,0,0-.87.27,3.14,3.14,0,0,0,.87.28,2.45,2.45,0,0,1,1.08.38A0.65,0.65,0,0,1,5,4a0.48,0.48,0,0,1-.15.36,0.5,0.5,0,0,1-.36.15,0.93,0.93,0,0,1-.45-0.14,3.06,3.06,0,0,1-.67-0.64,3.63,3.63,0,0,0-.7-0.63,3.24,3.24,0,0,0,.16.85A4.68,4.68,0,0,1,3.1,5a0.68,0.68,0,0,1-.16.46,0.47,0.47,0,0,1-.35.19,0.64,0.64,0,0,1-.46-0.2A0.63,0.63,0,0,1,2,5a2.51,2.51,0,0,1,.16-0.79q0.16-.46.2-0.64a4.32,4.32,0,0,0,.08-0.52,3.77,3.77,0,0,0-.7.59A4,4,0,0,1,1,4.38a0.7,0.7,0,0,1-.37.11,0.55,0.55,0,0,1-.4-0.16A0.48,0.48,0,0,1,.05,4,0.61,0.61,0,0,1,.19,3.62a1,1,0,0,1,.32-0.3A5.34,5.34,0,0,1,1.35,3.1a4.46,4.46,0,0,0,.88-0.27,3.51,3.51,0,0,0-.88-0.29,3.48,3.48,0,0,1-1-.32A0.66,0.66,0,0,1,0,1.67,0.47,0.47,0,0,1,.19,1.33,0.49,0.49,0,0,1,.51,1.19,1,1,0,0,1,1,1.33a2.72,2.72,0,0,1,.63.58A3.35,3.35,0,0,0,2.38,2.58Z" fill="#2e9afe" opacity="0"/> <path id="window-t8" transform="translate(221, 229.5)" d="M2.38,2.58a3.39,3.39,0,0,0-.19-0.94A3.48,3.48,0,0,1,2,.72,0.78,0.78,0,0,1,2.13.18,0.54,0.54,0,0,1,2.51,0a0.47,0.47,0,0,1,.37.18A0.79,0.79,0,0,1,3,.71a3,3,0,0,1-.18.86,4.56,4.56,0,0,0-.22,1A3.16,3.16,0,0,0,3.32,2,3.44,3.44,0,0,1,4,1.32a0.91,0.91,0,0,1,.5-0.12,0.52,0.52,0,0,1,.38.15A0.5,0.5,0,0,1,5,1.72a0.59,0.59,0,0,1-.23.45,3,3,0,0,1-1.13.4,5,5,0,0,0-.87.27,3.14,3.14,0,0,0,.87.28,2.45,2.45,0,0,1,1.08.38A0.65,0.65,0,0,1,5,4a0.48,0.48,0,0,1-.15.36,0.5,0.5,0,0,1-.36.15,0.93,0.93,0,0,1-.45-0.14,3.06,3.06,0,0,1-.67-0.64,3.63,3.63,0,0,0-.7-0.63,3.24,3.24,0,0,0,.16.85A4.68,4.68,0,0,1,3.1,5a0.68,0.68,0,0,1-.16.46,0.47,0.47,0,0,1-.35.19,0.64,0.64,0,0,1-.46-0.2A0.63,0.63,0,0,1,2,5a2.51,2.51,0,0,1,.16-0.79q0.16-.46.2-0.64a4.32,4.32,0,0,0,.08-0.52,3.77,3.77,0,0,0-.7.59A4,4,0,0,1,1,4.38a0.7,0.7,0,0,1-.37.11,0.55,0.55,0,0,1-.4-0.16A0.48,0.48,0,0,1,.05,4,0.61,0.61,0,0,1,.19,3.62a1,1,0,0,1,.32-0.3A5.34,5.34,0,0,1,1.35,3.1a4.46,4.46,0,0,0,.88-0.27,3.51,3.51,0,0,0-.88-0.29,3.48,3.48,0,0,1-1-.32A0.66,0.66,0,0,1,0,1.67,0.47,0.47,0,0,1,.19,1.33,0.49,0.49,0,0,1,.51,1.19,1,1,0,0,1,1,1.33a2.72,2.72,0,0,1,.63.58A3.35,3.35,0,0,0,2.38,2.58Z" fill="#2e9afe" opacity="0"/> </g> <g id="window-f2"> <polygon points="233.62 257.04 233.62 258.7 160.16 258.7 160.16 247.01 233.62 247.01 233.62 248.66 233.62 257.04" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path id="window-t9" transform="translate(165, 250)" d="M2.38,2.58a3.39,3.39,0,0,0-.19-0.94A3.48,3.48,0,0,1,2,.72,0.78,0.78,0,0,1,2.13.18,0.54,0.54,0,0,1,2.51,0a0.47,0.47,0,0,1,.37.18A0.79,0.79,0,0,1,3,.71a3,3,0,0,1-.18.86,4.56,4.56,0,0,0-.22,1A3.16,3.16,0,0,0,3.32,2,3.44,3.44,0,0,1,4,1.32a0.91,0.91,0,0,1,.5-0.12,0.52,0.52,0,0,1,.38.15A0.5,0.5,0,0,1,5,1.72a0.59,0.59,0,0,1-.23.45,3,3,0,0,1-1.13.4,5,5,0,0,0-.87.27,3.14,3.14,0,0,0,.87.28,2.45,2.45,0,0,1,1.08.38A0.65,0.65,0,0,1,5,4a0.48,0.48,0,0,1-.15.36,0.5,0.5,0,0,1-.36.15,0.93,0.93,0,0,1-.45-0.14,3.06,3.06,0,0,1-.67-0.64,3.63,3.63,0,0,0-.7-0.63,3.24,3.24,0,0,0,.16.85A4.68,4.68,0,0,1,3.1,5a0.68,0.68,0,0,1-.16.46,0.47,0.47,0,0,1-.35.19,0.64,0.64,0,0,1-.46-0.2A0.63,0.63,0,0,1,2,5a2.51,2.51,0,0,1,.16-0.79q0.16-.46.2-0.64a4.32,4.32,0,0,0,.08-0.52,3.77,3.77,0,0,0-.7.59A4,4,0,0,1,1,4.38a0.7,0.7,0,0,1-.37.11,0.55,0.55,0,0,1-.4-0.16A0.48,0.48,0,0,1,.05,4,0.61,0.61,0,0,1,.19,3.62a1,1,0,0,1,.32-0.3A5.34,5.34,0,0,1,1.35,3.1a4.46,4.46,0,0,0,.88-0.27,3.51,3.51,0,0,0-.88-0.29,3.48,3.48,0,0,1-1-.32A0.66,0.66,0,0,1,0,1.67,0.47,0.47,0,0,1,.19,1.33,0.49,0.49,0,0,1,.51,1.19,1,1,0,0,1,1,1.33a2.72,2.72,0,0,1,.63.58A3.35,3.35,0,0,0,2.38,2.58Z" fill="#2e9afe" opacity="0"/> <path id="window-t10" transform="translate(173, 250)" d="M2.38,2.58a3.39,3.39,0,0,0-.19-0.94A3.48,3.48,0,0,1,2,.72,0.78,0.78,0,0,1,2.13.18,0.54,0.54,0,0,1,2.51,0a0.47,0.47,0,0,1,.37.18A0.79,0.79,0,0,1,3,.71a3,3,0,0,1-.18.86,4.56,4.56,0,0,0-.22,1A3.16,3.16,0,0,0,3.32,2,3.44,3.44,0,0,1,4,1.32a0.91,0.91,0,0,1,.5-0.12,0.52,0.52,0,0,1,.38.15A0.5,0.5,0,0,1,5,1.72a0.59,0.59,0,0,1-.23.45,3,3,0,0,1-1.13.4,5,5,0,0,0-.87.27,3.14,3.14,0,0,0,.87.28,2.45,2.45,0,0,1,1.08.38A0.65,0.65,0,0,1,5,4a0.48,0.48,0,0,1-.15.36,0.5,0.5,0,0,1-.36.15,0.93,0.93,0,0,1-.45-0.14,3.06,3.06,0,0,1-.67-0.64,3.63,3.63,0,0,0-.7-0.63,3.24,3.24,0,0,0,.16.85A4.68,4.68,0,0,1,3.1,5a0.68,0.68,0,0,1-.16.46,0.47,0.47,0,0,1-.35.19,0.64,0.64,0,0,1-.46-0.2A0.63,0.63,0,0,1,2,5a2.51,2.51,0,0,1,.16-0.79q0.16-.46.2-0.64a4.32,4.32,0,0,0,.08-0.52,3.77,3.77,0,0,0-.7.59A4,4,0,0,1,1,4.38a0.7,0.7,0,0,1-.37.11,0.55,0.55,0,0,1-.4-0.16A0.48,0.48,0,0,1,.05,4,0.61,0.61,0,0,1,.19,3.62a1,1,0,0,1,.32-0.3A5.34,5.34,0,0,1,1.35,3.1a4.46,4.46,0,0,0,.88-0.27,3.51,3.51,0,0,0-.88-0.29,3.48,3.48,0,0,1-1-.32A0.66,0.66,0,0,1,0,1.67,0.47,0.47,0,0,1,.19,1.33,0.49,0.49,0,0,1,.51,1.19,1,1,0,0,1,1,1.33a2.72,2.72,0,0,1,.63.58A3.35,3.35,0,0,0,2.38,2.58Z" fill="#2e9afe" opacity="0"/> <path id="window-t11" transform="translate(181, 250)" d="M2.38,2.58a3.39,3.39,0,0,0-.19-0.94A3.48,3.48,0,0,1,2,.72,0.78,0.78,0,0,1,2.13.18,0.54,0.54,0,0,1,2.51,0a0.47,0.47,0,0,1,.37.18A0.79,0.79,0,0,1,3,.71a3,3,0,0,1-.18.86,4.56,4.56,0,0,0-.22,1A3.16,3.16,0,0,0,3.32,2,3.44,3.44,0,0,1,4,1.32a0.91,0.91,0,0,1,.5-0.12,0.52,0.52,0,0,1,.38.15A0.5,0.5,0,0,1,5,1.72a0.59,0.59,0,0,1-.23.45,3,3,0,0,1-1.13.4,5,5,0,0,0-.87.27,3.14,3.14,0,0,0,.87.28,2.45,2.45,0,0,1,1.08.38A0.65,0.65,0,0,1,5,4a0.48,0.48,0,0,1-.15.36,0.5,0.5,0,0,1-.36.15,0.93,0.93,0,0,1-.45-0.14,3.06,3.06,0,0,1-.67-0.64,3.63,3.63,0,0,0-.7-0.63,3.24,3.24,0,0,0,.16.85A4.68,4.68,0,0,1,3.1,5a0.68,0.68,0,0,1-.16.46,0.47,0.47,0,0,1-.35.19,0.64,0.64,0,0,1-.46-0.2A0.63,0.63,0,0,1,2,5a2.51,2.51,0,0,1,.16-0.79q0.16-.46.2-0.64a4.32,4.32,0,0,0,.08-0.52,3.77,3.77,0,0,0-.7.59A4,4,0,0,1,1,4.38a0.7,0.7,0,0,1-.37.11,0.55,0.55,0,0,1-.4-0.16A0.48,0.48,0,0,1,.05,4,0.61,0.61,0,0,1,.19,3.62a1,1,0,0,1,.32-0.3A5.34,5.34,0,0,1,1.35,3.1a4.46,4.46,0,0,0,.88-0.27,3.51,3.51,0,0,0-.88-0.29,3.48,3.48,0,0,1-1-.32A0.66,0.66,0,0,1,0,1.67,0.47,0.47,0,0,1,.19,1.33,0.49,0.49,0,0,1,.51,1.19,1,1,0,0,1,1,1.33a2.72,2.72,0,0,1,.63.58A3.35,3.35,0,0,0,2.38,2.58Z" fill="#2e9afe" opacity="0"/> <path id="window-t12" transform="translate(189, 250)" d="M2.38,2.58a3.39,3.39,0,0,0-.19-0.94A3.48,3.48,0,0,1,2,.72,0.78,0.78,0,0,1,2.13.18,0.54,0.54,0,0,1,2.51,0a0.47,0.47,0,0,1,.37.18A0.79,0.79,0,0,1,3,.71a3,3,0,0,1-.18.86,4.56,4.56,0,0,0-.22,1A3.16,3.16,0,0,0,3.32,2,3.44,3.44,0,0,1,4,1.32a0.91,0.91,0,0,1,.5-0.12,0.52,0.52,0,0,1,.38.15A0.5,0.5,0,0,1,5,1.72a0.59,0.59,0,0,1-.23.45,3,3,0,0,1-1.13.4,5,5,0,0,0-.87.27,3.14,3.14,0,0,0,.87.28,2.45,2.45,0,0,1,1.08.38A0.65,0.65,0,0,1,5,4a0.48,0.48,0,0,1-.15.36,0.5,0.5,0,0,1-.36.15,0.93,0.93,0,0,1-.45-0.14,3.06,3.06,0,0,1-.67-0.64,3.63,3.63,0,0,0-.7-0.63,3.24,3.24,0,0,0,.16.85A4.68,4.68,0,0,1,3.1,5a0.68,0.68,0,0,1-.16.46,0.47,0.47,0,0,1-.35.19,0.64,0.64,0,0,1-.46-0.2A0.63,0.63,0,0,1,2,5a2.51,2.51,0,0,1,.16-0.79q0.16-.46.2-0.64a4.32,4.32,0,0,0,.08-0.52,3.77,3.77,0,0,0-.7.59A4,4,0,0,1,1,4.38a0.7,0.7,0,0,1-.37.11,0.55,0.55,0,0,1-.4-0.16A0.48,0.48,0,0,1,.05,4,0.61,0.61,0,0,1,.19,3.62a1,1,0,0,1,.32-0.3A5.34,5.34,0,0,1,1.35,3.1a4.46,4.46,0,0,0,.88-0.27,3.51,3.51,0,0,0-.88-0.29,3.48,3.48,0,0,1-1-.32A0.66,0.66,0,0,1,0,1.67,0.47,0.47,0,0,1,.19,1.33,0.49,0.49,0,0,1,.51,1.19,1,1,0,0,1,1,1.33a2.72,2.72,0,0,1,.63.58A3.35,3.35,0,0,0,2.38,2.58Z" fill="#2e9afe" opacity="0"/> <path id="window-t13" transform="translate(197, 250)" d="M2.38,2.58a3.39,3.39,0,0,0-.19-0.94A3.48,3.48,0,0,1,2,.72,0.78,0.78,0,0,1,2.13.18,0.54,0.54,0,0,1,2.51,0a0.47,0.47,0,0,1,.37.18A0.79,0.79,0,0,1,3,.71a3,3,0,0,1-.18.86,4.56,4.56,0,0,0-.22,1A3.16,3.16,0,0,0,3.32,2,3.44,3.44,0,0,1,4,1.32a0.91,0.91,0,0,1,.5-0.12,0.52,0.52,0,0,1,.38.15A0.5,0.5,0,0,1,5,1.72a0.59,0.59,0,0,1-.23.45,3,3,0,0,1-1.13.4,5,5,0,0,0-.87.27,3.14,3.14,0,0,0,.87.28,2.45,2.45,0,0,1,1.08.38A0.65,0.65,0,0,1,5,4a0.48,0.48,0,0,1-.15.36,0.5,0.5,0,0,1-.36.15,0.93,0.93,0,0,1-.45-0.14,3.06,3.06,0,0,1-.67-0.64,3.63,3.63,0,0,0-.7-0.63,3.24,3.24,0,0,0,.16.85A4.68,4.68,0,0,1,3.1,5a0.68,0.68,0,0,1-.16.46,0.47,0.47,0,0,1-.35.19,0.64,0.64,0,0,1-.46-0.2A0.63,0.63,0,0,1,2,5a2.51,2.51,0,0,1,.16-0.79q0.16-.46.2-0.64a4.32,4.32,0,0,0,.08-0.52,3.77,3.77,0,0,0-.7.59A4,4,0,0,1,1,4.38a0.7,0.7,0,0,1-.37.11,0.55,0.55,0,0,1-.4-0.16A0.48,0.48,0,0,1,.05,4,0.61,0.61,0,0,1,.19,3.62a1,1,0,0,1,.32-0.3A5.34,5.34,0,0,1,1.35,3.1a4.46,4.46,0,0,0,.88-0.27,3.51,3.51,0,0,0-.88-0.29,3.48,3.48,0,0,1-1-.32A0.66,0.66,0,0,1,0,1.67,0.47,0.47,0,0,1,.19,1.33,0.49,0.49,0,0,1,.51,1.19,1,1,0,0,1,1,1.33a2.72,2.72,0,0,1,.63.58A3.35,3.35,0,0,0,2.38,2.58Z" fill="#2e9afe" opacity="0"/> <path id="window-t14" transform="translate(205, 250)" d="M2.38,2.58a3.39,3.39,0,0,0-.19-0.94A3.48,3.48,0,0,1,2,.72,0.78,0.78,0,0,1,2.13.18,0.54,0.54,0,0,1,2.51,0a0.47,0.47,0,0,1,.37.18A0.79,0.79,0,0,1,3,.71a3,3,0,0,1-.18.86,4.56,4.56,0,0,0-.22,1A3.16,3.16,0,0,0,3.32,2,3.44,3.44,0,0,1,4,1.32a0.91,0.91,0,0,1,.5-0.12,0.52,0.52,0,0,1,.38.15A0.5,0.5,0,0,1,5,1.72a0.59,0.59,0,0,1-.23.45,3,3,0,0,1-1.13.4,5,5,0,0,0-.87.27,3.14,3.14,0,0,0,.87.28,2.45,2.45,0,0,1,1.08.38A0.65,0.65,0,0,1,5,4a0.48,0.48,0,0,1-.15.36,0.5,0.5,0,0,1-.36.15,0.93,0.93,0,0,1-.45-0.14,3.06,3.06,0,0,1-.67-0.64,3.63,3.63,0,0,0-.7-0.63,3.24,3.24,0,0,0,.16.85A4.68,4.68,0,0,1,3.1,5a0.68,0.68,0,0,1-.16.46,0.47,0.47,0,0,1-.35.19,0.64,0.64,0,0,1-.46-0.2A0.63,0.63,0,0,1,2,5a2.51,2.51,0,0,1,.16-0.79q0.16-.46.2-0.64a4.32,4.32,0,0,0,.08-0.52,3.77,3.77,0,0,0-.7.59A4,4,0,0,1,1,4.38a0.7,0.7,0,0,1-.37.11,0.55,0.55,0,0,1-.4-0.16A0.48,0.48,0,0,1,.05,4,0.61,0.61,0,0,1,.19,3.62a1,1,0,0,1,.32-0.3A5.34,5.34,0,0,1,1.35,3.1a4.46,4.46,0,0,0,.88-0.27,3.51,3.51,0,0,0-.88-0.29,3.48,3.48,0,0,1-1-.32A0.66,0.66,0,0,1,0,1.67,0.47,0.47,0,0,1,.19,1.33,0.49,0.49,0,0,1,.51,1.19,1,1,0,0,1,1,1.33a2.72,2.72,0,0,1,.63.58A3.35,3.35,0,0,0,2.38,2.58Z" fill="#2e9afe" opacity="0"/> <path id="window-t15" transform="translate(213, 250)" d="M2.38,2.58a3.39,3.39,0,0,0-.19-0.94A3.48,3.48,0,0,1,2,.72,0.78,0.78,0,0,1,2.13.18,0.54,0.54,0,0,1,2.51,0a0.47,0.47,0,0,1,.37.18A0.79,0.79,0,0,1,3,.71a3,3,0,0,1-.18.86,4.56,4.56,0,0,0-.22,1A3.16,3.16,0,0,0,3.32,2,3.44,3.44,0,0,1,4,1.32a0.91,0.91,0,0,1,.5-0.12,0.52,0.52,0,0,1,.38.15A0.5,0.5,0,0,1,5,1.72a0.59,0.59,0,0,1-.23.45,3,3,0,0,1-1.13.4,5,5,0,0,0-.87.27,3.14,3.14,0,0,0,.87.28,2.45,2.45,0,0,1,1.08.38A0.65,0.65,0,0,1,5,4a0.48,0.48,0,0,1-.15.36,0.5,0.5,0,0,1-.36.15,0.93,0.93,0,0,1-.45-0.14,3.06,3.06,0,0,1-.67-0.64,3.63,3.63,0,0,0-.7-0.63,3.24,3.24,0,0,0,.16.85A4.68,4.68,0,0,1,3.1,5a0.68,0.68,0,0,1-.16.46,0.47,0.47,0,0,1-.35.19,0.64,0.64,0,0,1-.46-0.2A0.63,0.63,0,0,1,2,5a2.51,2.51,0,0,1,.16-0.79q0.16-.46.2-0.64a4.32,4.32,0,0,0,.08-0.52,3.77,3.77,0,0,0-.7.59A4,4,0,0,1,1,4.38a0.7,0.7,0,0,1-.37.11,0.55,0.55,0,0,1-.4-0.16A0.48,0.48,0,0,1,.05,4,0.61,0.61,0,0,1,.19,3.62a1,1,0,0,1,.32-0.3A5.34,5.34,0,0,1,1.35,3.1a4.46,4.46,0,0,0,.88-0.27,3.51,3.51,0,0,0-.88-0.29,3.48,3.48,0,0,1-1-.32A0.66,0.66,0,0,1,0,1.67,0.47,0.47,0,0,1,.19,1.33,0.49,0.49,0,0,1,.51,1.19,1,1,0,0,1,1,1.33a2.72,2.72,0,0,1,.63.58A3.35,3.35,0,0,0,2.38,2.58Z" fill="#2e9afe" opacity="0"/> <path id="window-t16" transform="translate(221, 250)" d="M2.38,2.58a3.39,3.39,0,0,0-.19-0.94A3.48,3.48,0,0,1,2,.72,0.78,0.78,0,0,1,2.13.18,0.54,0.54,0,0,1,2.51,0a0.47,0.47,0,0,1,.37.18A0.79,0.79,0,0,1,3,.71a3,3,0,0,1-.18.86,4.56,4.56,0,0,0-.22,1A3.16,3.16,0,0,0,3.32,2,3.44,3.44,0,0,1,4,1.32a0.91,0.91,0,0,1,.5-0.12,0.52,0.52,0,0,1,.38.15A0.5,0.5,0,0,1,5,1.72a0.59,0.59,0,0,1-.23.45,3,3,0,0,1-1.13.4,5,5,0,0,0-.87.27,3.14,3.14,0,0,0,.87.28,2.45,2.45,0,0,1,1.08.38A0.65,0.65,0,0,1,5,4a0.48,0.48,0,0,1-.15.36,0.5,0.5,0,0,1-.36.15,0.93,0.93,0,0,1-.45-0.14,3.06,3.06,0,0,1-.67-0.64,3.63,3.63,0,0,0-.7-0.63,3.24,3.24,0,0,0,.16.85A4.68,4.68,0,0,1,3.1,5a0.68,0.68,0,0,1-.16.46,0.47,0.47,0,0,1-.35.19,0.64,0.64,0,0,1-.46-0.2A0.63,0.63,0,0,1,2,5a2.51,2.51,0,0,1,.16-0.79q0.16-.46.2-0.64a4.32,4.32,0,0,0,.08-0.52,3.77,3.77,0,0,0-.7.59A4,4,0,0,1,1,4.38a0.7,0.7,0,0,1-.37.11,0.55,0.55,0,0,1-.4-0.16A0.48,0.48,0,0,1,.05,4,0.61,0.61,0,0,1,.19,3.62a1,1,0,0,1,.32-0.3A5.34,5.34,0,0,1,1.35,3.1a4.46,4.46,0,0,0,.88-0.27,3.51,3.51,0,0,0-.88-0.29,3.48,3.48,0,0,1-1-.32A0.66,0.66,0,0,1,0,1.67,0.47,0.47,0,0,1,.19,1.33,0.49,0.49,0,0,1,.51,1.19,1,1,0,0,1,1,1.33a2.72,2.72,0,0,1,.63.58A3.35,3.35,0,0,0,2.38,2.58Z" fill="#2e9afe" opacity="0"/> </g> <line id="window-f3" x1="161.23" y1="270.24" x2="233.62" y2="270.24" fill="none" stroke="#82c2fe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> </g> <g id="bulb"> <path d="M895,88.4H879.71a1.15,1.15,0,0,0-1.15,1.15h0v0.77a1.15,1.15,0,0,0,1.15,1.15H895a1.15,1.15,0,0,0,1.15-1.15h0V89.55A1.15,1.15,0,0,0,895,88.4h0Z" fill="#2e9afe"/> <path d="M895,94.16H879.71a1.15,1.15,0,0,0-1.15,1.15h0v0.77a1.15,1.15,0,0,0,1.15,1.15H895a1.15,1.15,0,0,0,1.12-1.15V95.31A1.15,1.15,0,0,0,895,94.16Z" fill="#2e9afe"/> <path d="M881.62,99.93h11.52c0,2.3-3.06,3.83-5.74,3.83S881.62,102.22,881.62,99.93Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M887.36,35.67a21.43,21.43,0,0,0-21.42,21.41,22,22,0,0,0,2.86,10.7c5.26,9.48,6.66,7.55,7.51,12.7,0.72,4.32,1.72,5.32,5,5.32h12.15c3.26,0,4.26-1,5-5.32,0.86-5.15,2.25-3.22,7.51-12.7a22,22,0,0,0,2.85-10.7,21.42,21.42,0,0,0-21.43-21.41h0Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect class="bulb-line" x="886.37" y="24.33" width="2" height="7.64" rx="1" ry="1" fill="#2e9afe"/> <rect class="bulb-line" x="886.37" y="24.33" width="2" height="7.64" rx="1" ry="1" fill="#2e9afe" transform="rotate(30 887.36 56.85)"/> <rect class="bulb-line" x="886.37" y="24.33" width="2" height="7.64" rx="1" ry="1" fill="#2e9afe" transform="rotate(60 887.36 56.85)"/> <rect class="bulb-line" x="886.37" y="24.33" width="2" height="7.64" rx="1" ry="1" fill="#2e9afe" transform="rotate(90 887.36 56.85)"/> <rect class="bulb-line" x="886.37" y="24.33" width="2" height="7.64" rx="1" ry="1" fill="#2e9afe" transform="rotate(120 887.36 56.85)"/> <rect class="bulb-line" x="886.37" y="24.33" width="2" height="7.64" rx="1" ry="1" fill="#2e9afe" transform="rotate(240 887.36 56.85)"/> <rect class="bulb-line" x="886.37" y="24.33" width="2" height="7.64" rx="1" ry="1" fill="#2e9afe" transform="rotate(270 887.36 56.85)"/> <rect class="bulb-line" x="886.37" y="24.33" width="2" height="7.64" rx="1" ry="1" fill="#2e9afe" transform="rotate(300 887.36 56.85)"/> <rect class="bulb-line" x="886.37" y="24.33" width="2" height="7.64" rx="1" ry="1" fill="#2e9afe" transform="rotate(330 887.36 56.85)"/> <path d="M887.36,42.51a21.42,21.42,0,0,1,20,13.85,20,20,0,0,0-40.07,0A21.42,21.42,0,0,1,887.36,42.51Z" fill="#fff" opacity="0.7" style="isolation: isolate"/> <g id="bulb-text"> <path transform="translate(880, 47)" d="M6.34,20.7V14.35A8.35,8.35,0,0,1,2,11.78,6.44,6.44,0,0,1,.61,7.61,5.9,5.9,0,0,1,2.18,3.44,6.32,6.32,0,0,1,6.35,1.5V0H8.54V1.5a6.49,6.49,0,0,1,3.83,1.64,6.33,6.33,0,0,1,1.82,3.63l-3.83.5A3.08,3.08,0,0,0,8.54,4.85v5.92a10.33,10.33,0,0,1,5,2.55,6,6,0,0,1,1.32,4,6.73,6.73,0,0,1-1.66,4.62,7.28,7.28,0,0,1-4.61,2.3v2.83H6.4V24.33a7,7,0,0,1-4.25-2A8,8,0,0,1,.06,17.71l4-.42A5,5,0,0,0,5,19.38,4.14,4.14,0,0,0,6.34,20.7Zm0-15.89a2.85,2.85,0,0,0-1.42,1,2.67,2.67,0,0,0-.53,1.6A2.54,2.54,0,0,0,4.87,8.9,3.36,3.36,0,0,0,6.34,10V4.8h0ZM8.53,20.92a3.08,3.08,0,0,0,1.85-1.05,3,3,0,0,0,.71-2,2.68,2.68,0,0,0-.6-1.75,3.82,3.82,0,0,0-2-1.13v5.9Z" fill="#2e9afe"/> </g> </g> <g id="board"> <rect x="886.17" y="135.76" width="216.97" height="8.32" rx="4.04" ry="4.04" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect x="896.33" y="144.08" width="196.65" height="143.09" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <rect x="881.08" y="287.17" width="227.14" height="8.54" rx="4.15" ry="4.15" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <g id="b-spin"> <path d="M941.52,223.57l8.15-30.43A31.49,31.49,0,1,0,972,215.42Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path transform="translate(-18.3 18.3)" id="b-pie" d="M954.85,210.24l36.36-9.74a37.7,37.7,0,0,0-26.61-26.61Z" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <rect id="b-l1" x="1015.26" y="175.62" width="64" height="2" rx="1" ry="1" fill="#82c2fe"/> <rect id="b-l2" x="1015.26" y="193.43" width="31" height="2" rx="1" ry="1" fill="#82c2fe"/> <rect id="b-l3" x="1015.26" y="216.26" width="64" height="2" rx="1" ry="1" fill="#82c2fe"/> <g clip-path="url(#board-area)"> <rect transform="translate(0 45)" id="b-rect" x="1014.15" y="242.87" width="65.14" height="8.35" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> </g> <rect x="989.02" y="295.72" width="11.27" height="58.1" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M890.21,137.07H1099a2.76,2.76,0,0,1,2.76,2.76h0v0.08H887.45v-0.08a2.76,2.76,0,0,1,2.76-2.76h0Z" fill="#e0f0ff" opacity="0.3" style="isolation: isolate"/> <path d="M885.19,288.54H1104a2.76,2.76,0,0,1,2.76,2.76h0v0.08H882.43V291.3A2.76,2.76,0,0,1,885.19,288.54Z" fill="#e0f0ff" opacity="0.3" style="isolation: isolate"/> </g> <line x1="324.09" y1="26.28" x2="85.72" y2="26.28" fill="none" stroke="#e0f0ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="203.67" y1="97.37" x2="125.76" y2="97.37" fill="none" stroke="#e0f0ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="814.14" y1="19.56" x2="1096.86" y2="19.56" fill="none" stroke="#e0f0ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="967.52" y1="69.31" x2="1141" y2="69.31" fill="none" stroke="#e0f0ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="1010.14" y1="101.85" x2="1084.41" y2="101.85" fill="none" stroke="#e0f0ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="730.3" y1="99.93" x2="832.01" y2="99.93" fill="none" stroke="#e0f0ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="114.47" y1="213.75" x2="3.6" y2="213.75" fill="none" stroke="#e0f0ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line x1="1" y1="353.72" x2="1128.11" y2="353.72" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <g id="loupe"> <circle cx="369.84" cy="164.97" r="51.01" fill="#82c2fe" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <line id="loupe-line" x1="333.78" y1="201.04" x2="298.1" y2="236.72" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle cx="369.84" cy="164.97" r="33.49" fill="#fff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M369.84,115.32a49.58,49.58,0,0,0-49.15,42.91,51,51,0,0,1,98.35.17A49.63,49.63,0,0,0,369.84,115.32Z" fill="#e0f0ff" opacity="0.3" style="isolation: isolate"/> <rect id="loupe-r1" x="348.73" y="164.12" width="8.45" height="14.28" fill="#c1e1ff"/> <rect id="loupe-r2" x="363.93" y="158.58" width="8.45" height="19.82" fill="#c1e1ff"/> <rect id="loupe-r3" x="379.12" y="148.38" width="8.45" height="30.02" fill="#c1e1ff"/> </g> <g clip-path="url(#loupe-area)"> <g transform="translate(277.11 93.324) scale(1.3) translate(-277.11 -93.324)"> <path d="M252.33,108.2l20.23-35a5.25,5.25,0,0,1,9.1,0l20.23,35a5.25,5.25,0,0,1-4.55,7.88H256.88A5.25,5.25,0,0,1,252.33,108.2Z" fill="#e0f0ff" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <path d="M280.48,73.85a3.89,3.89,0,0,0-6.73,0l-20.23,35a3.85,3.85,0,0,0,0,3.89l0.07,0.1,19-32.87a5.25,5.25,0,0,1,9.1,0l19,32.87,0.07-.1a3.85,3.85,0,0,0,0-3.89Z" fill="#fff" opacity="0.7" style="isolation: isolate"/> <line x1="277.12" y1="80.24" x2="277.12" y2="98.74" fill="none" stroke="#2e9afe" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/> <circle cx="277.12" cy="107.16" r="1.88" fill="#2e9afe"/> </g> </g></svg>',

        keyframes: {

            wheel: {
                '0': {a: 0},
                '2000': {a: 0},
                '10000': {a: 720},
                '20000': {a: 720}
            },

            board: {
                root: {
                    '0': {x: 1, y: 1},
                    '6600': {x: 1, y: 1},
                    '7000': {x: 1.05, y: 0.9},
                    '7400': {x: 0.9, y: 1.1},
                    '8000': {x: 1, y: 1},
                    '20000': {x: 1, y: 1}
                },
                l1: {
                    '0': {w: 64},
                    '6000': {w: 64},
                    '6200': {w: 0},
                    '6600': {w: 0},
                    '7000': {w: 70.4},
                    '7200': {w: 64},
                    '20000': {w: 64}
                },

                l2: {
                    '0': {w: 31},
                    '6100': {w: 31},
                    '6300': {w: 0},
                    '6800': {w: 0},
                    '7200': {w: 34.1},
                    '7400': {w: 31},
                    '20000': {w: 31}
                },
                l3: {
                    '0': {w: 64},
                    '6200': {w: 64},
                    '6400': {w: 0},
                    '7000': {w: 0},
                    '7400': {w: 70.4},
                    '7600': {w: 64},
                    '20000': {w: 64}
                },
                spin: {
                    '0': {a: 360, s: 1},
                    '6000': {a: 360, s: 1},
                    '6600': {a: 0, s: 0},
                    '7600': {a: 360, s: 1.15},
                    '8000': {a: 360, s: 1},
                    '20000': {a: 360, s: 1}
                },
                pie: {
                    '0': {t: 0},
                    '6000': {t: 0},
                    '6600': {t: -18.3},
                    '7200': {t: -18.3},
                    '7600': {t: 0},
                    '20000': {t: 0}
                },
                rect: {
                    '0': {y: 0},
                    '6000': {y: 0},
                    '6300': {y: 45},
                    '7000': {y: 45},
                    '7400': {y: -10},
                    '7800': {y: 0},
                    '20000': {y: 0}
                }
            },

            bulb: {
                root: {
                    '0': {a: 0},
                    '8400': {a: 0},
                    '8700': {a: 15},
                    '8960': {a: -13},
                    '9180': {a: 11},
                    '9360': {a: -9},
                    '9500': {a: 7},
                    '9600': {a: -5},
                    '9660': {a: 3},
                    '9680': {a: -1},
                    '9700': {a: 0},
                    '20000': {a: 0}
                },
                line: {
                    '0': {h: 7.64, y: 24.33},
                    '8000': {h: 7.64, y: 24.33},
                    '8400': {h: 0, y: 32.27},
                    '9600': {h: 0, y: 32.27},
                    '10000': {h: 11.46, y: 20.81},
                    '10300': {h: 7.64, y: 24.33},
                    '20000': {h: 7.64, y: 24.33}
                },
                text: {
                    '0': {o: 1, s: 1},
                    '8000': {o: 1, s: 1},
                    '8400': {o: 0, s: 0},
                    '9600': {o: 0, s: 0},
                    '10000': {o: 1, s: 1.1},
                    '10300': {o: 1, s: 1},
                    '20000': {o: 1, s: 1}
                }
            },

            cloud: {
                path: {
                    '0': {Ax: 715.34, Ay: 26.64, Bx: 732.25, By: 15.34, Cx: 766.14, Cy: 21.08, Dx: 748.33, Dy: 54.42, Ex: 728.46, Ey: 54.64},
                    '8000': {Ax: 715.34, Ay: 26.64, Bx: 732.25, By: 15.34, Cx: 766.14, Cy: 21.08, Dx: 748.33, Dy: 54.42, Ex: 728.46, Ey: 54.64},
                    '9000': {Ax: 732.25, Ay: 15.34, Bx: 766.14, By: 21.08, Cx: 748.33, Cy: 54.42, Dx: 728.46, Dy: 54.64, Ex: 715.34, Ey: 26.64},
                    '9001': {Ax: 715.34, Ay: 26.64, Bx: 732.25, By: 15.34, Cx: 766.14, Cy: 21.08, Dx: 748.33, Dy: 54.42, Ex: 728.46, Ey: 54.64},
                    '10000': {Ax: 732.25, Ay: 15.34, Bx: 766.14, By: 21.08, Cx: 748.33, Cy: 54.42, Dx: 728.46, Dy: 54.64, Ex: 715.34, Ey: 26.64},
                    '20000': {Ax: 732.25, Ay: 15.34, Bx: 766.14, By: 21.08, Cx: 748.33, Cy: 54.42, Dx: 728.46, Dy: 54.64, Ex: 715.34, Ey: 26.64}
                },
                shadow: {
                    '0': {o: 0.3},
                    '8000': {o: 0.3},
                    '8200': {o: 0},
                    '9800': {o: 0},
                    '10000': {o: 0.3},
                    '20000': {o: 0.3}
                }
            },

            shield: {
                '0': {y: 0},
                '6000': {y: 0},
                '7000': {y: 80},
                '8000': {y: 0},
                '20000': {y: 0}
            },

            user: {
                root: {
                    '0': {y: 0},
                    '6000': {y: 0},
                    '7000': {y: 20},
                    '8000': {y: 0},
                    '20000': {y: 0}
                },

                smile: {
                    '0': {y: 277.08},
                    '6000': {y: 277.08},
                    '6500': {y:  281},
                    '7500': {y:  281},
                    '8000': {y: 277.08},
                    '20000': {y: 277.08}
                }
            },

            screen: {
                feed: {
                    '0': {y: 0},
                    '6000': {y: 0},
                    '8000': {y: -168},
                    '20000': {y: -168}
                },
                line: {
                    '0': {y1: 219.38, y2: 271.42, y3: 251.13, y4: 277.39},
                    '6000': {y1: 219.38, y2: 271.42, y3: 251.13, y4: 277.39},
                    '6500': {y1: 270, y2: 235, y3: 262, y4: 220},
                    '7000': {y1: 265, y2: 235, y3: 230, y4: 260},
                    '7500': {y1: 270, y2: 260, y3: 270, y4: 230},
                    '8000': {y1: 219.38, y2: 271.42, y3: 251.13, y4: 277.39},
                    '20000': {y1: 219.38, y2: 271.42, y3: 251.13, y4: 277.39}
                }
            },

            loupe: {
                root: {
                    '0': {x: 0, y: 0},
                    '3500': {x: 0, y: 0},
                    '4100': {x: -70, y: -100},
                    '4600': {x: -120, y: -60},
                    '5100': {x: -60, y: -60},
                    '5600': {x: 0, y: 0},
                    '20000': {x: 0, y: 0}
                },

                line: {
                    '0': {a: 0},
                    '3500': {a: 0},
                    '4100': {a: -40},
                    '4600': {a: -10},
                    '5100': {a: -50},
                    '5600': {a: 0},
                    '20000': {a: 0}
                },

                r1: {
                    '0': {s: 1},
                    '3200': {s: 1},
                    '3500': {s: 0},
                    '5600': {s: 0},
                    '6000': {s: 1.2},
                    '6200': {s: 1},
                    '20000': {s: 1}
                },

                r2: {
                    '0': {s: 1},
                    '3100': {s: 1},
                    '3400': {s: 0},
                    '5800': {s: 0},
                    '6200': {s: 1.2},
                    '6400': {s: 1},
                    '20000': {s: 1}
                },

                r3: {
                    '0': {s: 1},
                    '3000': {s: 1},
                    '3300': {s: 0},
                    '6000': {s: 0},
                    '6400': {s: 1.2},
                    '6600': {s: 1},
                    '20000': {s: 1}
                }
            },

            window: {
                text: {
                    '0': {o: 0},
                    '1500': {o: 18},
                    '2200': {o: 18},
                    '2300': {o: 0},
                    '20000': {o: 0}
                },

                lock: {
                    '0': {x: 1, y: 1, t: 0},
                    '1500': {x: 1, y: 1, t: 0},
                    '1800': {x: 1.1, y: 0.9, t: 0},
                    '2200': {x: 1, y: 1.05, t: -40},
                    '2500': {x: 1, y: 1, t: -40},
                    '10700': {x: 1, y: 1, t: -40},
                    '11000': {x: 1, y: 1, t: 0},
                    '20000': {x: 1, y: 1, t: 0}
                },
                spin: {
                    '0': {a: 0},
                    '1500': {a: 0},
                    '1800': {a: -10},
                    '2200': {a: 30},
                    '10000': {a: 30},
                    '10400': {a: -10},
                    '10700': {a: 0},
                    '20000': {a: 0}
                },
                form: {
                    '0': {x: 0},
                    '1800': {x: 0},
                    '2200': {x: -80},
                    '10700': {x: -80},
                    '11000': {x: 0},
                    '20000': {x: 0}
                }
            },

            mark: {
                '0': {s: 1},
                '5600': {s: 1},
                '5800': {s: 0},
                '6200': {s: 1.2},
                '6400': {s: 1},
                '20000': {s: 1}
            }
        },

        mark: function(data) {
            this.$mark.setAttribute('transform', 'translate(374.81 28.72) scale(' + data.s + ') translate(-374.81 -28.72)');
        },

        window: {

            text: function(data) {
                this.$window.t1.setAttribute('opacity', Math.min(data.o, 1));
                this.$window.t2.setAttribute('opacity', Math.min(data.o - 1, 1));
                this.$window.t3.setAttribute('opacity', Math.min(data.o - 2, 1));
                this.$window.t4.setAttribute('opacity', Math.min(data.o - 3, 1));
                this.$window.t5.setAttribute('opacity', Math.min(data.o - 4, 1));
                this.$window.t6.setAttribute('opacity', Math.min(data.o - 5, 1));
                this.$window.t7.setAttribute('opacity', Math.min(data.o - 6, 1));
                this.$window.t8.setAttribute('opacity', Math.min(data.o - 7, 1));
                this.$window.t9.setAttribute('opacity', Math.min(data.o - 10, 1));
                this.$window.t10.setAttribute('opacity', Math.min(data.o - 11, 1));
                this.$window.t11.setAttribute('opacity', Math.min(data.o - 12, 1));
                this.$window.t12.setAttribute('opacity', Math.min(data.o - 13, 1));
                this.$window.t13.setAttribute('opacity', Math.min(data.o - 14, 1));
                this.$window.t14.setAttribute('opacity', Math.min(data.o - 15, 1));
                this.$window.t15.setAttribute('opacity', Math.min(data.o - 16, 1));
                this.$window.t16.setAttribute('opacity', Math.min(data.o - 17, 1));
            },

            lock: function(data) {
                this.$window.lock.setAttribute('transform', 'translate(260.35 257.73) scale(' + data.x + ' ' + data.y + ') translate(-260.35 -257.73) translate(' + data.t + ' 0)')
            },

            spin: function(data) {
                this.$window.spin.setAttribute('transform', 'rotate(' + data.a + ' 268.4 237.91)');
            },

            form: function(data) {
                this.$window.f1.setAttribute('transform', 'translate(' + data.x + ' 0)');
                this.$window.f2.setAttribute('transform', 'translate(' + data.x + ' 0)');
                this.$window.f3.setAttribute('transform', 'translate(' + data.x + ' 0)');
            }

        },

        wheel: function (data) {
            this.$wheel.setAttribute('transform', 'rotate(' + data.a + ' 557.6 212.3)')
        },

        board: {
            root: function (data) {
                this.$board.root.setAttribute('transform', 'translate(994.65 353.82) scale(' + data.x + ' ' + data.y + ') translate(-994.65 -353.82)');
            },

            l1: function (data) {
                this.$board.l1.setAttribute('width', data.w);
            },

            l2: function (data) {
                this.$board.l2.setAttribute('width', data.w);
            },

            l3: function (data) {
                this.$board.l3.setAttribute('width', data.w);
            },

            spin: function (data) {
                this.$board.spin.setAttribute('transform', 'rotate(' + data.a + ' 941.58 223.574) translate(941.58 223.574) scale(' + data.s + ') translate(-941.58 -223.574)')
            },

            pie: function (data) {
                this.$board.pie.setAttribute('transform', 'translate(' + data.t + ' ' + -data.t + ')');
            },

            rect: function (data) {
                this.$board.rect.setAttribute('transform', 'translate(0 ' + data.y + ')')
            }
        },

        bulb: {
            root: function (data) {
                this.$bulb.root.setAttribute('transform', 'rotate(' + data.a + ' 887.4 103.76)');
            },
            line: function (data) {
                for (var i = 0; i < this.$bulb.line.length; i++) {
                    this.$bulb.line[i].setAttribute('height', data.h);
                    this.$bulb.line[i].setAttribute('y', data.y);
                }
            },
            text: function (data) {
                this.$bulb.text.setAttribute('transform', 'translate(887.451 62.895) scale(' + data.s + ') translate(-887.451 -62.895)');
                this.$bulb.text.setAttribute('opacity', data.o);
            }
        },

        cloud: {
            path: function (data) {
                this.$cloud.path.setAttribute('d', 'M ' + data.Ax + ' ' + data.Ay + ' A 1 1 0 0 1 ' + data.Bx + ' ' + data.By + ' A 1 1 0 0 1 ' + data.Cx + ' ' + data.Cy + ' A 1 1 0 0 1 ' + data.Dx + ' ' + data.Dy + ' A 1 1 0 0 1 ' + data.Ex + ' ' + data.Ey + ' A 1 1 0 0 1 ' + data.Ax + ' ' + data.Ay + '');
            },
            shadow: function(data) {
                this.$cloud.shadow1.setAttribute('opacity', data.o);
                this.$cloud.shadow2.setAttribute('opacity', data.o);
            }
        },

        shield: function(data) {
            this.$shield.setAttribute('transform', 'translate(0 ' + data.y + ')');
        },

        user: {

            root: function(data) {
                this.$user.root.setAttribute('transform', 'translate(0 ' + data.y + ')');
            },

            smile: function(data) {
                this.$user.smile.setAttribute('d', 'M 783.14,' + data.y + ' Q 792.36 282.25 801.59 ' + data.y + '');
            }

        },

        screen: {

            feed: function(data) {
                this.$screen.feed.setAttribute('transform', 'translate(0 ' + data.y + ')');
            },

            line: function(data) {
                this.$screen.c1.setAttribute('cy', data.y1);
                this.$screen.c2.setAttribute('cy', data.y2);
                this.$screen.c3.setAttribute('cy', data.y3);
                this.$screen.c4.setAttribute('cy', data.y4);
                this.$screen.line.setAttribute('points', '401.98 ' + data.y4 + ' 431.4 ' + data.y3 + ' 470.74 ' + data.y2 + ' 495.89 ' + data.y1 + '');
            }

        },

        loupe: {

            root: function(data) {
                this.$loupe.root.setAttribute('transform', 'translate(' + data.x + ' ' + data.y + ')');
                this.$loupe.area.setAttribute('transform', 'translate(' + data.x + ' ' + data.y + ')');
            },

            line: function(data) {
                this.$loupe.line.setAttribute('transform', 'rotate(' + data.a + ' 369.84 164.97)')
            },

            r1: function(data) {
                this.$loupe.r1.setAttribute('transform', 'translate(0 178.4) scale(1 ' + data.s + ') translate(0 -178.4)');
            },

            r2: function(data) {
                this.$loupe.r2.setAttribute('transform', 'translate(0 178.4) scale(1 ' + data.s + ') translate(0 -178.4)');
            },

            r3: function(data) {
                this.$loupe.r3.setAttribute('transform', 'translate(0 178.4) scale(1 ' + data.s + ') translate(0 -178.4)');
            }

        },

        init: function () {
            this.$window = {};
            this.$window.root = this.$root.querySelector('#window');
            this.$window.lock = this.$window.root.querySelector('#window-lock');
            this.$window.spin = this.$window.root.querySelector('#window-spin');
            this.$window.f1 = this.$window.root.querySelector('#window-f1');
            this.$window.f2 = this.$window.root.querySelector('#window-f2');
            this.$window.f3 = this.$window.root.querySelector('#window-f3');
            this.$window.t1 = this.$window.root.querySelector('#window-t1');
            this.$window.t2 = this.$window.root.querySelector('#window-t2');
            this.$window.t3 = this.$window.root.querySelector('#window-t3');
            this.$window.t4 = this.$window.root.querySelector('#window-t4');
            this.$window.t5 = this.$window.root.querySelector('#window-t5');
            this.$window.t6 = this.$window.root.querySelector('#window-t6');
            this.$window.t7 = this.$window.root.querySelector('#window-t7');
            this.$window.t8 = this.$window.root.querySelector('#window-t8');
            this.$window.t9 = this.$window.root.querySelector('#window-t9');
            this.$window.t10 = this.$window.root.querySelector('#window-t10');
            this.$window.t11 = this.$window.root.querySelector('#window-t11');
            this.$window.t12 = this.$window.root.querySelector('#window-t12');
            this.$window.t13 = this.$window.root.querySelector('#window-t13');
            this.$window.t14 = this.$window.root.querySelector('#window-t14');
            this.$window.t15 = this.$window.root.querySelector('#window-t15');
            this.$window.t16 = this.$window.root.querySelector('#window-t16');
            this.animate(this.keyframes.window.text, this.window.text, 'linear');
            this.animate(this.keyframes.window.lock, this.window.lock, 'inOut');
            this.animate(this.keyframes.window.spin, this.window.spin, 'inOut');
            this.animate(this.keyframes.window.form, this.window.form, 'inOut');
            this.$wheel = this.$root.querySelector('#wheel');
            this.animate(this.keyframes.wheel, this.wheel, 'inOut');
            this.$loupe = {};
            this.$loupe.root = this.$root.querySelector('#loupe');
            this.$loupe.line = this.$loupe.root.querySelector('#loupe-line');
            this.$loupe.r1 = this.$loupe.root.querySelector('#loupe-r1');
            this.$loupe.r2 = this.$loupe.root.querySelector('#loupe-r2');
            this.$loupe.r3 = this.$loupe.root.querySelector('#loupe-r3');
            this.$loupe.area = this.$root.querySelector('#loupe-area-circle');
            this.animate(this.keyframes.loupe.root, this.loupe.root, 'inOut');
            this.animate(this.keyframes.loupe.line, this.loupe.line, 'inOut');
            this.animate(this.keyframes.loupe.r1, this.loupe.r1, 'inOut');
            this.animate(this.keyframes.loupe.r2, this.loupe.r2, 'inOut');
            this.animate(this.keyframes.loupe.r3, this.loupe.r3, 'inOut');
            this.$screen = {};
            this.$screen.root = this.$root.querySelector('#screen');
            this.$screen.feed = this.$screen.root.querySelector('#screen-feed');
            this.$screen.line = this.$screen.root.querySelector('#screen-line');
            this.$screen.c1 = this.$screen.root.querySelector('#screen-c1');
            this.$screen.c2 = this.$screen.root.querySelector('#screen-c2');
            this.$screen.c3 = this.$screen.root.querySelector('#screen-c3');
            this.$screen.c4 = this.$screen.root.querySelector('#screen-c4');
            this.animate(this.keyframes.screen.feed, this.screen.feed, 'inOut');
            this.animate(this.keyframes.screen.line, this.screen.line, 'inOut');
            this.$shield = this.$root.querySelector('#shield');
            this.animate(this.keyframes.shield, this.shield, 'inOut');
            this.$user = {};
            this.$user.root = this.$root.querySelector('#user');
            this.$user.smile = this.$user.root.querySelector('#user-smile');
            this.animate(this.keyframes.user.root, this.user.root, 'inOut');
            this.animate(this.keyframes.user.smile, this.user.smile, 'inOut');
            this.$board = {};
            this.$board.root = this.$root.querySelector('#board');
            this.$board.l1 = this.$board.root.querySelector('#b-l1');
            this.$board.l2 = this.$board.root.querySelector('#b-l2');
            this.$board.l3 = this.$board.root.querySelector('#b-l3');
            this.$board.spin = this.$board.root.querySelector('#b-spin');
            this.$board.pie = this.$board.root.querySelector('#b-pie');
            this.$board.rect = this.$board.root.querySelector('#b-rect');
            this.animate(this.keyframes.board.root, this.board.root, 'inOut');
            this.animate(this.keyframes.board.l1, this.board.l1, 'inOut');
            this.animate(this.keyframes.board.l2, this.board.l2, 'inOut');
            this.animate(this.keyframes.board.l3, this.board.l3, 'inOut');
            this.animate(this.keyframes.board.spin, this.board.spin, 'inOut');
            this.animate(this.keyframes.board.pie, this.board.pie, 'inOut');
            this.animate(this.keyframes.board.rect, this.board.rect, 'inOut');
            this.$bulb = {};
            this.$bulb.root = this.$root.querySelector('#bulb');
            this.$bulb.line = this.$bulb.root.querySelectorAll('.bulb-line');
            this.$bulb.text = this.$bulb.root.querySelector('#bulb-text');
            this.animate(this.keyframes.bulb.root, this.bulb.root, 'inOut');
            this.animate(this.keyframes.bulb.line, this.bulb.line, 'inOut');
            this.animate(this.keyframes.bulb.text, this.bulb.text, 'inOut');
            this.$cloud = {};
            this.$cloud.root = this.$root.querySelector('#cloud');
            this.$cloud.path = this.$cloud.root.querySelector('#cloud-path');
            this.$cloud.shadow1 = this.$cloud.root.querySelector('#cloud-shadow-1');
            this.$cloud.shadow2 = this.$cloud.root.querySelector('#cloud-shadow-2');
            this.animate(this.keyframes.cloud.path, this.cloud.path, 'inOut');
            this.animate(this.keyframes.cloud.shadow, this.cloud.shadow, 'inOut');
            this.$mark = this.$root.querySelector('#check-mark');
            this.animate(this.keyframes.mark, this.mark, 'inOut');
        }

    });


    // ------------------
    // Helpers
    // ------------------

    function create(prototype) {
        var Icon = function () {
            Super.apply(this, arguments);
        };
        Icon.prototype = Object.create(Super.prototype);
        Icon.prototype.constructor = Icon;
        for (var n in prototype) {
            Icon.prototype[n] = prototype[n];
        }
        return Icon;
    }


    // ------------------
    // Export
    // ------------------

    return function (selector) {
        return [].slice.call(document.querySelectorAll(selector)).map(function (node) {
            return new Icon[node.getAttribute('data-icon')](node);
        });
    }


})(document);



