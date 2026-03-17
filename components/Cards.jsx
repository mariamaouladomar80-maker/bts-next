import card from "@/data/script"
import Card from "./Card"

export default function Cards() {
    return (
        <section className="flex flex-col items-center lg:flex-row lg:items-stretch justify-center gap-8">
            {card.map((tarjeta, index) => {
                return(
                    <Card key={index} titulo={tarjeta.titulo} imagen={tarjeta.imagen} texto={tarjeta.texto}/>
                )
            })}
            
        </section>

)
}