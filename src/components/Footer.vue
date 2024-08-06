<template>
        <div class="footer">
            <div class="center">
                <div class="logo">
                    <router-link class="logo-link" to="/">
                        <div class="logo-icon">
                            <img class="icon" src="@/assets/svg/logo_g.svg"/>
                        </div>
                        <div class="logo-text">
                            <div class="name">Игорь Булгаков</div>
                        </div>
                    </router-link>
                </div>
                <div class="socials">
                    <a class="item" href="#">
                        <img class="icon one" src="@/assets/svg/social_vk.svg"/>
                        <img class="icon two" src="@/assets/svg/social_vk_on.svg"/>
                    </a>
                    <a class="item" href="#">
                        <img class="icon one" src="@/assets/svg/social_fb.svg"/>
                        <img class="icon two" src="@/assets/svg/social_fb_on.svg"/>
                    </a>
                    <a class="item" href="#">
                        <img class="icon one" src="@/assets/svg/social_yt.svg"/>
                        <img class="icon two" src="@/assets/svg/social_yt_on.svg"/>
                    </a>
                    <a class="item" href="#">
                        <img class="icon one" src="@/assets/svg/social_wa.svg"/>
                        <img class="icon two" src="@/assets/svg/social_wa_on.svg"/>
                    </a>
                    <a class="item" href="#">
                        <img class="icon one" src="@/assets/svg/social_tg.svg"/>
                        <img class="icon two" src="@/assets/svg/social_tg_on.svg"/>
                    </a>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'нeaderComp',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
