// pages/storageAPI/storageAPI.js
Page({

  /**
   * Page initial data
   */
  data: {
    userInfo:''
  },



  saveIntoCache: function() {
    let user1=this.createUser()
    wx.setStorage({
      key: 'user1',
      data: user1,
    })
  },

  getDataFromCache:function(){
    let page=this
    let user=wx.getStorage({
      key: 'user1',
      success: function(res) {
        
        page.setData({
          userInfo:JSON.stringify(res.data)
        })
      },
    })
  },

  
  createUser: () => {
    let user = new Object({
      name: 'Ray',
      age: 10
    })
    return user
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  }
})