export default function Button({children, onClick}){
    return(
        <button onClick={onClick} style={{backgroundColor: "blue", color: "white", padding: "10px 20px", borderRadius: "5px", cursor: "pointer"}}>
            <span>
                {children}
            </span>
        </button>
    )
}