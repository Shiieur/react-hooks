const API_URL = import.meta.env.VITE_API_URL ?? "https://api.datamuse.com";

export const fecthSynonyms = (newWord: string) => {
   return fetch(`${API_URL}/words?rel_syn=${newWord}`).then(response => response.json());
  }