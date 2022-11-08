<template>
  <button @click="increment">increment</button>
  <div class="counter">{{ count }}</div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>

<style scoped>
.counter {
  color: rebeccapurple;
  font-size: 16px;
}
</style>