// @flow
import React, { Component } from "react";
import {
	withHighcharts,
	HighchartsStockChart,
	Chart,
	Title,
	Legend,
	XAxis,
	LineSeries,
	YAxis,
	Subtitle,
	RangeSelector,
	Tooltip,
	SplineSeries
} from "react-jsx-highstock";
import Highcharts from "highcharts/highstock";

type Props = {
	data: Array
};

class LineChart extends Component<Props> {
	handleClick = () => {
		alert("ha");
	};
	render() {
		let data = [];

		this.props.data.map(dd => {
			let q = new Date(dd.time);
			data.push([q.getTime(), parseInt(dd.price)]);
		});

		return (
			<HighchartsStockChart>
				<Title>{this.props.currency} Price Index</Title>

				<Subtitle>API by Coinbase</Subtitle>

				<Chart />

				<RangeSelector>
					<RangeSelector.Button count={1} type="day">
						1d
					</RangeSelector.Button>
					<RangeSelector.Button count={7} type="day">
						7d
					</RangeSelector.Button>
					<RangeSelector.Button
						count={1}
						type="month"
						onClick={() => this.props.changePeriod("month")}
					>
						1m
					</RangeSelector.Button>

					<RangeSelector.Button
						count={1}
						type="year"
						onClick={() => this.props.changePeriod("year")}
					>
						1y
					</RangeSelector.Button>

					<RangeSelector.Button
						type="all"
						onClick={() => this.props.changePeriod("all")}
					>
						All
					</RangeSelector.Button>
					<RangeSelector.Input boxBorderColor="#7cb5ec" />
				</RangeSelector>
				<Tooltip
					valuePrefix="$"
					valueSuffix=" USD"
					padding={10}
					hideDelay={250}
					shape="square"
				/>
				<XAxis>
					<XAxis.Title>Date</XAxis.Title>
				</XAxis>

				<YAxis id="number">
					<YAxis.Title>Value</YAxis.Title>
					<SplineSeries id="price" name="Price" data={data} />
				</YAxis>
			</HighchartsStockChart>
		);
	}
}

export default withHighcharts(LineChart, Highcharts);
