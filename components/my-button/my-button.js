// components/my-button/my-button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(){
      this.triggerEvent('increment',{name:'Alger',age:18})
    }
  }
})
