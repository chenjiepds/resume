// pages/mine.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    couponList: [
      { value: 5, icon: "../../assets/coupons/coupon_5.jpg" },
      { value: 10, icon: "../../assets/coupons/coupon_10.jpg" },
      { value: 15, icon: "../../assets/coupons/coupon_15.jpg" },
      { value: 20, icon: "../../assets/coupons/coupon_20.jpg" },
      { value: 25, icon: "../../assets/coupons/coupon_25.jpg" },
      { value: 30, icon: "../../assets/coupons/coupon_30.jpg" },
      { value: 35, icon: "../../assets/coupons/coupon_35.jpg" },
      { value: 40, icon: "../../assets/coupons/coupon_40.jpg" },
      { value: 45, icon: "../../assets/coupons/coupon_45.jpg" },
      { value: 50, icon: "../../assets/coupons/coupon_50.jpg" },
    ],
  },

  btnClick(e) {
    const btnItem = e.currentTarget.dataset.value;
    if (btnItem) {
      console.log(222, btnItem);

      wx.navigateTo({ url: `/pages/coupon/index?image=${btnItem.icon}` });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {},
});
