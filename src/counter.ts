/* eslint no-console: "error" */

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;

  const setCounter = (count: number) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;

    // This should cause an eslint error!
    console.log("New count:", counter);
  };

  element.addEventListener("click", () => setCounter(counter + 1));

  setCounter(0);
}
