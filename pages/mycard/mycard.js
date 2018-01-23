
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardInfoList: [],
    hasData: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    var that = this
    wx.getStorage({
      key: 'cardInfoList',
      success: function (res) {
        //console.log("getStorage success")
        res.data.reverse()
        that.setData({
          cardInfoList: res.data,
          hasData: true
        })
      },
    })
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
  onShareAppMessage: function (res) {
    
  },
  createCard: function () {
    wx.navigateTo({
      url: '../create/create'
    })
  },
  jumpDetail: function (e) {
    let id = e.currentTarget.dataset.id
    //console.log("jumpDetail -- "+id)
    wx.navigateTo({
      url: '../card-detail/card-detail?id='+id,
    })
  }
})