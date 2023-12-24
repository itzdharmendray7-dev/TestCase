// metaStore.ts
import { defineStore } from 'pinia';

interface MetaState {
  siteTitle: string;
}

export const useMetaStore = defineStore({
  id: 'meta',
  state: (): MetaState => ({
    siteTitle: 'Tycoon Credit And Portfolios Limited',
  }),
  getters: {
    getSiteTitle(state: MetaState): string {
      return state.siteTitle;
    },
  },
  actions: {
    setSiteTitle(title: string): void {
      // Use `this` to refer to the store's state
      this.siteTitle = title;
    },
  },
});
