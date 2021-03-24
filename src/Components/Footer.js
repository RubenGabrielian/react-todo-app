
function Footer ({data}) {

    const complatedTodos = data.filter((todo) => todo.complated == true);
    console.log(complatedTodos)
    return (
        <div>
            {complatedTodos.length} / {data.length} Completed
        </div>
    )
}

export default Footer;