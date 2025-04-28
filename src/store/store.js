import {
    createStore
} from "vuex";

const store = createStore({
    state() {
        return {
            header: [{
                    id: 0,
                    title: 'Актив',
                    img: 'img/header/active.svg',
                    imgActive: 'img/header/active_active.svg',
                    route: '/active',
                },
                {
                    id: 1,
                    title: 'КФВ',
                    img: 'img/header/kfv.svg',
                    imgActive: 'img/header/kfv_active.svg',
                    route: '/time',
                }
            ],
            techniques: [{
                    id: 1,
                    image: 'img/tech/alltech.svg',
                    title: 'Весь парк',
                    total: '173',
                    repair: '15',
                    machineClassIds: 1
                },
                {
                    id: 4,
                    image: '/img/tech/1.svg',
                    title: 'Экскаватор',
                    total: '25',
                    repair: '2',
                    machineClassIds: 4
                },
                {
                    id: 5,
                    image: 'img/tech/2.svg',
                    title: 'Самосвал',
                    total: '100',
                    repair: '10',
                    machineClassIds: 5
                },
                {
                    id:8,
                    image: 'img/tech/3.svg',
                    title: 'Автогрейдеры',
                    total: '8',
                    repair: '0',
                    machineClassIds: 8
                },
                {
                    id: 6,
                    image: 'img/tech/4.svg',
                    title: 'Бур.станки',
                    total: '10',
                    repair: '1',
                    machineClassIds: 6
                },
                {
                    id: 7,
                    image: 'img/tech/5.svg',
                    title: 'Бульдозеры',
                    total: '20',
                    repair: '2',
                    machineClassIds: 7
                },
                {
                    id: 9,
                    image: 'img/tech/6.svg',
                    title: 'Погрузчики',
                    total: '10',
                    repair: '0',
                    machineClassIds: 9
                }
            ],
            selectedTechnique: null,
        }
    },
})

export default store