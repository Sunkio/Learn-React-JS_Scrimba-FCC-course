import { createRoot } from "react-dom/client"

/**
 * Challenge: Set up a React app from scratch.
 * Try rendering an unordered list with 2 -3 list items inside
 * with why you're excited to be learning React.
 */

const root = createRoot(document.querySelector("#root"))

root.render(
    <ul>
        <li>I love learning new things!</li>
        <li>React allows me to build pretty frontends.</li>
        <li>I'll be using it to build awesome frontends for fun web3 projects.</li>
    </ul>
)





