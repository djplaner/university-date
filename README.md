# \<university-date> 

Web component that solves [the specific dates problem](https://djon.es/blog/2021/03/06/do-the-little-things-matter-in-design-for-learning/#specific-dates) with web-based learning materials.

i.e. it turns the text in _Situation B_ into text in _Situation A_. Where the specific dates are dependent on the current offering of the course.

![Example](https://i2.wp.com/djplaner.github.io/memex/share/blog/2021-03-06-10-04-55.png)

Modifies the following
```html
<university-date>Tuesday, Week 3</university-date>
```

to include a specific date when displayed- e.g. ```Tuesday, Week 3 (28 July 2020)``` based on the calendar for a specific university study period.

This component is an evolution of the [trimester-date component](https://github.com/djplaner/trimester-date#readme). Starting again with a better name and hopefully better idea of web component development.

## Current Status

This alpha release is just about ready. It now uses a singleton to provide a way of providing calendar information specific to different institutions. This singleton is required for this component to work.

The current example (dev/index.html) uses [university-date-calendar](https://github.com/djplaner/university-date-calendar) customised for a specific institution. Modify the *CALENDAR* data structure and the *getCurrentPeriod* method for your institution.

## Setup

Install dependencies:

```bash
npm i
```

## Dev Server

This sample uses modern-web.dev's [@web/dev-server](https://www.npmjs.com/package/@web/dev-server) for previewing the project without additional build steps. Web Dev Server handles resolving Node-style "bare" import specifiers, which aren't supported in browsers. It also automatically transpiles JavaScript and adds polyfills to support older browsers. See [modern-web.dev's Web Dev Server documentation](https://modern-web.dev/docs/dev-server/overview/) for more information.

To run the dev server and open the project in a new browser tab:

```bash
npm run serve
```

There is a development HTML file located at `/dev/index.html` that you can view at http://localhost:8000/dev/index.html.
