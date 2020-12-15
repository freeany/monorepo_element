import rrLink from '../src/link.vue'

export default {
  title: 'rrLink',
  component: rrLink
}

export const Link = _ => ({
  components: { rrLink },
  template: `
    <div>
      <rr-link disabled underline href="https://www.baidu.com">百度</rr-link>
    </div>
  `
})
