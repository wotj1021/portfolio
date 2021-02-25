function cubic_set(){
    document.querySelector('#cubic_all > #cubic_1').setAttribute('class', 'cubic')
    document.querySelector('#cubic_all > #cubic_2').setAttribute('class', 'cubic')
    document.querySelector('#cubic_all > #cubic_3').setAttribute('class', 'cubic')
    document.querySelector('#cubic_all > #cubic_4').setAttribute('class', 'cubic')
    document.querySelector('#cubic_all > #cubic_5').setAttribute('class', 'cubic')
    document.querySelector('#cubic_all > #cubic_6').setAttribute('class', 'cubic')
    document.querySelector('#cubic_all > #cubic_7').setAttribute('class', 'cubic')

    var userValue = document.getElementById("set_cubic").value
    console.log(document.getElementById("set_cubic").value)
    // document.querySelector('#cubic_all > #cubic_7').style.animation = (0,2.23,.06,.1);
    $('#cubic_7').css({"animation-timing-function":"cubic-bezier(" + userValue + ")"})
    // document.querySelector('#cubic_all > #cubic_7').animate([
    //     {'animation-timing-function' : 'ease'}
    //     // {'animation-timing-function' : 'cubic-bezier(0,2.23,.06,.1)'}
    // ])
    // document.querySelector('#cubic_all > #cubic_1').setAttribute('class', 'cubic addCubic')
    // document.querySelector('#cubic_all > #cubic_2').setAttribute('class', 'cubic addCubic')
    // document.querySelector('#cubic_all > #cubic_3').setAttribute('class', 'cubic addCubic')
    // document.querySelector('#cubic_all > #cubic_4').setAttribute('class', 'cubic addCubic')
    // document.querySelector('#cubic_all > #cubic_5').setAttribute('class', 'cubic addCubic')
    // document.querySelector('#cubic_all > #cubic_6').setAttribute('class', 'cubic addCubic')
    // document.querySelector('#cubic_all > #cubic_7').setAttribute('class', 'cubic addCubic')
}

window.onload = () => {
    document.querySelector('#cubic-start').addEventListener('click',function(){
        console.log("start")
        document.querySelector('#cubic_all > #cubic_1').setAttribute('class', 'cubic addCubic')
        document.querySelector('#cubic_all > #cubic_2').setAttribute('class', 'cubic addCubic')
        document.querySelector('#cubic_all > #cubic_3').setAttribute('class', 'cubic addCubic')
        document.querySelector('#cubic_all > #cubic_4').setAttribute('class', 'cubic addCubic')
        document.querySelector('#cubic_all > #cubic_5').setAttribute('class', 'cubic addCubic')
        document.querySelector('#cubic_all > #cubic_6').setAttribute('class', 'cubic addCubic')
        document.querySelector('#cubic_all > #cubic_7').setAttribute('class', 'cubic addCubic')
    })
    document.querySelector('#cubic-stop').addEventListener('click',function(){
        console.log("stop")
        document.querySelector('#cubic_all > #cubic_1').setAttribute('class', 'cubic')
        document.querySelector('#cubic_all > #cubic_2').setAttribute('class', 'cubic')
        document.querySelector('#cubic_all > #cubic_3').setAttribute('class', 'cubic')
        document.querySelector('#cubic_all > #cubic_4').setAttribute('class', 'cubic')
        document.querySelector('#cubic_all > #cubic_5').setAttribute('class', 'cubic')
        document.querySelector('#cubic_all > #cubic_6').setAttribute('class', 'cubic')
        document.querySelector('#cubic_all > #cubic_7').setAttribute('class', 'cubic')
    })
}