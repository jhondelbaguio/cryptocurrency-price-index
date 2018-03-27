import { format } from "date-fns";

const chartConfig = {
	xAxis: {
		type: "datetime",
		tickInterval: 1000 * 60 * 60 * 24 * 5,
		dateTimeLabelFormats: {
			/*	millisecond: "%H:%M:%S.%L",
			second: "%H:%M:%S",
			minute: "%H:%M",
			hour: "%H:%M",*/
			day: "%e. %b",
			week: "%e. %b",
			month: "%b '%y",
			year: "%Y"
		}
		/*labels: {
			formatter: function() {
				return format(this.value, "MMM DD");
			}
		},*/
		/*dateTimeLabelFormats: {
			millisecond: "%H:%M:%S.%L",
			second: "%H:%M:%S",
			minute: "%H:%M",
			hour: "%H:%M",
			day: "%e. %b",
			week: "%e. %b",
			month: "%b '%y",
			year: "%Y"
		},
		tickInterval: 1000 * 60 * 60*/
	},
	legend: {
		enabled: false
	},
	credits: {
		enabled: false
	},
	plotOptions: {
		series: {
			marker: {
				enabled: false,
				states: {
					hover: {
						enabled: true,
						radius: 3
					}
				}
			},
			line: {
				states: {
					hover: {
						enabled: false
					}
				}
			}
		}
	},
	navigator: {
		enabled: false
	},
	scrollbar: {
		enabled: false
	},
	series: [
		{
			data: [],
			tooltip: {
				valueDecimals: 2
			},
			lineColor: "#FB6D60",
			color: "#FDBEB8",
			fillOpacity: 0.5,
			threshold: null,
			type: "area"
		}
	],

	rangeSelector: {
		selected: 4,
		inputEnabled: false,
		buttonTheme: {
			visibility: "hidden"
		},
		labelStyle: {
			visibility: "hidden"
		}
	},

	responsive: {
		rules: [
			{
				condition: {
					maxWidth: 500
				},
				chartOptions: {
					chart: {
						height: 300
					},
					subtitle: {
						text: null
					},
					navigator: {
						enabled: false
					}
				}
			}
		]
	}
};

export default chartConfig;
