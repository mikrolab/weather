<template>
    <div class="navbar">
        <img class="logo" src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
             alt="Open Weather">
        <div class="links">
            <router-link to="/">Main</router-link>
            <router-link to="/favorite">Favorite</router-link>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar {
    display: flex;
    align-items: center;
    margin: 20px 0;
    justify-content: space-between;

    .logo {
        max-width: 200px;
        max-height: 200px;
    }
    
    .links {        
        a {
            text-decoration: none;
            color: teal;
            padding: 10px 15px;
            font-size: 20px;
            font-weight: bold;
            
            &:hover {
                color: darkblue;
            }
            
            &.active {
                color: darkblue;
            }
        }
    }
}
</style>