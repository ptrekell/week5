import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './MainStageRouter.css';
import Home from '../Home/Home';
import Detail from '../Detail/Detail';
import Favorites from '../Favorites/Favorites'
import PropTypes from 'prop-types';

class MainStageRouter extends Component {
    render() {
        return (
            <div className="MainStageRouter">
                <Switch>
                    <Route exact path="/" render={() => {
                        return (<Home
                            searchBoxValue={this.props.searchBoxValue}
                            characters={this.props.characters}
                            pageCount={this.props.pageCount}
                            characterCount={this.props.characterCount} />)
                    }} />

                    <Route exact path="/detail/:id" render={(props) => {
                        return (<Detail
                            {...props}
                            favAddRemoveHandler={this.props.favAddRemoveHandler}

                            
                        />)
                    }} />

                    <Route exact path="/favs" render={() => {
                        return (<Favorites characters={this.props.characters} />)
                    }} />



                    <Redirect exact from="/detail" to="/" />
                </Switch>
            </div>
        )
    }
}

MainStageRouter.propTypes = {
    searchBoxValue: PropTypes.string,
    favAddRemoveHandler: PropTypes.func,
    characters: PropTypes.array,
    pageCount: PropTypes.number,
    characterCount: PropTypes.number
}

export default MainStageRouter;
