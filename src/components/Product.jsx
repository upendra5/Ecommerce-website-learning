export default function Product({
  id,
  title,
  price,
  image,
  description,
  addToCart,
}) {
  return (
    <div className="shadow-lg bg-[#5f4e33]">
      <img src={image} alt={title} />
      <div className="mt-4 p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-amber-50 text-sm">{price}</p>
        <p className="text-amber-50 text-sm mt-2">{description}</p>
        <button
          className="my-4 px-4 py-2 bg-amber-500 text-amber-50 rounded-sm hover:bg-ambere-700 hover:text-amber-100"
          onClick={() => addToCart({ id, title, price, image, description })}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
