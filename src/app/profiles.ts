import { IProfile } from './iprofile';

export const PROFILES: IProfile[] = [
  {
    id: 'pianistin',
    title: 'Pianistin',
    subtitle: 'Die Bühne – mein Resonanzraum',
    description: `Als Pianistin durfte ich das Privileg erleben, mehrere internationale Klavierwettbewerbe zu gewinnen und europaweit in Konzerten aufzutreten - sowohl als Solistin als auch in kammermusikalischen Formationen. Doch was mich immer wieder aufs Neue berührt und erfüllt, ist die Zusammenarbeit mit Orchestern. Als Solistin gemeinsam mit einem Orchester zu spielen, ist für mich ein zutiefst bewegender Moment - kraftvoll, intensiv, fast transzendental.<br><br> 
        Mitten im Meer der Klänge, ausgestattet mit technischem Können, künstlerischer Reife und einem offenen Herzen, taucht man ein in den Teich der Demut. Man findet sein inneres Zentrum - diesen energetischen Kern - und beginnt, aus diesem heraus zu leuchten. Man wird eins mit der Musik. Und plötzlich trägt man das ganze Orchester mit.<br><br>
        Meine größte Stärke war immer meine enorme Energie. Doch das wurde mir erst viel später wirklich klar. Es schien, als sei ich dazu bestimmt, einen Weg voller Selbstzweifel und innerer Unsicherheit zu gehen, auf dem ich ständig gegen mich selbst kämpfte. Ich versuchte sogar  Berufe zu finden, die nichts mit Musik zu tun hatten. Doch nach kürzeren oder längeren „Abstechern“ fand ich immer wieder den Weg zurück zur Musik.<br><br>
        Heute weiß ich, dass „Perfektion“ in jedem von uns nur auf eine ganz persönliche, „unperfekte“ Weise existiert und sich nicht messen lässt! Alles wird stark von der persönlichen Entwicklung und den gemachten Erfahrungen beeinflusst. Letztlich ist es nicht die perfekte Technik oder der makellose Klang, die uns ergreifen, sondern die Energie, die wir ausstrahlen und freisetzen.<br><br>
        Energie ist der Schlüssel - zur Verbindung mit dem Publikum, zur Erschaffung magischer Momente, zur Berührung der Herzen.<br><br>
        <i>„Interpretation versucht, das Unbewusste freizusetzen. Wenn man Dinge loslassen kann, von denen man nicht weiß, dass sie da sind - das Unerwartete und die Überraschungen in der Aufführung“.</i> Martha Argerich<br><br>
        Das ist es, was die Kunst so einzigartig macht – ihre Fähigkeit zur Transzendenz.<br><br>
        Musik ist lebendig. Sie ist die einzige Kunstart, die nur im selben Augenblick existiert und dann verschwindet. Sie ist unmittelbar und kann ohne Vorwarnung überwältigen. Ihre Wirkung ist unvergleichlich. Wenn Musik Emotionen weckt, wenn Zuhörer in einem einzigen Klang die ganze Vielfalt des Lebens spüren, dann wird die wahre Aufgabe der Kunst erfüllt: Sie bewegt, verbindet und inspiriert.<br><br>
        <i>„Licht in die Tiefe des menschlichen Herzens senden - Künstlers Beruf“.</i> Robert Schumann`,
    images: [
        { src: 'assets/images/diana-pianist-hands.jpg', alt: 'Dianas Hände am Klavier' },
        { src: 'assets/images/diana-pianist-choir.jpg', alt: 'Diana begleitet ein Chorkonzert' },
        { src: 'assets/images/diana-pianist-baby.jpg', alt: 'Baby Diana am Klavier' },
        { src: 'assets/images/diana-piano-after-a-concert.jpg', alt: 'Diana glücklich nach einem Konzert mit einem Blumenstrauss vor dem Konzerthaus' }
    ],
    audios: [
        { title: 'Piano Concerto no. 5 in Eb "Emperor", Op. 73 - III. Rondo_ Allegro ma non troppo', author: 'Beethoven' , src: 'assets/media/audios/L.v.Beethoven_Piano_Concerto_no.5_in_Eb _EmperorOp.73.III.Rondo_ Allegro_ma_non_troppo.mp3' },
        { title: 'Piano Concerto no. 5 in Eb "Emperor", Op. 73 - II. Adagio un poco mosso', author: 'Beethoven', src: 'assets/media/audios/L.v.Beethoven_Piano_Concerto_no.5_in_Eb_Emperor_Op.73-II.Adagio_un_poco_mosso.mp3'},
        { title: 'Nocturne in C sharp minor "Lento con gran espressione", B. 49 (Op. posth.)', author: 'Chopin' , src: 'assets/media/audios/F.Chopin_Nocturne_in_C_sharp_minor_Lento_con_gran_espressione_B.49.mp3' }
    ],
    videos: [],
    youtubeLinks: [
      { title: 'Ballade Nr.2 F-Dur', author: 'Chopin', src: 'https://www.youtube.com/watch?v=_JdcIBlp6mo' },
      { title: 'Fantasien Op. 116, Intermezzo a-Moll', author: 'Brahms', src: 'https://www.youtube.com/watch?v=IH0ovgbZAbU' },
      { title: '5.Klavierkonzert Es-Dur - 1.Satz', author: 'Beethoven', src: 'https://www.youtube.com/watch?v=MT91LyOgWKs' },
      { title: '5.Klavierkonzert Es-Dur - 2.Satz', author: 'Beethoven', src: 'https://www.youtube.com/watch?v=U31EuaVfrP8'},
      { title: '5.Klavierkonzert Es-Dur - 3.Satz', author: 'Beethoven:', src: 'https://www.youtube.com/watch?v=Gv596QFpZYo'},
    ]
  },
  {
    id: 'coach',
    title: 'Musikcoach',
    subtitle: 'Coaching mit Herz, Intuition und Präzision',
    description: `Als Musikcoach ist es mir eine Herzensangelegenheit, mein Wissen, mein Können und meine langjährigen Erfahrungen als Konzertpianistin weiterzugeben.<br><br>
        Es fasziniert mich immer wieder, wie oft es nur einen kleinen Impuls braucht: ein Bild, ein Gedanke, ein Perspektivwechsel. Und plötzlich löst sich eine technische Schwierigkeit, an der man wochenlang gearbeitet hat, innerhalb einer Minute.<br><br>
        Diese Arbeit ist zutiefst kreativ, inspirierend und vor allem ganzheitlich. Denn in der musikalischen Interpretation lässt sich nichts voneinander trennen! Verstand, Emotion, Technik, Körper, Geist, Persönlichkeit sind untrennbar miteinander verbunden.<br><br>
        Mein dynamisches Coaching unterstützt Musiker*innen dabei, über technische Aspekte hinauszuwachsen: Ich helfe dabei, die eigene energetische Kraft zu aktivieren, die Intuition zu stärken und Interpretation mit Herz und Verstand in Einklang zu bringen.<br><br>
        Mein Ziel ist es, Musiker*innen auf ihrem individuellen Weg zu begleiten – sie darin zu unterstützen, ihr tiefstes Potenzial zu entfalten, ihre Persönlichkeit besser zu verstehen und mit dieser inneren Klarheit authentische, kraftvolle Auftritte zu gestalten.<br><br>
        <i>„Ein rechter Meister zieht keine Schüler, sondern eben wiederum Meister.“</i> Robert Schumann<br><br>
        Denn die Reise des Lernens endet nie – weder für meine Schüler*innen noch für mich selbst.<br>
        Jede Begegnung, jede Stunde, jedes Klangbild eröffnet neue Räume.<br><br>
        <i>„Es ist des Lernens kein Ende.“</i> Robert Schumann`,
    images: [
      { src: 'assets/images/coach-1.jpg', alt: 'Diana unterrichtet glücklich ein Kind am Klavier' },
      { src: 'assets/images/coach-3.png', alt: 'Diana markiert das Tempo einem Schuler am Klavier' },
      { src: 'assets/images/coach-2', alt: 'Diana erklärt ein Kind beim Unterricht' }
    ],
    audios: [
        { title: 'Piano Trio in G major, K. 564 - III. Allegretto', author: 'Mozart' , src: 'assets/media/audios/Mozart_Piano_Trio_in_G_major_K.564-III.Allegretto.mp3' }
    ],
    videos: [
      { title: 'Coaching Erfahrung', author: 'mit Christian Kelly', src: 'assets/media/videos/' }
    ],
    youtubeLinks: []
  },
  {
    id: 'singer',
    title: 'Sängerin',
    subtitle: 'Gesang – eine Stimme voller Seele',
    description: `Schon bevor ich sprechen konnte, sang ich.<br><br>
        Der Gesang war meine erste Sprache – und ist bis heute mein treuester Begleiter geblieben.<br><br>
        In meiner frühen Kindheit lebte ich in <i>Bratislava</i>. Mein Vater gründete gemeinsam mit seinen Geschwistern eine Musikgruppe, in der meine Tante als Sängerin auftrat. Zu dieser Zeit – noch unter dem kommunistischen Regime der damaligen Tschechoslowakei – mussten professionelle Musiker sich bei Castings vor ausländischen Agenturen präsentieren, um internationale Auftritte zu ermöglichen.<br><br>
        Ich war bei jeder Probe dabei, kannte das komplette Repertoire. Bei einem dieser Castings holte mich mein Vater, damals war ich vier Jahre alt, auf die Bühne. Ich sang – und die Agenten waren total begeistert und wollten mich sofort als Kinderstar engagieren.<br><br>
        Doch mein Weg verlief anders: Ich setzte mich ans Klavier – und spielte.<br><br>
        Als Sängerin habe ich mich in den vergangenen Jahren intensiv dem <i>spanischsprachigen</i> Repertoire gewidmet – mit besonderem Fokus auf der <i>lateinamerikanischen</i> Musik.<br><br>
        Der <i>Bolero</i>, das emotional tiefgründige Liebeslied <i>Lateinamerikas</i>, hat dabei eine zentrale Bedeutung für mich gewonnen. Seine poetische Kraft, leidenschaftliche Ausdrucksstärke und seelische Tiefe berühren mich immer wieder aufs Neue.<br><br>
        Ich habe das große Privileg, mit einigen der herausragendsten Künstlerinnen und Künstler dieser Musikszene zusammenzuarbeiten. Was uns verbindet, ist die gemeinsame Liebe zu Musik, Sprache und Ausdruck – eine Verbindung, die in jeder musikalischen Begegnung spürbar ist.<br><br>
        Ein besonderes Ergebnis dieser künstlerischen Zusammenarbeit ist mein Herzensprojekt: die CD <i>Alma sin Fronteras</i> – <i>Seele ohne Grenzen</i>.<br><br>
        Sie steht für eine musikalische Reise voller Vertrauen, Qualität und kreativer Freiheit.<br><br>
        Musik überschreitet Grenzen – emotional, sprachlich, kulturell. Und meine Stimme trägt diese Botschaft mit Leidenschaft weiter.`,
    images: [
      { src: 'assets/images/Diana-singt-mit-voller-Inspiration.jpg', alt: 'Diana singt mit voller Inspiration' },
      { src: 'assets/images/Diana-lachelt-auf-der-buhne-mit-ensemble.jpg', alt: 'Diana lachelt auf der buhne mit ensemble' },
      { src: 'assets/images/Diana-singt-auf-der-Bühne.jpeg', alt: 'Diana singt auf der Bühne mit weißer Kleid' },
      { src: 'assets/images/Diana-singt-mit-voller-Inspiration.jpg', alt: 'Diana singt mit voller Inspiration' },
      { src: 'assets/images/Diana-spuert-die-musik-auf-der-buehne.jpg', alt: 'Diana laechelt auf der buhne mit ensemble' },
      { src: 'assets/images/diana-cd-alma-sin-fronteras.png', alt: 'Diana Album Cover ihrer CD Alma sin Fronteras' },
      { src: 'assets/images/Diana-singt-kerzen.jpg', alt: 'Diana singt auf der Bühne mit Kerzenlicht' },
      { src: 'assets/images/Diana-singt-und-tanzt.jpg', alt: 'Diana singt auf der Bühne mit Kerzenlicht' }
    ],
    audios: [
        { title: 'Como imaginar' , author: 'Chico Novarro' , src: 'assets/media/audios/Mozart_Piano_Trio_in_G_major_K.564-III.Allegretto.mp3' }
    ],
    videos: [
      { title: 'Desafinado (Antônio Carlos Jobim)', author: 'Diana & Friends', src: 'https://www.youtube.com/watch?v=V__Wp66fh4M' },
    ],
    youtubeLinks: [
      { title: 'Desafinado (Antônio Carlos Jobim)', author: 'Diana & Friends', src: 'https://www.youtube.com/watch?v=V__Wp66fh4M' },
      { title: 'Bei mir bist du schejn (Secunda / Jacobs)', author: 'Diana & Friends', src: 'https://www.youtube.com/watch?v=s2XYbHqTxcs' },
      { title: 'La Sitiera (Omara Portuondo)', author: 'Diana & Friends', src: 'https://www.youtube.com/watch?v=Qj-ivaAzEVY' },
      { title: 'Autumn Leaves (Prévert / Mercer)', author: 'Diana & Friends', src: 'https://www.youtube.com/watch?v=Brw2WpbN5nY' },
      { title: 'Cry me a river ( Arthur Hamilton)', author: 'Diana & Friends', src: 'https://www.youtube.com/watch?v=z_vu89giV94' },
      { title: 'Tenderly (Gross / Lawrence)', author: 'Diana & Friends', src: 'https://www.youtube.com/watch?v=bDCAuVTxApo&t=26s' },
      { title: 'La vie en rose (Piaf / Louiguy)', author: 'Diana & Friends', src: 'https://www.youtube.com/watch?v=w1tAHRilAUc' },
      { title: 'Sabor a mi (Álvaro Carrillo)', author: 'Diana & Friends', src: 'https://www.youtube.com/watch?v=3t3aInLyT7s' },
      { title: 'Ipanema girl (de Moraes / Jobim)', author: 'Diana & Friends', src: 'https://www.youtube.com/watch?v=nDns_ItOrGY&list=PLDuHFB--h3s1K4lOs3nmF8QsiV6VdO4gD' },
      { title: 'Cucurrucucú paloma (Tomás Méndez Sosa)', author: 'Diana & Friends', src: 'https://www.youtube.com/watch?v=M5Ko5kPHRPg&ab_channel=DanielHerranzG%C3%B3mez' },
      { title: 'Podmoskovnyje vechera (Solovyov-Sedoi / Matusovsky)', author: 'Diana & Friends', src: 'https://www.youtube.com/watch?v=oMRO1IMSz9A' },
      { title: 'Tu me acostumbraste (Dominguez / Morales)', author: 'CD-Alma sin fronteras', src: 'https://www.youtube.com/watch?v=zzuWwBtVvGA' },
      { title: 'Bésame mucho (Consuelo Velázquez)', author: 'CD-Alma sin fronteras', src: 'https://www.youtube.com/watch?v=YxlDBnc3840' },
      { title: 'Un poco más (Álvaro Carrillo)', author: 'CD-Alma sin fronteras', src: 'https://www.youtube.com/watch?v=_mJIot0uogM' },
      { title: 'Amor eterno (Juan Gabriel)', author: 'Yoris - CUBA)', src: 'https://www.youtube.com/watch?v=yTmPmIr96uA' },
      { title: 'This is Christmas (John Lennon)', author: 'Ivan Kaca - SK', src: 'https://www.youtube.com/watch?v=Y3lLXZrO65M&ab_channel=IvanKaca' },
    ] 
  },
  {
    id: 'speaker',
    title: 'Sprächerin',
    subtitle: 'Die Stimme als Instrument der Emotion',
    description: `Dank meiner Schauspielerfahrung und einer mehrsprachigen Erziehung habe ich die wunderbare Möglichkeit, auch als Sprecherin tätig zu sein.<br><br>
        Ich verleihe Werbespots, Hörbüchern und anderen Produktionen meine Stimme – präzise, lebendig und mit Gefühl.<br><br>
        Was mich dabei besonders begeistert, ist es, Phrasen, Gedanken und Geschichten auf ganz unterschiedliche Weise zu gestalten – mit Melodie, Klangfarbe und Rhythmus Emotionen zu wecken und Menschen unmittelbar zu berühren.<br><br>
        Ob sanft oder kraftvoll, sinnlich oder sachlich – meine Stimme ist mein Instrument, um Inhalte mit Leben zu füllen und ein breites Publikum zu erreichen.`,
    images: [
      { src: 'assets/images/diana-speaker-1.jpg', alt: 'Diana am Record Studio bei einem Sprechen Session' },
      { src: 'assets/images/diana-speaker-2.jpg', alt: 'Diana ' },
      { src: 'assets/images/Diana-singt-auf-der-Bühne.jpeg', alt: 'Diana singt auf der Bühne mit weißer Kleid' },
      { src: 'assets/images/Diana-singt-mit-voller-Inspiration.jpg', alt: 'Diana singt mit voller Inspiration' },
      { src: 'assets/images/Diana-spuert-die-musik-auf-der-buehne.jpg', alt: 'Diana lachelt auf der buhne mit ensemble' },
      { src: 'assets/images/Diana-singt-auf-der-Bühne.jpeg', alt: 'Diana singt auf der Bühne mit weißer Kleid' }
    ],
    audios: [
        { title: 'Prolog aus dem Buch Nad Priepastou (SK)', author: 'Maria Havranova' , src: 'assets/media/audios/Prolog_Diana_Maria_Havranova_Nad_priepastou_SK.mp3' }
    ],
    videos: [
      { title: 'Coaching Erfahrung', author: 'mit Christian Kelly', src: 'assets/media/videos/' }
    ],
    youtubeLinks: [
      { title: 'LKW WALTER - Ihr europäischer Transporter (SK)', author: 'Image Film', src: 'assets/media/videos/' }
    ]
  }
];
