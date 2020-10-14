Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["学生反馈", "教师反馈"],
    dept: ["管理系", "会计系", "机电工程系", "建筑工程系", "会计系", "经济系", "食品与生物工程系", "体教部", "外国语言文学系", "信息工程系", "中文与法律系"],
    deptIndex: 0,
    activeIndex: 0
  },
  // 选择系
  teacherDeptPicker: function (e) {
    this.setData({
      deptIndex: e.detail.value
    })
  },
  // 切换学生反馈和教师反馈
  tabClick: function (e) { 
    this.setData({
      activeIndex: e.currentTarget.id
    })
  },

  classNameInput: function (e) {
    this.setData({
      className: e.detail.value
    })
  },

  teacherNameInput: function (e) {
    this.setData({
      teacherName: e.detail.value
    })
  },
  
  classTimeInput: function (e) {
    this.setData({
      classTime: e.detail.value
    })
  },

  classWhereInput: function (e) {
    this.setData({
      classWhere: e.detail.value
    })
  },

  feedBackInput: function (e) {
    this.setData({
      feedBack: e.detail.value
    })
  },

  stuNoInput: function (e) {
    this.setData({
      stuNo: e.detail.value
    })
  },

  stuNameInput: function (e) {
    this.setData({
      stuName: e.detail.value
    })
  },
  // 提交按钮
  submit: function (e) {
    this.setData({

    })
  },
  // 匿名反馈
  niMingFB:function()
  {
    wx.navigateTo({
      url: '/pages/feedbackInfo/feedbackInfo',
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