var chart = c3.generate({
    bindto: '#horizontalbar',
    data: {
        columns: [
            ['data1', 100000, 200, 100, 400, 150, 250]
        ],
        type: 'bar'
    },
    bar: {
        width: {
            ratio: 0.5 // this makes bar width 50% of length between ticks
        }
        // or
        //width: 100 // this makes bar width 100px
    },
    axis: {
        rotated: true
    }
});