export const MoodBoardItem = ({ color, image, description }) => {
    const inlineStyle = {
        backgroundColor: color,
    };
    return (
        <div className="mood-board-item" style={inlineStyle}>
            <img className="mood-board-image" src={image} alt="image" />
            <h3 className="mood-board-text">{description}</h3>
        </div>
    );
};

export const MoodBoard = () => {
    return (
        <div className="mood-board">
            <h1 className="mood-board-heading">Destination Mood Board</h1>
            <MoodBoardItem
                color={"green"}
                image={
                    "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
                }
                description={"pathway"}
            />
            <MoodBoardItem
                color={"green"}
                image={
                    "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
                }
                description={"pathway"}
            />
            <MoodBoardItem
                color={"green"}
                image={
                    "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
                }
                description={"pathway"}
            />
        </div>
    );
};
