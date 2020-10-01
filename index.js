document.getElementById('btn').addEventListener('click',showDiv);
let myDiv = true;
function showDiv () {
    let isShow = document.getElementById('div')   ;
    if(myDiv) {
        isShow.style.display = 'none';
        myDiv = false;
    } else {
        isShow.style.display = 'block';
        myDiv = true;
    }

}