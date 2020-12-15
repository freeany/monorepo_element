import input from '../src/input.vue'
import { mount } from '@vue/test-utils'

// rr-input是名字
describe('rr-input', () => {
  // 测试函数
  test('input-text', () => {
    // 现在内存中进行挂载input组件
    const wrapper = mount(input)
    // 判断组件生成的html是否包含 <input type="text" />
    // wrapper.html() 得到的是<div><input type=\"text\"></div>
    expect(wrapper.html()).toContain('input type="text"')
  })

  // 测试密码框
  test('input-password', () => {
    const wrapper = mount(input, {
      propsData: {
        type: 'password',
        value: 'admin'
      }
    })
    expect(wrapper.html()).toContain('input type="password')
    // 测试传递的值是否是admin
    expect(wrapper.props('value')).toBe('admin')
  })

  // 测试快照, 存储快照...测试的快照会存放到当前文件夹下的__snapshots__/input.test.js.snap
  // yarn test -u 重新生成快照
  test('input-snapshot', () => {
    const wrapper = mount(input, {
      propsData: {
        type: 'text',
        value: 'admin'
      }
    })
    expect(wrapper.vm.$el).toMatchSnapshot()
  })
})
