/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "50lp9hjs94eockl",
    "created": "2023-11-16 11:02:01.853Z",
    "updated": "2023-11-16 11:02:01.853Z",
    "name": "channels",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hro3feis",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("50lp9hjs94eockl");

  return dao.deleteCollection(collection);
})
