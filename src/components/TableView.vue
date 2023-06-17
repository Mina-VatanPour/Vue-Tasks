<template>
  <div class="row">
    <table class="table" id="tableTodos">

      <thead class="table-dark">
      <tr>
        <th>Id</th>
        <th>UserId -> UserName</th>
        <th>Title</th>
        <th>Status</th>
      </tr>
      </thead>

      <tbody class="table-light" v-for="todo in props.todosList" :key="todo.id">
      <tr>
        <td>{{ todo.id }}</td>
        <td>{{ usersById[todo.userId] ? usersById[todo.userId].name : '' }}</td>
        <td>{{ todo.title }}</td>
        <td>{{ todo.completed ? todo.completed = 'completed' : '' }}</td>
      </tr>

      </tbody>
    </table>

  </div>

</template>

<script setup>

import {defineProps} from 'vue';

const props = defineProps({
  todosList: Object,
  users: Object
})

let usersById = [];
for (let user of props.users) {
  usersById[user.id] = user;

}
</script>

<style scoped>

</style>