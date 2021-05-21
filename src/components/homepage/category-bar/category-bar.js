import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import {NavLink} from "react-router-dom";
import style from '../../../assets/style/scss/homepage/category-bar/categorybar.module.css'


const useStyles = makeStyles({
    root: {
        height: 216,
        flexGrow: 1,
        maxWidth: 400,
    },
});

export default function CategoryBar() {
    const classes = useStyles();

    return (
        <div className={style.main}>
            <span className={style.category}>Категорії</span>
            <div className={style.trees}>
                <TreeView
                    className={classes.root}
                    defaultCollapseIcon={<ExpandMoreIcon/>}
                    defaultExpandIcon={<ChevronRightIcon/>}
                    multiSelect
                >
                    <div className={`${style.tree_item}`}>

                        <TreeItem nodeId="1" label="Резистори">
                            <NavLink to={'/catalog/resistors'}><TreeItem nodeId="2" label="Резистори"/></NavLink>
                        </TreeItem>
                    </div>
                    <div className={`${style.tree_item}`}>
                    <TreeItem nodeId="5" label="Конденсатори">
                        <NavLink to={'/catalog/condensators'}><TreeItem nodeId="2" label="Конденсатори"/></NavLink>
                        </TreeItem>
                    </div>
                    <div className={`${style.tree_item}`}>
                    <TreeItem nodeId="10" label="Транзистори">
                        <NavLink to={'/catalog/transistors'}><TreeItem nodeId="2" label="Транзистори"/></NavLink>
                    </TreeItem>
                    </div>
                    <div className={`${style.tree_item}`}>
                    <TreeItem nodeId="11" label="Реле">
                        <NavLink to={'/catalog/rele'}><TreeItem nodeId="2" label="Реле"/></NavLink>

                    </TreeItem>
                    </div>
                    <div className={`${style.tree_item}`}>
                    <TreeItem nodeId="12" label="Модеми і радіомодулі">
                        <NavLink to={'/catalog/modems'}><TreeItem nodeId="2" label="Модеми і радіомодулі"/></NavLink>

                    </TreeItem>
                    </div>
                    <div className={`${style.tree_item}`}>
                    <TreeItem nodeId="13" label="Термістори">
                        <NavLink to={'/catalog/termistors'}><TreeItem nodeId="2" label="Термістори"/></NavLink>

                    </TreeItem>
                    </div>


                </TreeView>
            </div>
        </div>
    );
}
