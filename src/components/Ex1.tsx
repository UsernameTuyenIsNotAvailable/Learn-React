
export default  function Ex1(){
    return (
        <>
            <article>
                <h1>My First Component</h1>
                <ol>
                    <li>Components: UI Building Blocks</li>
                    <li>Defining a Component</li>
                    <li>Using a Component</li>
                    <li>React components are regular JavaScript functions, but their names must start with a capital
                        letter or they won’t work!
                    </li>
                    <li>
                        Components can render other components, but you must never nest their definitions:
                    </li>
                    <img
                        src="https://i.imgur.com/MK3eW3Am.jpg"
                        alt="Katherine Johnson"
                    />
                    <Profile/>
                    <section>
                        <h1>Amazing scientists</h1>
                        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson"/>
                        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson"/>
                        <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson"/>
                    </section>
                </ol>
            </article>
        </>
    )
}

function Profile() {
    return (
        <img
            src="https://i.imgur.com/MK3eW3As.jpg"
            alt="Katherine Johnson"
        />
    );
}
