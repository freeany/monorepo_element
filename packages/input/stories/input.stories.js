// 建立stories文件
import HrInput from '../'

export default {
  title: 'HrInput',
  component: HrInput
}

export const Text = () => ({
  components: { HrInput },
  template: '<hr-input v-model="value"></hr-input>',
  data() {
    return {
      value: 'admin'
    }
  }
})

export const Password = () => ({
  components: { HrInput },
  template: '<hr-input type="password" v-model="value"></hr-input>',
  data() {
    return {
      value: 'admin'
    }
  }
})
