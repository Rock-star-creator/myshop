### Register user

```http
  POST /api/register
```

| Parameter       | Type     | Description                        |
| :--------       | :------- | :-------------------------------   |      
| `name`          | `string` | **Required**. provide user name    |
| `email`         | `string` | **Required**. provide user email   |
| `password`      | `string` | **Required**. provide user password|
| `repeat_passwod`| `string` | **Required**. same to password     |  

### login user

```http
  POST /api/register
```

| Parameter       | Type     | Description                                  |
| :--------       | :------- | :-------------------------------             |      
| `email`         | `string` | **Required**. provide  register user email   |
| `password`      | `string` | **Required**. provide  register user password|


#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.