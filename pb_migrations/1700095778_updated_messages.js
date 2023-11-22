/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rclcv83smg6ibe2")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = "user = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rclcv83smg6ibe2")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null

  return dao.saveCollection(collection)
})
