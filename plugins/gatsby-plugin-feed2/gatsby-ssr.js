const React = require("react")
const { withPrefix, withAssetPrefix } = require("gatsby")
const { defaultOptions } = require("./internals")

// TODO: remove for v3
const gatsbyWithPrefix = withAssetPrefix || withPrefix

exports.onRenderBody = ({ setHeadComponents, pathname }, pluginOptions) => {
  const { feeds } = {
    ...defaultOptions,
    ...pluginOptions,
  }

  const links = feeds
    .filter(({ match }) => {
      if (typeof match === `string`) return new RegExp(match).exec(pathname)
      return true
    })
    .map(({ output, title, link }, i) => {
      const href = link || gatsbyWithPrefix(output.replace(/^\/?/, `/`))

      return (
        <link
          key={`gatsby-plugin-feed2-${i}`}
          rel="alternate"
          type="application/rss+xml"
          title={title}
          href={href}
        />
      )
    })

  setHeadComponents(links)
}
