import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchVeggiesById } from "../functions/fetchVeggiesById";
import getArticle from "../functions/getArticle";
import isObjectEmpty from "../functions/isObjectEmpty";

function Veggie() {
  const veggieId = window.location.href.split("s/")[1];
  const [veggieToShow, setVeggieToShow] = useState({});

  const [article, setArticle] = useState("");

  const { isSuccess, isLoading, isError, data, error, refetch } = useQuery(
    "veggiesFetchedById",
    () => fetchVeggiesById(veggieId),
    {
      refetchOnWindowFocus: false,
      enabled: false,
      cacheTime: 0,
    }
  );

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (isSuccess) {
      setVeggieToShow(() => data?.data?.veggie);
    }
  }, [data?.data?.veggie, isSuccess]);

  useEffect(() => {
    if (!isObjectEmpty(veggieToShow)) {
      setArticle(() => getArticle(veggieToShow?.name));
    }
  }, [veggieToShow]);

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      {/* TODO: loading animation */}
      {isLoading && <h1>loading...</h1>}
      {!isLoading && (
        <>
          <h1 className="text-2xl font-bold">{veggieToShow?.name}</h1>
          <p>{veggieToShow?.category}</p>
          {/* TODO: responsive image container */}
          <div className="image-container">
            <img src={veggieToShow?.goodImage} alt={`${veggieToShow?.name}`} />
          </div>
          <ul className="flex justify-start">
            {veggieToShow?.regionalNames?.map((name, index) => (
              <li key={index} className="px-1">
                {name}
              </li>
            ))}
          </ul>
          <article>{veggieToShow?.description}</article>
          <h2 className="text-lg font-bold">{`Qualities of ${article} good ${veggieToShow?.name}`}</h2>
          <article>{veggieToShow?.goodDescription}</article>

          <h2 className="text-lg font-bold">{`Qualities of ${article} bad ${veggieToShow?.name}`}</h2>
          <div className="image-container">
            <img src={veggieToShow?.badImage} alt={`${veggieToShow?.name}`} />
          </div>
          <article>{veggieToShow?.badDescription}</article>
        </>
      )}
    </>
  );
}

export default Veggie;
