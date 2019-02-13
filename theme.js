// example theme.js
import { notes as theme } from "mdx-deck/themes"
import nightOwl from "prism-react-renderer/themes/nightOwl"
export default {
  // extends the default theme
  ...theme,
  codeSurfer: {
    ...nightOwl,
    plain: {
      ...nightOwl.plain,
      fontFamily: "Dank Mono, monospace"
    }
  },

  // add a custom font
  font: "Source Sans Pro, sans-serif",

  blockquote: {
    border: ".25rem solid lightgray",
    padding: "2rem"
  },
  fontSizes: ["0.75em", "1em", "1.5em", "1.75em", "2em"]
}
