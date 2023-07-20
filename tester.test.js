import { render } from "jest";
import { Tester } from "./src/test/tester";

test("should return the correct result", () => {
  // Call the function
  const result = render(<Tester />);

  // Assert the result
  expect(result).toEqual(2);
});
