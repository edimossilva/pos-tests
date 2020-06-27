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

  it("should show 'Welcome {name} {surname}'", async () => {
    const wrapper = shallowMount(Form);
    wrapper.find('.form__label_name').setValue('edimo');
    wrapper.find('.form__label_lastname').setValue('sousa');

    await wrapper.vm.$forceUpdate(); // this makes vue update the DOM

    expect(wrapper.find('h2').text()).toBe('Welcome edimo sousa');
  });
});
