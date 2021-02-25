import {
    Point
}   from './point.js';

export class Wave{
    constructor(index, totalPoints, color) {
        // console.log("ㄱ")
        this.index = index;
        this.totalPoints = totalPoints;
        this.color = color;
        this.points = [];
        // console.log("-ㄱ-")
    }

    resize(stageWidth, stageHeight) {
        // console.log("ㄴ")
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;

        this.centerX = stageWidth / 2;
        this.centerY = stageHeight / 2;

        this.pointGap = this.stageWidth / (this.totalPoints - 1);

        this.init();
        // console.log("-ㄴ-")
    }

    init() {
        // console.log("ㄷ")
        this.points = [];
        
        for(let i = 0; i < this.totalPoints; i++){
            // console.log("ㄷ.1")
            const point = new Point(
                this.index + i,
                this.pointGap * i,
                this.centerY,
                );
                // console.log("ㄷ.2")
            this.points[i] = point;
        }
        // console.log("-ㄷ-")
    }

    // init() {             처음 붉은 점 하나
    //     this.point = new Point(
    //         this.centerX,
    //         this.centerY
    //     )
    // }

    draw(ctx) {
        // console.log("ㄹ")
        ctx.beginPath();
        ctx.fillStyle = this.color;

        let prevX = this.points[0].x;
        let prevY = this.points[0].y;

        ctx.moveTo(prevX, prevY);
        // console.log(":::::::: : " + prevX)
        // console.log(":::::::: : " + prevY)

        
        console.log("==============================")
        for(let i = 1; i < this.totalPoints; i++){
            if(i < this.totalPoints - 1){
                this.points[i].update();
            }

            const cx = (prevX + this.points[i].x) / 2;
            const cy = (prevY + this.points[i].y) / 2;
            // 직선함수
            // ctx.lineTo(cx, cy);
            
            // 곡선함수
            ctx.quadraticCurveTo(prevX, prevY, cx, cy);
            console.log("111111111 : " + prevX)
            console.log("111111111 : " + prevY)
            console.log("111111111 : " + cx)
            console.log("111111111 : " + cy)
            
            prevX = this.points[i].x;
            prevY = this.points[i].y;
        }
        ctx.lineTo(prevX, prevY);
        console.log("aaaaaaaaaaaa : " + prevX)
        console.log("aaaaaaaaaaaa : " + prevY)
        ctx.lineTo(this.stageWidth, this.stageHeight);
        console.log("this.stageWidth : " + this.stageWidth)
        console.log("this.stageHeigh : " + this.stageHeight)
        ctx.lineTo(this.points[0].x, this.stageHeight);
        console.log("this.points[0] : " + this.points[0])
        console.log("this.stageHeight : " + this.stageHeight)
        ctx.fill();
        ctx.closePath();
        console.log("-----------------------------")
        // console.log("-ㄹ-")
    }


    // draw(ctx) {          처음 붉은 점 하나
    //     ctx.beginPath();
    //     ctx.fillStyle = '#ff0000';

    //     this.point.update();

    //     ctx.arc(this.point.x, this.point.y, 30, 0, 2 * Math.PI);
    //     ctx.fill();
    // }
}