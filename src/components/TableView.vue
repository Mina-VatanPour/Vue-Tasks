<template>
  <div class="row">
    <table class="table" id="tableTodos">
      <thead class="table-dark">
      <tr>
        <th>Id</th>
        <th>UserId -> UserName</th>
        <th>Title</th>
        <th>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" @click="showCompletedTodos">
            <label class="form-check-label" for="flexCheckDefault">
              Just Completed
            </label>
          </div>
          <!--          <div class="form-check" v-else>-->
          <!--            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">-->
          <!--            <label class="form-check-label" for="flexCheckDefault">-->
          <!--              Show All Todos-->
          <!--            </label>-->
          <!--          </div>-->
        </th>
      </tr>
      </thead>
      <tbody class="table-light" v-for="todo in todosList" :key="todo.id">
      <tr>
        <td>{{ todo.id }}</td>
        <td>{{ usersNames[todo.userId].name }}</td>
        <td>{{ todo.title }}</td>
        <td>{{ todo.completed ? todo.completed = 'completed' : '' }}</td>

      </tr>
      </tbody>
    </table>

  </div>

  <!--pagination-->
  <div class="row mt-5" v-if="todosList.length > 10">
    <ul class="pagination d-flex justify-content-center">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li class="page-item" v-for="(pagesCounter,index) in (todosList.length)/10" :key="index">
        <a class="page-link" href="#">
          {{ pagesCounter }}
        </a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </div>

</template>

<script setup>


import {defineProps, toRefs} from 'vue';
// import {fetchData} from '@/mixin/fetchData.js';

const props = defineProps(['todosList', 'users']);
const {todosList, users} = toRefs(props);
const usersNames = [];
for (const id of users) {
  console.log(id)
  usersNames.push(usersNames[id])
}

</script>

<style scoped>

</style>