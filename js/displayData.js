function iterateObject(object, parentDiv) {
  const container = document.createElement("div");
  for (const [key, value] of Object.entries(object)) {
    if (key === "userPicUrl") {
      const profileImage = document.createElement("img");
      profileImage.setAttribute("src", value);
      container.appendChild(profileImage);
      parentDiv.appendChild(container);
    } else {
      const title = document.createTextNode(key + ": ");
      const content = document.createTextNode(value);

      const titleParagraph = document.createElement("strong");
      const paragraph = document.createElement("p");
      titleParagraph.appendChild(title);
      paragraph.appendChild(titleParagraph);
      paragraph.appendChild(content);

      container.appendChild(paragraph);
      parentDiv.appendChild(container);

      //   ANCHOR TAG TO BE ADDED FOR WEBSITE LINK
    }
  }
}

export { iterateObject };
