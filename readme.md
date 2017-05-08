# aplikacje.gov.pl – Eksperyment frontendowy (CSS)
## Cel eksperymentu
Eksperyment polega na zakodowaniu dwóch widoków marketplace [aplikacje.gov.pl](https://aplikacje.gov.pl/) (strony FAQ i Blog) w kilku frameworkach frontendowych CSS.

Aplikacje dostarczane przez zewnętrznych dostawców mają mieć spójny wygląd, dlatego ma powstać nakładka (koncepcje projektowe oraz kod CSS), która ujednolici wygląd aplikacji pisanych z wykorzystaniem różnych frameworków.

Wynikiem eksperymentu ma być ocena:
* czy każdy z testowanych frameworków spełnia założone kryteria (umożliwia napisanie nakładki CSS przy wykorzystaniu relatywnie małej ilości kodu w stosunku do kodu całego frameworka),
* czy do napisania nakładki CSS do każdego z frameworków wymagana jest podobna ilość kodu,
* który z frameworków jest rekomendowany jako najlepszy do pisania aplikacji.

Przy wyborze frameworków do eksperymentu wzięto pod uwagę 16 popularnych bibliotek frontendowych:

* [Bootstrap](http://getbootstrap.com/)
* [Foundation](http://foundation.zurb.com/)
* [Semantic UI](https://semantic-ui.com/)
* [Material Design Lite](https://getmdl.io/)
* [Materialize](http://materializecss.com/)
* [Pure](https://purecss.io/)
* [AngularJS Material](https://material.angularjs.org/latest/)
* [Skeleton](http://getskeleton.com/)
* [Ant Design](https://ant.design/)
* [UIkit](https://getuikit.com/)
* [Milligram](https://milligram.github.io/)
* [Susy](http://susy.oddbird.net/)
* [Material Design](https://material.io/)
* [Toast](https://daneden.github.io/Toast/)
* [Lightning Design System](https://lightningdesignsystem.com)
* [Kube](https://imperavi.com/kube/)

Ze względu na wygląd projektów graficznych, na wstępie odrzucono frameworki z rodziny Material Design (MD). Aplikacje stworzone z wykorzystaniem frameworków MD wymagałyby napisania obszernych nakładek, który nadpisywałyby zdecydowaną większość właściwości frameworków MD.

Z powyższej listy wybrano trzy frameworki:

1. [Bootstrap 3.3.7](https://getbootstrap.com/)
2. [Zurb Foundation 6.3.1](http://foundation.zurb.com/)
3. [Salesforce Lightning Design System 2.2.2](https://www.lightningdesignsystem.com/)

Zdecydowano, że trzecim frameworkiem będzie Lightning Design System: „Framework stworzony przez firmę Salesforce na potrzeby aplikacji biznesowych klasy CRM. Mimo niedużej popularności frameworku za wyborem przemawia zastosowanie oraz zbiór komponentów, dobra dokumentacja i niskie ryzyko zakończenia projektu ze strony Salesforce.” – szczegóły dotyczące procesu wyboru frameworków opisane są w dokumencie [„Analiza rozwiązań w zakresie bibliotek komponentów GUI” (link do wymiany)](https://github.com/miron-grzegorkiewicz/ezd-analizy-it/blob/master/analiza-rozwiazan-biblioteki-komponentow-GUI.rst)

## Wynik eksperymentu
W trakcie eksperymentu zdecydowano o zmianie frameworka Lightning Design System (LDS) na inny. LDS posiada obszerną dokumentację i potężny zestaw klas – znaczącą ilość właściwości CSS przerzucono na klasy HTML. Zatem stylowanie frontendu (wg dokumentacji LDS) odbywa się w większości w plikach HTML.

### Potencjalne trudności wynikające z zastosowania frameworka LDS

1. LDS jest bardzo specyficzny, tzn. szczegółowo określa wygląd, za pomocą klas stosowanych w plikach HTML; taki kod jest bardzo trudny do zarządzania, nakładka CSS musiałaby nadpisywać wszystkie klasy LDS, aby zapewnić jednolity wygląd aplikacji.
2. LDS w nazewnictwie korzysta z metodologii [BEM — Block Element Modifier](http://getbem.com/) – nazwy klas są stosunkowo długie i bardzo specyficzne.
3. LDS jest sprzeczny z zasadami projektowania kładącymi nacisk na separację treści od wyglądu ([The web standards model - HTML CSS and JavaScript - W3C Wiki](https://www.w3.org/wiki/The_web_standards_model_-_HTML_CSS_and_JavaScript)); projekt aplikacje.gov.pl zakłada dużą separację, m.in. w celu łatwiejszego zarządzania kodem i większej kontroli nad wyglądem aplikacji.

Framework Lightning Design System zamieniono na framework Semantic UI (jako kolejny najpopularniejszy).

### Ostateczna lista frameworków:

1. [Bootstrap 3.3.7](https://getbootstrap.com/) (w momencie przeprowadzania eksperymentu BS v4 jest w fazie alpha)
2. [Zurb Foundation 6.3.1](http://foundation.zurb.com/)
3. [Semantic UI 2.2.10](https://semantic-ui.com/)

### Porównanie frameworków

Eksperyment obejmował zaledwie kilka elementów strony www (grid, menu główne, stopka, lista, “akordeon”, kolekcja kart, paginacja), dlatego poniższe oceny i wnioski dotyczą wymienionych elementów, a nie całych frameworków.

W ocenie ogólnej wszystkie frameworki są do siebie dosyć podobne. Najwięcej podobieństw występuje między Bootstrap (BS) i Zurb Foundation (FD), Semantic UI (SUI) ma trochę więcej różnic.

#### Dokumentacja

Wszystkie frameworki mają bardzo dobrą dokumentację, z wieloma przykładami. FD jako jedyny ma wyszukiwarkę. SUI wypada tutaj najgorzej, ponieważ szukane elementy często mają mało intuicyjne nazwy i są umieszczone w sekcjach o nieoczywistych nazwach (np. „typography” lub „helper classes” nie są wyszczególnione w spisie elementów).

#### Ogólne koncepcje

SUI proponuje nieco inną koncepcję siatki (BS i FD są pod tym względem jednolite). Inne, mniej popularne frameworki, korzystają raczej z koncepcji takiej jak BS/FD.

#### Przejrzystość kodu

BS wypada najgorzej, ma najbardziej rozbudowany kod, wymaga użycia większej ilości zagnieżdżonych elementów, przez co jest najmniej czytelny i zrozumiały. FD i SUI korzystają z dużo prostszych struktur.

#### Gotowe komponenty

Wszystkie frameworki proponują dosyć szeroki zestaw gotowych komponentów, prawdopodobnie najuboższy jest BS, który też jako jedyny nie oferuje kart (cards), dosyć popularnych szczególnie po rozpowszechnieniu systemu Material Design.

Z kolei SUI nie posiada w zestawie gotowego responsywnego paska menu głównego (pasek menu, który na mniejszych urządzeniach chowa część lub całość zawartości i wyświetla „hamburger” oraz rozwijalne menu).

#### Generyczność elementów

Wszystkie frameworki mają dosyć generyczny wygląd i nie narzucają bardzo wyrazistego wyglądu, najbardziej specyficzny wydaje się SUI, ale różnice są drobne i różnią się pomiędzy poszczególnymi elementami.

#### Nazewnictwo klas / łatwość nadpisywania klas

BS i FD korzystają z bardzo ogólnych i uniwersalnych nazw klas, nie ma problemu z nadpisywaniem klas, nie powstają konflikty. Z kolei SUI w większości elementów wymaga zastosowania klasy „.ui”, co w przypadku tego projektu działa raczej na niekorzyść. Dodatkowo, w celu nadpisania klasy trzeba użyć bardziej precyzyjnych i specyficznych (złożonych z większej ilości elementów) selektorów.

## Wnioski
Każdy z testowanych frameworków umożliwia napisanie nakładki CSS przy wykorzystaniu niedużej (w stosunku do kodu frameworka) ilości kodu.

Ilość kodu potrzebna do napisania nakładek jest niemal identyczna (różni się w obrębie konkretnych elementów, ale objętość całego kodu jest bardzo podobna). SUI nieznacznie odbiega od dwóch pozostałych, kod jest nieco dłuższy i nadpisuje większą ilość właściwości.

### Rekomendacja

Na podstawie przeprowadzonego eksperymentu oceniono, iż najłatwiej i najbardziej intuicyjnie kod pisze się korzystając z frameworka Zurb Foundation: kod jest najbardziej przejrzysty i jasny.

Na drugim miejscu jest Semantic UI, ze względu na gorszą dokumentację, oraz większą specyficzność klas.

Ostatni jest Bootstrap, głównie ze względu na obszerny i momentami niejasny kod (choć dotyczy to plików HTML, a nie samej nakładki), a także na mniejszy zestaw gotowych komponentów.

## Link do wyniku eksperymentu

[Eksperyment frontendowy (CSS) – strona WWW](https://kamilradziszewski.github.io/frontend-experiments/)

Aktywne linki na stronie:

* menu główne: Blog
* menu główne: FAQ
* menu główne: logo Ministerstwa Cyfryzacji (przenosi do strony z listą frameworków)
