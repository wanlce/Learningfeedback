Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
	classNum:[1,2,3,4,5,6,7,8,9,10,11,12],
    // xqj代表星期几上课，skjc代表第几节，skcd表示上课长度，如2代表连上2节，kcmc代表具体内容。
    wlist: [
      { "xqj": 1, "skjc": 2, "skcd": 3, "kcmc": "高等数学@综合楼3301" },
      { "xqj": 1, "skjc": 5, "skcd": 3, "kcmc": "高等数学@综合楼3301" },
      { "xqj": 2, "skjc": 1, "skcd": 2, "kcmc": "高等数学@综合楼3301" },
      { "xqj": 2, "skjc": 8, "skcd": 2, "kcmc": "高等数学@综合楼3301" },
      { "xqj": 3, "skjc": 4, "skcd": 1, "kcmc": "高等数学@综合楼3301" },
      { "xqj": 3, "skjc": 8, "skcd": 1, "kcmc": "高等数学@综合楼3301" },
      { "xqj": 3, "skjc": 5, "skcd": 2, "kcmc": "高等数学@综合楼3301" },
      { "xqj": 4, "skjc": 2, "skcd": 3, "kcmc": "高等数学@综合楼3301" },
      { "xqj": 4, "skjc": 8, "skcd": 2, "kcmc": "高等数学@综合楼3301" },
      { "xqj": 5, "skjc": 1, "skcd": 2, "kcmc": "高等数学@综合楼3301" },
      { "xqj": 6, "skjc": 3, "skcd": 2, "kcmc": "高等数学@综合楼3301" },
      { "xqj": 7, "skjc": 5, "skcd": 3, "kcmc": "高等数学@综合楼3301" },
    ]
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		wx.removeStorageSync('editClass')
		var myClass = wx.getStorageSync('myClass');
		this.setData({
			wlist:myClass
		})
  },
  onViewClick: function (event) {
    var dataset = event.currentTarget.dataset;
	console.log(dataset.index)
	console.log(this.data.wlist)
	let that = this;
	wx.setStorage({
		  key:"editClass",
		  data:that.data.wlist[dataset.index]
		})
	wx.showActionSheet({
	  itemList: ['编辑课程','反馈','删除课程'],
	  success(e) {
		if( e.tapIndex == 0){
			//编辑课程
			wx.navigateTo({
			  url: '/pages/feedbackInfo/classedit?index=' + dataset.index,
			})
		}else if( e.tapIndex == 1 ){
			//反馈
			wx.navigateTo({
			  url: '/pages/feedbackInfo/feedbackInfo',
			})
		}else if( e.tapIndex == 2 ){
			
			var wlist = that.data.wlist.splice(dataset.index,1);
			
			wx.setStorage({
			  key:"myClass",
			  data:that.data.wlist
			})
			that.setData({
				wlist:that.data.wlist
			})
		}
	  }
	})
  },
  //点击空白地区
  onViewClick123:function(e){
		let addClass = {'xqj':e.currentTarget.dataset.id,'skjc':e.currentTarget.dataset.indexval}
		wx.setStorage({
		  key:"addClass",
		  data:addClass
		})
		wx.showActionSheet({
		  itemList: ['添加课程'],
		  success(e) {
			if( e.tapIndex == 0){
				//编辑课程
				wx.navigateTo({
				  url: '/pages/feedbackInfo/classedit',
				})
			}
		  }
		})
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
	var myClass = wx.getStorageSync('myClass');
	this.setData({
		wlist:myClass
	})
	wx.removeStorageSync('editClass')
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