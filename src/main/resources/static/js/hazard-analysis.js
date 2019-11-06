layui.use('table', function() {
					var table = layui.table;
					table.render({
						id: "keymen",
						elem: '#addictsTable',
						url: '/DrugsTerrace/json/addictsTable.json',
						page: {
							layout: ['prev', 'page', 'next', 'count']
						},
						height: 240,
						cols: [
							[ //表头
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
									field: 'grade',
									unresize: true,
									align: "center",
									style: "border-color:#3dd7fd;",
									title: '风险等级'
								}, {
									Maxwidth: 90,
									field: 'analysis',
									unresize: true,
									align: "center",
									style: "border-color:#3dd7fd;",
									title: '风险分析'
								}
							]
						],
						done: function() {
							//$('.layui-table tbody tr').eq(0).addClass('active');
						}
					});

					
					table.on('row(keymen)', function(obj) {
						$('.layui-table tbody tr').removeClass('active');
						$(obj.tr).addClass('active');
						var id = obj.data.id;
						
						
						$.get('/DrugsTerrace/json/addictsTableInfo.json', function(res) {
							var data = res.data
							var target;
							for (var i = 0; i < data.length; i++) {
								if (data[i].id == id) {
									target = i;
								}
							}
							fillData(target, data);
							//var number=$('#number').text();
							
							
						});
						
						
					});
				});


				var option = {
					textStyle: {
						color: 'white'
					},
					color: ["#49ffff", "#9d6aff", "#ff9d7f", "#29a0fc", "#ff4545"],
					tooltip: {
						trigger: 'item'
					},
					legend: {
						icon: 'rect',
						itemHeight: 15,
						itemGap: 20,
						itemWidth: 15,
						textStyle: {
							color: 'white'
						},
					},
					grid: {
						show: true,
						backgroundColor: '#194f73',
						borderColor: '#102d51'
					},
					xAxis: {
						type: 'value',
						boundaryGap: false,
						"axisLine": {
							"show": true,
							"lineStyle": {
								"color": "#3dd7fd"
							}
						},
						"splitLine": {
							"show": true,
							"lineStyle": {
								"color": [
									"#102d51"
								]
							}
						},
					},
					yAxis: {
						type: 'category',
						"axisLine": {
							"show": true,
							"lineStyle": {
								"color": "#3dd7fd"
							}
						},
					},
					series: [{
							name: "重症", //'用户数',
							barWidth: 20, //设置柱子宽度
							type: 'bar',
							data: [0], //[ 104970, 131744, 630230]
						},
						{
							name: "自杀", //'用户数',
							barWidth: 20, //设置柱子宽度
							type: 'bar',
							data: [0], //[ 104970, 131744, 630230]
						},
						{
							name: "自残", //'用户数',
							barWidth: 20, //设置柱子宽度
							type: 'bar',
							data: [1], //[ 104970, 131744, 630230]
						},
						{
							name: "自伤", //'用户数',
							barWidth: 20, //设置柱子宽度
							type: 'bar',
							data: [1], //[ 104970, 131744, 630230]
						},
						{
							name: "逃脱", //'用户数',
							barWidth: 20, //设置柱子宽度
							type: 'bar',
							data: [3], //[ 104970, 131744, 630230]
						}
					]
				};
				var elemNormbar = document.getElementById("hazard_analysis");
				renderNormbar = function() {
					echnormbar = echarts.init(elemNormbar);
					echnormbar.setOption(option);
				};
				renderNormbar();
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

				$(document).ready(function() {
					var number=$('#number').text();
					 if(number==null){
						$('.person-avatar').attr('src',"/DrugsTerrace/images/person-avater.png");
					} 
					//alert(number);
					$('.person-avatar').attr('src',"/DrugsTerrace/images/"+number+".png"); 
					
					$.get('/DrugsTerrace/json/addictsTableInfo.json', function(res) {
						var data = res.data
						fillDataFirst(0, data);
					})
				})