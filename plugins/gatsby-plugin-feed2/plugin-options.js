const { parse } = require("gatsby/graphql")
const { stripIndent } = require("common-tags");

// TODO: make serialize required in next major version bump
exports.feed = ({ Joi }) =>
  Joi.object({
    output: Joi.string().required(),
    query: Joi.string().required(),
    title: Joi.string(),
    serialize: Joi.func(),
    match: Joi.string(),
    link: Joi.string(),
  })
    .unknown(true)
    .external(({ query }) => {
      if (query) {
        try {
          parse(query)
        } catch (e) {
          throw new Error(
            stripIndent`
      Invalid plugin options for "gatsby-plugin-feed2":
      "query" must be a valid GraphQL query. Received the error "${e.message}"`
          )
        }
      }
    })

// TODO: make feeds required in next major version bump
exports.default = ({ Joi }) =>
  Joi.object({
    generator: Joi.string(),
    query: Joi.string(),
    setup: Joi.func(),
    feeds: Joi.array().items(feed({ Joi })),
  })
    .unknown(true)
    .external(({ query }) => {
      if (query) {
        try {
          parse(query)
        } catch (e) {
          throw new Error(
            stripIndent`
        Invalid plugin options for "gatsby-plugin-feed2":
        "query" must be a valid GraphQL query. Received the error "${e.message}"`
          )
        }
      }
    })
