describe("canConstructWord", function() {
  it("should return false for empty letters string", function() {
    expect(canConstructWord("abcd", "")).toBe(false);
  });

  it("should return true for empty message", function() {
    expect(canConstructWord("", "abc")).toBe(true);
  });

  it("should account for duplicates", function() {
    expect(canConstructWord("aa", "abcd")).toBe(false);
  });

  it("should handle large cases", function() {
    expect(
      canConstructWord("skbjjjvnnd", "fdjlkjfeburevjvnfnsjckjncjdnchbechbadhsd")
    ).toBe(true);
  });

  it("should return true if all letters contained", function() {
    expect(canConstructWord("abc", "abcd")).toBe(true);
  });
});


describe("getFreqLetters", function() {
  it("should return correct frequencies of letters", function() {
    expect(getFreqLetters("abcd")).toEqual(new Map([['a', 1], ['b', 1], ['c', 1], ['d', 1]]));
    expect(getFreqLetters("aaa")).toEqual(new Map([['a', 3]]));
  });
});
