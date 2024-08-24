function Loader() {
  return (
    <div className="loader__container w-[100%] h-[100vh] fixed bg-slate-950 top-0 left-0 flex flex-col items-center justify-center">
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
