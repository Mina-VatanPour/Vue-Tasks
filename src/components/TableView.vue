<template>
  <div class="row">
    <table class="table" id="tableTodos">
      <thead class="table-dark">
      <tr>
        <th>Id</th>
        <th>UserName</th>
        <th>Title</th>
        <th>
          <input class="form-check-input me-2" type="checkbox" v-model="selectCompletedTodos">
          <label class="form-check-label" id="statusTodos"> Just Completed Todos</label></th>
      </tr>
      </thead>

      <tbody class="table-light" v-for="(todo,index) in getTodosList" :key="index">
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
import {computed, defineProps, reactive, ref} from 'vue';

const props = defineProps({
  todosList: Object,
  users: Object
})
let selectCompletedTodos = ref(false);
const getUsersNamesById = reactive({
  names: computed(() => {
    let usersById = [];
    for (let user of props.users) {
      usersById[user.id] = user;
    }
    return usersById;
  })
})
const getTodosList = computed(() => {
  if (selectCompletedTodos.value) {
    return props.todosList.filter(todo => todo.completed === 'completed');
  } else {
    return props.todosList
  }
})

</script>

<style scoped>

</style>