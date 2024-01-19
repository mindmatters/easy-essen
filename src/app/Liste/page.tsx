'use client';
import { Essen } from '@/types/Essen';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../page.module.css';
import {Global} from "../global";
import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export default function Home() {
    const router = useRouter();
  return (
    <main className="container">
        <Link href="../" role="button" className="contrast outline">Home</Link>
        <h1>Liste</h1>
        <table role="grid">
            <th>Name</th><th>Zutaten</th><th>Zubereitungsdauer</th><th>Portionenanzahl</th><th></th>
            {Global.meineEssen.map(({name, zutaten, zeit, portionen, index}) => (
            <tr>{[<td>{name}</td>, <td>{zutaten}</td>, <td>{zeit}</td>, <td>{portionen}</td>, <td><button type="button" onClick={() => EssenLöschen(index, router)} className={styles.button}>entfernen</button></td>]}</tr> 
            ))}
        </table>
    </main>
  )

}
function EssenLöschen(index: number, Router: AppRouterInstance): void {
  Global.meineEssen.splice(index, 1);
  for (let val of Global.meineEssen) {
    if (index < val.index) {
      val.index -= 1;
    }
  }
  Global.EssenIndex -= 1;
  Router.refresh();
}