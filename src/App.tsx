import React, { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { items } from "./data/items";
import { categories } from "./data/catogories";
import { getCurrentMonth, FilterListByMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";

function App() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(FilterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  return (
    <>
      <C.Container>
        <C.Header>
          <C.HeaderText>Sistema Financeiro</C.HeaderText>
        </C.Header>
        <C.Body>
          <TableArea list={filteredList} />
        </C.Body>
      </C.Container>
    </>
  );
}

export default App;
