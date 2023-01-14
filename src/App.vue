<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
   <header>
      <nav>
         <RouterLink class="task" to="/">Task</RouterLink>
         <RouterLink class="about" to="/about">FirstTable</RouterLink>
      </nav>
      <RouterView />
   </header>
</template>

<style scoped>
.task,
.about {
   margin: 10px;
}


header {
   width: 100%;
   height: 100vh;
}

nav {
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 0 auto;
}
</style>
