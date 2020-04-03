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
| Name           | Type   | Description                       |
| -------------- |:------:| ---------------------------------:|
| property name  | String | Name of Property        |
| property ID    | Number | The ID number of a specific prop. |
| images         | Array  | Array of Image objects.           |


#### Data Sub-Properties
| Name        | Type   | Description                                   |
| ----------- |:------:| ---------------------------------------------:|
| index       | Number | the index of each image object                |
| url         | String | the url where the image orignates from        |
| description | String | the image description that will render on app |

```sh
Schema = {
          propertyName: String,
          propID: Number,
          images: [{image}]
          }
          
image: {
        index: Number,
        url: String,
        description: String
        }
```

### GET

```sh
/api/properties/property_id
```
GET property by prop ID example

```sh

  {
   property_name: 'northridge'
   property ID: 1,
   images: [ {index: 1,
              url: {AWS.url.1},
              description: {random description}
              },
              {index: 2,
               url: {AWS.url.2},
               description: {random description}
              }]
   }      

```

RESPONSE:
```sh
Status Code 200
and
an object (see example above)
```

### POST

```sh
/api/properties
/api/images
```

POST property example

```sh

{propID: Number, property_name: String, images: Array}

```

POST image example

```sh

{propID: Number, imageUrl: String, description: String}

```

RESPONSE:
```sh
Status Code 201
```
### UPDATE

```sh
/api/properties/property_id
/api/properties/image_index
```

PUT property example

```sh

{uniqueID: Number, propID: Number, property_name: String}

```
 PUT image example

```sh

{uniqueID: Number, propID: Number, index:Number, imageUrl: String, description: String}

```

RESPONSE:
```sh
Status Code 200
```

### DELETE

```sh
/api/properties/property_id
/api/images/image_index
```

DELETE property example

```sh

{uniqueID: Number, propID: Number, property_name: String}

```

DELETE image example

```sh

{uniqueID: Number, propID: Number, index:Number, imageUrl: String, description: String}

```

RESPONSE:
```sh
Status Code 200
```
