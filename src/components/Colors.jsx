function Colors() {
    return(
        <div className="Colors SubPage">
            <div className="Spacer"></div>
            
            <h1>-Colors Example-</h1>
            <div className="Hello" style={{ color: "yellow", backgroundColor: "black", width: "100%" }}>
                <h2 style={{ textAlign: "center" }}>Hello There</h2>
            </div>
            <div className="Hello" style={{ color: "purple", backgroundColor: "yellow", width: "100%" }}>
                <h2 style={{ textAlign: "center" }}>Hi Again</h2>
            </div>
        </div>
    );
}

export default Colors;