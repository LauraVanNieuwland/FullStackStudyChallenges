const listItem = (content) => {
  // TODO: return the proper <li> HTML tag with its content (as a string)
  return `<li class="list-group-item">${content}</li>`;
};

const unorderedList = (items) => {
  // TODO: return the proper <ul> markup (as a string)
  // map over the items and store them in the listItem function
  let listGroupItems = items.map(item => (listItem(item)));
  listGroupItems = listGroupItems.join("");

  return `<ul class="list-group">
              ${listGroupItems}
          </ul>`;
};

module.exports = { listItem, unorderedList }; // Do not remove.
