export const render = (reactElement, domElement) => {
  domElement.append(reactElement);
};

export const React = {
  createElement: (tagName, props, ...children) => {
    let tag;
    if (typeof tagName === 'string') {
      tag = document.createElement(tagName);
    }
    if (typeof tagName === 'function') {
      tag = tagName();
    }
    if (children.length) {
      children.forEach((child) => {
        if (typeof child === 'object') {
          tag.append(child);
        }
        if (typeof child === 'string') {
          tag.innerHTML = child;
        }
      });
    }
    if (props) {
      Object.entries(props).forEach((prop) => {
        tag.setAttribute(prop[0], prop[1]);
      });
    }
    return tag;
  },
};
