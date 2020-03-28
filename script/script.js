let num = 266219,
    str = num.toString(10),
    num1 = +str[0],
    num2 = +str[1],
    num3 = +str[2],
    num4 = +str[3],
    num5 = +str[4],
    num6 = +str[5],
    numSum = num1 * num2 * num3 * num4 * num5 * num6,
    numPow = numSum * numSum *numSum,
    numStr = numPow.toString(10);
    console.log(numStr[0] + numStr[1] );
/*

4) Вывести на экран первые 2 цифры полученного числа


5) В отдельном репозитории для усложненных уроков, добавить папку или ветку со вторым уроком в свой репозиторий на GitHub
*/