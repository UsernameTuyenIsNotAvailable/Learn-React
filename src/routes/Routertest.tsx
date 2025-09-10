
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Ex1 from "../components/Ex1";
import  Ex2  from "../components/Ex2";
import  Ex3  from "../components/Ex3";
import  Ex4  from "../components/Ex4";
import  Ex5  from "../components/Ex5";
import  Ex6  from "../components/Ex6";
import  Ex7  from "../components/Ex7";
import  Ex8  from "../components/Ex8";
import  Ex9  from "../components/Ex9";
import Ex10  from "../components/Ex10";
import Ex11  from "../components/Ex11";
import Ex12  from "../components/Ex12";
import Ex13  from "../components/Ex13";
import Ex14 from "../components/Ex14";
import Ex15 from "../components/Ex15";
export default function Routertest() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Layout bao ngoài */}
                <Route path="/" element={<Layout />}>
                    {/* Các route con */}
                    <Route path="/home" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/our-first-component" element={<Ex1/>} />
                    <Route path="/importing-and-exporting-components" element={<Ex2/>} />
                    <Route path="/writing-markup-with-jsx" element={<Ex3/>} />
                    <Route path="/javascript-in-jsx-with-curly-braces" element={<Ex4/>} />
                    <Route path="/passing-props-to-a-component" element={<Ex5/>} />
                    <Route path="/conditional-rendering" element={<Ex6/>} />
                    <Route path="/rendering-lists" element={<Ex7/>} />
                    <Route path="/keeping-components-pure" element={<Ex8/>} />
                    <Route path="/understanding-your-ui-as-a-tree" element={<Ex9/>} />
                    <Route path="/Adding Interactivity" element= {<Ex10/>} />
                    <Route path="Adding event handlers" element={<Ex11/>}/>
                    <Route path="State: A Component's Memory"  element={<Ex12/>}/>
                    <Route path="Render and Commit" element={<Ex13/>}/>
                    <Route path="State as a Snapshot" element={<Ex14/>}/>
                    <Route path="Queueing a Series of State Updates" element={<Ex15/>}></Route>

                </Route>
            </Routes>
        </BrowserRouter>
    );}



export function Layout() {
    return (
        <>
            <nav style={{ padding: "10px", background: "#eee" }}>
                | <Link to="/home">Home</Link> |{" "}
                <Link to="/about">About</Link> |{" "}
                <Link to="/our-first-component">Ex1</Link> |{" "}
                <Link to="/importing-and-exporting-components">Ex2</Link> |{" "}
                <Link to="/writing-markup-with-jsx">Ex3</Link> |{" "}
                <Link to="/javascript-in-jsx-with-curly-braces">Ex4</Link> |{" "}
                <Link to="/passing-props-to-a-component">Ex5</Link> |{" "}
                <Link to="/conditional-rendering">Ex6</Link> |{" "}
                <Link to="/rendering-lists">Ex7</Link> |{" "}
                <Link to="/keeping-components-pure">Ex8</Link> |{" "}
                <Link to="/understanding-your-ui-as-a-tree">Ex9</Link> |{" "}
                <Link to="/Adding Interactivity">Ex10</Link> |{" "}
                <Link to="/Adding event handlers">Ex11</Link> |{" "}
                <Link to="/State: A Component's Memory">Ex12</Link> |{" "}
                <Link to="/Render and Commit">Ex13</Link> |{" "}
                <Link to="/State as a Snapshot">Ex14</Link> |{" "}
                <Link
                    to="/Queueing a Series of State Updates"
                    style={{ color: "red" }}
                >
                    Ex15
                </Link>{" "}
                |
            </nav>

            <main style={{ padding: "30px" }}>
                <Outlet />
            </main>
        </>
    );
}
