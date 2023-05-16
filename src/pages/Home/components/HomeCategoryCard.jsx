export function HomeCategoryCard({ name, image }) {
  return (
    <div className="home-category-card">
      <div className="home-image-card">
        <img src={image} alt="loading" />
      </div>
      <h3>{name}</h3>
    </div>
  );
}
