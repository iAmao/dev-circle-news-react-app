import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from '../Button';


describe('Button', () => {
    describe('Snapshot', () => {
        it('should create a basic button with default styles', () => {
            const component = renderer
                .create(<Button>Click me</Button>)
                .toJSON();
            expect(component).toMatchSnapshot();
        });
        it('Should create a button with custom styles', () => {
            const customButtonComponent = renderer
                .create(
                    <Button style={{ backgroundColor: 'red' }}>
                        anything
                    </Button>
                ).toJSON()
            expect(customButtonComponent).toMatchSnapshot();
        })
    });

    describe('Unit', () => {
        it('should create a clickable button', () => {
            let count = 0;
            const button = shallow(
                <Button onClick={() => count++}>
                    click me!
                </Button>
            );
            button.simulate('click');
            expect(count).toEqual(1);
        });
    });
})