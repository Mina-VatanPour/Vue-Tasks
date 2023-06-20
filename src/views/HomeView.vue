<template>

  <div class="row home container">

    <SearchBox @find-titles-searched="getSearchedTitles($event)"/>

    <TableView :todos-list="todosListFinal" :users="users"/>

  </div>
</template>


<script setup>

import {useSearchTodos} from '@/composable/search-todos';
import TableView from '@/components/TableView';
import SearchBox from '@/components/SearchBox';
import {computed, ref} from 'vue';

const {todosList, users} = useSearchTodos();
const titles = ref(null);

const getSearchedTitles = (searchedTitles) => {
  titles.value = searchedTitles
  return titles.value
}

const todosListFinal = computed(() => {
  if (titles.value) {
    return todosList.value.filter(todo => todo.title === titles.value || todo.title.includes(titles.value))
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