let flag1 = flag2 = flag3 = flag4 = flag5 = 1;
let year = prompt("Enter a year (YYYY): ");

if(year <= 999){
    document.write("Year should be greater than 999.");
    flag1 = 0;
}

let month = prompt("Enter a month (MM): ");
if(month <= 0 || month > 12){
    document.write("Month should be in the range of 1-12.");
    flag2=0;
}

let day = prompt("Enter a day (1-31): ");
if(day <= 0 || day > 31){
    document.write("Day should be in the range of 1-31.");
    flag3=0;
}

let hour = prompt("Enter a hour(1-24): ");
if(hour <= 0 || hour > 24){
    document.write("Hour should be in the range of 1-24.");
    flag4=0;
}

let minutes = prompt("Enter a minutes(1-60): ");
if(minutes <= 0 || minutes > 60){
    document.write("Minutes should be in the range of 1-60.");
    flag5=0;
}

if(flag1==flag2==flag3==flag4==flag5 == 1){
    
    if(month >= 1 && month <= 9){
        month = '0'+month;
    }
    
    if(day >= 1 && day <= 9){
        day = '0'+day;
    }
    
    if(hour >= 1 && hour <= 9){
        hour = '0'+hour;
    }
    
    if(minutes >= 1 && minutes <= 9){
        minutes = '0'+minutes;
    }
    
    document.write("Date: "+ year+"-"+ month +"-"+ day +" "+ hour + ":"+ minutes);
}
else{
document.write("Invalid Input, Please Check!");
}
