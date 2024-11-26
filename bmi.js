console.clear();
console.log('有成功載入bmi.js')
let weight = 165;
let height = 170;

const printBmi = (height, weight) => {
  let bmi = (weight/(height/100)**2) ;
  bmi = Number(bmi.toFixed(2));
  // isNaN() 方法：檢測參數是否為「非數值型態」。像是，字串或 undefined
  if(height<=0 || weight<=0 || isNaN(height) || isNaN(weight)){
    console.log('您的數值輸入錯誤，請重新輸入');
    return
  }else if(bmi < 18.5){
    console.log('您的體重過輕', bmi)
  }else if( bmi >= 18.5 && bmi < 24 ){
    console.log('您的體重正常')
  }else if( bmi >= 24 && bmi < 27 ){
    console.log('您的體重過重')
  }else if( bmi >= 27 && bmi < 30 ){
    console.log('您的體重輕度肥胖')
  }else if( bmi >= 30 && bmi < 35 ){
    console.log('您的體重中度肥胖')
  }else if( bmi >= 35 ){
    console.log('您的體重重度肥胖')
  }

};
printBmi(178, 20);
printBmi(178, 70);
printBmi(178, 85);
printBmi(178, 90);
printBmi(178, 110);
printBmi(178, 130);
printBmi("身高","體重");


