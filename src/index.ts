import BigNumber from "bignumber.js";

// BigNumber.config({ DECIMAL_PLACES: 0, ROUNDING_MODE: BigNumber.ROUND_DOWN });

export class Abacus {
	private votingPool: BigNumber;
	private reward: BigNumber = new BigNumber(2).times(1e8);

	public constructor(votingPool: number, private profitShare: number) {
		this.votingPool = new BigNumber(votingPool);
	}

	public perBlock(value: number): BigNumber {
		if (this.votingPool.isLessThanOrEqualTo(value)) {
			return this.reward;
		}

		return this.reward
			.times(this.profitShare / 100)
			.times(value)
			.dividedBy(this.votingPool);
	}

	public perDay(value: number): BigNumber {
		return this.perBlock(value).times(211);
	}

	public perWeek(value: number): BigNumber {
		return this.perDay(value).times(7);
	}

	public perMonth(value: number): BigNumber {
		return this.perWeek(value).times(4);
	}

	public perQuarter(value: number): BigNumber {
		return this.perMonth(value).times(3);
	}

	public perYear(value: number): BigNumber {
		return this.perMonth(value).times(12);
	}

	public voteWeight(value: number): BigNumber {
		if (this.votingPool.isZero()) {
			return new BigNumber(0);
		}

		return new BigNumber(value, 10).dividedBy(this.votingPool).times(100);
	}
}
