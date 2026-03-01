const { useState } = React;

export const ColorPicker = () => {
    const [color, setColor] = useState("#ffffff");
    const divStyle = {
        backgroundColor: color,
    };
    return (
        <div id="color-picker-container" style={divStyle}>
            <input
                id="color-input"
                type="color"
                value={color}
                onChange={(event) => setColor(event.target.value)}></input>
        </div>
    );
};
