const config = {
  s3bucket: 'https://codechefs.s3.amazonaws.com/',
  siteTitle: "Code Chefs Developer Podcast", // Site title.
  siteTitleShort: "Code Chefs", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Code Chefs Web Developer Podcast", // Alternative site title for SEO.
  siteLogo: "/logos/code_chefs_podcast_art.png", // Logo used for SEO and manifest.
  siteUrl: "https://codechefs.dev", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Hungry Web Developer Podcast", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "Code Chefs - Hungry Web Developer Podcast", // Title of the RSS feed
  // siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "G-08P9C1V7PY",
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "MM/DD/YYYY", // Date format for display.
  postsPerPage: 9999, // Amount of posts displayed per listing page.
  userName: "Code Chefs", // Username to display in the author segment.
  userEmail: "vincentntang@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "codechefsdev", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Florida, USA", // User location to display in the author segment.
  userAvatar: "https://www.codechefs.dev/logos/vincentntang.jpeg", // User avatar to display in the author segment.
  userDescription: "Code Chefs is a podcast for web developers who want to level up! We do all topics ranging from frontend to backend development",
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  // userLinks: [
  //   {
  //     label: "GitHub",
  //     url: "https://github.com/vincentntang/codechefs",
  //     iconClassName: "fa fa-github"
  //   },
  //   {
  //     label: "Twitter",
  //     url: "https://twitter.com/codechefsdev",
  //     iconClassName: "fa fa-twitter"
  //   },
  //   // {
  //   //   label: "Email",
  //   //   url: "mailto:codechefsdev@gmail.com",
  //   //   iconClassName: "fa fa-envelope"
  //   // }
  // ],
  copyright: "Copyright © 2020 Code Chefs", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
