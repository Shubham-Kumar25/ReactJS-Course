function customRender(reactElement, mainContent) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  mainContent.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "www.google.com",
    target: "_blank",
  },
  children: "Click here to visit Google",
};

const mainContent = document.querySelector("#root");
customRender(reactElement, mainContent);
