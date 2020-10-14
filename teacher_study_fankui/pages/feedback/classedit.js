Page({
  /**
   * 页面的初始数据
   */
  data: {
    result: '',
    tabs: ["学生反馈", "教师反馈"],
    dept: ["软件学院", "会计系", "机电工程系", "建筑工程系", "会计系", "经济系", "食品与生物工程系", "体教部", "外国语言文学系", "信息工程系", "中文与法律系"],
    deptIndex: 0,
    activeIndex: 0,
    niming_flag:1,
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

  s_classNameInput: function (e) {
    this.setData({
      s_className: e.detail.value
    })
  },

  t_classNameInput: function (e) {
    this.setData({
      t_className: e.detail.value
    })
  },
  teacherNameInput: function (e) {
    this.setData({
      teacherName: e.detail.value
    })
  },

  s_classTimeInput: function (e) {
    this.setData({
      s_classTime: e.detail.value
    })
  },

  t_classTimeInput: function (e) {
    this.setData({
      t_classTime: e.detail.value
    })
  },

  s_classWhereInput: function (e) {
    this.setData({
      s_classWhere: e.detail.value
    })
  },

  t_classWhereInput: function (e) {
    this.setData({
      t_classWhere: e.detail.value
    })
  },

  feeling: function (e) {
    this.setData({
      feeling: e.detail.value
    })
  },

  question: function (e) {
    this.setData({
      question: e.detail.value
    })
  },

  suggestion: function (e) {
    this.setData({
      suggestion: e.detail.value
    })
  },


  attendence_rate: function (e) {
    this.setData({
      attendence_rate: e.detail.value
    })
  },

  positive_rate: function (e) {
    this.setData({
      positive_rate: e.detail.value
    })
  },

  job_completion: function (e) {
    this.setData({
      job_completion: e.detail.value
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
  s_submit: function (e) {
    if (this.data.activeIndex == 0) {
      wx.request({
        url: 'http://127.0.0.1:8000/feedback/',	//获取服务器地址，此处为本地地址
        header: {
          "content-type": "application/x-www-form-urlencoded"		//使用POST方法要带上这个header
        },
        method: "POST",
        data: {		//向服务器发送的信息
          //  deptIndex:this.data.deptIndex,
          activeIndex: this.data.activeIndex,
          s_className: this.data.s_className,
          teacherName: this.data.teacherName,
          s_classTime: this.data.s_classTime,
          s_classWhere: this.data.s_classWhere,
          feeling: this.data.feeling,
          question: this.data.question,
          suggestion: this.data.suggestion
        },
        success: res => {
          if (res.statusCode == 200) {
            //  this.setData({
            //    result: res.data.role	//服务器返回的结果
            //  })
            if (res.data.front == 0) {
              wx.switchTab({
                url: '../feedbackInfo/feedbacklist',
              })
            }
          }
        }
      })
    }
  },

  t_submit: function (e) {
    wx.request({
      url: 'http://127.0.0.1:8000/feedback/',	//获取服务器地址，此处为本地地址
      header: {
        "content-type": "application/x-www-form-urlencoded"		//使用POST方法要带上这个header
      },
      method: "POST",
      data: {		//向服务器发送的信息
        //  deptIndex:this.data.deptIndex,
        stuNo: this.data.stuNo,
        stuName: this.data.stuName,
        t_className: this.data.t_className,
        t_classTime: this.data.t_classTime,
        t_classWhere: this.data.t_classWhere,
        attendence_rate: this.data.attendence_rate,
        positive_rate: this.data.positive_rate,
        job_completion: this.data.job_completion
      },
      success: res => {
        if (res.statusCode == 200) {
          //  this.setData({
          //    result: res.data.role	//服务器返回的结果
          //  })
          if (res.data.front == 0) {
            wx.switchTab({
              url: '../feedbackInfo/feedbacklist',
            })
          }
        }
      }
    })
  },

  // 匿名反馈
  niMingFB: function (e) {
    if (this.data.activeIndex == 0) {
      wx.request({
        url: 'http://127.0.0.1:8000/feedback/',	//获取服务器地址，此处为本地地址
        header: {
          "content-type": "application/x-www-form-urlencoded"		//使用POST方法要带上这个header
        },
        method: "POST",
        data: {		//向服务器发送的信息
          //  deptIndex:this.data.deptIndex,
          niming_flag: this.data.niming_flag,
          activeIndex: this.data.activeIndex,
          s_className: this.data.s_className,
          teacherName: this.data.teacherName,
          s_classTime: this.data.s_classTime,
          s_classWhere: this.data.s_classWhere,
          feeling: this.data.feeling,
          question: this.data.question,
          suggestion: this.data.suggestion
        },
        success: res => {
          if (res.statusCode == 200) {
            //  this.setData({
            //    result: res.data.role	//服务器返回的结果
            //  })
            if (res.data.front == 0) {
              wx.switchTab({
                url: '../feedbackInfo/feedbacklist',
              })
            }
          }
        }
      })
  }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let className = wx.getStorageSync('className')
    let deptIndex = wx.getStorageSync('deptIndex') ? wx.getStorageSync('deptIndex') : 0
    let teacherName = wx.getStorageSync('teacherName')
    this.setData({ className, deptIndex, teacherName})
    var niming_flag=this.data.niming_flag
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