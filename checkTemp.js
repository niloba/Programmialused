function checkTemp(temp){
    if(temp<20){
    console.log("liiga külm")
        return -1}
    else if(temp>20 && temp<40){
    console.log("paras")
        return 0}
    else if(temp>40 && temp<60){
    console.log("liiga kuum")
        return 1}
    
}
checkTemp(prompt("Sisesta arv 1-60"))

