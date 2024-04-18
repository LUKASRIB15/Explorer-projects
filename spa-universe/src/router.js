export default class Router{
  routes = {}
  add(pathname, page, bgImage){
    this.routes[pathname] = [page, bgImage]
  }

  route(event){
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)

    this.handle()
  }

  handle(){
    const {pathname} = window.location
    const [route, bgImage] = this.routes[pathname] || this.routes[404]

    const links = document.querySelectorAll('a')

    links.forEach((link)=>{
      link.classList.remove('active')

      if(link.getAttribute('href') === pathname){
        link.classList.add('active')
      }
      
    })


    fetch(route)
    .then(data=>data.text())
    .then(html=>{
      document.querySelector('#app').innerHTML = html  
      document.body.style.backgroundImage = `url(${bgImage})`
    })
  }
}