import { useState, useEffect } from "react";

const STORAGE_KEY = "barbeiros";

function getBarbeiros() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveBarbeiros(barbeiros: any[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(barbeiros));
}

export function useBarbeiros() {
  const [barbeiros, setBarbeiros] = useState<any[]>([]);

  useEffect(() => {
    setBarbeiros(getBarbeiros());
  }, []);

  // Adicionar barbeiro
  function addBarbeiro(barbeiro: any) {
    const updated = [...barbeiros, barbeiro];
    setBarbeiros(updated);
    saveBarbeiros(updated);
  }

  // Adicionar múltiplos barbeiros
  function addBarbeiros(novos: any[]) {
    const updated = [...barbeiros, ...novos];
    setBarbeiros(updated);
    saveBarbeiros(updated);
  }

  // Apagar barbeiro
  function deleteBarbeiro(id: string) {
    const updated = barbeiros.filter(b => b.id !== id);
    setBarbeiros(updated);
    saveBarbeiros(updated);
  }

  // Atualizar barbeiro
  function updateBarbeiro(updatedBarbeiro: any) {
    const updated = barbeiros.map(b =>
      b.id === updatedBarbeiro.id ? updatedBarbeiro : b
    );
    setBarbeiros(updated);
    saveBarbeiros(updated);
  }

  return { barbeiros, addBarbeiro, addBarbeiros, deleteBarbeiro, updateBarbeiro };
}