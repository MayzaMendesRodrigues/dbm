import './CatalogSection.css'

import Catalog from '../../../components/feature/Catalog/Catalog';
import Fuse from 'fuse.js';
import React, { useState, useMemo } from 'react';
import { useData } from '../../../context/DataContext'

const CatalogSection: React.FC = () => {
  const { data } = useData();
  const { catalog, isLoading, error } = data;
  const [searchTerm, setSearchTerm] = useState('');

  const fuse = useMemo(() => {
    const indexed = catalog.map(item => {
      const { product } = item;
      return {
        item,
        searchable: [
          product.brand,
          product.model,
          product.type,
          product.color,
          product.year,
          product.cylinder,
        ]
          .join(' ')
          .toLowerCase(),
      };
    });
    return new Fuse(indexed, {
      keys: ['searchable'],
      threshold: 0.35,
      ignoreLocation: true,
      includeScore: true,
      minMatchCharLength: 2,
    });
  }, [catalog]);

  const filteredCatalog = useMemo(() => {
    const tokens = searchTerm.toLowerCase().split(/\s+/).filter(Boolean);
    if (tokens.length === 0) {
      return catalog;
    }
    const scores = new Map<typeof catalog[number], number>();
    tokens.forEach(token => {
      fuse.search(token).forEach(({ item, score = 1 }) => {
        const relevance = 1 - score;
        scores.set(item.item, (scores.get(item.item) ?? 0) + relevance);
      });
    });
    return Array.from(scores.entries())
      .sort((a, b) => b[1] - a[1])
      .map(([item]) => item);
  }, [fuse, catalog, searchTerm]);

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
