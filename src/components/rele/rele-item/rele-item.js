import React, {useState} from 'react';
import style from "../../../assets/style/scss/resistors/resistors-item/resistor-item.module.css";
import {Button, Card} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const ReleItem = (props) => {

    const [visible, setVisible] = useState(false)

    return (
        <div>
            <div className={style.main}>
                <Card style={{ width: '16rem', height: "420px"}}>
                    <Card.Img variant="top" src={props.data.url} style={{width: '100%', height:"170px"}} />
                    <Card.Body>
                        <Card.Title>Реле: {props.data.model}</Card.Title>
                        <Card.Text>
                            Опір обмотки: {props.data.opir} Ом
                        </Card.Text>
                        <Card.Text>
                            Потужність: {props.data.power}Вт
                        </Card.Text>
                        <Card.Text>
                            <span className={style.price}><p>Ціна:  </p> <span><h5>{props.data.price} грн</h5></span></span>
                        </Card.Text>
                        <NavLink to={`/catalog/rele/${props.data.id}`}><Button variant="danger"
                                                                                      className={style.btn}
                                                                                      onClick={() => {
                                                                                          setVisible(!visible)
                                                                                          props.setResID(props.data.id)
                                                                                      }}

                        >
                            Купити <ShoppingCartIcon fontSize={'small'}/>
                        </Button>
                        </NavLink>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default ReleItem;