/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rclcv83smg6ibe2")

  collection.deleteRule = "@request.auth.id != \"\" && @request.auth.id = user.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rclcv83smg6ibe2")

  collection.deleteRule = null

  return dao.saveCollection(collection)
})
