import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchVeggiesByCategoryId } from "../functions/fetchVeggiesByCategoryId";
import VeggieCard from "../components/VeggieCard";

function Category() {
  const categoryId = window.location.href.split("s/")[1];
  const [veggies, setVeggies] = useState([]);
  console.log(veggies);
  const { isSuccess, isLoading, isError, data, error } = useQuery(
    "fetchedVeggies",
    () => fetchVeggiesByCategoryId(categoryId),
    {}
  );

  useEffect(() => {
    if (isSuccess) {
      setVeggies(() => data?.data?.veggiesByCategory);
    }
  }, [data?.data?.veggiesByCategory, isSuccess]);

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      {isLoading && <p>loading...</p>}
      {veggies?.length && (
        <ul>
          {veggies?.map(
            ({ _id, goodImage, name, description, regionalNames }) => (
              <li key={_id}>
                <VeggieCard
                  id={_id}
                  image={goodImage}
                  name={name}
                  description={description}
                  regionalNames={regionalNames}
                />
              </li>
            )
          )}
        </ul>
      )}
      <Link to="/">Home</Link>
    </>
  );
}

export default Category;
