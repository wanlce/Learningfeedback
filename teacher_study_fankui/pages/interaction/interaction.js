Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["学生反馈教师信息", "教师反馈学生信息"],
    dept: ["管理系", "会计系", "机电工程系", "建筑工程系", "会计系", "经济系", "食品与生物工程系", "体教部", "外国语言文学系", "信息工程系", "中文与法律系"],
    deptIndex: 0,
    activeIndex: 0
  },
  // 切换学生教师反馈信息
  tabClick: function (e) {
    this.setData({
      activeIndex: e.currentTarget.id
    })
  },
  stuNoInput: function (e) {
    this.setData({
      stuNo: e.detail.value
    })
  },
  // 选择系
  teacherDeptPicker: function (e) {
    this.setData({
      deptIndex: e.detail.value
    })
  },

  teacherNoInput: function (e) {
    this.setData({
      teacherNo: e.detail.value
    })
  },

  feedBackInput: function (e) {
    this.setData({
      feedBack: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let className = wx.getStorageSync('className')
    let deptIndex = wx.getStorageSync('deptIndex') ? wx.getStorageSync('deptIndex') : 0
    let teacherName = wx.getStorageSync('teacherName')
    this.setData({ className, deptIndex, teacherName })
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