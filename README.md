# \<university-date> 

Web component that solves [the specific dates problem](https://djon.es/blog/2021/03/06/do-the-little-things-matter-in-design-for-learning/#specific-dates) with web-based learning materials.

i.e. it turns the text in _Situation B_ into text in _Situation A_. Where the specific dates are dependent on the current offering of the course.

[](https://i2.wp.com/djplaner.github.io/memex/share/blog/2021-03-06-10-04-55.png?w=1140&ssl=1)

Modifies the following
```html
<university-date>Tuesday, Week 3</university-date>
```

to include a specific date when displayed- e.g. ```Tuesday, Week 3 (28 July 2020)``` based on the calendar for a specific university study period.

This component is an evolution of the [trimester-date component](https://github.com/djplaner/trimester-date#readme). Starting again with a better name and hopefully better idea of web component development.

## Current Limitation

Currently, the dates are hard coded for a particular university. This should change.

## Setup

Install dependencies:

```bash
npm i
```

## Testing

This sample modern-web.dev's
[@web/test-runner](https://www.npmjs.com/package/@web/test-runner) along with
Mocha, Chai, and some related helpers for testing. See the
[modern-web.dev testing documentation](https://modern-web.dev/docs/test-runner/overview) for
more information.

Tests can be run with the `test` script:

```bash
npm test
```

## Dev Server

This sample uses modern-web.dev's [@web/dev-server](https://www.npmjs.com/package/@web/dev-server) for previewing the project without additional build steps. Web Dev Server handles resolving Node-style "bare" import specifiers, which aren't supported in browsers. It also automatically transpiles JavaScript and adds polyfills to support older browsers. See [modern-web.dev's Web Dev Server documentation](https://modern-web.dev/docs/dev-server/overview/) for more information.

To run the dev server and open the project in a new browser tab:

```bash
npm run serve
```

There is a development HTML file located at `/dev/index.html` that you can view at http://localhost:8000/dev/index.html.

## Editing

If you use VS Code, we highly reccomend the [lit-plugin extension](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin), which enables some extremely useful features for lit-html templates:

- Syntax highlighting
- Type-checking
- Code completion
- Hover-over docs
- Jump to definition
- Linting
- Quick Fixes

The project is setup to reccomend lit-plugin to VS Code users if they don't already have it installed.

## Linting

Linting of JavaScript files is provided by [ESLint](eslint.org). In addition, [lit-analyzer](https://www.npmjs.com/package/lit-analyzer) is used to type-check and lint lit-html templates with the same engine and rules as lit-plugin.

The rules are mostly the recommended rules from each project, but some have been turned off to make LitElement usage easier. The recommended rules are pretty strict, so you may want to relax them by editing `.eslintrc.json`.

To lint the project run:

```bash
npm run lint
```

## Formatting

[Prettier](https://prettier.io/) is used for code formatting. It has been pre-configured according to the Polymer Project's style. You can change this in `.prettierrc.json`.

Prettier has not been configured to run when commiting files, but this can be added with Husky and and `pretty-quick`. See the [prettier.io](https://prettier.io/) site for instructions.

## Static Site

This project includes a simple website generated with the [eleventy](11ty.dev) static site generator and the templates and pages in `/docs-src`. The site is generated to `/docs` and intended to be checked in so that GitHub pages can serve the site [from `/docs` on the master branch](https://help.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

To enable the site go to the GitHub settings and change the GitHub Pages &quot;Source&quot; setting to &quot;master branch /docs folder&quot;.</p>

To build the site, run:

```bash
npm run docs
```

To serve the site locally, run:

```bash
npm run docs:serve
```

To watch the site files, and re-build automatically, run:

```bash
npm run docs:watch
```

The site will usually be served at http://localhost:8000.

## Bundling and minification

This starter project doesn't include any build-time optimizations like bundling or minification. We recommend publishing components as unoptimized JavaScript modules, and performing build-time optimizations at the application level. This gives build tools the best chance to deduplicate code, remove dead code, and so on.

For information on building application projects that include LitElement components, see [Build for production](https://lit-element.polymer-project.org/guide/build) on the LitElement site.

## More information

See [Get started](https://lit-element.polymer-project.org/guide/start) on the LitElement site for more information.
