# RecruitCRM

This project includes a feature to view the Candidate page along with candidates assigned jobs, communication, and candidate details.

## Approach

**Analyzing the Mock:** First, I analyzed the mock to determine the global components and where I needed to render all pages and shared components.

From this analysis, I figured out:
1. We will need a sidebar and navbar as global components common to all pages.
2. Children will render in the empty space.
3. Since I was already using Mui UI components, I needed to add more customization on top of it.

**API Simulation:** As we needed to simulate an API, I found a simple JSON server that served our approach.

## Solution

This project is built using React, TypeScript, Mui, Mui Icons, React-router-dom, date-fns, axios, and json-server.

In this project, we have set up the following:

1. **PageLayout** - This takes care of placing the header and sidebar for all pages.
2. **Routing** - We can easily add other pages with new routes.
3. **Tabs** - Created tabs with multiple variants.
4. **Theme** - Set up to integrate multiple themes.
5. **JSON-server** - To simulate an actual API.
6. **useFetch** - Added custom hooks for fetching data.
7. **eslint** - To avoid compile-time errors.

## Challenges Faced

**Breakpoints:** As this is the first time I was working to make one complete large feature responsive, with a header and sidebar, it felt challenging to consider all screen sizes. I had to think about how the UX would look, how we could render the UI, and whether we should make the whole component responsive or just a single instance of it. Additionally, working with TypeScript added an extra layer of complexity. I started in the opposite direction by making pages responsive for desktop first and then adapting them for smaller and mid-sized screens. This made it hard to code and handle all use cases.

## Run Project

#### Install dependencies 

```
pnpm install
```

#### Start local server

```
pnpm run dev
```

#### Start Backend server 

```
pnpm run start:api
```