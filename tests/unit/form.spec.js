import { shallowMount } from '@vue/test-utils';
import Form from '@/components/Form.vue';

describe('Form', () => {
  it('is a valid component ', () => {
    const wrapper = shallowMount(Form);
    expect(wrapper.exists()).toBe(true);
  });
  it("should has h1 equals to 'Form'", () => {
    const wrapper = shallowMount(Form);
    expect(wrapper.find('h1').text()).toMatch('Form');
  });
});
