import Image from '../../node_modules/next/image';
import Link from '../../node_modules/next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className="container">
      <h1>Willkommen bei EasyEssen!</h1>
      <p>Hier können Sie sich eine Liste mit Vorschlägen generieren lassen, was Sie heute zum Mittagessen machen könnten.</p>
      <p><Link href="/Generieren" role="button" className="contrast outline">Essensvorschläge generieren</Link></p>
      <p>Hier finden sie die komplette Liste aller Gerichte. Sie können auch Gerichte entfernen, falls sie Ihnen nicht gefallen.</p>
      <p><Link href="/Liste" role="button" className="contrast outline">Essensliste</Link></p>
      <p>Hier können Sie ihre eigenen Gerichte hinzufügen, damit diese in den Vorschlägen berücksichtigt werden.</p>
      <p><Link href="/Hinzufuegen" role="button" className="contrast outline">Essen hinzufügen</Link></p>
    </main>
  )
}
