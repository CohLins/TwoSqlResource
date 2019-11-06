// 戒治效能走势
var trend_chart = echarts.init(document.getElementById('trend-chart'), 'custom');
var trend_chart_option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    data: ['全部', '一年期', '期满']
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
    data: ['8/5', '8/12', '8/19', '8/26', '9/2', '9/9', '9/16', '9/23']
  },
  yAxis: {
    type: 'value',
    min: 72,
    max: 76
  },
  series: [
    {
      name: '全部',
      type: 'line',
      data: [75, 72, 72, 74, 72, 74, 75, 74]
    },
    {
      name: '一年期',
      type: 'line',
      data: [73, 75, 73, 75, 73, 75, 73, 72]
    },
    {
      name: '期满',
      type: 'line',
      data: [72, 73, 74, 72, 74, 73, 72, 75]
    }
  ]
};
trend_chart.setOption(trend_chart_option);

// 戒治效能统计
var treatment_statistics = echarts.init(document.getElementById('treatment-statistics'), 'custom');

var treatment_statistics_option = {
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
    data: ['全部', '一年期', '期满']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['60分以下', '60-70分', '70-80分', '80-90分', '90-100分']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '全部',
      type: 'bar',
      data: [4, 24, 160, 45, 10]
    },
    {
      name: '一年期',
      type: 'bar',
      data: [3, 10, 60, 10, 2]
    },
    {
      name: '期满',
      type: 'bar',
      data: [1, 14, 100, 30, 8]
    }
  ]
};
treatment_statistics.setOption(treatment_statistics_option);

// 戒治阶段分布图
var treatment_distribution = echarts.init(document.getElementById('treatment-distribution'), 'custom');

var treatment_distribution_option = {
  tooltip: {
    trigger: 'item',
    formatter: '总数:404人' + '</br>' + '{b}: {c}人 {d}%'
  },
  legend: {
    icon: 'rect',
    itemHeight: 15,
    itemWidth: 15,
    itemGap: 40,
    textStyle: {
      fontSize: 14,
      color: 'white'
    },
    data: ['生理脱毒期', '康复巩固期', '教育适应期', '回归指导期']
  },
  series: [
    {
      name: '戒治阶段',
      type: 'pie',
      radius: '50%',
      labelLine: {
        normal: {
          show: false
        }
      },
      label: {
        normal: {
          show: false,
          position: 'center'
        }
      },
      data: [
        { value: 0, name: '生理脱毒期' },
        { value: 254, name: '康复巩固期' },
        { value: 100, name: '教育适应期' },
        { value: 50, name: '回归指导期' }
      ]
    }
  ]
};
treatment_distribution.setOption(treatment_distribution_option);

// 重点戒治人员
layui.use('table', function () {
  var table = layui.table;
  //执行渲染
  table.render({
    elem: '#treatment-key-person', //指定原始表格元素选择器（推荐id选择器）
    height: 240, //容器高度
    page: {
      layout: ['prev', 'page', 'next', 'count']
    },
    url: '/DrugsTerrace/json/keyPerson.json',
    cols: [[ //表头
      {
        Maxwidth: 90,
        field: 'username',
        unresize: true,
        align: "center",
        style: "border-color:#3dd7fd;",
        title: '姓名'
      }, {
        Maxwidth: 90,
        field: 'number',
        unresize: true,
        align: "center",
        style: "border-color:#3dd7fd;",
        title: '编号'
      }, {
        Maxwidth: 90,
        field: 'evaluate',
        unresize: true,
        align: "center",
        style: "border-color:#3dd7fd;",
        title: '戒治评估'
      }, {
        Maxwidth: 90,
        field: 'stage',
        unresize: true,
        align: "center",
        style: "border-color:#3dd7fd;",
        title: '戒治阶段'
      }
    ]],
    done: function () {
      $('.layui-table tbody tr').eq(0).addClass('active');
    }
  });

  table.on('row(keymen)', function (obj) {
    $('.layui-table tbody tr').removeClass('active');
    $(obj.tr).addClass('active');
    var id = obj.data.id;
    $.get('/DrugsTerrace/json/keyPerson.json', function (res) {
      var data = res.data
      var target;
      for (var i = 0; i < data.length; i++) {
        if (data[i].id == id) {
          target = i;
        }
      }
      fillData(target, data);
    })
  });
})

//雷达图
var radarElemnts = document.getElementById('radar-chart');
var radar_chart = echarts.init(radarElemnts, 'custom');
var radar_chart_option = {
  tooltip: {
    show: false,
  },
  radar: {
    // shape: 'circle',
    startAngle: 90,
    radius: 80,
    name: {
      textStyle: {
        color: '#ffffff',
        padding: [3, 5]
      }
    },
    itemStyle: {
      shadowColor: 'rgba(0, 0, 0, 0.5)',
      shadowBlur: 10
    },
    splitNumber: 5,
    indicator: [{
      text: '教育背景',
      max: 100
    },
    {
      text: '外部支持',
      max: 100
    },
    {
      text: '劳动改造',
      max: 100
    },
    {
      text: '身心评估',
      max: 100
    },
    {
      text: '暴力侵向',
      max: 100
    },
    {
      text: '行为异常',
      max: 100
    }
    ],

    axisLine: {
      lineStyle: {
        color: '#23bbc0'
      }
    },
    splitArea: {
      areaStyle: {
        color: ["rgba(28,100,162,1)"],
        shadowColor: 'rgba(2, 3, 4, 0.5)',
        opacity: 0.6
      }
    }
  },

  series: [{
    type: 'radar',
    itemStyle: {

      color: "#38dfde",

    },
    data: [{
      value: [60, 0, 60, 100, 30, 60],
      areaStyle: {
        color: "#00FFFF",
        opacity: 0.5,
      }
    }]
  }]
};
radar_chart.setOption(radar_chart_option);


//人员头像添加函数
function headPhotosShow(number){
	
	switch (number) {
		case "55190228":
			$('.person-avatar').attr('src',"/DrugsTerrace/images/55190228.png"); 
			break;
		case "55180304":
			$('.person-avatar').attr('src',"/DrugsTerrace/images/55180304.png"); 
			break;
		case "55180772":
			$('.person-avatar').attr('src',"/DrugsTerrace/images/55180772.png"); 
			break;
		case "55180355":
			$('.person-avatar').attr('src',"/DrugsTerrace/images/55180355.png"); 
			break;
		case "55180458":
			$('.person-avatar').attr('src',"/DrugsTerrace/images/55180458.png"); 
			break;
		case "55180804":
			$('.person-avatar').attr('src',"/DrugsTerrace/images/55180804.png"); 
			break;
		case "55190424":
			
			$('.person-avatar').attr('src',"/DrugsTerrace/images/55190424.png"); 
			break;
		default:
			$('.person-avatar').attr('src',"/DrugsTerrace/images/person-avater.png");
			break;
	}
}

// 填充右边的数据
function fillData(target, data) {
  $(".person-info-item.link").attr("href","/DrugsTerrace/treatment-analysis-detail-"+data[target].number+".html");
  $('.evaluate').text(data[target].evaluate);
  $('#username').text(data[target].username);
  $('#number').text(data[target].number);
  $('#stage').text(data[target].stage);
  $('#address').text(data[target].address);
  
  headPhotosShow($("#number").text());
  
  var status = data[target].status;

  console.log(status)
  setStatus(".kfxl", status[0]);
  setStatus(".daxx", status[1]);
  setStatus(".xwbx", status[2]);
  setStatus(".xlpc", status[3]);
  setStatus(".xlqx", status[4]);
  setStatus(".smtz", status[5]);


  function setStatus(className, statusInfo) {
    if (statusInfo.type == 4) {
      $(className).find('.men-attr-head .score').text(statusInfo.grade);
    } else {
      $(className).find('.men-attr-head').text(statusInfo.grade);
    }
    $(className).find('.men-attr-desc').text(statusInfo.name);

    var colorRule = {
      "A": "red",
      "B": "yellow",
      "C": "blue",
	  "无": "green"
    }

    if ([1, 2, 3, 4, 5].indexOf(statusInfo.type) != -1) {
      $(className).removeClass('red').removeClass('yellow').removeClass('blue');
      $(className).addClass(colorRule[statusInfo.grade])
    }
  }
}

$(document).ready(function () {
  $.get('/DrugsTerrace/json/keyPerson.json', function (res) {
    var data = res.data
    fillData(0, data);
  })
})

