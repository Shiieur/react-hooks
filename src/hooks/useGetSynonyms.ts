import { useState } from "react";
import { fecthSynonyms } from "../api/fetchSynonyms";
import { ISynonym } from "../interfaces";



export const useGetSynonyms = () => {
    const [synonyms, setSynonyms] = useState<ISynonym[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const getSynonyms = (word : string) =>
    {
        setIsLoading(true);
        fecthSynonyms(word)
            .then(setSynonyms)
            .then(() => setIsLoading(false));
    }

    return {isLoading, synonyms, getSynonyms, setSynonyms}
}