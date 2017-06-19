describe("The add function", function() {
    // 第一个单元测试
    it("Adds 1 + 2 + 3 together correctly", function() {
        var output = add(1, 2, 3);
        expect(output).toEqual(6);
    });
    // 第二个单元测试
    it("Adds negative numbers together correctly", function() {
        var output = add(-1, -2, -3);
        expect(output).toEqual(-6);
    });
    // 第三个单元测试
    it("Returns 0 if no inputs are provided", function() {
        var output = add();
        expect(output).toEqual(0);
    });
    // 第四个单元测试
    it("Adds only numeric inputs together", function() {
        var output = add(1, "1", 2, "2", 3, "3");
        expect(output).toEqual(6);
    });
});
