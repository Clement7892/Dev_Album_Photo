import React from "react";
import HomePage from "../../screens/HomePage";
import Schema01 from "../Schema/Schema01";
import { Route, Routes } from "react-router-dom";
import Schema02 from "../Schema/Schema02";
import Schema03 from "../Schema/Schema03";

const Nav = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/schema01" element={<Schema01 />} />
            <Route path="/schema02" element={<Schema02 />} />
            <Route path="/schema03" element={<Schema03 />} />
        </Routes>
    );
}

export default Nav;