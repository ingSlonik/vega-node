import { vegaLite } from "../src";

vegaLite({
    title: "Simple bar chart",
    spec: {
        data: {
            values: [
                { a: 'A', b: 28 },
                { a: 'B', b: 55 },
                { a: 'C', b: 43 },
                { a: 'D', b: 91 },
                { a: 'E', b: 81 },
                { a: 'F', b: 53 },
                { a: 'G', b: 19 },
                { a: 'H', b: 87 },
                { a: 'I', b: 52 }
            ]
        },
        mark: 'bar',
        encoding: {
            x: { field: 'a', type: 'ordinal' },
            y: { field: 'b', type: 'quantitative' }
        }
    }
});
