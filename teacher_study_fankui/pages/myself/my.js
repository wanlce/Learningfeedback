const app = getApp();
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    Unauthorized: true,
    showSetBtn: false,
    union: null,
    isGetPhone: true,
    canIUseSet: wx.canIUse('button.open-type.openSetting'),
    list: [
      {
        id: 'record',
        name: '课表查询',
        open: false,
        page: '../buyhistory/buyhistory',
        image: "../../images/my/record.png",
        show: true
      },{
        id: 'coupon',
        name: '空闲教室',
        open: false,
        page: '../coupon/coupon/coupon',
        image: "https://static.95303.com/static/images/coupon/coupon_icon_a.png",
        show: true
      },
      {
        id: 'faq',
        name: '图书馆藏',
        open: false,
        page: '../comproblem/comproblem',
        image: "../../images/my/faq.png",
        show: true
      },
      {
        id: 'claim',
        name: '考试安排',
        open: false,
        page: 'claim',
        image: "../../images/my/claim.png",
        show: true
      },
       {
         id: 'hotline',
         name: '文经新闻',
         open: false,
         page: 'hotline',
         image: "../../images/my/zixun.png",
         show: true
       },
       {
         id: 'invitation',
         name: '早起打卡',
         open: false,
         page: '../invitation/invitation',
         image: "../../images/my/invi.png",
         show: true
       },
       {
         id: 'authinfo',
         name: '教务查询',
         open: false,
         image: "../../images/my/set.png",
         show: true
       },
      {
        id: 'settting',
        page: 'settting',
        name: '校历',
        open: false,
        image: "../../images/my/set.png",
        show: false
      }
    ]
  },
  onLoad: function () {
  },
  onShow: function () {
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
    }
    return app.globalData.ShareAppMessage
  },
  logout:function(){
	  //退出登录
	  wx.setStorageSync('userInfo', false)
	  wx.reLaunch({
		  url: '/pages/index/index'
		})
	  
  }
})
