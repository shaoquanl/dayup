var WxParse = require('../../wxParse/wxParse.js');
var app = getApp();
Page({
	data: {
		id: 0,
		item: null,
		wxParseData: ''
	},
	onReady: function(){
		wx.setNavigationBarTitle({
			title: this.data.item.title
		})

	},
	onLoad: function(){
		var data = app.globalData.detailData;
		console.log(data)
		var that = this;
		data.wxParseData = WxParse('html', data.item.body)
		if(data && data.id){
			this.setData(data)
		}
	}
})