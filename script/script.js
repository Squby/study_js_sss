let num = 266219,
    numM = [],
    SuperSum = 1,
    str = num.toString(10),
    powSuperSum,
    powSuperStr;
    
    for (let i = 0; i < str.length; i++){
    numM[i] = +str[i]}
    
    for (let i = 0; i < str.length; i++){
        SuperSum = SuperSum * numM[i]}

    powSuperSum = SuperSum*SuperSum*SuperSum;
    powSuperStr = powSuperSum.toString(10);
    console.log(powSuperStr.substring(0 , 2));