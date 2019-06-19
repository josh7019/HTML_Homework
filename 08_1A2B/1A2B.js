function creatAnswer(n){
    let answer="";
    let rand;
    let isrepeat;
    for(let i=0;i<n;i++){
        do{
            isrepeat=false;
            rand=parseInt(Math.random()*9+1);
            for(let j=0;j<i;j++){
                if(rand==answer.substring(j,j+1)){
                    isrepeat=true;
                }
            }
        }while(isrepeat);
        answer+=rand;
    }
    console.log(answer);
    return answer;

}

function checkAB(ans,guess){
    let a=0,b=0;
    for(let i=0;i<ans.length;i++){
        if(guess.substring(i,i+1)==ans.substring(i,i+1)){
            a++;
        }else if(ans.indexOf(guess.substring(i,i+1))>=0){
            b++;
        }
        
    }
    return a+"a"+b+"b";
}
