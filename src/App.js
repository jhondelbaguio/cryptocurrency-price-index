// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { getPriceIndex, getCurrencyStats } from "./redux/actions/priceIndex";
import LineChart from "./components/LineChart";
import CurrencyNavigation from "./components/CurrencyNavigation";
import type { Statistics } from "./types/statistics";

type Props = {
	getPriceIndex: (data: State) => Promise<void>,
	getCurrencyStats: () => Promise<void>,
	isFetching: boolean,
	data: Array,
	stats: Statistics,
	currency: string
};

type State = {
	currency: string,
	period: string
};

class App extends Component<Props, State> {
	state = {
		currency: "BTC",
		period: "month", //hour,day,week,month,year,all
		requested: false
	};

	async componentDidMount() {
		await this.getStats();
		await this.getPriceIndex();
	}

	getStats() {
		const self = this;

		setInterval(function() {
			if (self.state.requested) {
				self.props.getCurrencyStats();
			}
		}, 60 * 1000);

		if (!this.state.requested) {
			this.setState({ requested: true }, function() {
				this.props.getCurrencyStats();
			});
		}
	}

	getPriceIndex() {
		this.props.getPriceIndex(this.state);
	}
	changeCurrency = currency => {
		this.setState({ currency }, function() {
			this.getPriceIndex();
		});
	};

	changePeriod = period => {
		this.setState({ period }, function() {
			this.getPriceIndex();
		});
	};

	render() {
		return (
			<div className="page">
				<Container>
					<Row>
						<Col>
							<div className="c-card">
								<div className="c-card__heading">
									<CurrencyNavigation
										currency={this.state.currency}
										changeCurrency={this.changeCurrency}
										stats={this.props.stats}
									/>
								</div>
								<div className="c-card__body">
									{this.props.isFetching && (
										<div className="loader-position">
											<div className="loader-spinner" />
										</div>
									)}

									{!this.props.isFetching ? (
										<LineChart
											data={this.props.data}
											currency={this.props.currency}
											changePeriod={this.changePeriod}
										/>
									) : null}
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.priceIndex.cryptoCurrencyPrice || [],
		isFetching: state.priceIndex.isFetching,
		stats: state.statistics,
		currency: state.priceIndex.currency
	};
}

export default connect(mapStateToProps, { getPriceIndex, getCurrencyStats })(
	App
);
