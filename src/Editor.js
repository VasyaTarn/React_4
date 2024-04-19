import React, { useState } from 'react'

function Editor() {
    const [text, setText] = useState('');
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);

    function handleBoldClick()
    {
        setBold(!bold);
    };

    function handleItalicClick()
    {
        setItalic(!italic);
    };

    function handleUnderlineClick()
    {
        setUnderline(!underline);
    };

    function handleUpperCaseClick()
    {
        setText(text => text.toUpperCase());
    };

    function getTextStyle()
    {
        let style = {};

        if (bold) 
        {
            style.fontWeight = 'bold';
        }
        if (italic)
        {
            style.fontStyle = 'italic';
        }
        if (underline)
        {
            style.textDecoration = 'underline';
        }

        return style;
    };

    return (
        <>
            <div>
            <div>
                <button onClick={handleBoldClick}>B</button>
                <button onClick={handleItalicClick}>I</button>
                <button onClick={handleUnderlineClick}>U</button>
                <button onClick={handleUpperCaseClick}>Tt</button>
            </div>
            <textarea
                value={text}
                onChange={e => setText(e.target.value)}
                style={getTextStyle()}
            />
            </div>           
        </>
    )
}

export default Editor
