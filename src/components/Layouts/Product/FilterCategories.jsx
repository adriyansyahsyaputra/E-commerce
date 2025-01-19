import React from "react";
import PropTypes from "prop-types";
import { X, SlidersHorizontal } from "lucide-react";
import CategoryList from "./CategoryList";

const FilterCategories = ({
  categories,
  selectedCategories,
  handleCheckboxChange,
  isOpen,
  setIsOpen,
  handleClearAll,
  handleApplyFilters,
}) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-72 h-full rounded-lg sticky top-4 p-6 shadow-lg bg-white border border-gray-200">
        <h1 className="text-lg font-bold text-gray-800 tracking-wide">
          Product Categories
        </h1>
        <div className="mt-6">
          <CategoryList
            categories={categories}
            selectedCategories={selectedCategories}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>
      </aside>

      {/* Mobile Filter Button */}
      <div className="md:hidden sticky top-0 z-30 bg-gray-50 pt-4 px-4">
        <div className="flex items-center justify-between bg-white rounded-lg shadow-sm p-4 mb-4">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center space-x-2 focus:outline-none active:bg-gray-100 rounded-md px-2 py-1 transition-colors"
          >
            <SlidersHorizontal size={20} className="text-gray-700" />
            <span className="font-medium text-gray-700">Filters</span>
          </button>
          <span className="text-sm font-medium text-gray-600">
            {selectedCategories.length > 0
              ? `${selectedCategories.length} selected`
              : "55 Products"}
          </span>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 min-w-80 sm:w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Filters</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close filters"
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>

          {/* Categories */}
          <div className="flex-1 overflow-y-auto">
            <CategoryList
              categories={categories}
              selectedCategories={selectedCategories}
              handleCheckboxChange={handleCheckboxChange}
            />
          </div>

          {/* Footer Actions */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-3">
              <button
                onClick={handleClearAll}
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 active:bg-gray-100 transition-colors"
              >
                Clear All
              </button>
              <button
                onClick={handleApplyFilters}
                className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors"
              >
                Apply Filters{" "}
                {selectedCategories.length > 0 &&
                  `(${selectedCategories.length})`}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40"
        ></div>
      )}
    </>
  );
};

export default FilterCategories;

FilterCategories.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategories: PropTypes.array.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  handleClearAll: PropTypes.func.isRequired,
  handleApplyFilters: PropTypes.func.isRequired,
};