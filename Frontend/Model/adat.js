export const ADATLEIRAS={
    nev: {
        megjelenes: "Név",
        tipus: "text",
        value: "",
        placeholder: "Valaki Vagyok",
        regex: "[A-Z][a-z]{2,15}",
        validalas: "név nagybetűvel kezdődok és legalább 3 karakter",
    },

    szul: {
        megjelenes: "Születési év",
        tipus: "number",
        value: "2000",
        placeholder: "",
        regex: {
            min: 1000,
            max: 2023,
        },
        validalas: "1000-2023",
    }
}