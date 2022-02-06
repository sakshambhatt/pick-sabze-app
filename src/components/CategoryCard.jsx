function CategoryCard({ id, name, description, bannerImage }) {
  return (
    <>
      <a href={`/categories/${id}`}>
        <div className="category-card">
          <img src={bannerImage} alt={name} />
          <h2 className="text-lg font-bold">{name}</h2>
          <p>{description}</p>
        </div>
      </a>
    </>
  );
}

export default CategoryCard;
