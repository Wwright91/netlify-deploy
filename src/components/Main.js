import { useEffect, useState } from "react";

function Main() {
    const [apis, setApis] = useState([]);

    useEffect(() => {
      fetch("https://api.publicapis.org/entries")
        .then((res) => res.json())
        .then((data) => setApis(data.entries));
    }, []);

    return (
        <div>
            {apis.filter(api => api.Auth === "apiKey").map((api) => {
        return (
          <p key={api.key}>
            <a href={api.Link}>{api.API}</a>
          </p>
        );
      })}
        </div>
    )
}

export default Main