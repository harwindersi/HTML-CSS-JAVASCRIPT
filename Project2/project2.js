   
   let m = Math.floor(Math.random()*3);
   let obj=["Paper","Sezer","Rock"]
   console.log(m);
   console.log(obj * m)

const paper=()=>{
     let human="paper"
     let pInput= this.textContent;
    console.log(pInput)
     human=0;
     if(human===m){
      console.log("human win")
     }
     else{
      console.log("computer win")
     }
     
     }
    
    const rock=()=>{
        // let human="rock";
        human=1;
        if(human===m){
         console.log("human win")
        }
        else{
         console.log("computer win")
        }
    
    }
    
    const sezer=()=>{
        // let human="sezer";
        human=2;
        if(human===m){
         console.log("human win")
        }
        else{
         console.log("computer win")
        }
    }
    
