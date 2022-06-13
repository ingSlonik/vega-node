import { vegaLite } from "../src";

vegaLite({
    title: "Interactive chart",
    spec: {
        "data": { "url": "examples/stocks.csv" },
        "encoding": { "x": { "field": "date", "type": "temporal" } },
        "layer": [
            {
                "encoding": {
                    "color": { "field": "symbol", "type": "nominal" },
                    "y": { "field": "price", "type": "quantitative" }
                },
                "layer": [
                    { "mark": "line" },
                    { "transform": [{ "filter": { "param": "hover", "empty": false } }], "mark": "point" }
                ]
            },
            {
                "transform": [{ "pivot": "symbol", "value": "price", "groupby": ["date"] }],
                "mark": "rule",
                "encoding": {
                    "opacity": {
                        "condition": { "value": 0.3, "param": "hover", "empty": false },
                        "value": 0
                    },
                    "tooltip": [
                        { "field": "AAPL", "type": "quantitative" },
                        { "field": "AMZN", "type": "quantitative" },
                        { "field": "GOOG", "type": "quantitative" },
                        { "field": "IBM", "type": "quantitative" },
                        { "field": "MSFT", "type": "quantitative" }
                    ]
                },
                "params": [{
                    "name": "hover",
                    "select": {
                        "type": "point",
                        "fields": ["date"],
                        "nearest": true,
                        "on": "mouseover",
                        "clear": "mouseout"
                    }
                }]
            }
        ]
    }
});
