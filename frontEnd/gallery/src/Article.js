//? Saat komponen di panggil React akan mengirim satu object saja
//? Jadi perlu di deconstruct seperti berikut
export default function Article({name, image}) {
  console.log("Article()");

  console.log("name",name)
  return (
    <article className="col">
      < div className="card shadow-sm" >
        <img className="img-thumbnail" src={image}
          alt={name}></img>
      </div >
    </article >
  );
}
