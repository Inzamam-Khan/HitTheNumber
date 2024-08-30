export const randomNumber=()=>{
    let randomNumbers=new Array()
    for(let i=0;i<3;i++){
        randomNumbers.push(Math.floor(Math.random() *100)+1)
    }
    
    return randomNumbers
}



