//index.js
//获取应用实例
const app = getApp();
const CanvasZoom = require('../../utils/canvas_zoom.js');
let canvasZoom = null;
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canvasWidth: '100%',
    canvasHeight: '200px'
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }

  },
  onReady: function () {
    var that = this;
    var point = [
      [
        {
          model: "BackManagement.taghistory",
          pk: 31,
          fields: {
            name: "C2016D0001BC",
            mac: "C2016D0001BC",
            point_x: 2.5263188635676865,
            point_y: 2.549695474364607,
            timestamp: "2019-02-14T05:03:11",
            room: null,
            staff: null
          }
        },
        {
          model: "BackManagement.taghistory",
          pk: 14,
          fields: {
            name: "C2016D0001BF",
            mac: "C2016D0001BF",
            point_x: 6.818839752868069,
            point_y: 4.455187864968442,
            timestamp: "2019-02-14T04:57:20",
            room: null,
            staff: null
          }
        },
        {
          model: "BackManagement.taghistory",
          pk: 23,
          fields: {
            name: "C2016D0001C0",
            mac: "C2016D0001C0",
            point_x: 5.658915175812062,
            point_y: 4.864459332191791,
            timestamp: "2019-02-14T05:03:01",
            room: null,
            staff: null
          }
        },
        {
          model: "BackManagement.taghistory",
          pk: 18,
          fields: {
            name: "C2016D0001C2",
            mac: "C2016D0001C2",
            point_x: 7.812938999752239,
            point_y: 2.039638816375383,
            timestamp: "2019-02-14T05:02:50",
            room: null,
            staff: null
          }
        },
        {
          model: "BackManagement.taghistory",
          pk: 27,
          fields: {
            name: "C2016D000295",
            mac: "C2016D000295",
            point_x: 6.582957137771725,
            point_y: 1.85902927796372,
            timestamp: "2019-02-14T05:03:05",
            room: null,
            staff: null
          }
        },
        {
          model: "BackManagement.taghistory",
          pk: 30,
          fields: {
            name: "C2016D0002A5",
            mac: "C2016D0002A5",
            point_x: 6.06663264261221,
            point_y: 2.4631573240726152,
            timestamp: "2019-02-14T05:03:10",
            room: null,
            staff: null
          }
        },
        {
          model: "BackManagement.taghistory",
          pk: 21,
          fields: {
            name: "C2016D0002A6",
            mac: "C2016D0002A6",
            point_x: 7.094040697089486,
            point_y: 4.528339029193217,
            timestamp: "2019-02-14T05:02:58",
            room: null,
            staff: null
          }
        },
        {
          model: "BackManagement.taghistory",
          pk: 24,
          fields: {
            name: "C2016D0002A8",
            mac: "C2016D0002A8",
            point_x: 6.564938585824226,
            point_y: 4.593387265731502,
            timestamp: "2019-02-14T05:03:02",
            room: null,
            staff: null
          }
        },
        {
          model: "BackManagement.taghistory",
          pk: 29,
          fields: {
            name: "C98B3CD04B3E",
            mac: "C98B3CD04B3E",
            point_x: 6.444427029204163,
            point_y: 4.934953684566654,
            timestamp: "2019-02-14T05:03:08",
            room: null,
            staff: null
          }
        },
        {
          model: "BackManagement.taghistory",
          pk: 16,
          fields: {
            name: "F111400E55A1",
            mac: "F111400E55A1",
            point_x: 4.313697771384768,
            point_y: 3.69885213773073,
            timestamp: "2019-02-14T04:57:24",
            room: null,
            staff: null
          }
        }
      ]
    ];
    this.setData({point: point })
    let room = {
      room: {
        id: 1,
        name: "",
        layout: "0 0,400 0,400 300,0 300,",
        subrooms: [
          {
            id: 1,
            name: "厨房1",
            layout: "0 0,400 0,400 300,0 300,",
            center_position: "300 200,"
          },
          {
            id: 3,
            name: "厨房2",
            layout: "0 0,100 0,200 300,0 300,",
            center_position: "100 200,"
          }
        ]
      }
    };
    let tangram = {};
    tangram.room = {};
    tangram.room.p = this.changeData(room.room.layout);
    tangram.room.color = this.changeColor();
    tangram.room.bordercolor = this.changeColor();
    tangram.room.title = room.room.name;
    tangram.module = [];
    tangram.module = room.room.subrooms.map(v => {
      return {
        p: this.changeData(v.layout),
        title: v.name,
        color: this.changeColor(),
        bordercolor: this.changeColor()
      }
    })
    var query = wx.createSelectorQuery();
    query.select('#firstCanvas').boundingClientRect();
    query.exec(function (res) {
      canvasZoom = new CanvasZoom({
        canvas: 'firstCanvas',
        mapInfo: tangram,
        isFullPage: false,
        width: res[0].width,
        height: res[0].height,
        ratio: {
          x: 8,
          y: 6
        }
      });
      // that.setData({
      //   canvasWidth: canvasZoom.options.width + 'px',
      //   canvasHeight: canvasZoom.options.height + 'px'
      // })
      point.forEach(v => {
        v.forEach(data => {
          canvasZoom.setMarker({
            name: data.fields.name,
            x: data.fields.point_x,
            y: data.fields.point_y
          }, {
            marker: {
              lineWidth: 1,
              strokeStyle: '#333',
              fillStyle: '#333',
              R: 4
            },
            label: {
              show: true,
              fillStyle: '#eee',
              strokeStyle: '#666',
              textColor: '#333'
            }
          })
        })
  
      })
    })

  },
  initScalePostion: function () {
    canvasZoom.initScalePostion();
    this.data.point.forEach(v => {
      v.forEach((data, i) => {
        if (i === 0) {
          canvasZoom.removeMarker({
            name: data.fields.name,
            x: data.fields.point_x,
            y: data.fields.point_y
          });
        }
      });
    });
  },
  enlargeMap: function() {
    canvasZoom.enlargeMap();
  },
  narrowMap: function () {
    canvasZoom.narrowMap();
  },
  bindtouchstartFunc: function (e) {
    canvasZoom.setTouchStart();
  },
  bindtouchmoveFunc: function (e) {
    canvasZoom.setTouchMove(e);
  },
  changeColor: function () {
    var colors = [
      "rgba(220, 169, 105, 0.2)",
      "rgba(76, 181, 216, 0.2)",
      "rgba(225, 215, 155, 0.1)",
      "rgba(230, 110, 250, 0.2)",
      "rgba(76, 181, 216, 0.2)",
      "#DC143C"
    ];
    var random = this.getRandom(0, colors.length - 1);
    return colors[random];
  },
  getRandom: function(n, m) {
    var n = Number(n); //强制转换成数字
    var m = Number(m);
    if (isNaN(n) || isNaN(m)) {
      //判断是否为有效数字 ，其中一个不是有效数字就返回[0,1)之间的随机小数
      return math.random();
    }
    if (n > m) {
      //如果n>m则交换
      var temp = n;
      n = m;
      m = temp;
    }
    return Math.round(Math.random() * (m - n) + n);
  },
  changeData: function(a) {
    var b = a.split(",");
    String.prototype.Trim = function() {
      return this.replace(/(^\s*)|(\s*$)/g, "");
    };
    var c = b.filter(v => {
      return !!v;
    });
    var d = c.map(v => {
      return {
        x: v.Trim().split(" ")[0],
        y: v.Trim().split(" ")[1]
      };
    });
    return d;
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})