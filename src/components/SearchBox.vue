<template>
  <div class="row">
    <div class="input-group mb-5">
      <input type="search" v-model="searchInput" class="form-control" value="" placeholder="search..."
             aria-label="Username"
             aria-describedby="basic-addon1">
      <button class="input-group-text" id="basic-addon1" @click="searchTitle">search</button>

<!--      <template v-if="">-->
<!--        <TableView :todos-list=""/>-->
<!--      </template>-->

    </div>
  </div>
</template>

<script setup>

import {fetchData} from "@/mixin/fetchData";
import {ref} from "vue";
// import TableView from "@/components/TableView";

const searchInput = ref('');

const searchTitle = () => {
  const todosList = fetchData('https://jsonplaceholder.typicode.com/todos');
  if (todosList) {
    const foundTitle = todosList.filter(todo => todo.title.includes(searchInput.value) || todo.title === searchInput.value)
    console.log(foundTitle)
  }
}

</script>

<style scoped>

</style>