/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("50lp9hjs94eockl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qeitmu8m",
    "name": "server",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "qyuxogp5bw5r0p2",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "khwozy3g",
    "name": "isAvailableForMembers",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("50lp9hjs94eockl")

  // remove
  collection.schema.removeField("qeitmu8m")

  // remove
  collection.schema.removeField("khwozy3g")

  return dao.saveCollection(collection)
})
