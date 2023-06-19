<template>
  <div class="row">
    <table class="table" id="tableTodos">
      <thead class="table-dark">
      <tr>
        <th>Id</th>
        <th>UserName</th>
        <th>Title</th>
        <th>Status</th>
      </tr>
      </thead>
      <tbody class="table-light" v-for="todo in props.todosList" :key="todo.id">
      <tr>
        <td>{{ todo.id }}</td>
        <td>{{ getUsersNamesById.names[todo.userId] ? getUsersNamesById.names[todo.userId].name : '' }}</td>
        <td>{{ todo.title }}</td>
        <td>{{ todo.completed ? todo.completed = 'completed' : '' }}</td>
      </tr>
      </tbody>
    </table>

  </div>

</template>

<script setup>
import {computed, defineProps, reactive} from 'vue';

const props = defineProps({
  todosList: Object,
  users: Object
})

const getUsersNamesById = reactive({
  names : computed(()=>{
      let usersById = [];
      for (let user of props.users) {
        usersById[user.id] = user;
      }
      return usersById;
  })
})


</script>

<style scoped>

</style>