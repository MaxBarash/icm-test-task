<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'

</script>

<template>
   <WelcomeItem>
      <template #icon>
         <DocumentationIcon />
      </template>
      <template #heading>Task #1</template>
      <p>Необходимо написать функцию, которая бы генерировала массив объектов n со следующими элементами:</p>
      <code>
      <p>{<br>
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
   </WelcomeItem>
   <WelcomeItem>
      <template #icon>
         <ToolingIcon />
      </template>
      <template #heading>Task #2</template>
      <p>Сгенерировать 100 єлементов массива:</p>
      <br />
   </WelcomeItem>

   <WelcomeItem>
      <template #icon>
         <EcosystemIcon />
      </template>
      <template #heading>Необходимо реализовать таблицу <a href="https://www.ag-grid.com/"
            target="_blank">AgGrid</a></template>
      <br>

   </WelcomeItem>
</template>
