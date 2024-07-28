function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  // Don't process array if its not ordered
  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    }

    // Move left pointer up if sum < target
    // Needs a bigger complement num
    else if (sum < target) {
      left++;
    }

    // Move right pointer down if sum > target
    // Given ASC ordering of array
    else {
      right--;
    }
  }

  return [];
}

// Test cases
console.log(twoSum([4, 11, 17, 25], 21));
console.log(twoSum([0, 1, 2, 2, 3, 5], 4));
console.log(twoSum([-1, 0], -1));

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
