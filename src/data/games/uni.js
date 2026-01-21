import { UNI_A, UNI_B, UNI_C, UNI_D } from "../uni/index";

export const uni = [
    {
        name: "Under Night In-Birth",
        input: [],
        type: "",
        regex: /(?!)/,
        description: "",
        img: "",
    },
    //==============================
    // Mechanics
    //==============================
    {
        name: "Chain Shift",
        input: ["DD", "Chain Shift"],
        type: "",
        regex: /CS/i,
        description:
            "Tap D twice in a rapid sequence. Can only do so if you have Vorpal",
    },
    {
        name: "Crosscast Veil Off",
        input: ["CVO", "Crosscast Veil Off"],
        type: "",
        regex: /CVO/i,
        description:
            "Press ABC at the same time during a combo. Can only do so if you have Vorpal.",
    },
    {
        name: "Veil Off",
        input: ["VO", "Veil Off"],
        type: "",
        regex: /VO/i,
    },
    {
        name: "Infinite Worth",
        input: ["IW", "Infinite Worth"],
        type: "",
        regex: /IW/i,

    },
    //========
    // Actions
    //========
    {
        name: "A",
        input: ["A"],
        type: "action",
        regex: /A/,
        description: "",
        img: <UNI_A/>,
    },
    {
        name: "B",
        input: ["B"],
        type: "action",
        regex: /B/,
        description: "",
        img: <UNI_B/>,
    },
    {
        name: "C",
        input: ["C"],
        type: "action",
        regex: /C/,
        description: "",
        img: <UNI_C/>,
    },
    {
        name: "D",
        input: ["D"],
        type: "action",
        regex: /D/,
        description: "",
        img: <UNI_D/>,
    },
];