import { render } from "@testing-library/react";
import { Cell } from "./Cell";

describe("<Cell />", () => {
  const theories: [boolean, string][] = [
    [true, "black"],
    [false, "white"],
  ];

  theories.forEach(([isAlive, color]) => {
    it(`should render with a black background when isAlive is ${isAlive}`, () => {
      const { container } = render(<Cell isAlive={isAlive} />);
      expect(container.firstChild).toHaveStyle({ background: color });
    });
  });
});
