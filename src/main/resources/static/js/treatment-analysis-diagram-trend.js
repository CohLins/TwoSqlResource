
  // 戒治效能走势图表
  var trend_chart = echarts.init(document.getElementById('diagram'), 'custom');
  var trend_chart_option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      data: ['生理脱毒期', '一年期', '期满']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
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
      })()
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 100
    },
    series: [
      {
        name: '生理脱毒期',
        type: 'line',
        data: (function () {
          var xdata = [];
          for (var i = 1; i <= 31; i++) {
            var string = Math.ceil(Math.random() * 100);
            xdata.push(string);
          }
          return xdata
        })()
      },
      {
        name: '一年期',
        type: 'line',
        data: []
      },
      {
        name: '期满',
        type: 'line',
        data: (function () {
          var xdata = [];
          for (var i = 1; i <= 31; i++) {
            var string = Math.ceil(Math.random() * 100);
            xdata.push(string);
          }
          return xdata
        })()
      }
    ]
  };
  trend_chart.setOption(trend_chart_option);


  layui.use(['form', 'table', 'layer','element'], function () {
    var table = layui.table;
    var layer = layui.layer;
    // 表格渲染
    var table_cols = [[{
      field: 'time',
      title: '时间',
    }, {
      field: '0to20',
      title: '0-20分(人数)',
    }, {
      field: '20to40',
      title: '20-40分(人数)',
    }, {
      field: '40to60',
      title: '40-60分(人数)'
    }, {
      field: '60to80',
      title: '60-80分(人数)',
    }, {
      field: '80to100',
      title: '80-100分(人数)',
    }, {
      field: 'compare',
      title: '环比上月平均分',
      templet: "#titleTpl"
    }, {
      field: 'level',
      title: '风险等级',
      templet: "#statusTpl"
    }]];

    table.render({
      elem: '#table-list', //指定原始表格元素选择器（推荐id选择器）
      height: 300, //容器高度
      url: '/DrugsTerrace/json/treatment-diagram-trend.json',
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