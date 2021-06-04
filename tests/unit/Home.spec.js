import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import usecase from'../../src/domain/usecase'

import employes from'../../src/domain/store/modules/employes'
import user from'../../src/domain/store/modules/user'
import home from '../../src/views/views/Home.vue'
const localVue = createLocalVue()

localVue.use(Vuex)

describe('home.vue', () => {
  let actions
  let state
  let store

  beforeEach(() => {
    usecase.user.updateUser=()=>{
      user.state.user="saeed"
      ;return true
    }
        store = new Vuex.Store({
      modules: {
        employes,user
      }
    })
  })

  it('renders disable home button when fetch data', () => {
 
    
    const wrapper = shallowMount(home, { store, localVue })
    const button = wrapper.find('button')
     button.trigger('click')
  
    expect(user.state.user).toEqual("saeed")
  })
})
