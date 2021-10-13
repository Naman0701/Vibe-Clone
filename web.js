setInterval(upTime,1000);
function upTime(){
let now=new Date();
let samay=now.toLocaleString('en-US',{hour: 'numeric',minute:'numeric'})
time.innerHTML=samay;
}