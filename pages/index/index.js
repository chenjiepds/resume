//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    vHeight: 0,
    vWidth: 0,
    name: '陈杰',
    spell: 'Chen Jie',
    job: '前端开发工程师',
    exp: '4年工作经验',
    telphone: 15705180980,
    sex: '男',
    age: 30,
    email: 'chenjiepds@163.com',
    address: '江苏南京',
    skills:[
      {id: '1', name: 'javascript', percent: 85},
      {id: '2', name: 'css', percent: 75},
      {id: '3', name: 'html', percent: 85},
      {id: '4', name: 'webpack', percent: 85},
      {id: '5', name: 'vue', percent: 75},
    ],
    education: [
      {id: '1', school: '南京理工大学', major: '电力电子与电力传动', year: '2013-2016'},
      {id: '2', school: '平顶山学院', major: '电气工程及其自动化', year: '2009-2013'}
    ]
  },
  // 监听页面显示
  onShow: function() {
    this.setData({
      vHeight:　wx.getSystemInfoSync().windowHeight,
      vWidth:　wx.getSystemInfoSync().windowWidth
    })
  }
})
