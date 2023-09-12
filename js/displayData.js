function iterateObject(object, parentDiv) {
  for (const [key, value] of Object.entries(object)) {
    const title = document.createTextNode(key);
    const content = document.createTextNode(value);

    const container = document.createElement("div");
    const titleElement = document.createElement("strong");
    const contentElement = document.createElement("p");

    titleElement.appendChild(title);
    contentElement.appendChild(content);
    contentElement.appendChild(titleElement);

    container.appendChild(contentElement);
    parentDiv.appendChild(container);
  }
}

export { iterateObject };
