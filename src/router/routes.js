const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/shopItem.page.vue") },
      { path: "/settings", component: () => import("pages/settings.page.vue") },
      { path: "/auth", component: () => import("pages/auth.page.vue") },
      { path: "/shop", component: () => import("pages/shop.page.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
