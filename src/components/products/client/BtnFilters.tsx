
import React from "react";

const FilterComponent = () => {



  return (
    <div className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Filtros</h2>

          <div className="flex justify-between items-center space-x-6">
            <div className="w-full max-w-xs">
              <label
                htmlFor="search"
                className="block text-gray-700 text-sm mb-2"
              >
                Buscar producto
              </label>
              <input
                type="text"
                id="search"
                placeholder="Buscar..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex gap-10 p-4">
              <div className="w-full max-w-xs">
                <label
                  htmlFor="price"
                  className="block text-gray-700 text-sm mb-2"
                >
                  Filtrar por precio
                </label>
                <input
                  type="range"
                  id="price"
                  min="0"
                  max="1000"
                  step="10"
                  className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>0</span>
                  <span>1000</span>
                </div>
              </div>
              <div className="w-full max-w-xs">
                <label
                  htmlFor="category"
                  className="block text-gray-700 text-sm mb-2"
                >
                  Filtrar por categoría
                </label>
                <select
                  id="category"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Seleccionar categoría</option>
                  <option value="electronics">Electrónica</option>
                  <option value="fashion">Moda</option>
                  <option value="home">Hogar</option>
                  <option value="sports">Deportes</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
