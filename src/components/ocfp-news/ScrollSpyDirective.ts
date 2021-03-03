import Vue, { DirectiveOptions, VNode, VNodeDirective } from 'vue';

let selectors!: string[];
let observer!: IntersectionObserver;

const ScrollSpyDirective: DirectiveOptions = {
  inserted (el: Element, binding: VNodeDirective, vnode: VNode) {
    selectors = binding.value.selectors;

    // highlight first element
    el.querySelector(`[href="${selectors[0] || ''}"]`)?.classList.toggle('active', true);

    const config = {
      rootMargin: '-5% 0px -85% 0px',
      threshold: 0
    };

    observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          selectors.forEach((selector: string) => {
            el.querySelector(`[href="${selector}"`)?.classList.toggle('active', selector === `#${entry.target.id}`);
          });
        }
      });
    }, config);

    selectors.forEach((selector: string) => {
      observer.observe(document.querySelector(selector) as Element);
    });
  },
  unbind () {
    observer.disconnect();
  }
};

export default ScrollSpyDirective;
