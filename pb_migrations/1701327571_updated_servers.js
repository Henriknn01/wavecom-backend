/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qyuxogp5bw5r0p2")

  collection.deleteRule = "@request.auth.id != \"\" && @request.auth.id = @collection.servers.owner.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("qyuxogp5bw5r0p2")

  collection.deleteRule = null

  return dao.saveCollection(collection)
})
