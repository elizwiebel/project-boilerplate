function reduceSum(nums, initialValue) {
    return nums.reduce((total, num) => total + num, initialValue)
}

// TEST CONFIG
// console.log(reduceSum([1, 2, 3, 4, 5], 0))
