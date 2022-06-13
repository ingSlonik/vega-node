import type { TopLevelSpec } from "vega-lite";

import { resolve } from "path";
import NativeWebView from "native-webview";

type VegaLiteNodeConf = {
    title?: string,
    width?: number,
    height?: number,
    spec: TopLevelSpec,
};

const defaultConf = {
    title: "Vega Node",
    width: 800,
    height: 600,
}

export async function vegaLite(conf: VegaLiteNodeConf): Promise<void> {
    const { title, width, height, spec } = { ...defaultConf, ...conf };
    const filledSpec: TopLevelSpec = {
        $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
        width: width - 64,
        height: height - 24,
        autosize: {
            type: "fit",
            contains: "padding",
        },
        ...spec,
    };

    const nwv = new NativeWebView({
        title,
        innerSize: { width, height },
        getPath(src) {
            if (src === "index.html") {
                return resolve(__dirname, "..", "vega-lite.html");
            } else {
                const path = resolve(process.cwd(), src);
                console.log("File for vega:", path);
                return path;
            }
        },
        onMessage(message) {
            // console.log("Message from WebView:", message);

            if (message !== null && typeof message === "object" && message.type === "loaded") {
                nwv.eval(`vegaShow(${JSON.stringify(filledSpec)})`);
            }
        },
    });

    await nwv.run();
}
