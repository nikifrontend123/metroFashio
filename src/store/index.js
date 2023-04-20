import { createStore } from "vuex";
import axios from "axios";
const store = createStore({
    state: {
        users: [
            {
                id: 1,
                name: 'Kedar',
                role: 'Creator',
                status: 'Access Granted',
                imgu: "src/assets/kedar.jpg"
            },
            {
                id: 2,
                name: 'Amit Sardar',
                role: 'Admin',
                status: 'Access Granted',
                imgu: 'src/assets/Amit.jpg'
            },
            {
                id: 3,
                name: 'Dheeraj Sardar',
                role: 'Admin',
                status: 'Access Granted',
                imgu: 'src/assets/Dheeraj.jpg'
            },
            {
                id: 4,
                name: 'jyoti Garments',
                role: 'Assignee',
                status: 'Access Granted',
                imgu: 'src/assets/Jyoti.jpg'
            },
            {
                id: 4,
                name: 'Narender',
                role: 'Manager',
                status: 'Access Granted',
                imgu: 'src/assets/Narender.jpg'
            },
            {
                id: 4,
                name: 'Modern Collection',
                role: 'Assignee',
                status: 'Access Granted',
                imgu: 'src/assets/Modern.jpg'
            },
            {
                id: 5,
                name: 'Adnan Siddiqui',
                role: 'Assignee',
                status: 'Access Granted',
                imgu: 'src/assets/pimg.jpg'
            },
            {
                id: 6,
                name: 'Hari Shankar',
                role: 'Assignee',
                status: 'Access Granted',
                imgu: 'src/assets/pimg.jpg'
            },
            {
                id: 7,
                name: 'Hari Shankar',
                role: 'Assignee',
                status: 'Access Granted',
                imgu: 'src/assets/pimg.jpg'
            },
            {
                id: 8,
                name: 'Hari Shankar',
                role: 'Assignee',
                status: 'Access Granted',
                imgu: 'src/assets/pimg.jpg'
            },
            {
                id: 9,
                name: 'Hari Shankar',
                role: 'Assignee',
                status: 'Access Granted',
                imgu: 'src/assets/pimg.jpg'
            },
        ],
        lists: [
            {
                id: 1,
                imgl: "src/assets/c1.jpg",
                tag: "#23269",
                name: "1/1 Top",
                sp: "85",
                panna: "59 Inch | 1.4986 Mtr",
                fc: "115 Grm",
                stag: "23269, 23269, Massa Rib, 1/1 top"
            },
            {
                id: 2,
                imgl: "src/assets/c2.jpg",
                tag: "#23252",
                name: "1/1 Top",
                sp: "85",
                panna: "59 Inch | 1.4986 Mtr",
                fc: "115 Grm",
                stag: "23269, 23269, Massa Rib, 1/1 top"
            },
            {
                id: 3,
                imgl: "src/assets/c3.jpg",
                tag: "#232234",
                name: "1/1 Top",
                sp: "85",
                panna: "59 Inch | 1.4986 Mtr",
                fc: "115 Grm",
                stag: "23269, 23269, Massa Rib, 1/1 top"
            },
            {
                id: 4,
                imgl: "src/assets/c4.jpg",
                tag: "#232123",
                name: "1/1 Top",
                sp: "85",
                panna: "59 Inch | 1.4986 Mtr",
                fc: "115 Grm",
                stag: "23269, 23269, Massa Rib, 1/1 top"
            },
            {
                id: 5,
                imgl: "src/assets/c5.jpg",
                tag: "#232565",
                name: "1/1 Top",
                sp: "85",
                panna: "59 Inch | 1.4986 Mtr",
                fc: "115 Grm",
                stag: "23269, 23269, Massa Rib, 1/1 top"
            },
            {
                id: 6,
                imgl: "src/assets/c6.jpg",
                tag: "#69646",
                name: "1/1 Top",
                sp: "85",
                panna: "59 Inch | 1.4986 Mtr",
                fc: "115 Grm",
                stag: "23269, 23269, Massa Rib, 1/1 top"
            },
            {
                id: 7,
                imgl: "src/assets/c4.jpg",
                tag: "#232565",
                name: "1/1 Top",
                sp: "85",
                panna: "59 Inch | 1.4986 Mtr",
                fc: "115 Grm",
                stag: "23269, 23269, Massa Rib, 1/1 top"
            },
            {
                id: 8,
                imgl: "src/assets/c5.jpg",
                tag: "#69646",
                name: "1/1 Top",
                sp: "85",
                panna: "59 Inch | 1.4986 Mtr",
                fc: "115 Grm",
                stag: "23269, 23269, Massa Rib, 1/1 top"
            },
            {
                id: 9,
                imgl: "src/assets/c1.jpg",
                tag: "#69646",
                name: "1/1 Top",
                sp: "85",
                panna: "59 Inch | 1.4986 Mtr",
                fc: "115 Grm",
                stag: "23269, 23269, Massa Rib, 1/1 top"
            },
        ],
        activeCatelog: {},
        datas: [
            {
                id: 1,
                num:7,
                txt: "NEW ORDERS"
                
            },
            {
                id: 2,
                num:44,
                txt: "PRE PRODUCTION"
            },
            {
                id: 3,
                num: 3,
                txt: "IN PRODUCTION"
            },
            {
                id: 4,
                num: 54,
                txt: "TOTAL ORDERS"
            },
            {
                id: 5,
                num: 11,
                txt: "ACTIVE ASSIGNEES"
            },
            {
                id: 6,
                num: 78,
                txt: "ACTIVE CATELOGS"
            },
        ],
        datapps: [
            {
                id: 1,
                num:1750,
                txt: "RUNNING ORDER QUANTITY"
                
            },
            {
                id: 2,
                num:855,
                txt: "READY QUANTITY AVAILABLE"
            },
            {
                id: 3,
                num: 450,
                txt: "REQUESTED QUANTITY"
            },
            {
                id: 4,
                num: 450,
                txt: "DISPATCHED QUANTITY"
            },
            {
                id: 4,
                num: '-',
                txt: "RECEVIED QUANTITY"
            },
            
        ],
        cards: [
            {
                id: 1,
                name:'Sardar Enterprise',
                allot: 20,
                img: "src/assets/pimg.jpg",
                num: "2/850",
            },
            {
                id: 2,
                name:'Pride Apparel',
                allot: 16,
                img: "src/assets/pimg.jpg",
                num: "2/1400",
            },
            {
                id: 3,
                name:'Jyoti Garments',
                allot: 1,
                img: "src/assets/Jyoti.jpg",
                num: "1/200",
            },
            {
                id: 4,
                name:'Mayra Creation',
                allot: 4,
                img: "src/assets/pimg.jpg",
                num: "6/1257",
            },
            {
                id: 5,
                name:'Md Asad',
                allot: 3,
                img: "src/assets/pimg.jpg",
                num: "3/659",
            },
            {
                id: 6,
                name:'Manoj Auto',
                allot: 2,
                img: "src/assets/pimg.jpg",
                num: "2/400",
            },
            {
                id: 7,
                name:'Shekhar Trafdar',
                allot: 'No',
                img: "src/assets/pimg.jpg",
                num: "Nill",
            },
            {
                id: 8,
                name:'Modern Collection',
                allot: 1,
                img: "src/assets/Modern.jpg",
                num: "2/200",
            },
        ],
        orders: [
            {
                id: 1,
                imgl: "src/assets/c1.jpg",
                imgdp: "src/assets/Jyoti.jpg",
                tag: "01-09-23826",
                qty: "200",
                down:'0',
                up:'200',
                time: "20 minutes ago"
            },
            {
                id: 2,
                imgl: "src/assets/c2.jpg",
                imgdp: "src/assets/Jyoti.jpg",
                tag: "01-09-23827",
                qty: "615",
                down:'0',
                up:'615',
                time: "20 minutes ago"
            },
            {
                id: 3,
                imgl: "src/assets/c3.jpg",
                imgdp: "src/assets/Jyoti.jpg",
                tag: "01-09-23828",
                qty: "300",
                down:'0',
                up:'300',
                time: "20 minutes ago"
            },
            {
                id: 4,
                imgl: "src/assets/c4.jpg",
                imgdp: "src/assets/Jyoti.jpg",
                tag: "01-09-23829",
                qty: "100",
                down:'0',
                up:'100',
                time: "20 minutes ago"
            },
            {
                id: 5,
                imgl: "src/assets/c5.jpg",
                imgdp: "src/assets/Jyoti.jpg",
                tag: "01-09-23830",
                qty: "200",
                down:'0',
                up:'220',
                time: "20 minutes ago"
            },
            {
                id: 6,
                imgl: "src/assets/c6.jpg",
                imgdp: "src/assets/Jyoti.jpg",
                tag: "01-09-23831",
                qty: "230",
                down:'0',
                up:'200',
                time: "20 minutes ago"
            },
            {
                id: 7,
                imgl: "src/assets/c4.jpg",
                imgdp: "src/assets/Jyoti.jpg",
                tag: "01-09-23826",
                qty: "200",
                down:'0',
                up:'118',
                time: "20 minutes ago"
            },
            {
                id: 8,
                imgl: "src/assets/c5.jpg",
                imgdp: "src/assets/Jyoti.jpg",
                tag: "01-09-23826",
                qty: "200",
                down:'0',
                up:'200',
                time: "20 minutes ago"
            },
            {
                id: 9,
                imgl: "src/assets/c1.jpg",
                imgdp: "src/assets/Jyoti.jpg",
                tag: "01-09-23826",
                qty: "200",
                down:'0',
                up:'200',
                time: "20 minutes ago"
            },
        ],
        activeOrder: {},
        notis:[
            {
                id: 1,
                imgl: "src/assets/c1.jpg",
                txt: "New catelog is been added to system.",
                tag: "23826 | Botton TOP",
                time: "6h"
            },
            {
                id: 2,
                imgl: "src/assets/c1.jpg",
                txt: "New catelog is been added to system.",
                tag: "23826 | Botton TOP",
                time: "17h"
            },
            {
                id: 3,
                imgl: "src/assets/c1.jpg",
                txt: "New catelog is been added to system.",
                tag: "23826 | Botton TOP",
                time: "17h"
            },
            {
                id: 4,
                imgl: "src/assets/c1.jpg",
                txt: "New catelog is been added to system.",
                tag: "23826 | Botton TOP",
                time: "17h"
            },
            {
                id: 5,
                imgl: "src/assets/c1.jpg",
                txt: "New catelog is been added to system.",
                tag: "23826 | Botton TOP",
                time: "17h"
            },
            {
                id: 6,
                imgl: "src/assets/c1.jpg",
                txt: "New catelog is been added to system.",
                tag: "23826 | Botton TOP",
                time: "17h"
            },
            
        ]
    },
    getters: {
        getUsers(state) {
            return state.users;
        },
        getLists(state) {
            return state.lists;
        },
        getCatelog(state) {
            return state.activeCatelog;
        },
        getOrders(state) {
            return state.orders;
        },
        getOrder(state) {
            return state.activeOrder;
        },
        getDatas(state) {
            return state.datas;
        },
        getDatapps(state) {
            return state.datapps;
        },
        getCards(state) {
            return state.cards;
        },
        getNotis(state) {
            return state.notis;
        },
    },
    mutations: {
        selectCatelog(state, catelog) {
            state.activeCatelog = catelog;
        },
        hideCatelog(state) {
            state.activeCatelog = {};
        },
        selectOrder(state, order) {
            state.activeOrder = order;
        },
        hideOrder(state) {
            state.activeOrder = {};
        }
    },
    actions: {
        selectCatelog({ commit }, catelog) {
            commit("selectCatelog", catelog);
        },
        hideCatelog({ commit }) {
            commit("hideCatelog");
        },
        selectOrder({ commit }, order) {
            commit("selectOrder", order);
        },
        hideOrder({ commit }) {
            commit("hideOrder");
        }
    },
});
export default store;