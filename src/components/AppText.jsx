import { createElement } from "react";

function AppText ({ as, text, ...props}) {

    // console.log("DEBUG <Text />", { as, text, props });
    return (
        createElement(as, {...props, children:text})
    )
}

export default AppText