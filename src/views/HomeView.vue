<template>

  <div class="row home container">

    <div class="row input-group">
      <div class=" input-group mb-3">
        <input type="search" class="form-control" placeholder="search titles ..." v-model="searchTitles">
      </div>
    </div>


    <TableView v-if="searchTitles" :todos-list="findTodosSearched" :users="users"/>

    <TableView v-else :todos-list="todosList" :users="users"/>

  </div>
</template>


<script setup>

import {useSearchTodos} from '@/composable/search-todos';
import TableView from '@/components/TableView';
import {computed, ref} from 'vue';

const {todosList, users} = useSearchTodos();
let searchTitles = ref(null);
const findTodosSearched = computed(() => {
  if (searchTitles.value) {
    return todosList.value.filter(item => item.title === searchTitles.value || item.title.includes(searchTitles.value))
  } else {
    return todosList.value
  }
})

</script>

<style scoped>
.home {
  margin: 100px auto;
}
</style>