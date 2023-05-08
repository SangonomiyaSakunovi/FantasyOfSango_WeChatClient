// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    userInfo: {},
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrls: [
      'http://phototj.photo.store.qq.com/psc?/V5344VVU0RYra33RBfWh1i9yX44fhytY/ruAMsa53pVQWN7FLK88i5uP6CMjxX*eBKTwbm8jc.UD8PeTDwkB6B0f5CwuF23b2kuiNclwbrJMUwbd2iLfYQBZSkhDqghsa2e7IynJGRHY!/b&bo=sARsArAEbAIBFzA!&rf=viewer_4',
      'http://phototj.photo.store.qq.com/psc?/V5344VVU0RYra33RBfWh1i9yX44fhytY/ruAMsa53pVQWN7FLK88i5vdJRNzhQxXTNH1rOxx11HbG5JMXqoISLNXCL4QaLb1NhsH55K6IxMqWnxtPGAlMlJlWdzADwKs3*NDkDj19Fbs!/b&bo=AAqgBQAKoAUBByA!&rf=viewer_4',
      'http://phototj.photo.store.qq.com/psc?/V5344VVU0RYra33RBfWh1i9yX44fhytY/ruAMsa53pVQWN7FLK88i5vdJRNzhQxXTNH1rOxx11HbG5JMXqoISLNXCL4QaLb1NhsH55K6IxMqWnxtPGAlMlJlWdzADwKs3*NDkDj19Fbs!/b&bo=AAqgBQAKoAUBByA!&rf=viewer_4'
    ],
    item: [
      { "web_url":'/pages/abc/cat/cat',
        "name": "帕朵菲莉丝",
        "pic_url": "/pages/image/cat.png"
      },
      { 
        "web_url":"/pages/abc/apo/apo",
        "name": "阿波尼亚",
        "pic_url": '/pages/image/apo.png'
      },
      { 
        "web_url":'/pages/abc/pinl/pink',
        "name": "爱莉希雅",
        "pic_url": '/pages/image/elysiya.png'
      },
      { 
        "web_url":"/pages/abc/edn/edn",
        "name": "伊甸",
         "pic_url": '/pages/image/eden.png'
      },
      { 
        "web_url":'/pages/abc/sn/snk',
        "name": "梅比乌斯",
        "pic_url": '/pages/image/snack.png'
      },
      {
         "web_url":'/pages/abc/draw/draw',
        "name": "格蕾修",
        "pic_url": '/pages/image/draw.png'
      }
    ],
    },
    OnJ:function(e){ 
      console.log(e)   
      var url = e.currentTarget.dataset.url 
      wx.navigateTo({ 
        url: url,
      })
  }
})