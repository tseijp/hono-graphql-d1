import { createClient } from "honox/client";

createClient({
  hydrate: async (elem, root) => {
    const { hydrateRoot } = await import("react-dom/client");
    // @ts-ignore
    hydrateRoot(root, elem);
  },
  // @ts-ignore
  createElement: async (type, props) => {
    const { createElement } = await import("react");
    return createElement(type, props);
  },
});
