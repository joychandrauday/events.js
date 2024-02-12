function makeRed() {
    document.body.style.backgroundColor='yellow';
}

// const makeBlueBtn= document.getElementById('makeBlue');
// makeBlueBtn.onclick= makeBlue();
// function makeBlue(){
//     document.body.style.backgroundColor='blue';  
// }

const makeBlueBtn= document.getElementById('makeBlue');
makeBlueBtn.addEventListener('click',makeBlue)
function makeBlue() {
    document.body.style.backgroundColor='blue';  
}
const makePinkBtn= document.getElementById('makePink');
makePinkBtn.addEventListener('click',makePink)
function makePink() {
    document.body.style.backgroundColor='pink';  
}
const makeGreenBtn= document.getElementById('makeGreen');
makeGreenBtn.addEventListener('click',function makePink(){
    document.body.style.backgroundColor='green';  
})

document.getElementById('makeTomato').addEventListener("click",function() {
    
    document.body.style.backgroundColor='tomato';  
})


///////////////
document.getElementById('dummyText').addEventListener('click',function() {
    const changeDummytext=document.getElementById('dummyH3text')
    changeDummytext.innerText='the dummy text converted into a new one.';
})

///////
document.getElementById('inputSubmit').addEventListener('click',function() {
    const inputField=document.getElementById('inputName')
    const inputText=inputField.value;

    const inputValueChanged=document.getElementById('inputValue');
    inputValueChanged.innerText=inputText;
    inputField='';
})

////comment
document.getElementById('commentSubmit').addEventListener('click',function() {
    const commentBox=document.getElementById('commentInputForm');
    const newComment=commentBox.value;

    const newCommentContainer=document.getElementById('commentContainer');
    console.log(newCommentContainer);
    const p=document.createElement('p');
    p.innerText=newComment;
    
    newCommentContainer.appendChild(p);
    commentBox.value='';
})

//////counter

let countNumber=0;

document.getElementById('countPlus').addEventListener('click',function() {
    countNumber+=1;
    const count= document.getElementById('count');
    count.innerText=countNumber;
})
document.getElementById('countMinus').addEventListener('click',function() {
    countNumber-=1;
    const count= document.getElementById('count');
    count.innerText=countNumber;
})


//////add list item



document.getElementById('liSubmit').addEventListener('click',function() {
    const addedItem=document.getElementById('liInput')
    const addedItemText=addedItem.value;
    const listParent=document.getElementById('mainOl')
    const li=document.createElement('li')
    li.innerText=addedItemText;
    li.setAttribute('class','items')
    listParent.appendChild(li);

    addedItem.value='';
})
const targetLi = document.getElementById("mainOl").getElementsByTagName("li");
console.log(targetLi)
targetLi.addEventListener('click',function() {
    console.log(55)
})