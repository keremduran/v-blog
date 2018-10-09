<!--
<template>
    <header class="main-header">
        <nav class="main-nav">
            <ul class="nav-links">
                <nuxt-link to="/" tag="li" class="nav-link"><a>Home</a></nuxt-link>
                <nuxt-link to="posts" tag="li" class="nav-link"><a>All Posts</a></nuxt-link>
                <nuxt-link to="about" tag="li" class="nav-link"><a>About</a></nuxt-link>
            </ul>
        </nav>
    </header>
</template>
-->

<template>
    <header class="main-header mt-1">
        <!-- Side Nav -->
        <v-navigation-drawer
            class="main-nav"
            absolute temporary
            v-model="sideNav">
            <v-list
                class="nav-links"
                tag="ul">
                <v-list-tile
                    v-for="item in menuItems"
                    :key="item.title"
                    :to="item.link"
                    tag="li"
                    class="nav-link">
                    <v-list-tile-action>
                        <v-icon>
                            {{ item.icon }}
                        </v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        {{ item.title }}
                    </v-list-tile-content>    
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <!-- Toolbar -->
        <v-toolbar class="toolbar-nav">             
            <v-toolbar-side-icon
                class="hidden-sm-and-up"
                @click.stop="sideNav = !sideNav">
            </v-toolbar-side-icon> 
            <v-toolbar-title class="px-2 mx-3">
                <nuxt-link 
                    to="/"
                    tag="span" style="curl"
                    :style="{cursor: 'pointer'}">
                    <i>DIY</i>
                </nuxt-link>
            </v-toolbar-title>                         
            <v-spacer></v-spacer>        
            <v-toolbar-items
                tag="ul"
                class="toolbar-nav-links hidden-xs-only">
                <v-btn
                    tag="li" class="toolbar-nav-link text-capitalize"                            
                    nuxt
                    v-for="item in menuItems"
                    :key="item.title" 
                    :to="item.link"
                    flat
                    >
                    <v-icon dark left>{{ item.icon }}</v-icon>
                    {{ item.title }}
                </v-btn>              
            </v-toolbar-items>
        </v-toolbar>
    </header>
</template>



<script>
export default {
    data() {
        return {
            sideNav: false
        };
    },
    computed: {
        menuItems() {
            let menuItems = [
                { 
                    icon: "home", 
					title: "Home",
                    link: "/"
                },
                { 
                    icon: "layers", 
					title: "Posts",
                    link: "/posts" 
                },
                { 
                    icon: "question_answer", 
					title: "About",
                    link: "/about"
                }
            ];
            return menuItems;
        },
    },
};
</script>

<style>
    .main-header .v-list__tile--active {
        background-color: rgba(128, 128, 128, 0.122);
    }
</style>





