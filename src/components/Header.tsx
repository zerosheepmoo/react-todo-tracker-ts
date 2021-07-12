import React, {FunctionComponent} from 'react';
import { useLocation } from 'react-router';
import Button from './Button';
import { HeaderProps } from '../model/Props';


const Header: FunctionComponent<HeaderProps> = ({title = 'Task Tracker', onAdd, showAdd}) => {
    const location = useLocation();

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close': 'Add'} onClick={onAdd}/>}
        </header>
    )
}

export default Header;