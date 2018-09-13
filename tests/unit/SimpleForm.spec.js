import { shallowMount } from '@vue/test-utils'
import SimpleForm from '@/SimpleForm.vue'

describe('SimpleForm.vue', () => {
  it('renders props.msg when passed', () => {
    const component = shallowMount(SimpleForm)

    // assert component is rendered
    expect(component.is(SimpleForm)).toBe(true)
  })
})
