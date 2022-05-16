This is a monorepo housing:

* **Website**: Public-facing service (Next.js) serving alexisrenderos.com.
* **Platform**: Core back-end service (Node.js) serving GraphQL APIs and interfacing as the database manager.

[![Netlify Status](https://api.netlify.com/api/v1/badges/63e386ee-88ff-4bd8-b5b3-9b17cc31e851/deploy-status)](https://app.netlify.com/sites/voluble-licorice-1eec99/deploys)

It's a web app built using:

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Testing with [Jest](https://jestjs.io/)

## Getting Started

First, run the development server:

```bash
npm run dev
```

The website is hosted at [http://localhost:3000](http://localhost:3000).

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/getAllVisibleWorkExperience](http://localhost:3000/api/getAllVisibleWorkExperience). This endpoint can be edited in `pages/api/getAllVisibleWorkExperience.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
