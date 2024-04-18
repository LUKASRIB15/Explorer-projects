import { GithubUser } from "./github-user.js"

class Favorites{
  constructor(root){
    this.root = document.querySelector(root)

    this.load()
    this.tbody = this.root.querySelector('tbody')
  }

  load(){
    this.entries = JSON.parse(localStorage.getItem('@github-favorites:users')) || []
  }

  save(){
    localStorage.setItem('@github-favorites:users', JSON.stringify(this.entries))
  }

  delete(user){
    const filteredEntries = this.entries.filter(entry=>{
      return entry.login !== user.login
    })

    this.entries = filteredEntries
    this.update()
    this.save()
  }

  async add(username){
    try{

      const userExists = this.entries.find(entry => entry.login === username)

      if(userExists){
        throw new Error("Esse usuário já foi adicionado aos favoritos!")
      }

      const user = await GithubUser.search(username)

      if(user.login === undefined){
        throw new Error("Não existe esse usuário cadastrado! Tente outro username")
      }

      this.entries = [user, ...this.entries]

      this.update()
      this.save()
    }catch(error){
      alert(error.message)
    }
  }
}

export class FavoritesView extends Favorites{
  constructor(root){
    super(root)

    this.update()
    this.onAdd()
  }

  onAdd(){
    const favoriteButton = this.root.querySelector('.search button')

    favoriteButton.addEventListener('click',() =>{
      const {value} = this.root.querySelector('.search input')

      this.add(value)
    })
  }

  update(){
    this.removeAllTr()

    this.entries.forEach( user => {
      const row = this.createUser(user)

      row.querySelector('.remove').addEventListener('click', ()=>{
        this.delete(user)
      })

      this.tbody.append(row)

    })


  }

  createUser(user){
    const tr = document.createElement('tr')

    tr.innerHTML = `<tr>
                      <td id="user">
                        <img src="https://github.com/${user.login}.png" alt="Imagem de perfil do github do ${user.name}" />
                        <div>
                          <p>${user.name}</p>
                          <a href="https://github.com/${user.login}">/${user.login}</a>
                        </div>
                      </td>
                      <td id="repositories">${user.public_repos}</td>
                      <td id="followers">${user.followers}</td>
                      <td>
                        <button class="remove">Remover</button>
                      </td>
                    </tr>`
    
    return tr
  }

  removeAllTr(){
    const trs = this.root.querySelectorAll('tbody tr')

    trs.forEach((tr)=>{
      tr.remove()
    })
  }
}