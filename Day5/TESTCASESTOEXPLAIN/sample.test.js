/**
 * @jest-environment jsdom
 */
const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const fs = require("fs");
const path = require("path");
const { JSDOM } = require("jsdom");

describe("HTML Structure Test", () => {
  let document;

  beforeAll(() => {
    const filePath = path.join(__dirname, "sample.html");
    const html = fs.readFileSync(filePath, "utf-8");
    const dom = new JSDOM(html);
    document = dom.window.document;
  });

  test("should contain a <ul> element", () => {
    const ul = document.querySelector("ul");
    expect(ul).not.toBeNull();
  });

  test("should contain exactly 3 <li> elements", () => {
    const liElements = document.querySelectorAll("ul li");
    expect(liElements.length).toBe(3);
  });
});
