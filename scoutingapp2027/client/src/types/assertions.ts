import type { Constructor } from "./utilityTypes";

export function assertInstanceOf<T>(value: unknown, constructor: Constructor<T>): asserts value is T {
	if (!(value instanceof constructor)) {
		throw new Error(`Assertion Error: ${value} is not instance of ${constructor.name}`);
	}
}

export function assertBoolean(value: unknown): asserts value is boolean {
	if (!(typeof value === "boolean")) {
		throw new Error(`Assertion Error: ${value} is not boolean`);
	}
}
export function assertTruthy(value: unknown): void {
	if (!value) {
		throw new Error(`Assertion Error: ${value} is not truthy`);
	}
}
export function assertFalsy(value: unknown): void {
	if (value) {
		throw new Error(`Assertion Error: ${value as never} is not falsy`);
	}
}

export function assertString(value: unknown): asserts value is string {
	if (!(typeof value === "string")) {
		throw new Error(`Assertion Error: ${value} is not string`);
	}
}

export function assertNumber(value: unknown): asserts value is number {
	if (!(typeof value === "number")) {
		throw new Error(`Assertion Error: ${value} is not number`);
	}
}

export function assertNonNull<T>(value: T | null | undefined): asserts value is T {
	if (value === undefined) {
		throw new Error(`Assertion Error: ${value} is undefined`);
	}
	if (value === null) {
		throw new Error(`Assertion Error: ${value} is null`);
	}
}

export function assertTinyInt(value: unknown): asserts value is 0 | 1 {
	if (value !== 0 && value !== 1) {
		throw new Error(`Assertion Error: ${value} is not 0 or 1`);
	}
}

export function assertEquals<T>(a: T, b: unknown): asserts b is T {
	if (a !== b) {
		throw new Error(`Assertion Error: ${a} is not equal to ${b}`);
	}
}
