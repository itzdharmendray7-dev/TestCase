import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/inflow-case-study',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/InflowCaseStudyPage.vue') }],
  },
  {
    path: '/neon-case-study',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/NeonCaseStudyPage.vue') }],
  },
  {
    path: '/linkorep-case_study',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/LinkorepCaseStudyPage.vue') }],
  },
  {
    path: '/accessibility-statement',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/AccessibilityStatementPage.vue') }],
  },
  {
    path: '/privacy-policy',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/PrivacyPolicyPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
