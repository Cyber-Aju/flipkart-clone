import "./filterpanel.css";
import Select from "react-select";
import { useEffect, useState } from "react";

const sortOptions = [
  { value: "hightolow", label: "Price: High to Low" },
  { value: "lowtohigh", label: "Price: Low to High" }
];

const genderFilterOptions = [
  { value: "both", label: "All" },
  { value: "male", label: "Male" },
  { value: "female", label: "Female" }
];

const sizeFilterOptions = [
  { value: "S", label: "S" },
  { value: "M", label: "M" },
  { value: "L", label: "L" },
  { value: "XL", label: "XL" }
];

const brandFilterOptions = [
  { value: "A", label: "A" },
  { value: "B", label: "B" },
  { value: "C", label: "C" },
  { value: "D", label: "D" }
];

const FilterPanel = ({ products, setProducts }) => {
  // Use a single state variable for filtered products
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleChange = (option) => {
    if (!option) {
      // Handle clearing the selection (resetting to original data)
      setFilteredProducts(products);
      return;
    }

    const handleFilter = (filterValue) => {
      if (filterValue === "lowtohigh") {
        const filtered = [...products].sort((a, b) => a.price - b.price);
        setFilteredProducts(filtered);
      } else if (filterValue === "hightolow") {
        const filtered = [...products].sort((a, b) => b.price - a.price);
        setFilteredProducts(filtered);
      } else if (filterValue === "male") {
        const filtered = products.filter(
          (product) => product.category.toLowerCase() === "men's clothing"
        );
        setFilteredProducts(filtered);
      } else if (filterValue === "female") {
        const filtered = products.filter(
          (product) => product.category.toLowerCase() === "women's clothing"
        );
        setFilteredProducts(filtered);
      } else if (filterValue === "both") {
        // No filtering needed for "both" option
      } else if (
        filterValue === "S" ||
        filterValue === "M" ||
        filterValue === "L" ||
        filterValue === "XL"
      ) {
        const filtered = products.filter((product) =>
          product.size.includes(filterValue)
        );
        setFilteredProducts(filtered);
      } else if (
        filterValue === "A" ||
        filterValue === "B" ||
        filterValue === "C" ||
        filterValue === "D"
      ) {
        const filtered = products.filter((product) => product.brand === filterValue);
        setFilteredProducts(filtered);
      }
    };

    handleFilter(option.value);
  };

  const handleReset = () => {
    setFilteredProducts(products);
  };

  // Use a single `useEffect` with all dependencies
  useEffect(() => {
    setProducts(filteredProducts); // Update parent component's data
  }, [filteredProducts, setProducts]);

  return (
    <div className="filter-panel">
      <h2>Filter & Sort</h2>
      <div className="label">Sort By:</div>
      <Select onChange={handleChange} options={sortOptions} />
      <div className="label">Filter by Gender:</div>
      <Select onChange={handleChange} options={genderFilterOptions} />
      <div className="label">Filter by Size:</div>
      <Select onChange={handleChange} options={sizeFilterOptions} />
      <div className="label">Filter by Brand:</div>
      <Select onChange={handleChange} options={brandFilterOptions} />
      <div className="reset">
        <button onClick={handleReset}>Reset Filters</button>
      </div>
    </div>
  );
};

export default FilterPanel;
