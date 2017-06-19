/*
* 一个简单的函数,将传入的所有数字进行求和,单元测试文件
*
* @author:wangzhenchuan
* @time:2017/6/19
* @fun:{describe} jasmine库提供的方法
* @fun {it} fasmine提供的方法
* @fun {expect} 同上
* @method:toEqual(),给定一系列的输入后,会产生一个明确的数值的输出结果,正确返回true,错误返回false
*/

describe("The add function", function() {
    it("Adds 1 + 2 + 3 together correctly", function() {
        var output = add(1, 2, 3);
        expect(output).toEqual(6);
    });

    it("Adds negative numbers together correctly", function() {
        var output = add(-1, -2, -3);
        expect(output).toEqual(-6);
    });
});