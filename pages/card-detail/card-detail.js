
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cardInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log("options -- " + JSON.stringify(options))
    let id = options.id
    let that = this
    wx.getStorage({
      key: 'cardInfoList',
      success: function (res) {
        let cardInfoList = res.data
        for (let i = 0; i < cardInfoList.length; i++) {
          let cardInfo = cardInfoList[i];
          if (cardInfo.id == id) {
            that.setData({
              cardInfo: cardInfo
            })
            break
          }
        }
      },
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
    console.log("share -- " + JSON.stringify(res))
    if (res.from === 'button') {
      // 来自页面内转发按钮
      //console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/card-detail/card-detail?id=123',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})