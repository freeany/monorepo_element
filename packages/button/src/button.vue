<template>
  <div>
    <button @click="handleClick"><slot></slot></button>
  </div>
</template>

<script>
// 123
export default {
  name: 'RrButton',
  methods: {
    handleClick(evt) {
      this.$emit('click', evt)
      evt.preventDefault()
    }
  }
}
</script>

<style></style>
