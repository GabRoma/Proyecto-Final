import React, { useState } from "react";

const Carousel = () => {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const images = [
  //     "https://logos-world.net/wp-content/uploads/2020/04/Adidas-Symbol.png",
  //     "Adidas",
  //     "https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/e5853518-be79-4fcc-afe4-6d2df175de53/el-mejor-calzado-informal-de-nike-para-usar-todos-los-días.jpg",
  //     "Calzados",
  //     "https://media.gq.com.mx/photos/61e70ca25def32c5619cef06/4:3/w_712,h_534,c_limit/Lenovo%20Yoga%20Slim%207%20Pro.jpg",
  //     "Laptops",
  //     "https://www.apple.com/newsroom/images/product/watch/standard/applewatch_series_3_two_loop_full.jpg.og.jpg?202302031731",
  //     "Relojes",
  // ];

  // const previousSlide = () => {
  //     const lastIndex = images.length - 2;
  //     const shouldResetIndex = currentIndex === 0;
  //     const index = shouldResetIndex ? lastIndex : currentIndex - 2;

  //     setCurrentIndex(index);
  // };

  // const nextSlide = () => {
  //     const lastIndex = images.length - 2;
  //     const shouldResetIndex = currentIndex === lastIndex;
  //     const index = shouldResetIndex ? 0 : currentIndex + 2;

  //     setCurrentIndex(index);
  // };
  return (
    <>
      <div className="">
        <p
          className="mx-auto fs-1   text-secondary display-1"
          style={{ width: 100, height: 100 }}
        >
          BRANDS
        </p>
      </div>{" "}
      <div class="row">
        <div class="col">
          <button className="border-0 mx-5 ">
            <img
              src="https://img1.etsystatic.com/141/0/14236071/il_340x270.1151712881_8i9t.jpg"
              className="brandsimg my-2"
              style={{ width: 250, height: 250 }}
              alt="ERROR"
            />
          </button>
        </div>
        <div class="col">
          <button className="border-0 mx-2 ">
            <img
              src="https://img1.etsystatic.com/141/0/14236071/il_340x270.1151712881_8i9t.jpg"
              className="brandsimg my-2"
              style={{ width: 250, height: 250 }}
              alt="ERROR"
            />
          </button>
        </div>
        <div class="col">
          <button className="border-0 mx-2 ">
            <img
              src="https://img1.etsystatic.com/141/0/14236071/il_340x270.1151712881_8i9t.jpg"
              className="brandsimg my-2"
              style={{ width: 250, height: 250 }}
              alt="ERROR"
            />
          </button>
        </div>
        <div class="col">
          <button className="border-0 mx-2 ">
            <img
              src="https://img1.etsystatic.com/141/0/14236071/il_340x270.1151712881_8i9t.jpg"
              className="brandsimg my-2"
              style={{ width: 250, height: 250 }}
              alt="ERROR"
            />
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button className="border-0 mx-5 ">
            <img
              src="https://img1.etsystatic.com/141/0/14236071/il_340x270.1151712881_8i9t.jpg"
              className="brandsimg my-2"
              style={{ width: 250, height: 250 }}
              alt="ERROR"
            />
          </button>
        </div>
        <div class="col">
          <button className="border-0 mx-2 ">
            <img
              src="https://img1.etsystatic.com/141/0/14236071/il_340x270.1151712881_8i9t.jpg"
              className="brandsimg my-2"
              style={{ width: 250, height: 250 }}
              alt="ERROR"
            />
          </button>
        </div>
        <div class="col">
          <button className="border-0 mx-2 ">
            <img
              src="https://img1.etsystatic.com/141/0/14236071/il_340x270.1151712881_8i9t.jpg"
              className="brandsimg my-2"
              style={{ width: 250, height: 250 }}
              alt="ERROR"
            />
          </button>
        </div>
        <div class="col">
          <button className="border-0 mx-2 ">
            <img
              src="https://img1.etsystatic.com/141/0/14236071/il_340x270.1151712881_8i9t.jpg"
              className="brandsimg my-2"
              style={{ width: 250, height: 250 }}
              alt="ERROR"
            />
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <button className="border-0 mx-5 ">
            <img
              src="https://img1.etsystatic.com/141/0/14236071/il_340x270.1151712881_8i9t.jpg"
              className="brandsimg my-2"
              style={{ width: 250, height: 250 }}
              alt="ERROR"
            />
          </button>
        </div>
        <div class="col">
          <button className="border-0 mx-2 ">
            <img
              src="https://img1.etsystatic.com/141/0/14236071/il_340x270.1151712881_8i9t.jpg"
              className="brandsimg my-2"
              style={{ width: 250, height: 250 }}
              alt="ERROR"
            />
          </button>
        </div>
        <div class="col">
          <button className="border-0 mx-2 ">
            <img
              src="https://img1.etsystatic.com/141/0/14236071/il_340x270.1151712881_8i9t.jpg"
              className="brandsimg my-2"
              style={{ width: 250, height: 250 }}
              alt="ERROR"
            />
          </button>
        </div>
        <div class="col">
          <button className="border-0 mx-2 ">
            <img
              src="https://img1.etsystatic.com/141/0/14236071/il_340x270.1151712881_8i9t.jpg"
              className="brandsimg my-2"
              style={{ width: 250, height: 250 }}
              alt="ERROR"
            />
          </button>
        </div>
        <div class="row">
          <div class="col">
            <button className="border-0 mx-5 ">
              <img
                src="https://img1.etsystatic.com/141/0/14236071/il_340x270.1151712881_8i9t.jpg"
                className="brandsimg my-2"
                style={{ width: 250, height: 250 }}
                alt="ERROR"
              />
            </button>
          </div>
          <div class="col">
            <button className="border-0 mx-2 ">
              <img
                src="https://img1.etsystatic.com/141/0/14236071/il_340x270.1151712881_8i9t.jpg"
                className="brandsimg my-2"
                style={{ width: 250, height: 250 }}
                alt="ERROR"
              />
            </button>
          </div>
          <div class="col">
            <button className="border-0 mx-2 ">
              <img
                src="https://img1.etsystatic.com/141/0/14236071/il_340x270.1151712881_8i9t.jpg"
                className="brandsimg my-2"
                style={{ width: 250, height: 250 }}
                alt="ERROR"
              />
            </button>
          </div>
          <div class="col">
            <button className="border-0 mx-2 ">
              <img
                src="https://img1.etsystatic.com/141/0/14236071/il_340x270.1151712881_8i9t.jpg"
                className="brandsimg my-2"
                style={{ width: 250, height: 250 }}
                alt="ERROR"
              />
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <button className="border-0 mx-5 ">
              <img
                src="https://img1.etsystatic.com/141/0/14236071/il_340x270.1151712881_8i9t.jpg"
                className="brandsimg my-2"
                style={{ width: 250, height: 250 }}
                alt="ERROR"
              />
            </button>
          </div>
          <div class="col">
            <button className="border-0 mx-2 ">
              <img
                src="https://img1.etsystatic.com/141/0/14236071/il_340x270.1151712881_8i9t.jpg"
                className="brandsimg my-2"
                style={{ width: 250, height: 250 }}
                alt="ERROR"
              />
            </button>
          </div>
          <div class="col">
            <button className="border-0 mx-2 ">
              <img
                src="https://img1.etsystatic.com/141/0/14236071/il_340x270.1151712881_8i9t.jpg"
                className="brandsimg my-2"
                style={{ width: 250, height: 250 }}
                alt="ERROR"
              />
            </button>
          </div>
          <div class="col">
            <button className="border-0 mx-2 ">
              <img
                src="https://img1.etsystatic.com/141/0/14236071/il_340x270.1151712881_8i9t.jpg"
                className="brandsimg my-2"
                style={{ width: 250, height: 250 }}
                alt="ERROR"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export const Brands = () => {
  return (
    <>
      <div
        className="container"
        style={{ marginTop: "10%", marginBottom: "10%" }}
      >
        <Carousel />
      </div>
    </>
  );
};
