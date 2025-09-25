export function AlertClock() {
  function handleShowTime() {
    const now = new Date().toLocaleTimeString();
    alert("the current time is " + now);
  }

  return (
    <>
      <p> click the button to show the current time</p>
      <a
        className="inline-block rounded-sm bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden"
        onClick={handleShowTime}
        href="#"
      >
        click me
      </a>
    </>
  );
}
