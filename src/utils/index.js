const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

function getRandomSrting(length) {
   let result = '';
   const abcLength = abc.length;
   for (let i = 0; i < length; i++) {
      result += abc.charAt(Math.floor(Math.random() * abcLength));
   }
   return result;
}

function getRandomFloat(n) {
   return parseFloat((Math.random() * 100 + 1).toFixed(n));
}

function getRandomInteger() {
   return (Math.floor(Math.random() * 100) + 1);
}

function getSumValue(a, b) {
   return a + b;
}

function getRandomImagePath() {
   return `${getRandomSrting(3)}/${getRandomSrting(3)}.${getRandomArrayItem(['jpeg', 'png', 'svg'])}`;
}

function getRandomArrayItem(arr) {
   return arr[(Math.floor(Math.random() * arr.length))];
}


export function createRowData() {
   const rowData = [];
   var arr = ['str1', 'str2', 'str3', 'str4', 'str5'];
   for (var i = 0; i < 100; i++) {
      rowData.push({
         val1: getRandomSrting(10),
         val2: getRandomFloat(2),
         val3: getRandomFloat(4),
         val4: getRandomInteger(),
         val5: getRandomInteger(),
         val6: getRandomImagePath(),
         val7: getRandomSrting(10),
         val8: getRandomArrayItem(arr),
         aggregation: 'Aggregation',
      });
   }
   return rowData;
};
