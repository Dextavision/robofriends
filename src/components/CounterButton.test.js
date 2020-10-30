import { shallow } from "enzyme";
import React from "react";
import CounterButton from "./CounterButton";

describe("Render CounterButton", () => {
  it("Shallow Rendering", () => {
    const wrapper = shallow(<CounterButton color={"red"} />);
    const componentInstance = wrapper.instance();
    //Accessing react lifecyle methods
    componentInstance.shouldComponentUpdate(
      componentInstance.props.color,
      componentInstance.state.count
    );
    //Accessing component state
    expect(wrapper.state("count")).toBe(0);
    //Accessing component props
    expect(componentInstance.props.color).toEqual("red");
    //Accessing class methods
    componentInstance.updateCount();
    expect(componentInstance.state.count).toEqual(1);
  });
});
