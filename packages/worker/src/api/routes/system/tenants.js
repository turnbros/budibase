const Router = require("@koa/router")
const controller = require("../../controllers/system/tenants")
const adminOnly = require("../../../middleware/adminOnly")

const router = Router()

router
  .get("/api/system/tenants/:tenantId/exists", controller.exists)
  .get("/api/system/tenants", adminOnly, controller.fetch)

module.exports = router
