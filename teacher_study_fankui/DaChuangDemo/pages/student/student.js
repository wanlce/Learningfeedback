Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onViewClick: function (event) {
    var dataset = event.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/feedback/feedback',
    })
  }
})