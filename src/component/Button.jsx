export function Button ({title, onClick}){

    
    return (
        <>
        <button name={title} onClick={onClick}>{title}</button>
        </>
    )
}