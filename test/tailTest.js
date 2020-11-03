const assert = require('chai').assert;
const tail = require(`../tail`);
describe("#Tail", () => {
  it("returns elements excluding the head for [ Yo Yo, Lighthouse, Labs]", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words),["Lighthouse","Labs"]);
  });
});


