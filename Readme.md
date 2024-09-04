npx typeorm migration:generate -d src/index.js src/migrations/initial-migration --outputJs

npx typeorm migration:run -d src/index.js


npx typeorm migration:generate -d src/index.js src/migrations/ipermission-migration --outputJs