// Test away!
const Car = require("./car");

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
    expect(foo()).toHaveLength(7);
  });
  describe("Car class", () => {
     let prius
     beforeEach(() => {
       prius = new Car("toyota", "prius");
     });

    test("it is defined", () => {
      expect(Car).toBeDefined();
      expect(Car).toBeInstanceOf(Function);
    });
    test("has model and make", () => {
    //   const prius = new Car("toyota", "prius");
      expect(prius).toHaveProperty("make");
      expect(prius).toHaveProperty("model");
      expect(prius.make).toBeDefined();
      expect(prius).toMatchObject({ make: "toyota", model: "prius" });
    });

    test("new cars start with the odometer at zero", () => {
    //   const prius = new Car("toyota", "prius");
      expect(prius).toHaveProperty("odometer", 0);
    });
  });
});
