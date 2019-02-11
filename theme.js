// example theme.js
import theme from "mdx-deck/themes"
import okaidia from "react-syntax-highlighter/styles/prism/okaidia"
export default {
  // extends the default theme
  ...theme,
  prism: {
    style: okaidia
  },
  // add a custom font
  font: "Dank Mono",
  blockquote: {
    border: "2rem solid gray",
    padding: "2rem"
  }
  // custom colors
}
