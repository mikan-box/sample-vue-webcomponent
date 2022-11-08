<template>
  <button>
    {{ title }}
  </button>
</template>

<script>
export default {
    props: {
        title: String,
    },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>

<style scoped>

</style>