// @flow
import React, { Component } from "react";
import classnames from "classnames";

import { Nav, NavItem, NavLink } from "reactstrap";
import btcIcon from "../assets/images/crpt-btc.png";
import ethIcon from "../assets/images/crpt-eth.png";
import ltcIcon from "../assets/images/crpt-ltc.png";
import type { Statistics } from "../types/statistics";

type Props = {
	currency: string,
	changeCurrency: (data: string) => void,
	stats: Statistics
};

class CurrencyNavigation extends Component<Props> {
	render() {
		return (
			<Nav tabs justified>
				<NavItem>
					<NavLink
						className={classnames({
							active: this.props.currency === "BTC"
						})}
						onClick={() => {
							this.props.changeCurrency("BTC");
						}}
					>
						<img
							src={btcIcon}
							alt=""
							className="img-fluid crypto-icon"
						/>Bitcoin - ${this.props.stats.btc}
					</NavLink>
				</NavItem>

				<NavItem>
					<NavLink
						className={classnames({
							active: this.props.currency === "ETH"
						})}
						onClick={() => {
							this.props.changeCurrency("ETH");
						}}
					>
						<img
							src={ethIcon}
							alt=""
							className="img-fluid crypto-icon"
						/>Ethereum - ${this.props.stats.eth}
					</NavLink>
				</NavItem>

				<NavItem>
					<NavLink
						className={classnames({
							active: this.props.currency === "LTC"
						})}
						onClick={() => {
							this.props.changeCurrency("LTC");
						}}
					>
						<img
							src={ltcIcon}
							alt=""
							className="img-fluid crypto-icon"
						/>LiteCoin - ${this.props.stats.ltc}
					</NavLink>
				</NavItem>
			</Nav>
		);
	}
}

export default CurrencyNavigation;
