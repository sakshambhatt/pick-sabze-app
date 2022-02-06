import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCategories } from "../functions/fetchCategories";
import CategoryCard from "../components/CategoryCard";

function Categories() {
  const { isSuccess, isLoading, isError, data, error } = useQuery(
    "fetchedCategories",
    fetchCategories,
    {}
  );

  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    if (isSuccess) {
      setCategories(() => [...data?.data?.categories]);
    }
  }, [data?.data?.categories, isSuccess]);

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      <h1>Categories</h1>
      {isLoading && <p>loading...</p>}
      {categories?.length && (
        <ul>
          {categories.map(({ _id, name, description, bannerImage }) => (
            <li key={_id}>
              <CategoryCard
                id={_id}
                name={name}
                description={description}
                bannerImage={bannerImage}
              />
            </li>
          ))}
        </ul>
      )}
      <Link to="/">Home</Link>
    </>
  );
}

export default Categories;
