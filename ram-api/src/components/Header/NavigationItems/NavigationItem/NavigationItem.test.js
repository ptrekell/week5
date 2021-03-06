import React from 'react';
import { mount } from 'enzyme';
import NavigationItem from './NavigationItem'
import { MemoryRouter} from 'react-router-dom';
// import characters from '../../__mocks__/characters.json'

describe('<NavigationItem />', () => {
    it('Should render NavigationItem', () => {

                //https://github.com/ReactTraining/react-router/issues/5579
        //avoid memory router generating new keys everytime it runs so that snapshot remains the same
        const wrapper = mount(
            <MemoryRouter initialEntries={[ { pathname: '/', key: 'testKey' } ]}> 
                <NavigationItem link="/detail" />
            </MemoryRouter>
        );


        expect(wrapper).toMatchSnapshot();
    })
})




