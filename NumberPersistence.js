
function addPersistence(n) {
    var count = 0;
    var nums = n.toString().split("");

    if(nums.length <= 1){
        return count;
    }

    do {
        var sum = 0;

        for(var i = 0; i < nums.length; i++){
            sum += Number(nums[i]);
        }
        nums = sum.toString().split("");
        count += 1;

    } while (nums.length > 1);

    return count;
}

function multPersistence(n) {
    var count = 0;
    var nums = n.toString().split("");

    if(nums.length <= 1){
        return count;
    }

    do {
        var mult = 1;

        for(var i = 0; i < nums.length; i++){
            mult *= Number(nums[i]);
        }
        nums = mult.toString().split("");
        count += 1;

    } while (nums.length > 1);

    return count;
}