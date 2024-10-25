import { CAPSULE_ICON, DROPPER_ICON, INJECTION_ICON, LIQUID_ICON, OINTMENT_ICON, SPRAY_ICON, TABLETS_ICON } from "@/app/images";

export const MED_DATA = {
  Mon: [
    {
      hour: "9:00AM",
      data: [
          {
          time: "9:00AM",
          name: "Capsule",
          taken: false,
          timeTaken: null,
          id: 1,
          icon: CAPSULE_ICON
        },
        {
          time: "9:30AM",
          name: "Dropper",
          taken: false,
          timeTaken: null,
          id: 2,
          icon: DROPPER_ICON
        }
      ]
    },
    {
      hour: "12:00PM",
      data: [
        {
          time: "12:00PM",
          name: "Injection",
          taken: false,
          timeTaken: null,
          id: 3,
          icon: INJECTION_ICON
        },
        {
          time: "12:10PM",
          name: "Liquid",
          taken: false,
          timeTaken: null,
          id: 4,
          icon: LIQUID_ICON
        }
      ]
    }
  ],
  Tue: [
    {
      hour: "9:00AM",
      data: [
          {
          time: "9:00AM",
          name: "Ointment",
          taken: false,
          timeTaken: null,
          id: 1,
          icon: OINTMENT_ICON
        },
      ]
    },
    {
      hour: "12:00PM",
      data: [
        {
          time: "12:00PM",
          name: "Spray",
          taken: false,
          timeTaken: null,
          id: 3,
          icon: SPRAY_ICON
        },
        {
          time: "12:10PM",
          name: "Tablets",
          taken: false,
          timeTaken: null,
          id: 4,
          icon: TABLETS_ICON
        }
      ]
    }
  ],
  Wed: {
    hour: "",
    data: []
  },
  Thu: {
    hour: "",
    data: []
  },
  Fri: {
    hour: "",
    data: []
  },
  Sat: {
    hour: "",
    data: []
  },
  Sun: {
    hour: "",
    data: []
  }
};