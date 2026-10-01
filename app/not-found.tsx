import Link from "next/link";

export default function NotFound() {
  return <main className="simple-page"><span className="eyebrow">404 / Página não encontrada</span><h1>Essa ideia ainda não mora aqui.</h1><p>O endereço pode ter mudado. Volte ao início para encontrar o que procura.</p><Link className="button button-primary" href="/">Voltar ao início</Link></main>;
}
