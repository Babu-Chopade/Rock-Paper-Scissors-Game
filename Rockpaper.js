let usescore=0;
let comscore=0;
let userwin;

const choice=document.querySelectorAll(".choice");
const mess=document.querySelector("#message");
const userscoreP=document.querySelector("#user-score");
const computerscoreP=document.querySelector("#computer-score");

const playGame=(userChoice)=>{
    //console.log("user choice is "+userChoice)
    const compchoice=genCompchoice();
    //console.log("computer choice is a "+compchoice);
    if(userChoice===compchoice){
        //console.log(" this game draw ....")
        mess.innerText="Game Draw ";
        mess.style.backgroundColor="#00000a";

    }
    else{
        userwin=true;
        
        if(userChoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userwin=compchoice==="rock"?true:false;
        }else{
            userwin=compchoice=="rock"?false:true;
        }
        showWinner(userwin,userChoice,compchoice);
    }
}

const showWinner=(userwin,userChoice,compchoice)=>{
    
    
    if(userwin==true){
        //console.log("your are win..");
        mess.innerText=`You win! your choice ${userChoice} beats ${compchoice}`;
        mess.style.backgroundColor="green";
        usescore++;
        userscoreP.innerText=usescore;

    }else{
        //console.log("you are lose");
        mess.innerText=`You Lose! computer choice ${compchoice} beats ${userChoice}`;
        comscore++;
        computerscoreP.innerText=comscore;
        mess.style.backgroundColor="red";

    }
}
const genCompchoice=()=>{
    const opertion=["rock","paper","sicssor"];
    const randomid=Math.floor(Math.random()*3);
    //console.log(opertion[randomid]);
    return opertion[randomid];


}

choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
     const userChoice=choice.getAttribute("id");
        genCompchoice();
        playGame(userChoice);
    })
    

})
