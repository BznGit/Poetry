import { defineStore } from 'pinia'
import { poems } from '@/store/data/poems'
import { collectionsPoems } from '@/store/data/collectionsPoems'
import { paintings } from '@/store/data/paintings'
import { gallerys } from '@/store/data/gallerys'
import { events } from '@/store/data/events'
import { books } from '@/store/data/books'


export const useStore = defineStore('counter', {
  state: () => ({
    poems: poems,
    collectionsPoems: collectionsPoems,
    paintings: paintings,
    gallerys: gallerys,
    events: events,
    books: books,
    cart:[],
    cartBook: [],
    lastPic: null
  }),

  getters: {
    getEvents: (state) => state.events,
    getBooks: (state) => state.books,
    getCart: (state) => state.cart,
    getCartBook: (state) => state.cartBook,
    getLastpic: (state) => state.lastPic
  },

  actions: {

    // Cart service ===============================================
    addCart(number){
      let obj = paintings.find(item=>item.number == number)
      let index = this.cart.findIndex(item=>item.number ==obj.number)
      if(index== -1){
        this.cart.push(obj)
        this.lastPic = 'gallery/' + obj.img
      } else return
    },
    addCartBook(id){
      let obj = books.find(item=>item.id === id)
      let index = this.cartBook.findIndex(item=>item.id == obj.id)
      if(index== -1){
        this.cartBook.push(obj);
        this.lastPic = 'books/' + obj.img
      }  else return
    },
    deleteItemFromCart(number){
      let index = this.cart.findIndex(item=>item.number == number) 
      this.cart.splice(index, 1)
    },
    deleteBookFromCart(id){
      let index = this.cartBook.findIndex(item=>item.id == id)
      this.cartBook.splice(index, 1)
    },

    // Gallery service ===============================================
    getPartGallerys(){
      let arr = []
      this.gallerys.forEach(item=>{
      let curGallery = structuredClone(this.getPartGallery(item.id))
        arr.push(curGallery) 
      })
      return arr
    },
    getPartGallery(id) {
      let curGallery = structuredClone(this.gallerys.find(item=>item.id == id))
      console.log(curGallery)
      let arr1 = [];
      let arr2 = [];
      let arr3 = [];
      let total = curGallery.paintings.length;
      let delta = Math.trunc(total / 3) -1;
      let index1 = 0;
      let count1 = (index1 + delta);
      let index2 = count1 + 1;
      let count2 = (index2 + delta);
      let index3 = count2 + 1;
      let count3 = total - 1;

      for(let i = index1; i <= count1; i++){
        let pic = structuredClone(this.paintings.find(elem=>elem.img == curGallery.paintings[i]))
        console.log(pic)
        pic.poem = structuredClone(this.addDivPoems(pic.poem))
        arr1.push(pic)
        
      }
      for(let i = index2; i <= count2; i++){
        let pic = structuredClone(this.paintings.find(elem=>elem.img == curGallery.paintings[i]))
        pic.poem  =  structuredClone(this.addDivPoems(pic.poem))
        arr2.push(pic)
      }
      for(let i = index3; i <= count3; i++){
        let pic = structuredClone(this.paintings.find(elem=>elem.img == curGallery.paintings[i]))
        pic.poem  = structuredClone(this.addDivPoems(pic.poem))
        arr3.push(pic)
      }
      curGallery.parts = [ arr1, arr2, arr3 ]
      return  curGallery
    },
    getAllGallerys(){
      let arr = []
      this.gallerys.forEach(item=>{
        let curGallery = structuredClone(this.getGallery(item.id))
        arr.push(curGallery) 
      })
      return arr
    },
    getGallery(id) {
      let curGallery = structuredClone(this.gallerys.find(item=>item.id == id))
      let arr = [];
      curGallery.paintings.forEach(item=>{
        let pic = structuredClone(this.paintings.find(elem=>elem.img == item))
        pic.poem =  structuredClone(this.addDivPoems(pic.poem))
        arr.push(pic)
      })
      curGallery.fullPaints = arr
      return  curGallery
    },

    // Collections service ===============================================
    getAllCollections(){
      let arr = []
      this.collectionsPoems.forEach(item=>{
        let curCollection = structuredClone(this.getCollection(item.id))
        arr.push(curCollection) 
      })
      return arr
    },
    getPartCollections(){
      let curCollection =structuredClone (this.getCollection(this.collectionsPoems[0].id))
      return curCollection
    },
    getCollection(id) {
      let curCollection = structuredClone(this.collectionsPoems.find(item=>item.id == id))
      let arr = [];
      curCollection.poems.forEach(item=>{
        let allPoems =structuredClone(this.poems.find(elem=>elem.name == item))
        allPoems.text =  structuredClone(this.addDivPoems(allPoems.text))
        arr.push(allPoems)
      })
      curCollection.allPoems = arr
      return  curCollection

    },
    addDivPoems(poem){
      let a = poem.slice(1)
      let n = a.replace(/\n/g, '</div>')
      let divs = n.replace(/[А-Я]/g, '<div>$&')
       return divs
    },
    getPartPoems(){
      let ishod = [
        'Из ветра я себе построил дом',
        'Уключина скрипит', 'Погадай мне по руке гадалка',
        'Не совпадают наши планы'
      ];
      let arr = []
      ishod.forEach(name=>{
        let poem = structuredClone(this.poems.find(elem=>elem.name == name))
        poem.text =  structuredClone(this.addDivPoems(poem.text))
        let obj = {}
        this.collectionsPoems.forEach(collection=>{
          let ok = collection.poems.includes(name)
          if (ok) {
            obj.collection = collection
            obj.poem = poem
          }
        })
        arr.push(obj)
      })
      return arr
    }
  }
})
