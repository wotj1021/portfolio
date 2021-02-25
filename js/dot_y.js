const dot_box_y = document.getElementById('dot_box_y');
const circlesArr = [];
const rows = 15;
const cols = 15;

for(let i = 0; i < rows; i++){
    circlesArr[i] = []
    for(let j = 0; j < cols; j++){
        const circle = document.createElement('div')
        circle.classList.add('circle')
        dot_box_y.appendChild(circle)
        circlesArr[i].push(circle)
    }
}

circlesArr.forEach((cols, i) => {
    cols.forEach((circle, j) => {
        circle.addEventListener('click', () => {
            // console.log(i)
            // console.log(j)    
            // console.log(circlesArr[i][j])
            var change_color = []
            for(var q = 0; q < 3; q++){
                var num = Math.floor(Math.random() * 256)
                change_color.push(num)
            }
            var newRgb = 'rgb(' + change_color[0] + ','+ change_color[1] + ','+ change_color[2] + ')'
            // $(".circle").css({'background':newRgb})
            $(circlesArr[i][j]).css({'background':newRgb})
            // console.log("1")
            // $(".circle:nth-child(" + ((i*15) + 1 + j) + ")").css({'background':newRgb})
            growCircle(i, j);
        })
    })
})

function growCircle(i, j){
    if(circlesArr[i] && circlesArr[i][j]){
        if(!circlesArr[i][j].classList.contains('grow')){
            circlesArr[i][j].classList.add('grow')
            // console.log("1")
            setTimeout(( )=> {
                growCircle(i - 1, j)
                growCircle(i + 1, j)
                growCircle(i, j + 1)
                growCircle(i, j - 1)
            }, 100)
            setTimeout(() => {
                circlesArr[i][j].classList.remove('grow')
            },500)
        }
    }
}

    // const dot_box = document.getElementById('dot_box');
    // const circlesArr = [];
    // const rows = 30;
    // const cols = 30;

    // for(let i = 0; i < rows; i++){
    //     circlesArr[i] = []
    //     for(let j = 0; j < cols; j++){
    //         const circle = document.createElement('div')
    //         circle.classList.add('circle')
    //         dot_box.appendChild(circle)
    //         circlesArr[i].push(circle)
    //     }
    // }

    // circlesArr.forEach((cols, i) => {
    //     cols.forEach((circle, j) => {
    //         circle.addEventListener('click', () => {
    //             console.log("======================================")
    //             console.log(i)
    //             console.log(j)    
    //             console.log("======================================")    
    //             // console.log(circlesArr[i][j])
    //             var change_color = []
    //             for(var q = 0; q < 3; q++){
    //                 var num = Math.floor(Math.random() * 256)
    //                 change_color.push(num)
    //             }
    //             var newRgb = 'rgb(' + change_color[0] + ','+ change_color[1] + ','+ change_color[2] + ')'
    //             // $(".circle").css({'background':newRgb})
    //             $(circlesArr[i][j]).css({'background':newRgb})
    //             // $(".circle:nth-child(" + ((i*15) + 1 + j) + ")").css({'background':newRgb})
    //             growCircle(i, j);
    //         })
    //     })
    // })

    // function growCircle(i, j){
    //     if(circlesArr[i] && circlesArr[i][j]){
    //         if(!circlesArr[i][j].classList.contains('grow')){
    //             circlesArr[i][j].classList.add('grow')
    //             setTimeout(( )=> {
    //                 growCircle(i - 1, j)
    //                 growCircle(i + 1, j)
    //                 growCircle(i, j + 1)
    //                 growCircle(i, j - 1)
    //             }, 100)
    //             setTimeout(() => {
    //                 circlesArr[i][j].classList.remove('grow')
    //             },300)
    //         }
    //     }
    // }