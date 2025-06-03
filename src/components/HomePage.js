export default function HomePage() {
  return (
    <main className=\"bg-white text-gray-800 font-sans\">
      <section className=\"bg-[url('/como-lake.jpg')] bg-cover bg-center text-white p-12 text-center\">
        <h1 className=\"text-4xl md:text-6xl font-bold mb-4\">Vitivinicola Cernobbio</h1>
        <h2 className=\"text-2xl md:text-3xl italic\">Gigi e Cristina Winery – Lago di Como</h2>
      </section>

      <section className=\"p-8 md:p-16 max-w-4xl mx-auto\">
        <p className=\"text-lg md:text-xl mb-6\">
          Affacciata sul Lago di Como, Gigi e Cristina Winery è un esempio autentico di viticoltura eroica.
          Premiati con la medaglia d'oro Viticoltura Eroica, coltiviamo manualmente vitigni resistenti su terrazzamenti esposti a sud,
          dove ogni filare abbraccia il sole e la roccia. La nostra vinificazione combina il metodo classico in barrique con la tecnica
          innovativa del “wine in the stone”, dove la pietra diventa parte viva del processo, esaltando in modo unico il carattere autentico
          del territorio.
        </p>
        <p className=\"text-lg md:text-xl italic\">
          A wine experience born of passion, dedication, and the timeless beauty of Lake Como.
        </p>
      </section>

      <section className=\"bg-[#f5f5f0] p-8 md:p-16\">
        <div className=\"max-w-4xl mx-auto\">
          <h3 className=\"text-2xl font-semibold mb-4\">Esperienze</h3>
          <ul className=\"list-disc list-inside text-lg space-y-2\">
            <li>Visite guidate in vigna con degustazione in cantina</li>
            <li>Vendita diretta in cantina</li>
            <li>Eventi privati su richiesta</li>
          </ul>
        </div>
      </section>

      <section className=\"p-8 md:p-16 max-w-4xl mx-auto\">
        <h3 className=\"text-2xl font-semibold mb-4\">Contatti & Prenotazioni</h3>
        <p className=\"mb-2\">📍 Via Ronco 33, 22026 Maslianico (CO), Italia</p>
        <p className=\"mb-2\">📞 <a href=\"tel:+393338746401\" className=\"text-green-700 hover:underline\">+39 333 8746401</a></p>
        <p className=\"mb-2\">📧 <a href=\"mailto:vitivinicolacernobbio@gmail.com\" className=\"text-green-700 hover:underline\">vitivinicolacernobbio@gmail.com</a></p>
        <p className=\"mb-2\">💬 <a href=\"https://wa.me/393338746401\" className=\"text-green-700 hover:underline\">Prenota su WhatsApp</a></p>
        <div className=\"mt-4\">
          <a href=\"https://www.instagram.com/vitivinicolacernobbio/\" target=\"_blank\" className=\"mr-4 text-pink-600 hover:underline\">Instagram</a>
          <a href=\"https://www.facebook.com/vitivinicola.cernobbio/?locale=it_IT\" target=\"_blank\" className=\"text-blue-700 hover:underline\">Facebook</a>
        </div>
      </section>

      <footer className=\"bg-[#e6e4dd] text-center text-sm text-gray-600 p-4\">
        © {new Date().getFullYear()} Gigi e Cristina Winery – Vitivinicola Cernobbio. All rights reserved.
      </footer>
    </main>
  );
}