'use client';
import Link from 'next/link';
import {Global} from "../global"
import {useRouter} from 'next/navigation';
import {AppRouterInstance} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import {Essen} from '@/types/Essen';
import {TagAuswahl} from "@/app/Generieren/tagauswahl/TagAuswahl";

var Vorschlag: string = "Generieren drücken, um Vorschlag zu erhalten"
var Möglichkeiten: string[];
export default function Home() {
    const router = useRouter();
    return (
        <main className="container">
            <Link href="../" role="button" className="contrast outline">Home</Link>
            <h1>Essensvorschläge generieren</h1>
            <p>Bitte geben Sie ein, was Sie in den letzten 5 Tagen gegessen haben.</p>
            <TagAuswahl tag={1}/>
            <TagAuswahl tag={2}/>
            <TagAuswahl tag={3}/>
            <TagAuswahl tag={4}/>
            <TagAuswahl tag={5}/>
            <button role="button" className="contrast outline" onClick={() => VorschlagBerechnen(router)}>Generieren</button>
            <p><h1>Vorschlag für heute: {Vorschlag}</h1></p>
        </main>
    )
}

function VorschlagBerechnen(Router: AppRouterInstance) {
    getFields(Global.meineEssen)
    Letztenentfernen(1)
    Vorschlag = Möglichkeiten[Math.round(Math.random() * (Möglichkeiten.length - 1))]
    Router.refresh();
}

function getFields(input: Array<Essen>) {
    Möglichkeiten = [];
    for (var i = 0; i < input.length; ++i)
        Möglichkeiten.push(input[i].name);
}

function Letztenentfernen(int: number) {
    if (Möglichkeiten.length > 2 && 6 > int) {
        if (Möglichkeiten.includes((document.getElementById("Tag" + int.toString()) as HTMLInputElement).value))
            Möglichkeiten.splice(Möglichkeiten.indexOf((document.getElementById("Tag" + int.toString()) as HTMLInputElement).value), 1)
        Letztenentfernen(int + 1)
    }
}