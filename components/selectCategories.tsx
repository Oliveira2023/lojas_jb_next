// components/MySelect.tsx
"use client"; // Importante para o react-select funcionar

import Select from 'react-select';

const optionsCategory = [
      { value: "Farmácias", label: "Farmácias" },
      { value: "Mercados", label: "Mercados" },
      { value: "Bebidas", label: "Bebidas" },
      { value: "Celulares", label: "Celulares" },
      { value: "Óticas", label: "Óticas" },
      { value: "Vestuário", label: "Vestuário" },
      { value: "Construção", label: "Construção" },
      { value: "Salão de Beleza", label: "Salão de Beleza" },
      { value: "Avículas", label: "Avículas" },
      { value: "Utilidades", label: "Utilidades" },
      { value: "Presentes", label: "Presentes" },
      { value: "Restaurantes", label: "Restaurantes" },
    ]

export default function SelectCategories() {
  return <Select options={optionsCategory} />;
}
