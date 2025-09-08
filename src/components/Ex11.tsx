interface AlertButtonProp {
    message: string
    children: string
}

function AlertButton({ message, children }: AlertButtonProp ) {
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}

function Toolbar() {
    return (
        <div>
            <AlertButton message="Playing!">
                Play Movie
            </AlertButton>
            <AlertButton message="Uploading!">
                Upload Image
            </AlertButton>
            <h1>
                Passing event handlers as props
            </h1>
        </div>
    );
}

export  default function Ex11(){
    return (
        <>
            <h1>
                Adding event handlers
                <button> I don't do anything</button>
                <Button/>
            </h1>
            <h1>
                Reading props in event handlers
                <Toolbar></Toolbar>
            </h1>



        </>
    )
}
export function Button ( ) {
    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}