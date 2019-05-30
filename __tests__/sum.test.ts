import BigNumber from "bignumber.js";
import { Abacus } from "../src";

const calculator: Abacus = new Abacus(1_000_000 * 1e8, 50);
const voteBalance: number = 500_000 * 1e8;

test("perBlock", () => {
	expect(calculator.perBlock(voteBalance)).toEqual(new BigNumber(50000000));
});

test("perDay", () => {
	expect(calculator.perDay(voteBalance)).toEqual(new BigNumber(10550000000));
});

test("perWeek", () => {
	expect(calculator.perWeek(voteBalance)).toEqual(new BigNumber(73850000000));
});

test("perMonth", () => {
	expect(calculator.perMonth(voteBalance)).toEqual(new BigNumber(295400000000));
});

test("perQuarter", () => {
	expect(calculator.perQuarter(voteBalance)).toEqual(new BigNumber(886200000000));
});

test("perYear", () => {
	expect(calculator.perYear(voteBalance)).toEqual(new BigNumber(3544800000000));
});

test("voteWeight", () => {
	expect(calculator.voteWeight(voteBalance)).toEqual(new BigNumber(50));
});
