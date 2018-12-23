App not done still under progress
Sleeping Dragon Increment clicking game


By Emmi Gillgren

Special thank you go to my brother PortalMaster82 for creating/drawing the image pictures like I want them to be.

Here is my repository: 

Description
Sleeping Dragon Increment clicking game is build with react.js. Version 1 will be a image of a dragon where you can click to be able to unlock 5 different upgrades. In the future you will be able to get different costumes and much more to make the clicking more fun. 

Built with

* React
* Sass

Ref

https://reactjs.org/docs



TODO List for myself:


/* 
V* Man ska kunna skriva in spelarens namn när man kommer till sidan genom ett input-fält sedan ska detta visas upp i högra hörnet på sidan. När man har fyllt i sitt namn ska input-fältet försvinna.

V* Spelarens poäng ska öka varje gång man klickar på ett visst objekt på sidan, fortsätter man klicka på detta objekt får man mer och mer poäng. Spelarens poäng ska lagras i state.

V* Det ska finnas uppgradering som blir tillgängliga beroende på hur mycket man har klickat: Det ska finnas minst 5 olika uppgraderingar som ökar poängen i olika takt. Ju "dyrare" uppgradering, desto mer ska ens poäng öka. En uppgradering kan t.ex. kosta 50 klick, då dras dessa klick bort från ens nuvarande samling av klick, uppgraderingen i sin tur gör så att varje gång du klickar så ökar ens samling av klick med 2 varje gång. Hur mycket dessa uppgraderingar ska kosta och hur ökningen av kostnaden ska ske får ni själva bestämma.

V* Uppgraderingarna ska bli dyrare eller svårare att skaffa desto fler av dem man köper. En uppgradering kan t.ex. kosta 15 klick första gången man köper den och sedan ökar kostnaden med 5 klick varje gång man köper en till av den.

TO DO:* Minst en av uppgraderingarna ska göra så att poängen ökas automatiskt enligt ett visst intervall. Denna uppgradering ska alltså göra så att man slipper klicka men får poäng ändå, men man kan ändå klicka för att få poäng snabbare.

V* Du delar upp din applikation i flera mindre komponenter. Skapar du ett formulär kan du t.ex. döpa det till <SubmitForm />. <SubmitForm /> kan i sin tur har underkomponenter så som <InputField /> och SubmitButton />.

V* Innehåller dina komponenter ingen logik (state t.ex.) så ska de vara Stateless components, d.v.s. använda sig utav function och inte class. <InputField /> behöver t.ex. inte ha sitt eget state och kan därför vara en function. <SubmitForm /> behöver troligtvis ha ett eget state så <SubmitForm /> ska i så fall vara en class.

V* Du ska ha en mapp inuti src som heter components där dina komponenter ska ligga, denna mapp kan i sin tur ha undermappar.

TO DO:* För styling får du använda ett ramverk som t.ex. Bootstrap eller Semantic UI. Eller ska kan du skriva din css helt själv. Vilket sätter du väljer att styla dina komponenter är upp till dig men upplägget och användning av styling ska vara konsekvent. Du får använda bibliotek så som styled components

TO DO LEFT: link to finish repo* Din kod versionhanteras via GitHub V och ska ha en README som innehåller ditt namn V, länk till repot och eventuell länk till live-sidan om du har deployat din applikation

*/
