class Raid {
    constructor(raidName, characters) {
      this.raidName = raidName;
      this.characters = characters;
    }
  }
  
  // JSON-строка с данными
  const jsonData = `{
    "raids": [
      {
        "raidName": "Raid 1",
        "characters": [
          {
            "name": "Z517SSbZ",
            "role": "Лекарь",
            "gearScore": 4758
          },
          {
            "name": "CU05LjONCJ",
            "role": "Танк",
            "gearScore": 4630
          },
          {
            "name": "51IOV0yZ",
            "role": "Боец",
            "gearScore": 5076
          },
          {
            "name": "s0BfRE4od",
            "role": "Лекарь",
            "gearScore": 5216
          },
          {
            "name": "XmS4PP",
            "role": "Танк",
            "gearScore": 5511
          },
          {
            "name": "9oz7j7",
            "role": "Боец",
            "gearScore": 5563
          },
          {
            "name": "7wqVZ7b7",
            "role": "Боец",
            "gearScore": 4728
          }
        ]
      },
      {
        "raidName": "Raid 2",
        "characters": [
          {
            "name": "xnfxY",
            "role": "Боец",
            "gearScore": 5265
          }
        ]
      },
      {
        "raidName": "Raid 3",
        "characters": [
          {
            "name": "626dUL",
            "role": "Танк",
            "gearScore": 4774
          },
          {
            "name": "nLdp2l6j",
            "role": "Лекарь",
            "gearScore": 5096
          },
          {
            "name": "ICcIs",
            "role": "Боец",
            "gearScore": 5199
          }
        ]
      },
      {
        "raidName": "Raid 4",
        "characters": [
          {
            "name": "ccNuC",
            "role": "Танк",
            "gearScore": 5133
          },
          {
            "name": "7SeaQm",
            "role": "Танк",
            "gearScore": 5512
          },
          {
            "name": "0KSdtZS",
            "role": "Боец",
            "gearScore": 5584
          },
          {
            "name": "f9niFvvq",
            "role": "Боец",
            "gearScore": 5693
          },
          {
            "name": "kchuKAW",
            "role": "Лекарь",
            "gearScore": 4550
          },
          {
            "name": "E4B5xt0",
            "role": "Боец",
            "gearScore": 5342
          },
          {
            "name": "OBHWJalJ",
            "role": "Боец",
            "gearScore": 4953
          },
          {
            "name": "7vPNchGR",
            "role": "Лекарь",
            "gearScore": 4975
          }
        ]
      },
      {
        "raidName": "Raid 5",
        "characters": [
          {
            "name": "iKC6F",
            "role": "Боец",
            "gearScore": 5792
          },
          {
            "name": "ICCL5WZT",
            "role": "Танк",
            "gearScore": 4535
          }
        ]
      },
      {
        "raidName": "Raid 6",
        "characters": [
          {
            "name": "Z9Ztj1",
            "role": "Боец",
            "gearScore": 5641
          },
          {
            "name": "nfWxC",
            "role": "Боец",
            "gearScore": 4580
          },
          {
            "name": "Pd9GN6f",
            "role": "Боец",
            "gearScore": 4904
          },
          {
            "name": "Y8QA7e6N8N",
            "role": "Боец",
            "gearScore": 4510
          },
          {
            "name": "oKg1zlIH",
            "role": "Лекарь",
            "gearScore": 5519
          },
          {
            "name": "bCSB3O",
            "role": "Боец",
            "gearScore": 4527
          },
          {
            "name": "ZjM1O7Vi",
            "role": "Боец",
            "gearScore": 4786
          },
          {
            "name": "rqNfKjp",
            "role": "Лекарь",
            "gearScore": 5503
          },
          {
            "name": "tWTYWx",
            "role": "Танк",
            "gearScore": 5201
          }
        ]
      }
    ]
  }`;
  
  // Парсинг JSON
const jsonDataParsed = JSON.parse(jsonData);
  
  // Преобразование данных JSON в структуры (класс Raid)
 export const raids = jsonDataParsed.raids.map(raidData => {
    const characters = raidData.characters.map(characterData => ({
      name: characterData.name,
      role: characterData.role,
      gearScore: characterData.gearScore,
    }));
    return new Raid(raidData.raidName, characters);
  });
