import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { proId } = useParams();

//   const [product, setProduct] = useState({});
//   const { proId } = useParams();

//   useEffect(() => {
//     fetch(`http://localhost:5000/products/${proId}`)
//       .then((res) => res.json())
//       .then((data) => setProduct(data.results));
//   }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    setValue,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      price: "",
      description: "",
      imageUrl: "",
    },
  });

  const handleUpdate = (data) => {
    resetField("title");
    resetField("price");
    resetField("description");
    resetField("imageUrl");

    updateProduct(data);
  };

  const updateProduct = (data) => {
    fetch(`http://localhost:5000/admin/edit-product/${proId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        alert(data.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form className="form__style" onSubmit={handleSubmit(handleUpdate)}>
        <h2>Update Product</h2>
        <label>Title</label>
        <br />
        <input
        //   defaultValue={product?.title}
          className="input__field"
          {...register("title", {
            // required: true,
          })}
        />
        <br />

        <label>Price</label>
        <br />
        <input
          className="input__field"
          {...register("price", {
            // required: true,
          })}
        />
        <br />

        <label>Description</label>
        <br />
        <input
          className="input__field"
          {...register("description", {
            // required: true,
          })}
        />
        <br />

        <label>Image URL</label>
        <br />
        <input
          className="input__field"
          {...register("imageUrl", {
            // required: true,
          })}
        />
        <br />

        <input className="submit" type="submit" />
      </form>
    </div>
  );
};

export default UpdateProduct;
