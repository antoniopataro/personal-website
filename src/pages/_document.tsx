import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>Antônio Pataro</title>
      <meta
        name="keywords"
        content="front-end developer, web development, software engineer, personal website, portfolio, ui, ux, dx, html, css, javascript, typescript, vue, react, next, docker, node, express, nest, mongodb, postgresql, mysql, prisma, graphql, apollo, git, python, figma, jest, vitest, tailwind"
      />
      <meta
        name="description"
        content="Hello! I'm Antônio, a passionate Front-End Dev. from Brazil who's very experienced at building modern, performatic and UX-first applications for tech-oriented solutions. Hope you like my website!"
      />
      <link rel="shortcut icon" href="/profile-pic.png" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
