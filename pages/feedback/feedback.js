// pages/feedback/feedback.js
Page({

  /**
   * Page initial data
   */
  data: {

  },


  toastSuccess:function(){
    wx.showToast({
      title: 'Congrats! Ray',
      icon:'succcess',
      duration:2000
    })
  },

  onShareAppMessage:function(){
    return{
      title:'title you wanna share',
      desc:'describe it',
      path:"/page/user?id=123"
    }
  },


  toastLoading:function(){
    wx.showToast({
      title: 'Wait! Ray',
      icon: 'loading',
      duration: 2000
    })
  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})