const { mean, median, mode} = require("./math");

describe("mean", () => {
    it("finds the mean of the empty array", () => {
        expect(median([])).toEqual(0)
    })
    it("finds the mean of the array", () => {
        expect(median([1, -1, 4, 2])).toEqual(1.5)
    })
})



describe("median", () => {
    it("finds the median of an even set", () => {
        expect(median([1,-1, 4,2])).toEqual(1.5)
    })
    it("finds the median of an odd set", () => {
        expect(median([1, -1, 4])).toEqual(1)
    })
})


describe("mode", () => {
    it("finds the mode", () => {
        expect(median([1,1, 4,4,4, 4,2])).toEqual(4)
    })
})

