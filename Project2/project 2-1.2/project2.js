let btnselector = document.querySelectorAll(".button")

 let Pscore=0;
 let Cscore=0;

 btnselector.forEach((button)=>{
      button.addEventListener("click",click=()=>{
          const option=["Paper","Sezer","Rock"]
          const computerInput=option[Math.floor(Math.random()*3)];
          //  console.log(computerInput);
          const humanInput=button.textContent;
          
          compare(computerInput,humanInput);
        
          updatescore();
          if(checkwiner()){
               Pscore=0;
               Cscore=0;
               updatescore();
          }

     })
})

     const  compare=(computerInput,humanInput)=>{
          
          let answer=document.getElementById("answer");
      if(humanInput==="Paper" && computerInput==="Rock"){
      let answer=document.getElementById("answer");
      answer.innerHTML=`<center><h2>your choose-${humanInput}</h2>
      <h2> computer answer-${computerInput}</h2>

      Winner = your winner
      </center>
      `;
      Pscore++;
 }
 
 else if(humanInput==="Rock" && computerInput==="Sezer"){

          answer.innerHTML=`<center>
      <h2> computer answer-${computerInput}</h2>               
      <h2> Human answer-${humanInput}</h2>
      Winner = your winner
      </center>
      `
      Pscore++;
 }
 else if(humanInput==="Rock" && computerInput==="Paper"){

answer.innerHTML=`<center>
      <h2> computer answer-${computerInput}</h2>               
      <h2> Human answer-${humanInput}</h2>
      Winner = computer is winner
      </center>
      `
       Cscore++;
      ;
 }
 else if(humanInput==="Paper" && computerInput==="Sezer"){

answer.innerHTML=`<center>
      <h2> computer answer-${computerInput}</h2>               
      <h2> Human answer-${humanInput}</h2>
      Winner = computer is winner
      </center>
      `
      Cscore++;
      ;
 }
 else if(humanInput==="Sezer" && computerInput==="Rock"){

      answer.innerHTML=`<center>
      <h2> computer answer-${computerInput}</h2>               
      <h2> Human answer-${humanInput}</h2>
      Winner = computer  winner
      </center>
      `
      Cscore++;
      
 }
 
 
 else if(humanInput==="Sezer" && computerInput==="Paper"){

     answer.innerHTML=`<center>
     <h2> computer answer-${computerInput}</h2>               
     <h2> Human answer-${humanInput}</h2>
     Winner = computer winner
     </center>
     `
     Cscore++
     ;
}
 else if(humanInput===computerInput){

     answer.innerHTML=`<center>
     <h2> computer answer-${computerInput}</h2>               
     <h2> Human answer-${humanInput}</h2>
     Winner = computer and human winner
     </center>
     `
     Cscore++;
     Pscore++;
     ;
}
else{
answer.innerHTML=`<center>
<h2> computer answer-${computerInput}</h2>               
<h2> Human answer-${humanInput}</h2>
  <h1>Error in function</h1>
</center>
`;
}
//  console.log(humanInput);
//  console.log(computerInput);
          
          
}   
          
             const checkwiner=()=>{
               if(Pscore===5 || Cscore===5){
                    Pscore ===5 ?alert("yor are winner"):alert("computer is winner");
                    return true;
               }
               else{
                    return false;
               }
             }

     const updatescore=()=>{
          document.getElementById("P-score").textContent = Pscore
          document.getElementById("C-score").textContent = Cscore;
          
     }