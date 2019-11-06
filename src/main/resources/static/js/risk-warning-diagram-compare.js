
  //图表
  var equipment_table = echarts.init(document.getElementById('diagram'), 'custom');
  var equipment_table_option = {
    textStyle: {
      color: 'white'
    },
    color: ['#ff4545', '#00d414'],
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      icon: 'rect',
      itemHeight: 15,
      itemGap: 40,
      itemWidth: 15,
      textStyle: {
        color: 'white'
      },
      data: ['入所数', '戒治数']
    },
    grid: {
      show: true,
      left: '5%',
      right: '5%',
      bottom: '6%',
      containLabel: true,
      backgroundColor: "#194f73",
      borderColor: "#000"
    },
    xAxis: [{
      type: 'category',
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
          // color: "#3dd7fd"
        },
        onZero: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: ["#102d51"]
        }
      },
      axisLabel: {
        align: 'left',
        rich: {
          a: 'left'
        }
      },

    }],
    yAxis: [{

      splitNumber: "5",
      minInterval: "1",
      name: '人数',
      boundaryGap: [0.2, 0.2],
      min: '0',
      max: '10',
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
            // "#194f73"
          ]
        }
      },
      axisTick: {
        show: false
      }
    }],
    series: [{
      name: '入所数',
      barwidth: 10,
      barGap: '0%',
      type: 'bar',
      data: [2,0,4,4,0,1,0,5,0,4,1,2,0,0,1,2,0,2,0,1,0,6,0,1,0,0,0,2,2,0,3]
    	  
    },
      {
        name: '戒治数',
        type: 'bar',
        barwidth: 20,
        data: [1,0,3,4,0,1,0,3,0,2,1,2,0,0,1,1,0,2,0,1,0,4,0,1,0,0,0,1,0,0,1]
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
      field: 'total',
      title: '总人数',
    }, {
      field: 'comein',
      title: '入所数',
    }, {
      field: 'treatment',
      title: '戒治数'
    }, {
      field: 'level',
      title: '风险等级',
      templet: "#statusTpl"
    }]]
    table.render({
      elem: '#table-list', //指定原始表格元素选择器（推荐id选择器）
      height: 300, //容器高度
      url: '/DrugsTerrace/json/risk-compare.json',
      cols: table_cols,
      page: false,
      done: function () {
        $('.layui-table tbody tr').eq(0).addClass('active');
      }
    });

    table.on('row(table-list)', function (obj) {
      $('.layui-table tbody tr').removeClass('active');
      $(obj.tr).addClass('active');
    });
  })