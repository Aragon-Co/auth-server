# Migrations

### Seed local database

```sh
yarn seed:local -d mongodb://127.0.0.1:27017
```

### Create a new migration

```sh
yarn migrate:create -d mongodb://127.0.0.1:27017 <migration-name-goes-here>
```

### Apply migrations

```sh
yarn migrate:up -d mongodb://127.0.0.1:27017
```

### Prune migrations

```sh
yarn migrate:prune -d mongodb://127.0.0.1:27017
```
