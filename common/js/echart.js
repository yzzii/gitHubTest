// DOM을 준비하고 echart 객체를 만듭니다.

//		@1 Pie

        var pieChart = echarts.init(document.getElementById('pie'));

        // 차트 속성과 데이터를 지정합니다.
        var option = {
        		 tooltip: {
        		        trigger: 'item',
        		        formatter: '{a}<br/>{b}: {c} ({d}%)'
        		    },
        		    toolbox: {
        		        feature: {
        		            saveAsImage: {}
        		        }
        		    },
        		    legend: {
        		    	 orient: 'vertical',
        		         left: 10,
        		         top: 10
        		    },
        	    series: [
        	        {
        	            name: 'peisample',
        	            type: 'pie',
        	            radius: ['40%', '70%'],
        	            color: ['#0BD0D9', '#5ECB96', '#F0CF64', '#EC9F57', '#DD663C'],
        	            avoidLabelOverlap: false,
        	            label: {
        	                show: false,
        	                position: 'center'
        	            },
        	            emphasis: {
        	                label: {
        	                    show: true,
        	                    fontSize: '20',
        	                    fontWeight: 'bold'
        	                }
        	            },
        	            labelLine: {
        	            	show: false
        	            },
        	            data:[ {
        	                value: 1048,
        	                name:'A'
        	            },
        	            {
        	                value: 735,
        	                name:'B'
        	            },
        	            {
        	                value: 580,
        	                name:'C'
        	            },
        	            {
        	                value: 484,
        	                name:'D'
        	            },
        	            {
        	                value: 300,
        	                name:'E'
        	            }]
        	            
        	        }
        	    ]
        };
        pieChart.setOption(option);

//		@2 Bar
        
        var barChart = echarts.init(document.getElementById('bar'));

        // 차트 속성과 데이터를 지정합니다.
        var barOption = {
//        		title: {
//        	        text: '타이틀영역',
//        	        subtext: '서브타이',
//        	        sublink: 'http://e.weibo.com/1341556070/AjQH99che'
//        	    },
        	    tooltip: {
        	        trigger: 'axis',
        	        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        	            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        	        },
        	        formatter: function (params) {
        	            var tar = params[1];
        	            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        	        }
        	    },
        	    grid: {
        	        left: '3%',
        	        right: '4%',
        	        bottom: '3%',
        	        containLabel: true,
        	        backgroundColor:'#CECECE',
        	    },
    		    toolbox: {
    		        feature: {
    		            saveAsImage: {}
    		        }
    		    },
        	    xAxis: {
        	        type: 'category',
        	        splitLine: {show: false},
        	        data: ['A', 'B', 'C', 'D', 'E', 'F']
        	    },
        	    yAxis: {
        	        type: 'value'
        	    },
        	    series: [
        	        {
        	        	yAxes: [{
        					ticks: {
        						beginAtZero: true,
        						stepSize : 2,
        						fontColor : "rgba(251, 203, 9, 1)",
        						fontSize : 12,
        					},
        					gridLines:{
        						color: 'rgba(166, 201, 226, 1)',
        						lineWidth:3
        					}
        				}],
        				xAxes: [{
        					ticks:{
        						fontColor : 'rgba(12, 13, 13, 1)',
        						fontSize : 14
        					},
        					gridLines:{
        						color: "rgba(87, 152, 23, 1)",
        						lineWidth: 1
        					}
        				}],
        	            name: '辅助',
        	            type: 'bar',
        	            stack: '总量',
        	            itemStyle: {
        	                barBorderColor: 'rgba(0,0,0,0)',
        	                color: 'rgba(0,0,0,0)'
        	            },
        	            emphasis: {
        	                itemStyle: {
        	                	barBorderColor: 'rgba(0,0,0,0)',
            	                color: 'rgba(0,0,0,0)'
        	                }
        	            },
        	            data: [0, 1700, 1400, 1200, 300, 0]
        	        },
        	        {
        	            name: '生活费',
        	            type: 'bar',
        	            stack: '总量',
        	            label: {
        	                show: true,
        	                position: 'inside'
        	            },
        	            data: [
        	            	{
            	                value: 2900,
            	                itemStyle: {color: '#0BD0D9'}
            	            },
            	            {
            	                value: 1200,
            	                itemStyle: {color: '#FF5E51'}
            	            },
            	            {
            	                value: 300,
            	                itemStyle: {color: '#C9F2C2'}
            	            },
            	            {
            	                value: 200,
            	                itemStyle: {color: '#058590'}
            	            },
            	            {
            	                value: 900,
            	                itemStyle: {color: '#24C7BB'}
            	            },
            	            {
            	                value: 300,
            	                itemStyle: {color: '#072A5A'}
            	            }
        	            ]
        	        }
        	    ]
        	};

        // 위에서 설정한 속성을 차트에 반영합니다.

        barOption && barChart.setOption(barOption)
        

// 		@3 Line
        
		var lineChart = echarts.init(document.getElementById('line'));
		
        var lineOption = {
		    title: {
		        text: ''
		    },
		    tooltip: {
		        trigger: 'axis'
		    },
		    legend: {
		    	 orient: 'horizontal',
		         top: 10,
		        data: ['A', 'B', 'C', 'D', 'E']
		    },
		    color:['#072A5A', '#058590', 'rgb(240, 207, 100)', '#FF5E51', '#0BD0D9'],
		    grid: {
		        left: '3%',
		        right: '4%',
		        bottom: '5%',
		        containLabel: true
		    },
		    toolbox: {
		        feature: {
		            saveAsImage: {}
		        }
		    },
		    xAxis: {
		        type: 'category',
		        boundaryGap: false,
		        data: ['1', '2', '3', '4', '5', '6', '7']
		    },
		    yAxis: {
		        type: 'value'
		    },
		    series: [
		        {
		            name: 'A',
		            type: 'line',
		            stack: '总量',
		            data: [120, 132, 101, 134, 90, 230, 210]
		        },
		        {
		            name: 'B',
		            type: 'line',
		            stack: '总量',
		            data: [220, 182, 191, 234, 290, 330, 310]
		        },
		        {
		            name: 'C',
		            type: 'line',
		            stack: '总量',
		            data: [150, 232, 201, 154, 190, 330, 410]
		        },
		        {
		            name: 'D',
		            type: 'line',
		            stack: '总量',
		            data: [320, 332, 301, 334, 390, 330, 320]
		        },
		        {
		            name: 'E',
		            type: 'line',
		            stack: '总量',
		            data: [820, 932, 901, 934, 1290, 1330, 1320]
		        }
		    ]
		};
		
        lineOption && lineChart.setOption(lineOption)
        
        
//        scatter
       var scatterChart = echarts.init(document.getElementById('scatter'));
		
        var scatterOption = {
		    xAxis: {},
		    yAxis: {},
		    series: [{
		        data: [
		            [10.0, 8.04],
		            [8.07, 6.95],
		            [13.0, 7.58],
		            [9.05, 8.81],
		            [11.0, 8.33],
		            [14.0, 7.66],
		            [13.4, 6.81],
		            [10.0, 6.33],
		            [14.0, 8.96],
		            [12.5, 6.82],
		            [9.15, 7.20],
		            [11.5, 7.20],
		            [3.03, 4.23],
		            [12.2, 7.83],
		            [2.02, 4.47],
		            [1.05, 3.33],
		            [4.05, 4.96],
		            [6.03, 7.24],
		            [12.0, 6.26],
		            [12.0, 8.84],
		            [7.08, 5.82],
		            [5.02, 5.68]
		        ],
		        type: 'scatter',
		        itemStyle: {
		                shadowBlur: 5,
		                shadowColor: 'rgba(25, 100, 150, 0.3)',
		                shadowOffsetY: 5,
		                color: 'rgb(94, 203, 150)'
		        }

		    }]
		};
		
        scatterOption && scatterChart.setOption(scatterOption);

        
