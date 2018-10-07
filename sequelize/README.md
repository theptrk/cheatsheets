# sequelize

## Create a new model `model:generate`
```sh
$ node_modules/.bin/sequelize model:generate --name User --attributes name:String,email:String
```

## Setting up migrations `migration:generate`
- Create a basic migration file
```sh
$ ./node_modules/.bin/sequelize migration:generate --name add_username_to_user
```
- Create a 1:M migration file
```sh
$ node_modules/.bin/sequelize migration:generate --name add-userid-to-project
```

## Running Migrations `db:migrate`
```sh
$ ./node_modules/.bin/sequelize db:migrate
```
- Undo last migration
```sh
$ ./node_modules/.bin/sequelize db:migrate:undo
```
- Undo all migrations
```sh
$ ./node_modules/.bin/sequelize db:migrate:undo:all
```
