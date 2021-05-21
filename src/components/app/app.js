import React, {useState} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

//Styles
import style from '../../assets/style/scss/app/app.module.css';
//Components
import Header from "../header/header";
import Homepage from "../homepage/homepage";
import Catalog from "../catalog/catalog";
import Resistors from "../resistors/resistors";
import ResistorInfoPage from "../resistors/resistor-info-page/resistor-info-page";
import Busket from "../basket/busket";
import Condensators from "../condensators/condensators";
import CondensatorsInfoPage from "../condensators/condensators-info-page/condensators-info-page";
import Transistors from "../transistors/transistors";
import TransistorsInfoPage from "../transistors/transistors-info-page/transistors-info-page";
import Rele from "../rele/rele";
import ReleInfoPage from "../rele/rele-info-page/rele-info-page";
import Modems from "../modems/modems";
import ModemInfoPage from "../modems/modem-info-page/modem-info-page";
import Termistors from "../termistors/termistors";
import TermistorInfoPage from "../termistors/termistor-info-page/termistor-info-page";
import Stabilitrons from "../stabilitron/stabilitrons";
import StabilitronInfoPage from "../stabilitron/stabilitron-info-page/stabilitron-info-page";
import Diods from "../diods/diods";
import DiodInfoPage from "../diods/diod-info-page/diod-info-page";
import Droseli from "../droseli/droseli";
import DroseliInfoPage from "../droseli/droseli-info-page/droseli-info-page";
import Datchyki from "../datchyki/datchyki";
import DatchykyInfoPage from "../datchyki/datchyky-info-page/datchyky-info-page";
import Footer from "../footer/footer";
import Rules from "../rules/rules";

import resist_data from './resistors_data';

const App = () => {

    const [resID, setResID] = useState(0)

    const data_res   = require('../../data/resistors.json')
    const data_cond  = require('../../data/condensators.json')
    const data_tran  = require('../../data/transistors.json')
    const data_rele  = require('../../data/rele.json')
    const data_modem = require('../../data/modems.json')
    const data_term  = require('../../data/termistors.json')
    const data_stab  = require('../../data/stabilitrons.json')
    const data_diod  = require('../../data/diods.json')
    const data_dros  = require('../../data/droseli.json')

    const [arr,setArr] = useState([])





    const arr_data = [
        {
            "id": "0",
            "type": "resistor",
            "marka": "china-internation",
            "in_market": "120",
            "weigth": "0.2",
            "size": "0.02x0.02",
            "info": "vsio garno, vsio abs",
            "model": "МЛТ-0.125",
            "useful": "Opir",
            "opir": "12000",
            "power": "0.125",
            "napruga": "200",
            "deviation": "± 0.5%",
            "url": "https://blackchip.com.ua/image/catalog/tovar/rezustoru/MLT.jpg",
            "price": "1",
            "articul": "001232"
        },
            {
                "id": "1",
                "type": "resistor",
                "marka": "china-internation",
                "in_market": "142",
                "weigth": "0.35",
                "size": "0.02x0.02",
                "info": "vsio garno, vsio abs",
                "model": "МЛТ-0.125",
                "useful": "Opir",
                "opir": "51000",
                "power": "0.125",
                "napruga": "200",
                "deviation": "± 5%",
                "url": "https://blackchip.com.ua/image/catalog/tovar/rezustoru/MLT.jpg",
                "price": "1.5",
                "articul": "001234"

            },
            {
                "id": "2",
                "type": "resistor",
                "marka": "china-internation",
                "in_market": "151",
                "weigth": "0.28",
                "size": "0.02x0.04",
                "info": "vsio garno, vsio abs",
                "model": "CFR",
                "useful": "Opir",
                "opir": "1200",
                "power": "1.2",
                "napruga": "200",
                "deviation": "0.5%",
                "url": "https://blackchip.com.ua/image/catalog/tovar/rezustoru/Rezistor-1.jpg",
                "price": "0.4",
                "articul": "001235"

            },
            {
                "id": "3",
                "type": "resistor",
                "marka": "china-internation",
                "in_market": "54",
                "weigth": "0.25",
                "size": "0.01x0.01",
                "info": "vsio garno, vsio abs",
                "model": "SMD",
                "useful": "Opir",
                "opir": "0.22",
                "power": "1.2",
                "napruga": "150",
                "deviation": "± 5%",
                "url": "https://blackchip.com.ua/image/cache/catalog/Kategorii/Rezustoru/Rezistori-0125w-vividni-100x100.jpg",
                "price": "1.5",
                "articul": "001236"

            },
            {
                "id": "4",
                "type": "resistor",
                "marka": "china-internation",
                "in_market": "421",
                "weigth": "0.05",
                "size": "0.02x0.02",
                "info": "vsio garno, vsio abs",
                "model": "Вуглецевий",
                "useful": "Opir",
                "opir": "120000",
                "power": "0.5",
                "napruga": "300",
                "deviation": "± 0.5%",
                "url": "https://blackchip.com.ua/image/cache/catalog/Kategorii/Rezustoru/Rezistori-0.5W-vividni-100x100.jpg",
                "price": "0.6",
                "articul": "001237"
            },
            {
                "id": "5",
                "type": "resistor",
                "marka": "china-internation",
                "in_market": "121",
                "weigth": "0.05",
                "size": "0.005x0.005",
                "info": "vsio garno, vsio abs",
                "model": "Керамічний",
                "useful": "Opir",
                "opir": "1000000",
                "power": "0.663",
                "napruga": "50",
                "deviation": "± 1%",
                "url": "https://blackchip.com.ua/image/catalog/tovar/rezustoru/0603.jpg",
                "price": "1.8",
                "articul": "001239"
            },
            {
                "id": "6",
                "type": "resistor",
                "marka": "china-internation",
                "in_market": "51",
                "weigth": "0.3",
                "size": "0.02x0.02",
                "info": "vsio garno, vsio abs",
                "model": "Вуглецевий",
                "useful": "Opir",
                "opir": "1200",
                "power": "1",
                "napruga": "300",
                "deviation": "± 5%",
                "url": "https://blackchip.com.ua/image/catalog/tovar/rezustoru/Rezustor-2w.jpg",
                "price": "2.6",
                "articul": "001239"
            },
            {
                "id": "7",
                "type": "resistor",
                "marka": "china-internation",
                "in_market": "421",
                "weigth": "0.05",
                "size": "0.02x0.02",
                "info": "vsio garno, vsio abs",
                "model": "Вуглецевий",
                "useful": "Opir",
                "opir": "120000",
                "power": "0.5",
                "napruga": "300",
                "deviation": "0.5%",
                "url": "https://blackchip.com.ua/image/cache/catalog/Kategorii/Rezustoru/Rezistori-0.5W-vividni-100x100.jpg",
                "price": "0.6",
                "articul": "001237"
            },
            {
                "id": "8",
                "type": "resistor",
                "marka": "china-internation",
                "in_market": "421",
                "weigth": "0.05",
                "size": "0.02x0.02",
                "info": "vsio garno, vsio abs",
                "model": "Вуглецевий",
                "useful": "Opir",
                "opir": "120000",
                "power": "0.5",
                "napruga": "300",
                "deviation": "0.5%",
                "url": "https://blackchip.com.ua/image/cache/catalog/Kategorii/Rezustoru/Rezistori-0.5W-vividni-100x100.jpg",
                "price": "0.6",
                "articul": "001237"
            },
            {
                "id": "9",
                "type": "resistor",
                "marka": "china-internation",
                "in_market": "421",
                "weigth": "0.05",
                "size": "0.02x0.02",
                "info": "vsio garno, vsio abs",
                "model": "Вуглецевий",
                "useful": "Opir",
                "opir": "120000",
                "power": "0.5",
                "napruga": "300",
                "deviation": "0.5%",
                "url": "https://blackchip.com.ua/image/cache/catalog/Kategorii/Rezustoru/Rezistori-0.5W-vividni-100x100.jpg",
                "price": "0.6",
                "articul": "001237"
            },
            {
                "id": "10",
                "type": "resistor",
                "marka": "china-internation",
                "in_market": "421",
                "weigth": "0.05",
                "size": "0.02x0.02",
                "info": "vsio garno, vsio abs",
                "model": "Вуглецевий",
                "useful": "Opir",
                "opir": "120000",
                "power": "0.5",
                "napruga": "300",
                "deviation": "0.5%",
                "url": "https://blackchip.com.ua/image/cache/catalog/Kategorii/Rezustoru/Rezistori-0.5W-vividni-100x100.jpg",
                "price": "0.6",
                "articul": "001237"
            }
        ]






    const [state, setState] = useState(resist_data)
    const deleteItem = (id) => {
        setState(() => {
            const idx = state.findIndex(el => +el.id === id);
            // const newArr = [
            //     ...state.slice(0, idx),
            //     ...state.slice(idx + 1)
            // ]
            // state.splice(0, idx)
            // state.splice(idx + 1)
            const newArr = [
                ...state.slice(0, idx),
                ...state.slice(idx + 1)
            ]

            console.log(id, 'id')
            console.log(idx, 'idx')
            console.log(newArr, 'NEW')
            return newArr

        })
    }

    // const deleteItem = (id) => {
    //     setState(() => {
    //         resist_data.filter((el, i) => {
    //             if(+el.id === id) {
    //                 resist_data.splice(id, 1)
    //                 console.log(resist_data, 'resist data')
    //                 return resist_data
    //             }
    //         })
    //     })
    // }

    return (

        <div>
            <BrowserRouter>
                <Header data={arr}/>
                <Route path='/home' exact render={() => <Homepage/>}/>
                <Route path='/basket' render={() => <Busket data={arr}/>}/>
                <Route path='/catalog' exact render={() => <Catalog/>}/>
                <Route path='/rules' exact render={() => <Rules/>}/>

                <Route path='/catalog/resistors'  exact render={() => <Resistors setResID={setResID}
                                                                                 deleteItem={deleteItem}
                                                                                 data={state}

                />}/>
                <Route path='/catalog/resistors/:id' render={() => <ResistorInfoPage data={data_res[resID]}
                                                                                     arr={arr}
                                                                                     setArr={setArr}
                />}  />

                <Route path='/catalog/condensators'  exact render={() => <Condensators setResID={setResID}/>}/>
                <Route path='/catalog/condensators/:id' render={() => <CondensatorsInfoPage data={data_cond[resID]}
                                                                                            arr={arr}
                                                                                            setArr={setArr}
                />}  />

                <Route path='/catalog/transistors'  exact render={() => <Transistors setResID={setResID}/>}/>
                <Route path='/catalog/transistors/:id' render={() => <TransistorsInfoPage  data={data_tran[resID]}
                                                                                            arr={arr}
                                                                                            setArr={setArr}
                />}  />

                <Route path='/catalog/rele'  exact render={() => <Rele setResID={setResID}/>}/>
                <Route path='/catalog/rele/:id' render={() => <ReleInfoPage  data={data_rele[resID]}
                                                                             arr={arr}
                                                                             setArr={setArr}
                />}  />

                <Route path='/catalog/modems'  exact render={() => <Modems setResID={setResID}/>}/>
                <Route path='/catalog/modems/:id' render={() => <ModemInfoPage  data={data_modem[resID]}
                                                                                arr={arr}
                                                                                setArr={setArr}
                />}  />

                <Route path='/catalog/termistors'  exact render={() => <Termistors setResID={setResID}/>}/>
                <Route path='/catalog/termistors/:id' render={() => <TermistorInfoPage  data={data_term[resID]}
                                                                                        arr={arr}
                                                                                        setArr={setArr}
                />}  />

                <Route path='/catalog/stabilitrons'  exact render={() => <Stabilitrons setResID={setResID}/>}/>
                <Route path='/catalog/stabilitrons/:id' render={() => <StabilitronInfoPage  data={data_stab[resID]}
                                                                                            arr={arr}
                                                                                            setArr={setArr}
                />}  />

                <Route path='/catalog/diods'  exact render={() => <Diods setResID={setResID}/>}/>
                <Route path='/catalog/diods/:id' render={() => <DiodInfoPage  data={data_diod[resID]}
                                                                              arr={arr}
                                                                              setArr={setArr}
                />}  />

                <Route path='/catalog/drosseli'  exact render={() => <Droseli setResID={setResID}/>}/>
                <Route path='/catalog/drosseli/:id' render={() => <DroseliInfoPage  data={data_dros[resID]}
                                                                                    arr={arr}
                                                                                    setArr={setArr}
                />}  />

                <Route path='/catalog/datchik'  exact render={() => <Datchyki setResID={setResID}/>}/>
                <Route path='/catalog/datchik/:id' render={() => <DatchykyInfoPage  data={data_dros[resID]}
                                                                                    arr={arr}
                                                                                    setArr={setArr}
                />}  />

            </BrowserRouter>
            <Footer/>

        </div>
    )
}

export default App
