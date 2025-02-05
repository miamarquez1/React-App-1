import { useState, useCallback } from "react";

/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems }) {
  let [newMenuItem, setNewMenuItem] = useState("");
  // TODO: 2 Using a state hook, maintain the current menu items as an array state.
  let [menuItems, setMenuItems] = useState(initialMenuItems);
  let [filter, setFilter] = useState("");

  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.
  let addMenuItem = useCallback(() => {
    if (newMenuItem.trim() !== "") { // Prevent adding empty items
      setMenuItems([newMenuItem.trim(), ...menuItems]); // Add to the beginning of the array
      setNewMenuItem(""); // Clear the input field
    }
  }, [newMenuItem, menuItems]); // Add newMenuItem and menuItems to the dependency array

  // TODO: 4. Display ONLY the menu items that contain the filter element value
  // "term" in them. Each menu item should be an unordered list item wrapped in an unordered list (ul) element.
  const filteredMenuItems = menuItems.filter((item) => {
    const regex = new RegExp(filter, "i"); // Case-insensitive regex
    return regex.test(item);
  });

  return (
    <div>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      <button onClick={addMenuItem}> {/* TODO: 3 */}
        Add Item
      </button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>
      {/* TODO: 1 Render inside the outer div an unordered list of the menu items, with each string in the array
      its own item. */}
      <ul>
        {filteredMenuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
