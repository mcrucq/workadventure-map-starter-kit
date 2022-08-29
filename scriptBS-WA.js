// Chargement de la lib JS de WA
import { } from "https://unpkg.com/@workadventure/scripting-api-extra@^1";

//Prompt des zones
let escaliers;
let welcome;

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


WA.room.onEnterLayer("_prompt_welcome").subscribe(() => {
    welcome = WA.ui.openPopup("promptWelcome", "Bienvenue chez Brainsonic ! RDV à notre accueil pour obtenir quelques conseils pratiques !", [{
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


//WA.chat.sendChatMessage('Bonjour, et bienvenue chez Brainsonic', 'Garance');
//WA.chat.sendChatMessage('test 2', 'Garance');



class Popup {

    close() {};
}

/*let escaliers;

WA.room.onEnterLayer("_prompt_escaliers").subscribe(() => {
    escaliers = WA.ui.openPopup("promptEscaliers", "Désolé, le 1er étage n'est pas encore accessible :-(", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

// Close the popup when we leave the zone.
WA.room.onLeaveLayer("myZone").subscribe(() => {
    escaliers.close();
})

class Popup {
    close() {};
} */
