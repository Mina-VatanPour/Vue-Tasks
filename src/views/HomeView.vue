<template>

  <div class="row home container">

    <!--CheckBox For Show Just Completed Todos-->
    <div class="row my-4">
      <div class=" col-md- 4 form-check d-flex justify-content-end">
        <input class="form-check-input me-2" type="checkbox"
               v-model="selectCompletedTodos">
        <label class="form-check-label"
               id="statusTodos"> Just Completed Todos</label>
      </div>
    </div>

    <TableView v-if="selectCompletedTodos" :todos-list="getTodosCompleted" :users="users"></TableView>

    <TableView v-else :todos-list="todosList" :users="users"/>

  </div>
</template>


<script setup>

import {useSearchTodos} from '@/mixin/search-todos';
import TableView from '@/components/TableView';
import {ref} from 'vue';

const {todosList, users, getTodosCompleted} = useSearchTodos();
let selectCompletedTodos = ref(false);

</script>

<style scoped>
.home {
  margin: 100px auto;
}
</style>