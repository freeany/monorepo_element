// 建立stories文件
import RrInput from '../'

export default {
  title: 'RrInput',
  component: RrInput
}

export const Text = () => ({
  components: { RrInput },
  template: '<rr-input v-model="value"></rr-input>',
  data() {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { RrInput },
  template: '<rr-input type="password" v-model="value"></rr-input>',
  data() {
    return {
      value: 'admin'
    }
  }
})
