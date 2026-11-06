import CruiseCard from "./CruiseCard";

function CruiseList() {
  return (
    <div>
      <h1>Available Cruises</h1>

      <CruiseCard destination="Caribbean" price={1800} />

      <CruiseCard destination="Indian Ocean" price={950} />

      <CruiseCard destination="Mediterranean" price={1400} />
    </div>
  );
}

export default CruiseList;