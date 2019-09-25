const QUESTIONS = [
    {
      id: 1,
      type: "text",
      name: 12,
      placeholder: "Nguyen Van A...",
      quiz: "What is your name?*"
    },
    {
      id: 2,
      type: "radio",
      name: "genres",
      content: [
        { id: "ge1", value: "Yes" },
        { id: "ge2", value: "No" },
        { id: "ge3", value: "Other" }
      ],
      quiz: "Are you man?*"
    },
    {
      id: 3,
      type: "radio",
      name: "skill",
      content: [
        { id: "sk1", value: " Front-end" },
        { id: "sk2", value: "Back-end" },
        { id: "sk3", value: "HR" },
        { id: "sk4", value: "Mobile app" }
      ],
      quiz: "What is your skill?*"
    },
    {
      id: 4,
      type: "select",
      name: "address",
      quiz: "Where do you live?*",
      content: [
        { id: 1, value: "Nghe an" },
        { id: 2, value: "Ha noi" }
      ]
    },
    {
      id: 5,
      type: "checkbox",
      quiz: "What do you do in free time?*",
      name: "like",
      content: [
        { id: "li1", value: "Reading book" },
        { id: "li2", value: "Listen music" },
        { id: "li3", value: "Play game" },
        { id: "li4", value: "Going sleep" },
        { id: "li5", value: "Go swiming" },
        { id: "li6", value: "Play tenis" },
        { id: "li7", value: "Play soccer" },
        { id: "li8", value: "Other" },
      ]
    },
    {
      id: 6,
      type: "select",
      name: "addressNow",
      quiz: "Where are you staying  ?*",
      content: [
        { id: 1, value: "Nghe an" },
        { id: 2, value: "Ha noi" }
      ]
    },
    {
      id: 7,
      type: "text",
      name: "phone",
      quiz: "What is telephone number?*",
      placeholder: "09..."
    },
    {
      id: 8,
      type: "text",
      name: "email",
      quiz: "What is email?*",
      placeholder: "your email"
    },
  ];

  export default QUESTIONS;