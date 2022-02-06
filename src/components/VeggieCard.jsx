function VeggieCard({ id, image, name, description, regionalNames }) {
  return (
    <>
      <a href={`/veggies/${id}`}>
        <div className="veggie-card">
          <img src={image} alt={name} />
          <h2 className="text-lg font-bold">{name}</h2>
          <p>{description}</p>
          {/* TODO: create a regional names component, and use in Veggie & VeggieCard */}
          <ul className="flex">
            {regionalNames?.map((name, index) => {
              return index === regionalNames?.length - 1 ? (
                <li key={index}>{name}</li>
              ) : (
                <li key={index}>{`${name}, `}</li>
              );
            })}
          </ul>
        </div>
      </a>
    </>
  );
}

export default VeggieCard;
