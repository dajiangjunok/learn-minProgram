// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    name: 'codeWang',
    users: [{
      name: '张三',
      age: 29,
      gender: '男'
    }, {
      name: '王五',
      age: 9,
      gender: '女'
    }, {
      name: '技安',
      age: 18,
      gender: '男'
    } ],
    counter:0
  },

  addClick(){
    // 错误方式，小程序不是vue  不能够通过直接更改数据去更新页面
    // this.data.counter++
    this.setData({
      counter: this.data.counter+1
    })
  },
  subClick(){
    this.setData({
      counter: this.data.counter - 1
    })
  },
  bindGetUserInfo(res){
    this.setData({
      userInfo: res.detail.userInfo
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})