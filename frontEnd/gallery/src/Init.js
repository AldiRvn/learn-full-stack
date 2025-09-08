import './Init.css';

function Init() {
  console.log("Init()");

  const pageLoadedAt = new Date().toISOString();
  return (
    <section className='container text-center my-4'>
      <h1 className="fw-light title">Page Loaded At: {pageLoadedAt}</h1>
    </section>
  );
}

export default Init;
