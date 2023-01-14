<script setup>

</script>

<template>
   <WelcomeItem class="task">
      <div class="task1">
         <h2>Task #1</h2>
         <p>Необходимо написать функцию, которая бы генерировала массив объектов n со следующими элементами:</p>
         <code class="code">
      <p>{
         <br>
         <a>val1: </a>random string, length 10,<br>
         <a>val2: </a>random float 2 decimal,<br>
         <a>val3: </a>random float 4 decimal,<br>
         <a>val4: </a>random int,<br>
         <a>val5: </a>random int,<br>
         <a>val6: </a>random img path,<br>
         <a>val7: </a>random string, length 10,<br>
         <a>val8: </a>одно из 5ти значений строк: <br>[str1, str2, str3, str4, str5]<br>
         }
      </p>
      </code>
         <h2>Task #2</h2>
         <h3>Сгенерировать 100 єлементов массива:</h3>
         <br />
         <h2>Task #2</h2>
         <h3>Необходимо реализовать таблицу <a href="https://www.ag-grid.com/" target="_blank">AgGrid</a></h3>
         <br>
      </div>
   </WelcomeItem>
</template>

<style>
.task1 {
   top: 0;
}

.task {
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
}

.code {
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: left;
}
</style>