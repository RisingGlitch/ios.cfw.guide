import{_ as s,r as n,o as c,c as d,a as i,b as e,d as o,w as l,e as r}from"./app.29f64fbf.js";const u={},p=r('<h2 id="lettura-necessaria" tabindex="-1"><a class="header-anchor" href="#lettura-necessaria" aria-hidden="true">#</a> Lettura Necessaria</h2><p>I dispositivi iOS e iPadOS possono essere aggiornati solo alle versioni firmware che Apple ha &quot;firmato&quot;. Questo di solito significa che \xE8 possibile aggiornare solo alle versioni pi\xF9 recenti del firmware. Questo \xE8 un male per il jailbreak, siccome la maggior parte dei jailbreak si basano su exploit che sono stati patchati in versioni pi\xF9 recenti.</p><p>Fortunatamente, possiamo usare diversi &quot;profili&quot; per ritardare un aggiornamento del firmware. Questo \xE8 destinato alle organizzazioni che richiedono pi\xF9 tempo per aggiornare i loro dispositivi, ma possiamo anche usarli per aggiornare a versioni del firmware non firmate.</p><p>Ma questo ha un limite di tempo. Potrai aggiornare solo alle seguenti versioni del firmware prima delle rispettive date di scadenza:</p><ul><li><strong>17.1</strong> - February 5th, 2024</li><li><strong>17.1.1</strong> - February 28th, 2024</li><li><strong>16.7.2</strong> - March 9th, 2024</li><li><strong>17.1.2</strong> - March 9th, 2024</li><li><strong>16.7.3</strong> - March 18th, 2024</li><li><strong>17.2 (For iPhones)</strong> - March 18th, 2024</li><li><strong>15.8</strong> - April 21st, 2024</li><li><strong>16.7.4</strong> - April 21st, 2024</li><li><strong>17.2 (For iPads)</strong> - April 21st, 2024</li><li><strong>17.2.1</strong> - April 21st, 2024</li></ul>',5),g=i("code",null,"UTC 00:00",-1),h={href:"https://dhinakg.github.io/delayed-otas.html",target:"_blank",rel:"noopener noreferrer"},m={class:"custom-container tip"},v=i("p",{class:"custom-container-title"},"TIP",-1),_=i("div",{class:"custom-container tip"},[i("p",{class:"custom-container-title"},"TIP"),i("p",null,"Se si \xE8 tentato in precedenza di usare un metodo di aggiornamento blobless, rimuovi tutti i profili delay e beta prima di seguire questo metodo.")],-1),b=i("h2",{id:"installare-dahlia",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#installare-dahlia","aria-hidden":"true"},"#"),e(" Installare Dahlia")],-1),f=i("li",null,"Avvia il tuo attuale jailbreak",-1),z={href:"https://dhinakg.github.io/repo/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://repo.alexia.lol",target:"_blank",rel:"noopener noreferrer"},q=i("li",null,[e("Cerca e installa il pacchetto "),i("code",null,"Dahlia")],-1),A=i("li",null,[e("Tocca "),i("code",null,"Riavvia il dispositivo"),e(" e poi ri-esegui il jailbreak del dispositivo dopo il riavvio")],-1),S=r('<h2 id="preparare-l-aggiornamento" tabindex="-1"><a class="header-anchor" href="#preparare-l-aggiornamento" aria-hidden="true">#</a> Preparare l&#39;Aggiornamento</h2><ol><li>Apri l&#39;app Impostazioni, scorri verso il basso e clicca su <code>Dahlia</code></li><li>Abilita <code>Toggle Supervision</code>, poi clicca Yes quando ti viene chiesto di eseguire un riavvio dello Userspace <ul><li>Se sei gi\xE0 supervisionato per qualsiasi motivo, puoi saltare questo passaggio</li></ul></li><li>Clicca su <code>Download Profiles</code>e poi premi su &quot;Normal&quot;</li><li>Tocca <code>Download Profile</code> accanto alla versione iOS che alla quale vuoi aggiornare.</li><li>Premi &quot;Consenti&quot; quando viene richiesto</li><li>Esci dal menu di Dahlia e vai a <code>Generali</code> -&gt; <code>Gestione Profili e Dispositivo</code> -&gt; <code>OTA Delay - [Days] Days</code></li><li>Clicca &quot;Installa&quot; nell&#39;angolo in alto a destra e inserisci il codice di accesso se richiesto</li><li>Tocca nuovamente &quot;Installa&quot; due volte per confermare</li><li>Torna alla schermata di <code>Dahlia</code> nelle impostazioni</li><li>Assicurati che <code>Ready to Update</code> indichi di &quot;S\xEC&quot; <ul><li>Se non lo fa, clicca sulla &quot;i&quot; accanto a &quot;Ready to Update&quot;, e vedi quale \xE8 il problema</li></ul></li></ol><h2 id="ripristinare-il-rootfs" tabindex="-1"><a class="header-anchor" href="#ripristinare-il-rootfs" aria-hidden="true">#</a> Ripristinare il RootFS</h2>',3),I=i("li",null,"Apri l'app Impostazioni",-1),x=i("li",null,[e("Vai su "),i("code",null,"Generali"),e(" -> "),i("code",null,"Aggiornamento Software")],-1),w=i("li",null,[e("Assicurati che la versione visualizzata sia la versione alla quale desideri aggiornare "),i("ul",null,[i("li",null,[i("strong",null,"Non aggiornare"),e(" ancora, lo faremo pi\xF9 tardi")])])],-1),P=i("li",null,"Riavvia il dispositivo",-1),D=r('<h2 id="aggiornare-la-versione-del-firmware" tabindex="-1"><a class="header-anchor" href="#aggiornare-la-versione-del-firmware" aria-hidden="true">#</a> Aggiornare la versione del firmware</h2><ol><li>Collega il tuo dispositivo all&#39;alimentazione e connettiti a Internet con Wi-Fi</li><li>Apri l&#39;app delle Impostazioni</li><li>Vai su <code>Generali</code> -&gt; <code>Aggiornamento Software</code></li><li>Assicurati che la versione visualizzata sia la versione alla quale desideri aggiornare</li><li>Scarica e installa l&#39;aggiornamento</li><li>Una volta aggiornato, rimuovi il profilo di aggiornamento e (se presente) il profilo beta tramite le Impostazioni</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Se hai scelto di abilitare la supervisione in precedenza, il tuo dispositivo rimarr\xE0 supervisionato. Essere in uno stato supervisionato significa che:</p><ul><li>Un messaggio verr\xE0 visualizzato in Impostazioni, mostrando che il dispositivo \xE8 supervisionato</li><li>Il blocco di attivazione sar\xE0 disabilitato, rendendo il dispositivo potenzialmente accessibile dai ladri (Dov&#39;\xE8 funzioner\xE0 comunque)</li><li>Se il dispositivo ha la gestione del dispositivo mobile attivata (es. un dispositivo scolastico o di lavoro), allora la tua organizzazione sar\xE0 in grado di installare e disinstallare silenziosamente le app sul tuo dispositivo</li></ul><p>Nota che, per la maggior parte degli utenti, rimanere in uno stato supervisionato non sar\xE0 un problema.</p><p>\xC8 possibile rimuovere lo stato di supervisione ripristinando il dispositivo e ripristinando un backup precedentemente fatto. Ci\xF2 pu\xF2 essere fatto selezionando &quot;Cancella tutti i contenuti e le impostazioni&quot; nell&#39;app Impostazioni, poi ripristinando da un backup da iCloud durante la configurazione iniziale.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Se si ripristina un backup fatto in uno stato jailbroken da <strong>iTunes/Finder</strong>, si possono riscontrare gravi problemi, come i bootloop.</p></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Se ripristini un backup fatto in uno stato jailbroken da <strong>iCloud</strong>, potresti riscontrare segnali di falsi positivi per il rilevamento del jailbreak.</p></div>',5),j={class:"custom-container tip"},C=i("p",{class:"custom-container-title"},"TIP",-1),T={href:"https://github.com/dhinakg/",target:"_blank",rel:"noopener noreferrer"};function N(y,F){const a=n("ExternalLinkIcon"),t=n("router-link");return c(),d("div",null,[p,i("p",null,[e("Il tempo \xE8 indicato in "),g,e(". Per ulteriori date di scadenza, controlla "),i("a",h,[e("dhinakg.github.io/delayed-otas.html"),o(a)]),e(".")]),i("div",m,[v,i("p",null,[e("Devi avere un jailbreak per seguire queste istruzioni. Se non puoi eseguire il jailbreak, segui "),o(t,{to:"/updating-blobless-nonjailbroken"},{default:l(()=>[e("Aggiornamento (Blobless) (Non-Jailbroken)")]),_:1}),e(" o "),o(t,{to:"/updating-blobless-advanced"},{default:l(()=>[e("Aggiornamento (Blobless) (Avanzato)")]),_:1}),e(" .")])]),_,b,i("ol",null,[f,i("li",null,[e("Apri il tuo gestore di pacchetti preferito e aggiungi le seguenti repo: "),i("ul",null,[i("li",null,[i("a",z,[e("https://dhinakg.github.io/repo/"),o(a)])]),i("li",null,[i("a",k,[e("https://repo.alexia.lol"),o(a)])])])]),q,A]),S,i("ol",null,[I,x,w,i("li",null,[e("Apri il tuo jailbreak attuale e ripristina il rootFS "),i("ul",null,[i("li",null,[e("Se hai bisogno di una guida dettagliata su come ripristinare il rootfs, segui "),o(t,{to:"/restoring-rootfs"},{default:l(()=>[e("Ripristinare il RootFS")]),_:1}),e(" e seleziona il jailbreak che usi attualmente")])])]),P]),D,i("div",j,[C,i("p",null,[e("Se l'aggiornamento ha avuto successo, continua con "),o(t,{to:"/get-started"},{default:l(()=>[e("Per cominciare")]),_:1}),e(" per eseguire il jailbreak sul tuo dispositivo.")])]),i("p",null,[e("Crediti a "),i("a",T,[e("dhinakg"),o(a)]),e(" per aver scoperto questo metodo.")])])}var E=s(u,[["render",N],["__file","index.html.vue"]]);export{E as default};
