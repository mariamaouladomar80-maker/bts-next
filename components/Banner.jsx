"use client"
export default function Banner() {
    return (
        <main>
            <section
                className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.6)),url('/img/bts-banner.webp')] h-[85vh] bg-cover bg-center flex justify-center items-center text-white flex-col">
                <h1 className="text-6xl">BTS</h1>
                <button className="btn">
                    <span className="btn__span">Comprar
                        entradas</span>
                </button>
            </section>
        </main>
 )
}