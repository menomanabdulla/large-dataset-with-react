# large-dataset-with-react

This project is about maintain large data-set at frontend specifically in react. I use typescript too as i was practicing typescript. I applied four different way to maintain large-scale data-set at frontend.

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

- **/Utlities/** Contain API-Contoller,  Navigation component, Route-message component.

### Fatching data(API-Contoller)

1. api client [axios](https://www.npmjs.com/package/axios)
2. reactjs hooks
3. for dealing with api response async-await funcation 

### Navigation component
Navigation component contain top-menu and navigation mechanism for navigate different route.

### Route-message component
Route-message component for better user-experience. Route-message component change dom-tree based on route-change with route-change message. 
