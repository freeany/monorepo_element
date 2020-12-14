<template>
  <div>
    <label>{{ label }}</label>
    <slot></slot>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  name: 'RrFormItem',
  inject: ['Form'],
  data() {
    return {
      errorMessage: ''
    }
  },
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    }
  },
  mounted() {
    this.validate()
  },
  methods: {
    validate() {
      if (!this.prop) return
      const { rules, model } = this.Form
      const value = rules[this.prop]
      const key = model[this.prop]
      // 如果规则中没有配置这个属性的话，就直接通过
      if (!value) return Promise.resolve()
      // 设置校验描述符
      const descriptor = {
        [this.prop]: value
      }
      const validator = new Schema(descriptor)
      // 进行校验
      return validator.validate({ [this.prop]: key }, errors => {
        if (errors) {
          this.errorMessage = errors[0].message
        } else {
          this.errorMessage = ''
        }
      })
    }
  }
}
</script>

<style></style>
