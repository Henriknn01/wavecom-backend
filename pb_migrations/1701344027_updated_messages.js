/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rclcv83smg6ibe2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sw8g6q6b",
    "name": "hasImage",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rclcv83smg6ibe2")

  // remove
  collection.schema.removeField("sw8g6q6b")

  return dao.saveCollection(collection)
})
