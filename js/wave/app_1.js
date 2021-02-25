import {
    WaveGroup
}   from './wavegroup.js';

class App {
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        document.getElementById("main_card9").appendChild(this.canvas);
        
        // console.log("-1.1-")
        this.waveGroup = new WaveGroup();  
        // console.log("1")

        window.addEventListener('resize', this.resize.bind(this), false);
        // console.log("-1.2-")
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
        // console.log("-1-")
    }

    resize() {
        // console.log("2")
        this.stageWidth = document.getElementById("main_view").clientWidth;
        this.stageHeight = document.getElementById("main_view").clientHeight;
        console.log(this.stageWidth)
        console.log(this.stageHeight)
        
        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2)
        
        // console.log("2.1")
        this.waveGroup.resize(this.stageWidth, this.stageHeight);
        // console.log("-2-")
    }

    animate(t) {
        // console.log("3")
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)
        
        this.waveGroup.draw(this.ctx);

        requestAnimationFrame(this.animate.bind(this));
        // console.log("-3-")
    }
}

window.onload = () => {
    new App();
}