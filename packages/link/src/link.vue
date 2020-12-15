<template>
  <div>
    <a
      :href="!disabled ? href : null"
      :class="[disabled && 'disabled', underline && 'no-underline']"
    >
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'rrLink',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String
    },
    underline: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.disabled {
  cursor: not-allowed;
}
.no-underline {
  text-decoration: none;
}
</style>
