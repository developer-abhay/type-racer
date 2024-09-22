import "./style.css";

const textContainer = document.querySelector(".text-container");

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet qui libero culpa quo dolore saepe iure dolorem vel numquam eligendi repudiandae porro reiciendis non recusandae eaque, placeat debitis ut? Iste dolorem voluptatum, quo nam quisquam sit quas et corrupti! Ex officia odio hic, repudiandae ad dolores nemo. Dicta incidunt reiciendis eos beatae fugiat est minus nisi dolores inventore error itaque, facilis iure, eum aut quas perspiciatis architecto blanditiis? Quas quae laborum quam officiis enim similique at nulla, praesentium amet ipsa, odio assumenda obcaecati libero tempore. Dolorem deleniti neque laboriosam voluptate suscipit animi, nulla fugit, earum sequi, saepe et natus minima";

const textArray = text.split("");
let count = 0;

textArray.forEach((item, index) => {
  const span = createSpan(item, index);
  textContainer.appendChild(span);
});

function createSpan(text, index) {
  const span = document.createElement("span");
  span.classList.add("char");
  span.dataset.index = index;
  span.innerHTML = text;

  return span;
}
