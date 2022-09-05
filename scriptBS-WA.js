// Chargement de la lib JS de WA
import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

//Prompt des zones
let escaliers;
let welcome;
let msgGuillaume;
let userName;
let msgFlavien;
let msgBrice;
let msgCyril;

///////////////////////////////////////////////

WA.room.onEnterLayer("_website_perso_guillaumeM_tribune").subscribe(() => {
    msgGuillaume = WA.ui.openPopup("messageGuillaume", "Guillaume Mikowski : 'Norme ISO 20121, on nous prend vraiment pour des cons ! Je vous en parle sur Linkedin.''", [{
        label: "Je veux la lire",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab("https://www.linkedin.com/pulse/norme-iso-20121-nous-prend-vraiment-pour-des-cons-mikowski-/");
        }
    }]);

});

// Close the popup when we leave the zone.
WA.room.onLeaveLayer("_website_perso_guillaumeM_tribune").subscribe(() => {
    msgGuillaume.close();
})

///////////////////////////////////////////////

WA.room.onEnterLayer("_website_heroes").subscribe(() => {
    msgBrice = WA.ui.openPopup("LabMessage", "Bienvenue dans le lab Heroes ! Ici, on fabrique les talents pour renforcer les équipes de nos clients. ''", [{
        label: "Génial, je veux en savoir plus !",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab("https://heroes.brainsonic.com/");
        }
    }]);

});

// Close the popup when we leave the zone.
WA.room.onLeaveLayer("_website_heroes").subscribe(() => {
    msgBrice.close();
})

///////////////////////////////////////////////

WA.room.onEnterLayer("_website_cyril").subscribe(() => {
    msgCyril = WA.ui.openPopup("msgCyril", "Salut, c'est Cyril. Ici, je vous propose une sélection des meilleurs livres consacrés au marketing. Revenez régulièrement, on met à jour toutes les semaines !", [{
        label: "Carrément !",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab("https://cdhenin.notion.site/Livres-La-s-lection-du-p-le-Editorial-0b58151e539a4895936e62d3aabc2b7d");
        }
    }]);

});

// Close the popup when we leave the zone.
WA.room.onLeaveLayer("_website_cyril").subscribe(() => {
    msgCyril.close();
})

///////////////////////////////////////////////

WA.room.onEnterLayer("_website_perso_flav").subscribe(() => {
    msgFlavien = WA.ui.openPopup("messageFlavien", "Flavien Lefort : Evénement digital, ce que 20 ans (ou presque) nous ont appris - à lire sur Linkedin", [{
        label: "Je veux la lire",
        className: "primary",
        callback: (popup) => {
            WA.nav.openTab("https://www.linkedin.com/pulse/ev%C3%A9nement-digital-ce-que-20-ans-ou-presque-nous-ont-appris-lefort/?originalSubdomain=fr");
        }
    }]);
});

// Close the popup when we leave the zone.
WA.room.onLeaveLayer("_website_perso_flav").subscribe(() => {
    msgFlavien.close();
})

///////////////////////////////////////////////

WA.room.onEnterLayer("_prompt_escaliers").subscribe(() => {
    escaliers = WA.ui.openPopup("promptEscaliers", "Toutes nos excuses, le 1er étage est en travaux ! Revenez un peu plus tard.", [{
        label: "Tant pis",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.
WA.room.onLeaveLayer("_prompt_escaliers").subscribe(() => {
    escaliers.close();
})

///////////////////////////////////////////////

WA.onInit().then(() => {
    userName = WA.player.name;
    //WA.player.setOutlineColor(255, 153, 51);
});

WA.room.onEnterLayer("_prompt_welcome").subscribe(() => {
    welcome = WA.ui.openPopup("promptWelcome", "Bonjour " + userName + ", et bienvenue chez Brainsonic ! RDV à notre accueil pour obtenir quelques conseils pratiques !", [{
        label: "J'ai compris !",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();

        }
    }]);
});

// Close the popup when we leave the zone.
WA.room.onLeaveLayer("_prompt_welcome").subscribe(() => {
    welcome.close();
})

///////////////////////////////////////////////



class Popup {

    close() {};
}
