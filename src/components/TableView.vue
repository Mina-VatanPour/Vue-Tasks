<template>
  <div class="row">
    <table class="table" id="tableTodos">
      <thead class="table-dark">
      <tr>
        <th @click="sortTodos('id')">Id &#8597;</th>
        <th>UserName</th>
        <th>Title</th>
        <th>
          <input class="form-check-input me-2" type="checkbox" v-model="selectCompletedTodos">
          <label class="form-check-label" id="statusTodos"> Just Completed Todos</label></th>
      </tr>
      </thead>

      <tbody class="table-light" v-for="todo in getTodosList" :key="todo.id">
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
  }
  else {
    return props.todosList
  }
})


let sortedByASC = ref(true);

function sortTodos(sortBy) {

  if (sortedByASC.value) {

    getTodosList.value.sort((x, y) => (x[sortBy] > y[sortBy] ? -1 : 1))
    sortedByASC.value = false;

  } else {
    getTodosList.value.sort((x, y) => (x[sortBy] < y[sortBy] ? -1 : 1));
    sortedByASC.value = true;
  }
}


</script>


<style scoped>
th:hover {
  cursor: pointer;
}
</style>