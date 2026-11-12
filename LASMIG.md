# nordicmargins.se – så lägger du ut sidan

## 1. Fyll i dina uppgifter
Öppna `index.html` i TextEdit (Format › Gör till vanlig text) eller VS Code.
Sök (⌘F) och ersätt:
- `[DITT NAMN]`
- `[DIN-EPOST]` (finns 3 gånger)
- `[DITT-TELEFONNUMMER]` och `[DITT TELEFONNUMMER]` (t.ex. +46701234567 i länken)
- `[ÅÅMMDD-XXXX]` (ditt org.nr = personnummer)
Spara.

## 2. Lägg upp på GitHub (utan terminal)
1. github.com › New repository › namn: `nordicmargins-web` › Private › Create.
2. Klicka "uploading an existing file", dra in ALLA filer i mappen (inte själva mappen) › Commit changes.

## 3. Publicera med Vercel
1. vercel.com › Add New › Project › välj `nordicmargins-web` › Deploy (inga inställningar behövs).
2. Project › Settings › Domains › lägg till `nordicmargins.se` och `www.nordicmargins.se`.
3. Vercel visar DNS-poster (A-post och CNAME). Lägg in dem hos företaget där du köpte domänen.
   Det kan ta från några minuter till ett dygn innan sidan syns.

## Bra att veta
- Kontaktformuläret öppnar besökarens e-postprogram. Senare kan vi byta till riktiga utskick via Resend.
- Fotot i "Om oss" är en platshållare – skicka en bild så lägger jag in den.
- Marginal (appen) läggs senare på `app.nordicmargins.se`.
