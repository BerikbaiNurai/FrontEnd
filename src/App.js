import React from "react";
import Fragmentlayout from "./Lab_02/task1/FragmentLayout";
import CombinedComponent from "./Lab_02/task1/CombinedComponent";
import Section from "./Lab_02/task2/Section";
import ProductList from "./Lab_02/task2/ProductList";
import FragmentLayout from "./Lab_02/task1/FragmentLayout";

function App() {
  return (
    <>
      <FragmentLayout />
      <CombinedComponent />
      <Section title = "Products">
        <ProductList />
      </Section>
    </>
  );
}

export default App;