import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { searchVeggies } from "../functions/searchVeggies";

function Search() {
  const [veggieToSearch, setVeggieToSearch] = useState("");
  const [wasVeggieFound, setWasVeggieFound] = useState(true);

  const { isSuccess, isLoading, isError, data, error, refetch } = useQuery(
    "searchedVeggies",
    () => searchVeggies(veggieToSearch),
    {
      refetchOnWindowFocus: false,
      enabled: false,
      cacheTime: 0,
    }
  );

  const navigate = useNavigate();

  const veggieId = data?.data?.veggieId;
  const message = data?.data?.message;

  useEffect(() => {
    if (isSuccess && message === "veggie found!") {
      navigate(`/veggies/${veggieId}`);
    } else if (message?.charAt(0) === "n") {
      setWasVeggieFound(() => false);
    }
  }, [isSuccess, message, navigate, veggieId]);

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      {isLoading && <p>loading...</p>}
      <h1 className="text-3xl font-bold">Pick Sabzee</h1>
      <p className="italic">Pick veggies without worry</p>
      <form>
        <input
          type="text"
          value={veggieToSearch}
          onChange={(e) => setVeggieToSearch(e.target.value)}
          placeholder="veggie to pick"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            refetch();
            setVeggieToSearch(() => "");
          }}
        >
          Search
        </button>
      </form>
      {!wasVeggieFound && (
        <p>Sadly, the veggie you searched for was not found.</p>
      )}
      <section>
        <Link to="/categories">
          <small>Learn about your veggies</small>
        </Link>
      </section>
    </>
  );
}

export default Search;
