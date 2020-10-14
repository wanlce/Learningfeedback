var util = require('../../utils/util.js');
Page({
    data: {
		feedbackTypeName:'学生反馈',
		feedbackTypeInfo:['学生反馈', '教师反馈'],
		feedbacklabel:'课堂感受',
		feedbacklabelInfo:['课堂感受','课堂问题','建议'],
		list: [{
		  id: 'view',
		  name: '学生反馈',
		  open: true,
		  pages: ['view', 'scroll-view', 'swiper', 'movable-view', 'cover-view']
		}],
		currentDate:'',
	},
	onLoad:function(){
		var nowDate =  wx.getStorageSync('nowDate')
		if( nowDate ){
			var TIME =  nowDate;
		}else{
			var TIME = util.formatTimeymd(new Date());
		}
		this.setData({
			currentDate:TIME
		})
	},
	feedbackType:function(){
		let that = this;
		let feedbackTypeInfo = that.data.feedbackTypeInfo;
		console.log(feedbackTypeInfo)
		wx.showActionSheet({
		  itemList: feedbackTypeInfo,
		  success(e) {
			if( e.tapIndex == 0){
				//学生反馈
				that.setData({
					feedbacklabelInfo:['课堂感受','课堂问题','建议'],
					feedbackTypeName:feedbackTypeInfo[e.tapIndex],
					feedbacklabel:'课堂感受'
				})
			}else if( e.tapIndex == 1 ){
				//教师反馈
				that.setData({
					feedbacklabelInfo:['考勤','课堂参与度','作业情况'],
					feedbackTypeName:feedbackTypeInfo[e.tapIndex],
					feedbacklabel:'考勤'
				})
			}
		  }
		})
	},
	feedbacklabel:function(){
		let that = this;
		let feedbacklabelInfo = that.data.feedbacklabelInfo;
		console.log(feedbacklabelInfo)
		wx.showActionSheet({
		  itemList: feedbacklabelInfo,
		  success(e) {
			  console.log(feedbacklabelInfo[e.tapIndex])
			 that.setData({
				feedbacklabel:feedbacklabelInfo[e.tapIndex]
			})
		  }
		})
	},
	feedbackDetail:function(e){
		wx.navigateTo({
		  url: './feedbackDetail?did=' + e.currentTarget.dataset.id,
		})	
	},
	selectRili:function(){
		wx.navigateTo({
		  url: './feedbackrili?date=' + this.data.currentDate,
		})
	},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
		var nowDate =  wx.getStorageSync('nowDate')
		if( nowDate ){
			var TIME =  nowDate;
		}else{
			var TIME = util.formatTimeymd(new Date());
		}
		this.setData({
			currentDate:TIME
		})
  },
})