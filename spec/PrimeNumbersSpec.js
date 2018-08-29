describe("Prime Numbers", function() {
  it("should return empty array if passed the number one", function(){
    var actual = generate(1);
    expect(actual).toEqual([]);
  });
  it("should return [2] if passed the number 2", function(){
    var actual = generate(2);
    expect(actual).toEqual([2]);
  });
  it("should return [3] if passed the number 3", function() {
    var actual = generate(3);
    expect(actual).toEqual([3]);
  });
  it("should return [2,2] if passed the number 4", function() {
    var actual = generate(4);
    expect(actual).toEqual([2,2]);
  });
  it ("it should return [5] if passed the number 5", function(){
    var actual = generate(5);
    expect(actual).toEqual([5]);
  });
  it("it should return [2,3] if passed the number 6", function(){
    var actual = generate(6);
    expect(actual).toEqual([2,3]);
  });
  it("it should return [3,3] if passed the number 9", function(){
    var actual = generate(9);
    expect(actual).toEqual([3,3]);
  });
  it("it should return [2,2,3,5,7,11] if passed the number 4620", function(){
    var actual = generate(4620);
    expect(actual).toEqual([2,2,3,5,7,11]);
  });
});
