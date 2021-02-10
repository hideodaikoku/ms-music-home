import * as React from "react"
import { Link } from "gatsby"
import Layout from "../layout/layout"
// styles
const pageStyles = {
  color: "white",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
  fontWeight: 100
}

const linkStyle = {
  color: "yellow",
  textDecoration: "none",
  cursor: "pointer"
}

// markup
const NotFoundPage = () => {
  return (
    <Layout>
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry, we couldn’t find what you were looking for.
        <br />
        {/* {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null} */}
        <br />
        <Link to="/" style={linkStyle}>←ホームへ</Link>.
      </p>
    </main>
    </Layout>
  )
}

export default NotFoundPage
