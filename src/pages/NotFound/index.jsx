function NotFound() {
  return (
    <main>
      <section aria-labelledby="error-heading">
        <h1 id="error-heading">ERRO 404 - Página Não Encontrada</h1>
        <p>
          Sentimos muito, mas o endereço que você digitou não está disponível ou
          foi movido permanentemente.
        </p>
        <ul>
          <li>Verifique se a URL está correta.</li>
          <li>Vá para a nossa [Página Inicial].</li>
          <li>[Fale com o suporte] se precisar de ajuda.</li>
        </ul>
      </section>
    </main>
  );
}

export default NotFound;
