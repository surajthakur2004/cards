import { data } from "autoprefixer";
import Cards from "./Cards.jsx";

function Tour({ tourData, a }) {
  function removeHandler(id) {
    a(id);
  }

  return (
    <div className="h-max w-[75vw]">
      <div className=" h-[20vh] pt-10 flex justify-center item-center bg-green-500 rounded-lg">
        <h1 className="font-black text-5xl border-4 border-dashed w-max h-max p-2 rounded-lg border-yellow-500">
          Plan With Love
        </h1>
      </div>
      <div className="h-max grid grid-cols-3 gap-8 pt-[20px]">
        {tourData.map((data) => (
          <Cards {...data} b={removeHandler}></Cards>
        ))}
      </div>
    </div>
  );
}

export default Tour;
