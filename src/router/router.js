import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main.vue";
import PostPage from "@/pages/PostPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import PostDetail from "@/pages/PostDetail.vue";
import PostPageWithStore from "@/pages/PostPageWithStore.vue";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi.vue";

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/posts',
    component: PostPage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/posts/:id',
    component: PostDetail
  },
  {
    path: '/store',
    component: PostPageWithStore
  },
  {
    path: '/composition',
    component: PostPageCompositionApi
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router;