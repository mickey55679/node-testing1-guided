// Test away!
function foo() {
  return "the foo";
}
describe("our first tests", () => {
  test("sanity", () => {
    expect(5).toBe(5);
  });
  test("objects", () => {
    const o = { a: 1 };
    const oo = { a: 1 };
    const ooo = oo;
    expect(o).toBe(o);
    expect(oo).toBe(ooo);
  });
  test("objects again", () => {
    expect({ a: 1 }).toEqual({ a: 1 }); //same shape but not same object
  });
});
describe("foo function", () => {
  test("foo returns the foo", () => {
    expect(foo()).toBe("the foo");
    expect(foo()).toHaveLength(7)
  });
});
