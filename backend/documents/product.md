In create product API, we may get image as data so in place of using `json` we used `multipart form data`

to generate `uniquename` of uploaded image we use `${Date.now()}-${Math.round(Math.random()*1E9)}${path.extname(file.originalname)}` formula.