import { useState } from "react";
import menu from "./data";
import Title from "./Title";
import Categories from "./Categories";
import Menu from "./Menu";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

function App() {
  const [menuItem, setMenuItem] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItem = (category) => {
    if (category === "all") {
      setMenuItem(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItem(newItems);
  };

  return (
    <main>
      <section>
        <Title text="our menu" />
        <Categories categories={categories} filterItem={filterItem} />
        <Menu items={menuItem} />
      </section>
    </main>
  );
}

export default App;
