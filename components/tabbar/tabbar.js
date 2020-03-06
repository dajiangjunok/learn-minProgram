// components/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    msg: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleToggle(ev) {
      const currentTitle = ev.currentTarget.dataset.title
      switch (currentTitle) {
        case '新款':
          this.setData({
            currentIndex: 0
          })
          break;
        case '流行':
          this.setData({
            currentIndex: 1
          })
          break;
        case '精选':
          this.setData({
            currentIndex: 2
          })
          break;

      }
    },
  }
})