import { useActiveStore } from "@/store/active";
import { useKFVStore } from "@/store/kfv";

class Page {
    constructor(name, links, updateStore) {
        this.name = name;
        this.links = links;
        this.updateStore = updateStore;
    }
}

export const pages = [
    new Page('active', [
        { text: 'Общая структура', mode: 'GeneralInformation' },
    ], (startYear, endYear) => {
        const activeStore = useActiveStore();
        activeStore.updateFilterParams({ yearStart: startYear, yearEnd: endYear });
    }),
    new Page('time', [
        { text: 'Общая структура КФВ', mode: 'GeneralInformation' },
        { text: 'Анализ', mode: 'analysis' },
    ], (startYear, endYear) => {
        const KfvStore = useKFVStore();
        KfvStore.updateFilterParams({ yearStart: startYear, yearEnd: endYear });
    })
];