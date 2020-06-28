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

    expect(wrapper.find('.form__h2_welcome_message').text()).toBe('Welcome edimo sousa');
  });

  describe('computed', () => {
    describe('fullname', () => {
      it("should be equals to 'name lastname'", () => {
        const wrapper = shallowMount(Form, {
          data: () => ({ name: 'edimo', lastName: 'sousa' }),
        });
        expect(wrapper.vm.fullname).toBe('edimo sousa');
      });
    });

    describe('isFormCompleted', () => {
      describe('When has name and lastName', () => {
        describe('And name and lastName are valids', () => {
          it('should be true', () => {
            const wrapper = shallowMount(Form, {
              data: () => ({ name: 'edimo', lastName: 'sousa' }),
            });
            expect(wrapper.vm.isFormCompleted).toBe(true);
          });
        });

        describe('And name and lastName are NOT valids', () => {
          it('should be false When name is invalid', () => {
            const wrapper = shallowMount(Form, {
              data: () => ({ name: 'e', lastName: 'sousa' }),
            });
            expect(wrapper.vm.isFormCompleted).toBe(false);
          });

          it('should be false When lastName is invalid', () => {
            const wrapper = shallowMount(Form, {
              data: () => ({ name: 'edimo', lastName: 's' }),
            });
            expect(wrapper.vm.isFormCompleted).toBe(false);
          });
        });
      });

      it('should be false when has only name', () => {
        const wrapper = shallowMount(Form, {
          data: () => ({ name: 'edimo', lastName: '' }),
        });
        expect(wrapper.vm.isFormCompleted).toBe(false);
      });

      it('should be false when has only lastName', () => {
        const wrapper = shallowMount(Form, {
          data: () => ({ name: '', lastName: 'sousa' }),
        });
        expect(wrapper.vm.isFormCompleted).toBe(false);
      });

      it('should be false when has (name and lastName) empty', () => {
        const wrapper = shallowMount(Form, {
          data: () => ({ name: '', lastName: '' }),
        });
        expect(wrapper.vm.isFormCompleted).toBe(false);
      });
    });
  });
  describe('Welcome message', () => {
    describe('When is form completed', () => {
      it('should show welcome message', () => {
        const wrapper = shallowMount(Form, {
          data: () => ({ name: 'edimo', lastName: 'sousa' }),
        });
        expect(wrapper.find('.form__h2_welcome_message').text()).toBe('Welcome edimo sousa');
        expect(wrapper.find('.form__h2_welcome_message').exists()).toBe(true);
      });
    });

    describe('When form is not completed', () => {
      it('not show welcome message', async () => {
        const wrapper = shallowMount(Form, {
          data: () => ({ name: 'edimo', lastName: '' }),
        });

        expect(wrapper.find('.form__h2_welcome_message').exists()).toBe(false);
      });
    });
  });

  describe('Address', () => {
    describe('When name and lastname are filled', () => {
      const wrapper = shallowMount(Form, {
        computed: { isFormCompleted: () => true },
      });
      it('should has Address label', () => {
        expect(wrapper.find('.form__h1_address').text()).toBe('Address');
        expect(wrapper.find('.form__h1_address').exists()).toBe(true);
      });
    });

    describe('When name and lastname are NOT filled', () => {
      const wrapper = shallowMount(Form, {
        computed: { isFormCompleted: () => false },
      });
      it('should NOT has Address label', () => {
        expect(wrapper.find('.form__h1_address').exists()).toBe(false);
      });
    });

    describe('Validations', () => {
      describe('hasOnlyLetters', () => {
        describe('When has only letters', () => {
          it('returns true', () => {
            const wrapper = shallowMount(Form);

            expect(wrapper.vm.hasOnlyLetter('edimo')).toBe(true);
          });
          it('returns false', () => {
            const wrapper = shallowMount(Form);

            expect(wrapper.vm.hasOnlyLetter('123')).toBe(false);
          });
        });
      });
      describe('isValidString', () => {
        describe('When string is valid', () => {
          it('should return true', () => {
            const wrapper = shallowMount(Form);

            expect(wrapper.vm.isValidString('edimo')).toBe(true);
          });
        });
        describe('When string is NOT valid', () => {
          it('should return false', () => {
            const wrapper = shallowMount(Form);

            expect(wrapper.vm.isValidString('e')).toBe(false);
          });
        });
      });
    });
  });
  it('!!', () => {
    expect(!!'edimo').toBe(true);

    expect(!!false).toBe(false);
    expect(!!NaN).toBe(false);
    expect(!!0).toBe(false);
    expect(!!null).toBe(false);
    expect(!!undefined).toBe(false);
    expect(!!'').toBe(false);
  });
});
