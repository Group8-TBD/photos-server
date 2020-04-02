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
1. [API Routes](#ApiRoutes)

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

## ApiRoutes

### Object Format

#### Data Properties
| Name       | Type   | Description                       |
| ---------- |:------:| ---------------------------------:|
| Unique ID  | Number | Unique ID for each Object.        |
| prop ID    | Number | The ID number of a specific prop. |
| images     | Array  | Array of Image objects.           |


#### Data Sub-Properties
| Name        | Type   | Description                                   |
| ----------- |:------:| ---------------------------------------------:|
| index       | Number | the index of each image object                |
| url         | String | the url where the image orignates from        |
| description | String | the image description that will render on app |

```sh
Schema = {
          uniqueID: Number,
          propID: Number,
          images: [{image}]
          }
          
image: {index: Number,
        url: String,
        description: String
        }
```

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

RESPONSE:
```sh
Status Code 200
and
array of objects (see example above)
```

### POST

```sh
/api/photos
```

POST photo example

```sh

{propID: Number, imageUrl: String, description: String}

```

RESPONSE:
```sh
Status Code 201
```
### UPDATE

```sh
/api/photos/id
```

PUT photo example

```sh

(/api/photos, {uniqueID: Number, propID: Number, imageUrl: String, description: String}

```

RESPONSE:
```sh
Status Code 200
```

### DELETE

```sh
/api/photos/id
```

DELETE photo example

```sh

{uniqueID: Number, propID: Number, imageUrl: String, description: String}

```
RESPONSE:
```sh
Status Code 200
```
