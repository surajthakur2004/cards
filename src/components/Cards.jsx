import { useState } from "react";

function Cards({ id, image, name, info, price, b }) {
  const description = `${info.substring(0, 220)}.... `;

  const [learnMore, setlearnMore] = useState(true);

  function ReadMoreHandler() {
    setlearnMore(!learnMore);
  }

  function removeHandler() {
    b(id);
  }

  return (
    <div className="border-2 border-solid p-4 rounded-lg  h-max shadow-lg ">
      <div>
        <img
          src={image}
          height="100px"
          loading="lazy"
          className="aspect-square object-cover"
        />
      </div>

      <div className="mt-[10px]">
        <p className="font-black text-2xl text-[#16a34a]">₹ {price}</p>
      </div>

      <div>
        <h3 className=" text-xl uppercase font-bold my-[5px] text-[#be123c]">
          {name}
        </h3>
      </div>

      <div>
        <p className="text-justify">
          {learnMore ? description : info}
          <span
            onClick={ReadMoreHandler}
            className="text-[#1d4ed8] cursor-pointer"
          >
            {learnMore ? "Learn more" : " Show less"}
          </span>
        </p>
      </div>

      <div className="text-center my-[20px] bg-red-500 h-8 bg-[#c084fc]">
        <button
          onClick={removeHandler}
          className="text-white-200 cursor-pointer w-full font-bold"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Cards;
