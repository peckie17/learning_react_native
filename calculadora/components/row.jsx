import {View} from "react-native";

import React from "react";

const Row = ({children}) => {
    return (<View style={{flexDirection: "row"}}>{children}</View>);

};

export default Row;