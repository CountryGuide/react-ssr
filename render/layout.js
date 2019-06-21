export function layout(html, preloadedState) {
	return `
    <!doctype html>
    <html lang="en">
      <head>
        <title>Redux Universal Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="blblghlhlh">
        <link rel="stylesheet" href="static/style.css">
        <link rel="shortcut icon" href="static/favicon.ico">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\\u003c')}
        </script>
        <script src="static/bundle.js"></script>
      </body>
    </html>
    `
}
