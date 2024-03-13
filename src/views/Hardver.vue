<template>

<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked v-model="isChecked">
  <label class="form-check-label" for="flexCheckChecked">
    Card
  </label>
</div>


  <div class="container">

    <card-Component v-if="isChecked" :products="products"/>
    <table-component v-else :products="products" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import tableComponent from '../components/tableComponent.vue';
import dataservice from '../services/dataservice';
import cardComponent from '../components/cardComponent.vue';

const isChecked = ref(false)
const products = ref();
dataservice.getAllProducts()
  .then((resp) => {
    products.value = resp;
    console.log(products.value);
  })
  .catch((err) => {
    console.log(err);
  });


</script>