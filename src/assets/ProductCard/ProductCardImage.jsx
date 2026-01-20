function ProductCardImage(image) {
  console.log(image);
  return (
    <div>
      <img className=" rounded-2xl bg-slate-100 size-85" src={image.image} />
    </div>
  );
}

export default ProductCardImage;
