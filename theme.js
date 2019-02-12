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
      fontFamily: "Dank Mono"
    }
  },

  // add a custom font
  font: "Dank Mono",

  blockquote: {
    border: "2rem solid gray",
    padding: "2rem"
  }
  // custom colors
}
