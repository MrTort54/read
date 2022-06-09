let place = document.getElementById('place')
let area = document.getElementById('area')
let add = document.getElementById('add')
let speedViev = document.getElementById('speedViev')

let speedReading = 500
speedViev.innerText = speedReading;

add.onclick = () => {
    formTrriger(1)
    let txt = area.value;
    let n = 0;
    let arr = clear(txt.split(' '));
    
    let x = setInterval(function(){
        place.innerHTML = arr[n];

        if(n<=arr.length-1){
            n++;

        }else{
            clearInterval(x);
            place.innerHTML = '';
            formTrriger(0)
        }

    },speedReading)

}


function clear(arr){
    let ClearArr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]!==''){
            ClearArr.push(arr[i])

        }
    }
    return ClearArr
}

function formTrriger(state){
    if(state === 1){
        place.style.display = 'flex'
        add.style.display = 'none'
        area.style.display = 'none'
        speed.style.display = 'none'
        speedViev.style.display = 'none'
    }else if(state === 0){
        place.style.display = 'none'
        add.style.display = 'block'
        area.style.display = 'block'
        speed.style.display = 'block'
        speedViev.style.display = 'block'
    }
}

function nightTrriger(state){
    if(state=== 1){
        wrap.style.backgroundColor = '#fff';
        area.style.backgroundColor = '#fff';
        area.style.border = '1px solid #333'
        area.style.color = '#333'
        add.style.color = '#333'
        add.style.backgroundColor = 'rgb(0,0,0,0,2)'
        add.style.border = '1px solid #333'
        speedViev.style.color = '#333';
        place.style.color = '#333'
    }
    else if(state=== 0){
        wrap.style.backgroundColor = '333';
        area.style.backgroundColor = '#000';
        area.style.border = 'none'
        area.style.color = '#fff'
        add.style.color = '#bbb'
        add.style.backgroundColor = '000'
        add.style.border = 'none'
        speedViev.style.color = '#fff';
        place.style.color = '#fff'
    }
}
let state = 0;
nightMode.onclick = function(){
    if(state===0){
        nightTrriger(1)
        state = 1;

    }else{
        nightTrriger(0)
        state = 0;
        
    }
}


speed.onchange = function(){
    speedViev.innerHTML = this.value;
    speedReading = speed.value
}


function setFocus(word){
    if(word.length %2===0){
        let FocusIndex = (word/2)-1;
        console.log(word[focusIndex])
    }else{
        let FocusIndex = ((word.length+1)/2)-1;
        console.log(word[focusIndex])
    }

}

