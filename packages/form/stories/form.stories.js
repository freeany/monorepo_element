import HrForm from '../'
import HrFormItem from '../../formitem'
import HrInput from '../../input'
import HrButton from '../../button'

// export default 的是一级目录的名称
export default {
  title: 'HrForm',
  component: HrForm
}

export const login = () => ({
  components: { HrForm, HrFormItem, HrInput, HrButton },
  template: `
    <hr-form class="form" ref="form" :model="user" :rules="rules">
      <hr-button type="primary">
        <hr-form-item label="用户名" prop="username">
          <!-- <hr-input v-model="user.username"></hr-input> -->
          <hr-input
            :value="user.username"
            @input="user.username = $event"
            placeholder="请输入用户名"
          ></hr-input> </hr-form-item
      ></hr-button>

      <table>
        <tbody>
          <hr-form-item label="用户名" prop="username">
            <!-- <hr-input v-model="user.username"></hr-input> -->
            <hr-input
              :value="user.username"
              @input="user.username = $event"
              placeholder="请输入用户名"
            ></hr-input>
          </hr-form-item>
        </tbody>
      </table>

      <hr-form-item label="密码" prop="password">
        <hr-input
          type="password"
          placeholder="enter name"
          v-model="user.password"
        ></hr-input>
      </hr-form-item>
      <hr-form-item prop="cc">
        <hr-button type="primary" @click="login">登 录</hr-button>
      </hr-form-item>
      <hr-form-item>
        <hr-button type="primary" @click="login">q q</hr-button>
      </hr-form-item>
      <hr-input placeholder="test.." v-model="user.test"></hr-input>
    </hr-form>`,

  data() {
    return {
      user: {
        username: '',
        password: '',
        test: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
})
