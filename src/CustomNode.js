import React from "react";
import { RegisterNode } from "gg-editor";

class CustomNode extends React.Component {
    render() {
        return (
            <RegisterNode name="entry-node" config={{
                getCustomConfig(model) {
                    return {
                        size: [200, 100],
                        wrapperStyle: {
                            fill: '#09123e',
                        },
                        contentStyle: {
                            fill: 'rgb(245, 249, 251)',
                            border: '1px solid rgb(2, 178, 208)'
                        },
                        labelStyle: {
                            fill: '#09123e',
                            fontWeight: 'bold',
                            fontSize: 16
                        },
                    };
                },
                getAnchorPoints() {
                    return [
                        [0.5, 0],
                        [0.5, 1],
                        [0, 0.5],
                        [1, 0.5],
                    ];
                },
            }} extend={"bizFlowNode"} />
        );
    }
}

export default CustomNode;
