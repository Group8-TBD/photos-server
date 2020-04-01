# Project Name

> Project description

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [API Routes](#Api Routes)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Api Routes

### Object Schema

#### Data Properties
| Name       | Type   | Description                       |
| ---------- |:------:| ---------------------------------:|
| Unique ID  | Number | Unique ID for each Object.        |
| prop ID    | Number | The ID number of a specific prop. |
| images     | Arrayn | Array of Image objects.           |


#### Data Sub-Properties
| Name        | Type   | Description                                   |
| ----------- |:------:| ---------------------------------------------:|
| index       | Number | the index of each image object                |
| url         | String | the url where the image orignates from        |
| description | String | the image description that will render on app |

### GET

```sh
/api/photos
```
GET photo by prop ID example

```sh

[ {prop ID: 1,
   images: [ {index: 1,
              url: {AWS.url.1},
              description: {random description}
              },
              {index: 2,
              url: {AWS.url.2},
              description: {random description}
              }]
   },
   {prop ID: 1,
   images: [ {index: 1,
              url: {AWS.url.1},
              description: {random description}
              },
              {index: 2,
              url: {AWS.url.2},
              description: {random description}
              }]},
   }]           

```

### POST

```sh
/api/photos
```

POST photo example

```sh

axios.post(/api/photos, {propID: Number, imageUrl: String, description: String} )

```

### PUT

```sh
/api/photos
```

POST photo example

```sh

axios.put(/api/photos, {uniqueID: Number, propID: Number, imageUrl: String, description: String} )

```

### DELETE

```sh
/api/photos
```

POST photo example

```sh

axios.delete(/api/photos, {uniqueID: Number, propID: Number, imageUrl: String, description: String} )

```
