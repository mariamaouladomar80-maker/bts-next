export default function Card({imagen, titulo, texto}){
    return(
        <article className="card shadow-morado">
                <img className="h-2/3 " src={imagen}></img>
                {/* <img className="h-2/3 " src="img/jim.webp" alt="Imagen de Jim" /> */}
                <div className="px-6 py-4 flex flex-col gap-4 items-center">
                    <h2 className="uppercase font-bold text-2xl">{titulo}</h2>
                    <p className="text-amber-800">{texto}</p>
                    <button className="btn w-4/5">
                        <span className="btn__span">Leer bio</span>
                    </button>
                </div>
            </article>
    )
}