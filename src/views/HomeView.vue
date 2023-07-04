<template>

  <div class="row home container">

    <SearchBox @find-titles-searched="getSearchedTitles($event)"/>

    <TableView :todos-list="todosListFinal" :users="users"/>

    <!--Pagination-->
    <div class="row mt-5">
      <ul class="pagination d-flex align-items-center justify-content-center">
        <li class="page-item">
          <button :disabled="currentPage === 1" @click="currentPage--" class="p-1">Prev</button>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">
            <span>{{ currentPage }} of {{ totalPage }}</span>
          </a>
        </li>
        <li class="page-item">
          <button :disabled="currentPage === totalPage" @click="currentPage++" class=" p-1">Next</button>
        </li>
      </ul>
    </div>

  </div>
</template>


<script setup>

import {useSearchTodos} from '@/composable/search-todos';
import TableView from '@/components/TableView';
import SearchBox from '@/components/SearchBox';
import {computed, ref} from "vue";

const {todosList, users} = useSearchTodos();

const titles = ref(null);
const getSearchedTitles = (searchedTitles) => {
  titles.value = searchedTitles
  return titles.value
}

let currentPage = ref(1);
let pageSize = 10;
let totalPage = ref(1)


const todosListFinal = computed(() => {

  if (titles.value) {
    const searched = todosList.value.filter(todo => todo.title === titles.value || todo.title.includes(titles.value));
    totalPage = Math.ceil(searched.length / pageSize);
    if (searched.length >= 10) {
      return searched.slice((currentPage.value - 1) * pageSize, currentPage.value * pageSize);
    }
    return searched
  } else {
    totalPage = Math.ceil(todosList.value.length / pageSize);
    if (todosList.value.length >= 10) {
      return todosList.value.slice((currentPage.value - 1) * pageSize, currentPage.value * pageSize);
    }
    return todosList
  }
})


</script>

<style scoped>
.home {
  margin: 100px auto;
}
</style>