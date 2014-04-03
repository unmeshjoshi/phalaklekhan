module.exports.valueListHandler = {
    split_array:function(array, split_size) {
        var splitArrays = new Array();
        for (var i=0; i < array.length; i+=split_size) {
            splitArrays.push(array.slice(i,i+split_size));
        }
        return splitArrays;
    }
};
