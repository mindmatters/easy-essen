'use client';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../page.module.css';
import {Global} from "../global";
import { Essen } from '@/types/Essen';
import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
let TextButton: string = "Hinzufügen"
export default function Home() {
  const router= useRouter();
  return (
    <main className="container">
      <Link href="../" role="button" className="contrast outline">Home</Link>
      <h1>Essen hinzufügen</h1>
      <input type="string" id="Name" name="Name" placeholder={"Name"}></input><input type="textfield" id="Zutaten" placeholder={"Zutaten"}></input><input type="textfield" id="Zeit"placeholder={"Zubereitungszeit"}></input><input type="textfield" id="Portionen" placeholder={"Portionen"}></input>
      <button type="button" onClick={() => EssenHinzufügen(router)} className="contrast outline">{TextButton}</button>
    </main>
  )
}
function EssenHinzufügen(Router: AppRouterInstance) {
  let neuesEssen: Essen = {name: (document.getElementById("Name") as HTMLInputElement).value, zutaten: (document.getElementById("Zutaten") as HTMLInputElement).value, zeit:(document.getElementById("Zeit") as HTMLInputElement).value, portionen:(document.getElementById("Portionen") as HTMLInputElement).value, index:Global.EssenIndex};
  Global.meineEssen.push(neuesEssen);
  Global.EssenIndex+=1;
  TextButton="Hinzugefügt";
  Router.refresh();
}