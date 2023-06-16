<template>

  <div class="row home container">

<!--    <SearchBox/>-->
    <TableView :todos-list="todosList" :users="users"/>
<div>

</div>
  </div>
</template>


<script setup>
import TableView from '@/components/TableView';
// import SearchBox from '@/components/SearchBox';
import {fetchData} from '@/mixin/fetchData.js';

const todosList = fetchData('https://jsonplaceholder.typicode.com/todos');
const users = fetchData('https://jsonplaceholder.typicode.com/users');
</script>


<style scoped>
.home {
  margin: 100px auto;
}
</style>