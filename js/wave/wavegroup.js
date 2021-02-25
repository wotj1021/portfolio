import {
    Wave
} from './wave.js'

export class WaveGroup {
    constructor() {
        // console.log("a")
        this.totalWaves = 2;
        this.totalPoints = 3;
        
        this.color = ['#f005', '#ff05', '#0f05', '#0ff5', '#f0f5', '#00f5'];
        
        this.waves = [];
        
        for(let i = 0; i < this.totalWaves; i++){
            const wave = new Wave(
                i,
                this.totalPoints,
                this.color[i],
                
                // console.log("a.1")
                );
            this.waves[i] = wave;
        }
        // console.log("-a-")
    }

    resize(stageWidth, stageHeight) {
        // console.log("b")
        for(let i = 0; i < this.totalWaves; i++){
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
            console.log("-b-")
        }
    }

    draw(ctx){
        // console.log("c")
        for(let i = 0; i < this.totalWaves; i++){
            const wave = this.waves[i];
            wave.draw(ctx);
        }
        // console.log("-c-")
    }
}