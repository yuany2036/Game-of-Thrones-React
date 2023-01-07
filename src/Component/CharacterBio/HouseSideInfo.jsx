import { useEffect, useState } from "react";

const HouseSideInfo = ({ house }) => {
  const [houseInfo, setHouseInfo] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `https://api.got.show/api/show/houses/${house}`
        );
        const data = await res.json();
        setHouseInfo(...data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [house]);

  // console.log(houseInfo);

  return (
    <section>
      <h2>{house}</h2>
    </section>
  );
};

export default HouseSideInfo;
