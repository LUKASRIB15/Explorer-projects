import Router from "./router.js"

const router = new Router()

router.add("/", "/pages/home.html", "assets/home.png")
router.add("/universe", "/pages/universe.html", "assets/universe.png")
router.add("/explorer", "/pages/explorer.html", "assets/explorer.png")
router.add(404, "/pages/404.html", "assets/home.png")

router.handle()

window.onpopstate = () => router.handle()
window.route = ()=>router.route()