import kamehameha from "../Images/skills/kamehameha.png";
import Kiai from "../Images/skills/Kiai.png";
import DestructoDisc from "../Images/skills/DestructoDisc.webp";
import SpiritBomb from "../Images/skills/SpiritBomb.png";
import Kaioken from "../Images/skills/Kaio-ken.png";
import InstantTransmission from "../Images/skills/instanttransmission.webp";

const SkillsData = [
    {
        id: 1,
        name: "Kamehameha",
        desc: "A powerful Ki blast fired with two hands after concentrating a large amount of Ki.",
        image: kamehameha
    },

    {
        id:2,
        name: "Kiai",
        desc: "A technique where the user affects the air currents around him with ki to produce powerful shockwaves",
        image: Kiai
    },
    {
        id: 3,
        name: "Destructo Disc",
        desc: "A razor-sharp disc of Ki that can slice through almost any substance.",
        image: DestructoDisc
    },

    {
        id:4,
        name: "Spirit Bomb",
        desc: "Users of the Spirit Bomb gather huge amounts of energy from all chosen surrounding life forms and inanimate objects.",
        image: SpiritBomb
    },
    {
        id: 5,
        name: "Kaio-ken",
        desc: "A technique that multiplies the user's ki for a heart beat.",
        image: Kaioken
    },

    {
        id:6,
        name: "Instant Transmission",
        desc: "The unique ability to be able to teleport to any location in the universe he could sense.",
        image: InstantTransmission
    },

];

export default SkillsData;