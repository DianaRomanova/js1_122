function sumMix(x){
    const initValue = 0;
   const sumWithInitial = x.reduce(
     (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue),
     initValue
   );
     return sumWithInitial
   }