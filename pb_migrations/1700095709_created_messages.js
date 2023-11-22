/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "rclcv83smg6ibe2",
    "created": "2023-11-16 00:48:29.320Z",
    "updated": "2023-11-16 00:48:29.320Z",
    "name": "messages",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9wu7cvqn",
        "name": "user",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "l5xmpm7p",
        "name": "text",
        "type": "text",
        "required": true,
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
  const collection = dao.findCollectionByNameOrId("rclcv83smg6ibe2");

  return dao.deleteCollection(collection);
})
