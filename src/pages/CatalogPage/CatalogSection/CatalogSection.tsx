import './CatalogSection.css'

import Catalog from '../../../components/feature/Catalog/Catalog';
import React, { useState, useMemo } from 'react';
import { useData } from '../../../context/DataContext'

const CatalogSection: React.FC = () => {
  const { data } = useData();
  const { catalog, isLoading, error } = data;
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCatalog = useMemo(() => {
    if (!searchTerm) {
      return catalog;
    }
    const search = searchTerm.toLowerCase();
    return catalog.filter(item => {
      const { product } = item;
      const brand = product.brand.toLowerCase();
      const model = product.model.toLowerCase();
      return brand.includes(search) || model.includes(search);
    });
  }, [catalog, searchTerm]);

  if (isLoading) {
    return <p>Cargando el listado..</p>
  }

  if (error) {
    return <p>No fue posible carga el listado.</p>
  }

  if (!catalog.length || catalog.length === 0) {
    return <br />
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  return (
    <section id="catalog" className="featured-bikes">
      <div className="container">
        <div className="search-bar">
          <input type="text"
            id="search-input"
            className="search-input"
            placeholder="Buscar por marca o modelo..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <Catalog catalog={filteredCatalog} />
      </div>
    </section>
  )
};

export default CatalogSection;
