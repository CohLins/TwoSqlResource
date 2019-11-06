
  //图表
  var equipment_table = echarts.init(document.getElementById('diagram'), 'custom');
  var equipment_table_option = {
    color: ['#34B7BB', '#EDAE80', '#9A9DA1'],
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
      data: ['重点病号', '行为异常', '精神异常', '暴力危险', '家庭变故', '智力低下', '其他情况']
    },opt: {
    	width:'100%'
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
      name: '人数',
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
      name: '重点病号',
      type: 'line',
      data:  [3,7,2,9,1,3,11,1,6,8,9,2,7,3,1,12,2,7,2,1,7,11,3,8,1,0,5,1,13,2,7]
    },
      {
        name: '行为异常',
        type: 'line',
        data: [0,2,0,0,1,7,3,0,0,8,4,2,6,0,1,0,0,4,7,3,4,0,1,3,0,6,7,0,2,1,9]
      },
      {
        name: '精神异常',
        type: 'line',
        data: []
      },
      {
        name: '暴力危险',
        type: 'line',
        data: [1,2,3,0,1,0,0,2,0,0,3,0,0,0,1,0,4,1,0,5,6,0,0,1,2,0,3,0,3,0,0]
      },
      {
        name: '家庭变故',
        type: 'line',
        data: []
      },
      {
        name: '智力低下',
        type: 'line',
        data: []
      },
      {
        name: '其他情况',
        type: 'line',
        data: []
      }
    ]
  };
  equipment_table.setOption(equipment_table_option);


  layui.use(['form', 'table'], function () {
    var table = layui.table
    // 表格渲染
    var table_cols = [[{
      field: 'time',
      title: '时间',
    }, {
      field: 'num',
      title: '重点病号',
    }, {
      field: 'anomalous',
      title: '行为异常',
    }, {
      field: 'spirit',
      title: '精神异常'
    }, {
      field: 'violence',
      title: '暴力危险',
    }, {
      field: 'accident',
      title: '家庭变故',
    }, {
      field: 'intelligent',
      title: '智力低下',
    }, {
      field: 'other',
      title: '其他情况',
    }, {
      field: 'compare',
      title: '对比升降比率',
      templet: '#titleTpl'
    }, {
      field: 'level',
      title: '风险等级',
      templet: "#statusTpl"
    }]]
    table.render({
      elem: '#table-list', //指定原始表格元素选择器（推荐id选择器）
      height: 300, //容器高度
      url: '/DrugsTerrace/json/risk-trend.json',
      cols: table_cols,
      page: false,
      done:function () {
        $('.layui-table tbody tr').eq(0).addClass('active');
      }
    });

    table.on('row(table-list)', function (obj) {
      $('.layui-table tbody tr').removeClass('active');
      $(obj.tr).addClass('active');
    });
  })