import RrButton from '../'

// export default 的是一级目录的名称123
export default {
  title: 'RrButton',
  component: RrButton
}

export const button = () => ({
  components: { RrButton },
  template: `
    <rr-button @click="handleClick">哈哈哈</rr-button>
    `,

  data() {
    return {}
  },
  methods: {
    handleClick() {
      console.log('handle-click...')
    }
  }
})
