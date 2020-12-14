import RrForm from '../'
import RrFormItem from '../../formitem'
import RrInput from '../../input'
import RrButton from '../../button'

// export default 的是一级目录的名称
export default {
  title: 'RrForm',
  component: RrForm
}

export const login = () => ({
  components: { RrForm, RrFormItem, RrInput, RrButton },
  template: `
    <rr-form class="form" ref="form" :model="user" :rules="rules">
      <rr-button type="primary">
        <rr-form-item label="用户名" prop="username">
          <!-- </rr-input v-model="user.username"></> -->
          <rr-input
            :value="user.username"
            @input="user.username = $event"
            placeholder="请输入用户名"
          ></rr-input> </rr-form-item
      ></rr-button>

      <table>
        <tbody>
          <rr-form-item label="用户名" prop="username">
            <!-- </rr-input v-model="user.username"></> -->
            <rr-input
              :value="user.username"
              @input="user.username = $event"
              placeholder="请输入用户名"
            ></rr-input>
          </rr-form-item>
        </tbody>
      </table>

      <rr-form-item label="密码" prop="password">
        <rr-input
          type="password"
          placeholder="enter name"
          v-model="user.password"
        ></rr-input>
      </rr-form-item>
      <rr-form-item prop="cc">
        <rr-button type="primary" @click="login">登 录</rr-button>
      </rr-form-item>
      <rr-form-item>
        <rr-button type="primary" @click="login">q q</rr-button>
      </rr-form-item>
      <rr-input placeholder="test.." v-model="user.test"></rr-input>
    </rr-form>`,

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
