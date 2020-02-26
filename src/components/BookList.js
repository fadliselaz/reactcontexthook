import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <div className='book-list' style={{
            color: theme.syntax,
            background: theme.bg,
        }}>
            <ul>
                <li style={{ background: theme.ui }}>The Way King</li>
                <li style={{ background: theme.ui }}>The Name Of The Wind</li>
                <li style={{ background: theme.ui }}>the Final Empire</li>
            </ul>
        </div>
    );
}

export default BookList;