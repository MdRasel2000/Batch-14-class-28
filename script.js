

let twodimensionalArry = [
    ["surma", "soni", "saima", "sanjida"],
    ["jerin", "jeva", "jemi", "jamini"],
    ["tania", "tasnim", "tonni", "toshi"],
    ["abonti", "ava", "airin", "asmita"],

]

console.log(twodimensionalArry[0][0]);
console.log(twodimensionalArry[0][1]);
console.log(twodimensionalArry[0][2]);
console.log(twodimensionalArry[0][3]);

console.log(twodimensionalArry[1][0]);
console.log(twodimensionalArry[1][1]);
console.log(twodimensionalArry[1][2]);
console.log(twodimensionalArry[1][3]);

console.log(twodimensionalArry[2][0]);
console.log(twodimensionalArry[2][1]);
console.log(twodimensionalArry[2][2]);
console.log(twodimensionalArry[2][3]);

console.log(twodimensionalArry[3][0]);
console.log(twodimensionalArry[3][1]);
console.log(twodimensionalArry[3][2]);
console.log(twodimensionalArry[3][3]);


for(i=0; i<=3; i++){ 
   
    for(j=0; j<=3; j++){

        console.log(twodimensionalArry[i][j]);
    }
    

}



let class8 = [
    [88, 20, 78, 10, 87],
    [76, 90, 11, 22, 33],
    [32, 56, 89, 99, 46],

    ]
     
    for(i=0; i<=2; i++){
       
         if(i==0){
           console.log("section:A");
         }
         else if(i=1){
            console.log("section:B");

         }

         else if(i==2){
            console.log("section:c");

         }
        for(j=0; j<=4; j++){
            if(class8[i][j]){
                console.log("pass");
            }
            else{
                console.log("fail");
            }
        }
    }
