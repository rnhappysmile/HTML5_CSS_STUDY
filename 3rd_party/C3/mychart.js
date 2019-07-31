var data1 = ['data1', 300000, 200000, 100000, 400000, 150, 250];
var data2 = ['data2', 500000, 200000, 100000, 400000, 15, 25];
var xName = ['x', 'abc1', 'abc2', 'abc3', 'abc4', 'abc5', 'abc6'];

var chart = c3.generate({
    bindto: '#linechart',
    data: {
        x: 'x',
        columns: [
            xName,
            data1,
            data2
        ]
    },
    axis: {
        x: {
            type: 'category' // this needed to load string x value
        }
    },
});