layui.use(['form', 'laydate', 'carousel'], function () {
            var form = layui.form;
            var laydate = layui.laydate;
            var carousel = layui.carousel;
            var $ = layui.$;
            //时间选择器2
           
            //初始赋值
            laydate.render({
                elem: '#startTime',
                format: 'yyyy年MM月dd日',
                value: '2019年5月6号',
                isInitValue: true,
                theme:'#3dd7fd'
            });
            laydate.render({
                elem: '#endTime',
                value: '2019年7月29号',
                format: 'yyyy年MM月dd日',
                isInitValue: true,
                theme:'#3dd7fd'
            });
            //走势
            laydate.render({
                elem: '#trendStartTime',
                format: 'yyyy年MM月dd日',
                value: '2019年6月1号',
                isInitValue: true,
                theme:'#3dd7fd'
            });
            laydate.render({
                elem: '#trendEndTime',
                value: '2019年6月8号',
                format: 'yyyy年MM月dd日',
                isInitValue: true,
                theme:'#3dd7fd'
            });
            //设备
            laydate.render({
                elem: '#equipmentStartTime',
                format: 'yyyy年MM月dd日',
                value: '2019年8月5号',
                isInitValue: true,
                theme:'#3dd7fd'
            });
            laydate.render({
                elem: '#equipmentEndTime',
                value: '2019年9月23号',
                format: 'yyyy年MM月dd日',
                isInitValue: true,
                theme:'#3dd7fd'
            });
            //监听搜索提交
            form.on('submit(formDemo)', function (data) {
                layer.msg(JSON.stringify(data.field));
                return false;
            });
          
            //轮播图
            carousel.render({
                elem: '#keyPersonnel',
                width: '100%',
                anim: "default",
                // interval:1000,
                arrow: "none",
                height: "515px"
                //,anim: 'updown' //切换动画方式
            });
              
            //入所对比
            var option = {
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
                    data: ['入所数', '解戒数']
                },
                grid: {
                    show: true,
                    left: '5%',
                    right: '5%',
                    bottom: '6%',
                    containLabel: true,
                    backgroundColor: "#194f73"
                },
                xAxis: [{

                    type: 'category',
                    data: ['5/6','5/13', '5/20', '5/27', '6/3', '6/10', '6/17', '6/24', '7/1', '7/8', '7/15', '7/22', '7/29'],
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
                        data:  [2, 4, 4, 1, 4, 4, 0, 1, 2, 1, 0, 6, 0]
                    },
                    {
                        name: '解戒数',
                        type: 'bar',
                        barwidth: 20,
                        data:  [1, 2, 0, 1, 2, 0, 1, 0, 2, 0, 0, 1, 0]
                    }
                ]
            };
            var elemNormbar = document.getElementById("treatment_table");
            renderNormbar = function () {
                echnormbar = echarts.init(elemNormbar);
                echnormbar.setOption(option);
            };
            renderNormbar();
            // 戒治阶段分布图
            var treatment_distribution = echarts.init(document.getElementById('treatment-distribution'),
                'custom');
            var treatment_distribution_option = {
                textStyle: {
                    color: 'white'
                },
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
                    data: ['生理脱毒期', '康复巩固期', '教育适应期', '回归指导期'],

                },
                series: [{
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
                    avoidLabelOverlap: false,
                    data: [{
                            value: 0,
                            itemStyle: {
                                color: "#39c8c8"
                            },
                            name: '生理脱毒期'
                        },
                        {
                            value: 254,
                            itemStyle: {
                                color: "#5eb2ed"
                            },
                            name: '康复巩固期'
                        },
                        {
                            value: 100,
                            itemStyle: {
                                color: "#b6a2dc"
                            },
                            name: '教育适应期'
                        },
                        {
                            value: 50,
                            itemStyle: {
                                color: "#fdb884"
                            },
                            name: '回归指导期'
                        }
                    ]
                }]
            };
            treatment_distribution.setOption(treatment_distribution_option);
            //人员风险趋势走向
            var trend_table = echarts.init(document.getElementById('trend_table'), 'custom');
            var trend_table_option = {
                color: ['#39c8c8', '#b6a2dc', '#fdb884'],
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
                    data: ['重点病号', '精神异常', '行为异常', '暴力危险', '家庭变故', '智力低下', '其他情况']
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
                    data: ['6/1', '6/2', '6/3', '6/4', '6/5', '6/6', '6/7', '6/8'],
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
                        data: [3,7,2,9,1,3,11,1]
                    },
                    {
                        name: '精神异常',
                        type: 'line',
                        data: []
                    },
                    {
                        name: '行为异常',
                        type: 'line',
                        data: [0,2,0,0,1,7,2,0]
                    },
                    {
                        name: '暴力危险',
                        type: 'line',
                        data: [1,2,3,0,1,0,0,2]
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
            trend_table.setOption(trend_table_option);
            //设备
            var equipment_table = echarts.init(document.getElementById('equipment_table'), 'custom');
            var equipment_table_option = {
                color: ['#39c8c8', '#b6a2dc', '#fdb884'],
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
                    data: ['8/5', '8/12', '8/19', '8/26', '9/2', '9/9', '9/16', '9/23'],
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
                        data: [8,5,10,4,7,11,2,5]
                    },
                    {
                        name: '门禁设备',
                        type: 'line',
                        data: []
                    },
                    {
                        name: '消防设备',
                        type: 'line',
                        data: [0,2,0,0,5,0,1,1]
                    },
                    {
                        name: '定位设备',
                        type: 'line',
                        data: []
                    }
                ]
            };
            equipment_table.setOption(equipment_table_option);
            
            //雷达图
            var radarElemnts = $('.keyPersonnel_item_right');
            var clientHeight = $(radarElemnts[0]).height();
            var clientWidht =$(radarElemnts[0]).width();
            for(var i=0;i<radarElemnts.length;i++){
                if(i>1){
                    radarElemnts[i].style.height=clientHeight+'px';
                    radarElemnts[i].style.width=clientWidht+'px';
                }
                console.log($(radarElemnts[0]).width());
                var radar_chart = echarts.init(radarElemnts[i], 'custom');
                var radar_chart_option = {
                    tooltip: {
                        show: false,
                    },
                    radar: {
                        // shape: 'circle',
                        startAngle: 90,
                        radius: 40,
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
            }
        });