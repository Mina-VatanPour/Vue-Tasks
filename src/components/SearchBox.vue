<template>
  <div class="row input-group">
    <div class=" input-group mb-3">
      <input type="search" class="form-control" @change="searchTitlesFunction"
             placeholder="search titles ...">
    </div>
  </div>
</template>

<script setup>

import {defineEmits} from "vue";

const emmit = defineEmits(['findTitlesSearched']);
const searchTitlesFunction = (e) => {
  return emmit('findTitlesSearched', e.target.value);
}

</script>

<style scoped>

</style>