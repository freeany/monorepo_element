<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  provide() {
    return {
      Form: this
    }
  },
  name: 'LgForm',
  props: {
    model: {
      type: Object,
      default() {
        return {}
      }
    },
    rules: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    validate(cb) {
      let findItem = [] // 找到所有的children
      const searchFormItem = children => {
        if (!children || !Array.isArray(children) || children.length === 0)
          return
        children.map(item => {
          if (item.$options.name !== 'LgFormItem') {
            searchFormItem(item.$children)
          } else {
            findItem.push(item)
          }
        })
      }

      // 获取到所有是form-item 的 children 放到findItem中
      searchFormItem(this.$children)
      // 过滤出有prop属性的组件
      findItem = findItem.filter(item => item.prop)

      // 获取校验的结果
      const tasks = findItem
        .filter(item => item.$options.name === 'LgFormItem')
        .map(item => item.validate())

      // 执行用户传入的提交组件时的callback
      Promise.all(tasks)
        .then(() => cb(true))
        .catch(() => cb(false))
    }
  }
}
</script>

<style></style>
