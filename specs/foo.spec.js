
console.info("### SCRIPT LOADED");

function foo() {
	return 42;	
}

describe("foo", () => {
	it("should return 42", () => {
		expect(foo()).toBe(42);
	});
});
