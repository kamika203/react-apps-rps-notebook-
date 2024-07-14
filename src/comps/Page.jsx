import React from "react";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/rps">RPS</Link>
        </li>
        <li>
          <Link to="/note">note</Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;
