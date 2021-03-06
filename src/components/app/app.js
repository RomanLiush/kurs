import React, {useState} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

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

    const [state, setState] = useState(data_res);
    const [stateVolvo, setStateVolvo] = useState(data_cond);
    const [stateMers, setStateMers] = useState(data_tran);
    const [stateFord, setStateFord] = useState(data_rele);
    const [stateVolk, setStateVolk] = useState(data_modem);
    const [stateZAZ, setStateZAZ] = useState(data_term);

//BMW
    const deleteItem = (id) => {
        setState(() => {
            const idx = state.findIndex(el => +el.id === id);

            const newArr = [
                ...state.slice(0, idx),
                ...state.slice(idx + 1)
            ]

            return newArr

        })
    }

    const editedAuto = localStorage.getItem('editAuto');

    const editItem = (id) => {
        setState(() => {
            const idx = state.findIndex(el => +el.id === id);

            console.log(id, 'id id')
            console.log(idx, 'idx idx')

            state.splice(id, 1, JSON.parse(editedAuto))
            console.log(state, 'STATE')
            const newArr = [...state]
            return newArr
        })
    }

    const newItem = (newAuto) => {
        setState(() => {
            const newArr = [...state, newAuto]
            return newArr
        })
    }


//VOLVO

    const deleteItemVolvo = (id) => {
        setStateVolvo(() => {
            const idx = stateVolvo.findIndex(el => +el.id === id);

            const newArr = [
                ...stateVolvo.slice(0, idx),
                ...stateVolvo.slice(idx + 1)
            ]

            return newArr

        })
    }

    // const editedAuto = localStorage.getItem('editAuto');

    const editItemVolvo = (id) => {
        setStateVolvo(() => {
            const idx = stateVolvo.findIndex(el => +el.id === id);

            console.log(id, 'id id')
            console.log(idx, 'idx idx')

            stateVolvo.splice(id, 1, JSON.parse(editedAuto))

            const newArr = [...stateVolvo]
            return newArr
        })
    }

    const newItemVolvo = (newAuto) => {
        setStateVolvo(() => {
            const newArr = [...stateVolvo, newAuto]
            return newArr
        })
    }


//MERS

    const deleteItemMers = (id) => {
        setStateMers(() => {
            const idx = stateMers.findIndex(el => +el.id === id);

            const newArr = [
                ...stateMers.slice(0, idx),
                ...stateMers.slice(idx + 1)
            ]

            return newArr

        })
    }

    // const editedAuto = localStorage.getItem('editAuto');

    const editItemMers = (id) => {
        setStateMers(() => {
            const idx = stateMers.findIndex(el => +el.id === id);

            console.log(id, 'id id')
            console.log(idx, 'idx idx')

            stateMers.splice(id, 1, JSON.parse(editedAuto))

            const newArr = [...stateMers]
            return newArr
        })
    }

    const newItemMers = (newAuto) => {
        setStateMers(() => {
            const newArr = [...stateMers, newAuto]
            return newArr
        })
    }

//FORD

    const deleteItemFord = (id) => {
        setStateFord(() => {
            const idx = stateFord.findIndex(el => +el.id === id);

            const newArr = [
                ...stateFord.slice(0, idx),
                ...stateFord.slice(idx + 1)
            ]

            return newArr

        })
    }

    // const editedAuto = localStorage.getItem('editAuto');

    const editItemFord = (id) => {
        setStateFord(() => {
            const idx = stateFord.findIndex(el => +el.id === id);

            console.log(id, 'id id')
            console.log(idx, 'idx idx')

            stateFord.splice(id, 1, JSON.parse(editedAuto))

            const newArr = [...stateFord]
            return newArr
        })
    }

    const newItemFord = (newAuto) => {
        setStateFord(() => {
            const newArr = [...stateFord, newAuto]
            return newArr
        })
    }


//VOLKSWAGEN

    const deleteItemVolk = (id) => {
        setStateVolk(() => {
            const idx = stateVolk.findIndex(el => +el.id === id);

            const newArr = [
                ...stateVolk.slice(0, idx),
                ...stateVolk.slice(idx + 1)
            ]

            return newArr

        })
    }

    // const editedAuto = localStorage.getItem('editAuto');

    const editItemVolk = (id) => {
        setStateVolk(() => {
            const idx = stateVolk.findIndex(el => +el.id === id);

            console.log(id, 'id id')
            console.log(idx, 'idx idx')

            stateVolk.splice(id, 1, JSON.parse(editedAuto))

            const newArr = [...stateVolk]
            return newArr
        })
    }

    const newItemVolk = (newAuto) => {
        setStateVolk(() => {
            const newArr = [...stateVolk, newAuto]
            return newArr
        })
    }

//ZAZ

    const deleteItemZAZ = (id) => {
        setStateZAZ(() => {
            const idx = stateZAZ.findIndex(el => +el.id === id);

            const newArr = [
                ...stateZAZ.slice(0, idx),
                ...stateZAZ.slice(idx + 1)
            ]

            return newArr

        })
    }

    // const editedAuto = localStorage.getItem('editAuto');

    const editItemZAZ = (id) => {
        setStateZAZ(() => {
            const idx = stateZAZ.findIndex(el => +el.id === id);

            console.log(id, 'id id')
            console.log(idx, 'idx idx')

            stateZAZ.splice(id, 1, JSON.parse(editedAuto))

            const newArr = [...stateZAZ]
            return newArr
        })
    }

    const newItemZAZ = (newAuto) => {
        setStateZAZ(() => {
            const newArr = [...stateZAZ, newAuto]
            return newArr
        })
    }

    return (

        <div>
            <BrowserRouter>
                <Header data={arr}/>
                <Route path='/' exact render={() => <Homepage/>}/>
                <Route path='/basket' render={() => <Busket data={arr}/>}/>
                <Route path='/catalog' exact render={() => <Catalog/>}/>
                <Route path='/rules' exact render={() => <Rules/>}/>

                <Route path='/catalog/bmw'  exact render={() => <Resistors setResID={setResID}
                                                                           deleteItem={deleteItem}
                                                                           editItem={editItem}
                                                                           newItem={newItem}
                                                                           data={state}

                />}/>
                <Route path='/catalog/bmw/:id' render={() => <ResistorInfoPage data={data_res[resID]}
                                                                               arr={arr}
                                                                               setArr={setArr}
                />}/>

                <Route path='/catalog/volvo'  exact render={() => <Condensators setResID={setResID}
                                                                                deleteItemVolvo={deleteItemVolvo}
                                                                                editItemVolvo={editItemVolvo}
                                                                                newItemVolvo={newItemVolvo}
                                                                                data={stateVolvo}

                />}/>
                <Route path='/catalog/volvo/:id' render={() => <CondensatorsInfoPage data={data_cond[resID]}
                                                                                            arr={arr}
                                                                                            setArr={setArr}
                />}  />

                <Route path='/catalog/mers'  exact render={() => <Transistors setResID={setResID}
                                                                              deleteItemMers={deleteItemMers}
                                                                              editItemMers={editItemMers}
                                                                              newItemMers={newItemMers}
                                                                              data={stateMers}

                />}/>
                <Route path='/catalog/mers/:id' render={() => <TransistorsInfoPage  data={data_tran[resID]}
                                                                                            arr={arr}
                                                                                            setArr={setArr}
                />}  />

                <Route path='/catalog/ford'  exact render={() => <Rele setResID={setResID}
                                                                       deleteItemFord={deleteItemFord}
                                                                       editItemFord={editItemFord}
                                                                       newItemFord={newItemFord}
                                                                       data={stateFord}

                />}/>
                <Route path='/catalog/ford/:id' render={() => <ReleInfoPage  data={data_rele[resID]}
                                                                             arr={arr}
                                                                             setArr={setArr}
                />}  />

                <Route path='/catalog/volk'  exact render={() => <Modems setResID={setResID}
                                                                           deleteItemVolk={deleteItemVolk}
                                                                           editItemVolk={editItemVolk}
                                                                           newItemVolk={newItemVolk}
                                                                           data={stateVolk}

                />}/>
                <Route path='/catalog/volk/:id' render={() => <ModemInfoPage  data={data_modem[resID]}
                                                                                arr={arr}
                                                                                setArr={setArr}
                />}  />

                <Route path='/catalog/zaz'  exact render={() => <Termistors setResID={setResID}
                                                                            deleteItemZAZ={deleteItemZAZ}
                                                                            editItemZAZ={editItemZAZ}
                                                                            newItemZAZ={newItemZAZ}
                                                                            data={stateZAZ}

                />}/>
                <Route path='/catalog/zaz/:id' render={() => <TermistorInfoPage  data={data_term[resID]}
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
