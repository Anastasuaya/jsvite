import './idbn.scss'

const forms = document.forms[0]
const Titleinput = forms.children[0] as HTMLInputElement
const select = forms.children[1] as HTMLSelectElement

forms.addEventListener('submit', async (e) => {
  e.preventDefault()
  

  // let search = 'element'
// axios(`http://www.omdbapi.com/?apikey=a821535d&s=${search}&page=2`).then((resp) => console.log(resp.data))
})