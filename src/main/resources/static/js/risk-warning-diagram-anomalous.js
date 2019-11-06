
  //图表
  var equipment_table = echarts.init(document.getElementById('diagram'), 'custom');
  var equipment_table_option = {
    color: ['#34B7BB', '#B6A2DC', '#EDAE80'],
    textStyle: {
      color: 'white'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      textStyle: {
        color: '#ffffff'
      },
      data: ['监控设备', '门禁设备', '消防设备', '定位设备']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      backgroundColor: "#194f73",
      borderColor: "#000",
      containLabel: false
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: (function () {
        var xdata = [];
        for (var i = 1; i <= 31; i++) {
          var string = '6/' + i;
          xdata.push(string);
        }
        return xdata
      })(),
      axisLine: {
        show: true,
        lineStyle: {
          color: "#102d51"
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["#102d51"]
        }
      },
    },
    yAxis: [{
      splitNumber: "5",
      minInterval: "1",
      name: '数量',
      boundaryGap: [0.2, 0.2],
      min: '0',
      max: '20',
      type: 'value',
      axisLine: {
        show: true,
        lineStyle: {
          color: "#102d51"
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["#102d51"]
        }
      },
      splitArea: {
        "show": true,
        "areaStyle": {
          "color": [
            "#194f73"
          ]
        }
      },
      axisTick: {
        show: false
      }
    }],
    series: [{
      name: '监控设备',
      type: 'line',
      data: [8,5,10,4,7,11,2,5,7,12,2,7,9,6,4,13,8,10,2,5,9,8,12,7,0,6,2,9,6,4,7]
    },
      {
        name: '门禁设备',
        type: 'line',
        data: []
      },
      {
        name: '消防设备',
        type: 'line',
        data:  [0,2,0,0,5,0,1,1,3,0,0,2,0,0,0,1,5,7,0,2,0,1,0,0,0,1,7,13,0,0,7]
//        	(function () {
//          var xdata = [];
//          for (var i = 1; i <= 31; i++) {
//            var string = Math.ceil(Math.random() * 100);
//            xdata.push(string);
//          }
//          return xdata
//        })()
      },
      {
        name: '定位设备',
        type: 'line',
        data: []
      }
    ]
  };
  equipment_table.setOption(equipment_table_option);


  layui.use(['form', 'table', 'layer'], function () {
    var table = layui.table;
    var layer = layui.layer;
    // 表格渲染
    var table_cols = [[{
      field: 'time',
      title: '时间',
    }, {
      field: 'jiankong',
      title: '监控设备（异常数）',
    }, {
      field: 'mengjin',
      title: '门禁设备（异常数）',
    }, {
      field: 'xiaofang',
      title: '消防设备（异常数）'
    }, {
      field: 'dingwei',
      title: '定位设备',
    }, {
      field: 'fengxian',
      title: '风险等级',
      templet: "#statusTpl"
    }, {
      field: 'xiangqing',
      title: '设备详情',
      templet: "#detailTpl"
    }]];
    table.render({
      elem: '#table-list', //指定原始表格元素选择器（推荐id选择器）
      height: 300, //容器高度
      url: '/DrugsTerrace/json/risk-anomalous.json',
      cols: table_cols,
      page: false,
      done: function () {
        $('.layui-table tbody tr').eq(0).addClass('active');
        //  查看详情弹出
        $(".equi-detail").click(function () {
          layer.open({
            title: ["查看","background-color:#ffffff;border:1px solid #3dd7fd;color:#000000"],
            area: ["1050px", "600px"],
            type: 2,
            maxmin: true,
            content: ['risk-warning-diagram-anomalous-datail', 'no']
          });
        })
      }
    });

    table.on('row(table-list)', function (obj) {
      $('.layui-table tbody tr').removeClass('active');
      $(obj.tr).addClass('active');
    });

  })