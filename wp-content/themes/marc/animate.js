/**
 * Animator
 * blah-blah-blah
 */

var Animate = (function(Math) {
    // ------------------
    // Storage
    // ------------------
    var Animations = [];
    // ------------------
    // Helpers
    // ------------------
    function sort(a, b) {
        return a - b;
    }
    // ------------------
    // Easing
    // ------------------
    var Easing  = {
        linear: function(k) {
            return k;
        },

        inOut: function(k) {
            if ((k *= 2) < 1) {
                return 0.5 * k * k;
            }
            return - 0.5 * (--k * (k - 2) - 1);
        },

        in: function(k) {
            return k * k;
        },

        out: function(k) {
            return k * (2 - k);
        }

    };
    // ------------------
    // requestAnimationFrame
    // ------------------
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (function() {
            return window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function(callback) {
                    window.setTimeout(callback, 1000 / 60);
                };
        })();
    }
    // ------------------
    // Animation
    // ------------------
    function Animation(keyframes, callback, easing) {
        this.stopped = false;
        this.keyframes = keyframes;
        this.callback = callback;
        this.easing = easing;
        this.steps = Object.keys(keyframes).sort(sort);
        this.max = Math.max.apply(Math, this.steps);
        this.min = Math.min.apply(Math, this.steps);
        this.duration = this.max - this.min;
    }
    Animation.prototype = {
        step: function(pass) {
            for (var i = 0; i < this.steps.length; i++) {
                if (pass < this.steps[i]) return {
                    a: this.steps[i - 1],
                    b: this.steps[i]
                };
            }
        },
        data: function(a, b, t) {
            var o = {};
            for (var n in this.keyframes[a]) {
                o[n] = this.keyframes[a][n] + (this.keyframes[b][n] -  this.keyframes[a][n]) * t;
            }
            return o;
        },
        play: function() {
            this.start = Date.now();
            this.stopped = false;
        },
        stop: function() {
            this.start = 0;
            this.update(this.duration - 1);
            this.stopped = true;
        },
        update: function(time) {
            if (this.stopped) return;
            var p = this.min + (time - this.start - this.min) % this.duration;
            var s = this.step(p);
            var k = (p - s.a) / (s.b - s.a);
            var t = this.easing(k);
            var o = this.data(s.a, s.b, t);
            this.callback(o);
        }
    };
    // ------------------
    // Loop
    // ------------------
    function update() {
        for (var i = 0; i < Animations.length; i++) {
            Animations[i].update(Date.now());
        }
        window.requestAnimationFrame(update);
    }
    update();
    // ------------------
    // Export
    // ------------------
    return function(keyframes, callback, easing) {
        var animation = new Animation(keyframes, callback, Easing[easing] || Easing.inOut);
        Animations.push(animation);
        return animation;
    };
})(Math);


