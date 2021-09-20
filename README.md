# large-dataset-with-react

This project is about maintain large data-set at frontend specifically in react. I use typescript too as i was practicing typescript. I applied four different way to maintain large-scale data-set at forntend.

- Pagination
- Infinite-scroll
- Virtualized
- Windwoing

### Project bullet points

- All are funcational components
- Using react-hooks
- Style with Styled-components
- Using React-router

### Data generate from

-  [Faker](https://www.npmjs.com/package/faker)
- [JSON-Placeholder](https://jsonplaceholder.typicode.com/)

### Folder structure

```
├── Components
└── Utlities

```

Describes folders as follows:

- **/Components/** Contains all of the methods I tried to handle large-scale data at fronend. Every methods contain two version of it based accessibility of data. Such as:

1. Faker version
2. API version

- **/Utlities/** Contain API-Contoller and Navigation component.

### Fatching data

For data-fetching I use [axios](https://www.npmjs.com/package/axios) with async await and useEffect hook.
