# API documet

#### Register user

```http
  POST /api/register
```

| Parameter       | Type     | Description                        |
| :--------       | :------- | :-------------------------------   |      
| `name`          | `string` | **Required**. provide user name    |
| `email`         | `string` | **Required**. provide user email   |
| `password`      | `string` | **Required**. provide user password|
| `repeat_passwod`| `string` | **Required**. same to password     |  

#### login user

```http
  POST /api/login
```

| Parameter       | Type     | Description                                  |
| :--------       | :------- | :-------------------------------             |      
| `email`         | `string` | **Required**. provide  register user email   |
| `password`      | `string` | **Required**. provide  register user password|



#### Add Product

```http
  POST /api/products
```

Body Type: Form

| Parameter | Type     | Description                      |
| :-------- | :------- | :------------------------------- |
| `name` | `string` | **Required**. Name of the product   |
| `price` | `string` | **Required**. Price of the product |
| `size` | `string` | **Required**. Size of the product   |
| `image` | `file` | **Required**. image of the product   |

Autherizatioin Type: Bearer


#### Update Product

```http
  PUT /api/products/${id}
```

Body Type: Form

| Query Parameter | Type     | Description                     |
| :-------------- | :------- | :------------------------------ |
| `id`            | `string` | **Required**. id of the product |

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `name`    | `string` | **Required**. Name of the product  |
| `price`   | `string` | **Required**. Price of the product |
| `size`    | `string` | **Required**. Size of the product  |
| `image`   | `file`   |  image of the product              |

Autherizatioin Type: Bearer
User Type: admin

#### Delete Product

```http
  DELETE /api/products/${id}
```

| Query Parameter | Type     | Description                     |
| :-------------- | :------- | :------------------------------ |
| `id`            | `string` | **Required**. id of the product |

Autherizatioin Type: Bearer

#### Get all items

```http
  GET /api/products
```

#### Get item

```http
  GET /api/products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |
