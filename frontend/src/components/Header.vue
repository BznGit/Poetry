<template>
    <div :class="`header ${homePage? 'index': ''}`">
        <div class="center">
            <div class="logo">
                <router-link class="logo-link" to="/">
                    <div class="logo-icon">
                        <img class="icon" src="@/assets/svg/logo.svg"/>
                    </div>
                    <div class="logo-text">
                        <div class="name">Игорь Булгаков</div>
                        <div class="legend">философия — живопись — поэзия</div>
                    </div>
                </router-link>
            </div>
            <button class="button mobile" id="menu-button" >
                <span class="line"></span>
                <span class="line"></span>
                <span class="line"></span>
            </button>
            <div class="menu" id="primary-menu" @click="closeList()">
                <div class="menu-list" >
                    <router-link class="menu-item" to="/about" >
                        <div  class="item-link">о творчестве</div>
                    </router-link>
                    <router-link class="menu-item" to="/gallery">
                        <div  class="item-link">галерея</div>
                    </router-link>
                    <router-link class="menu-item" to="/poems">
                        <div   class="item-link">поэзия</div>
                    </router-link>
                    <router-link class="menu-item" to="/events">
                        <div   class="item-link">события</div>
                    </router-link>
                    <router-link class="menu-item" to="/books">
                        <div  class="item-link">книги</div>
                    </router-link>
                    <router-link class="menu-item" to="/contacts">
                        <div  class="item-link" >контакты</div>
                    </router-link>
                </div>
                <div class="cart">
                    <router-link :class="`menu-item cart ${count!=0?'active': ''}`" to="/cart">
                        <div class="cart-icon">
                            <img class="icon active" src="@/assets/svg/cart_w.svg"/>
                            <img class="icon empty " src="@/assets/svg/cart_g.svg"/>
                            <div class="cart-value">{{ count==0? '' : count}}</div>
                        </div>
                    </router-link>
                    <div :class="`cart-popup ${activ? 'active':''}`">
                        <img class="pointer" src="@/assets/svg/cart_pointer.svg"/>
                        <div class="painting">
                            <img class="image" src="@/assets/jpg/picture_01.jpg">
                        </div>
                        <div class="add">Добавлена в заявку</div>
                        <router-link class="link-more" to="/cart">
                            <div class="text">Перейти к оформлению</div>
                            <img class="icon" src="@/assets/svg/more.svg"/>
                        </router-link>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from '../store/index'
export default {
    setup() {
        const userStore = useStore();
        return {
          userStore
        };
    },
  name: 'HeaderComp',
  data(){
    return{
        rout: this.$route.path,
        activ: false,
        homePage: true
    }
  },
  computed:{
    count:function(){
         let sum = (this.userStore.getCart).length + (this.userStore.getCartBook).length
        return sum
    },
  },
  mounted () {
    const mobileMenuButton = document.querySelector('button')
    const body = document.body
    mobileMenuButton.onclick = function () {
        mobileMenuButton.classList.toggle('checked')
        body.classList.toggle('overflow')
        return null
    };
    window.onscroll = () => {
      const header = document.querySelector(".header");
      const Y = window.scrollY;
      const headerHeight = header.offsetHeight;

      if (Y > headerHeight * 2) {
          header.classList.add('fixed');
      } else if (Y === 0) {
          header.classList.remove('fixed');
      }
    }
  },
    methods: {
        closeList(){
            const mobileMenuButton = document.querySelector('button')
            if(mobileMenuButton.classList.contains('checked')) mobileMenuButton.classList.toggle('checked')       
        },
    },
    watch:{
        $route(val, ws){
            console.log('->', val.path, ws)
            if (val.path =='/cart'){
                const icons = document.querySelectorAll('.cart-icon .icon')
                icons[0].classList.add('emty')
                icons[0].classList.remove('active')
                icons[1].classList.add('active')
                icons[1].classList.remove('emty')
            } else{
                const icons = document.querySelectorAll('.cart-icon .icon')
                icons[1].classList.add('emty')
                icons[1].classList.remove('active')
                icons[0].classList.add('active')
                icons[0].classList.remove('emty')
            }
            if(val.path=='/') this.homePage = true; else this.homePage = false
            const body = document.body
            body.classList.remove('overflow')
        },
        count(newq, old){
            if(newq>old){
                this.activ = true
                setTimeout(()=>{
                    this.activ = false
                  
                }, 3000)
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
