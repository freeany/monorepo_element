<template>
  <div>
    <input :type="type" :value="value" v-bind="$attrs" @input="inputHandle" />
  </div>
</template>

<script>
export default {
  name: 'RrInput',
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    inputHandle(e) {
      this.$emit('input', e.target.value)
      // let hasFormItem = ''
      const searchFormItem = parent => {
        if (!parent) return
        if (parent.$options.name !== 'LgFormItem') {
          parent = parent.$parent
          return searchFormItem(parent)
        } else {
          // hasFormItem = parent
          return parent
        }
      }
      const formItem = searchFormItem(this.$parent)
      formItem && formItem.validate() // 也可以使用发布订阅模式， 在此发布，在formItem中订阅，并调用formItem的validate方法，区别是啥？
    }
  }
}
</script>

<style></style>
