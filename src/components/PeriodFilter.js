// @flow
import React, { Component } from "react";
import { Button, ButtonGroup } from "reactstrap";

type Props = {
	changePeriod: (data: string) => void,
	period: string
};

class PeriodFilter extends Component<Props> {
	render() {
		return (
			<div>
				<Button
					color="primary"
					onClick={() => this.props.changePeriod("week")}
					active={this.props.period === "week"}
				>
					Week
				</Button>
				<Button
					color="primary"
					onClick={() => this.props.changePeriod("month")}
					active={this.props.period === "month"}
				>
					Month
				</Button>
				<Button
					color="primary"
					onClick={() => this.props.changePeriod("year")}
					active={this.props.period === "year"}
				>
					Year
				</Button>

				<Button
					color="primary"
					onClick={() => this.props.changePeriod("all")}
					active={this.props.period === "all"}
				>
					All
				</Button>
			</div>
		);
	}
}

export default PeriodFilter;
