export class Point {
    constructor(index, x, y) {
        // console.log("!")
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.1;
        this.cur = index;
        this.max = Math.random() * 100 + 150;
        // console.log("-!-")
    }

    update() {
        // console.log("?")
        this.cur += this.speed;
        this.y = this.fixedY + (Math.sin(this.cur) * this.max);
        // console.log("-?-")
    }
}