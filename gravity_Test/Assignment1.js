function twoSum(nums, target) {
   
    if (!Array.isArray(nums)) {
      throw new Error("Input nums must be an array");
    }
    
    if (typeof target !== 'number') {
      throw new Error("Input target must be a number");
    }
    
    const map = {}; 
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
  
   
      if (map.hasOwnProperty(complement)) {
        return [map[complement], i]; 
      }
  
      
      map[nums[i]] = i;
    }
  

    throw new Error("No two sum solution found");
  }
  
 
  const nums = [2, 7, 11, 15];
  const target = 9;
  
  try {
    const result = twoSum(nums, target);
    console.log(result); // Output: [0, 1]
  } catch (error) {
    console.error(error.message);
  }