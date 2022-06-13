# Vega node

Show interactive vega visualizations from nodejs.

## Usage

```js
import { vegaLite } from "vega-node";

await vegaLite({
    title: "Simple bar chart",
    spec: {
        data: {
            values: [
                { a: 'A', b: 28 },
                { a: 'B', b: 55 },
                { a: 'C', b: 43 }
            ]
        },
        mark: 'bar',
        encoding: {
            x: { field: 'a', type: 'ordinal' },
            y: { field: 'b', type: 'quantitative' }
        },
    }
});
```

## Examples

    $ npm run example -- examples/SimpleBarChart.ts
    $ npm run example -- examples/Interactive.ts