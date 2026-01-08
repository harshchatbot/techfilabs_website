import { useEffect } from "react";

export default function Schema({ id = "jsonld-schema", data }) {
  useEffect(() => {
    if (!data) return;

    let script = document.getElementById(id);

    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = id;
      document.head.appendChild(script);
    }

    script.text = JSON.stringify(data);

    return () => {
      // Optional cleanup (keep it if you want schema to persist on navigation)
      // const el = document.getElementById(id);
      // if (el) el.remove();
    };
  }, [id, data]);

  return null;
}
