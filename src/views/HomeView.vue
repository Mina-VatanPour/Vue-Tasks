<template>

  <div class="row home container">

    <!--SearchBox For Show Searched Titles-->
    <div class="row input-group">
      <div class=" input-group mb-3">
        <input type="search" class="form-control" placeholder="search titles ..." v-model="searchTitles">
      </div>
    </div>


    <!--CheckBox For Show Just Completed Todos-->
    <div class="row my-4">
      <div class=" col-md- 4 form-check d-flex justify-content-end">
        <input class="form-check-input me-2" type="checkbox"
               v-model="selectCompletedTodos">
        <label class="form-check-label"
               id="statusTodos"> Just Completed Todos</label>
      </div>
    </div>

    <TableView v-if="searchTitles" :todos-list="findTodosSearched" :users="users"/>

    <TableView v-else-if="selectCompletedTodos" :todos-list="getTodosCompleted" :users="users"/>

    <TableView v-else :todos-list="todosList" :users="users"/>

  </div>
</template>


<script setup>

import {useSearchTodos} from '@/mixin/search-todos';
import TableView from '@/components/TableView';
import {computed, ref} from 'vue';

const {todosList, users, getTodosCompleted} = useSearchTodos();

let selectCompletedTodos = ref(false);
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