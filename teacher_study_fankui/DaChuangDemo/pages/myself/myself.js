// pages/myself/myself.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    routers: [
      {
        name: '课表查询',
        url: '/pages/feedbackInfo/feedbackInfo',
        icon: '/images/my/课表.png',

      },
      {
        name: '空闲教室',
        url: '/pages/Course/Course',
        icon: '../../images/my/课表.png',

      },
      {
        name: '图书馆藏',
        url: '/pages/Course/course',
        icon: '/images/my/课表.png',

      },
      {
        name: '考试安排',
        url: '/pages/Course/course',
        icon: '/images/my/课表.png',

      },
      {
        name: '文经新闻',
        url: '/pages/Course/course',
        icon: '/images/my/课表.png',

      },
      {
        name: '早起打卡',
        url: '/pages/Course/course',
        icon: '/images/my/课表.png',

      },
      {
        name: '教务查询',
        url: '/pages/Course/course',
        icon: '/images/my/课表.png',

      },
      {
        name: '校历',
        url: '/pages/Course/course',
        icon: '/images/my/课表.png',

      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    var that = this


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})