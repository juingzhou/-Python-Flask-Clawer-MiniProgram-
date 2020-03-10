
Page({

  /**
   * 页面的初始数据
   */
  data: {

    src: "",
    timestamp: ''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {

    var timestamp = Date.parse(new Date());
    this.setData({
      timestamp: timestamp
    });

    console.log(e.num);
    var num = JSON.parse(e.num)
    this.setData({
      src: "https://www.###.###:5000/notes/"+num
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
  // onPullDownRefresh: function () {

  // },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '上课了么-南苑教务信息查询',
      path: '/pages/login/login',
      imageUrl: '../../img/sharing.jpg',
      success: function (res) {
        wx.showToast({
          title: '分享成功',
          icon: 'success'
        })
      }
    }
  },
})