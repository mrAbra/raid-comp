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
            "characterName": "Z517SSbZ",
            "role": "Лекарь",
            "gearScore": 4758
          },
          {
            "characterName": "CU05LjONCJ",
            "role": "Танк",
            "gearScore": 4630
          },
          {
            "characterName": "51IOV0yZ",
            "role": "Боец",
            "gearScore": 5076
          },
          {
            "characterName": "s0BfRE4od",
            "role": "Лекарь",
            "gearScore": 5216
          },
          {
            "characterName": "XmS4PP",
            "role": "Танк",
            "gearScore": 5511
          },
          {
            "characterName": "9oz7j7",
            "role": "Боец",
            "gearScore": 5563
          },
          {
            "characterName": "7wqVZ7b7",
            "role": "Боец",
            "gearScore": 4728
          }
        ]
      },
      {
        "raidName": "Raid 2",
        "characters": [
          {
            "characterName": "xnfxY",
            "role": "Боец",
            "gearScore": 5265
          }
        ]
      },
      {
        "raidName": "Raid 3",
        "characters": [
          {
            "characterName": "626dUL",
            "role": "Танк",
            "gearScore": 4774
          },
          {
            "characterName": "nLdp2l6j",
            "role": "Лекарь",
            "gearScore": 5096
          },
          {
            "characterName": "ICcIs",
            "role": "Боец",
            "gearScore": 5199
          }
        ]
      },
      {
        "raidName": "Raid 4",
        "characters": [
          {
            "characterName": "ccNuC",
            "role": "Танк",
            "gearScore": 5133
          },
          {
            "characterName": "7SeaQm",
            "role": "Танк",
            "gearScore": 5512
          },
          {
            "characterName": "0KSdtZS",
            "role": "Боец",
            "gearScore": 5584
          },
          {
            "characterName": "f9niFvvq",
            "role": "Боец",
            "gearScore": 5693
          },
          {
            "characterName": "kchuKAW",
            "role": "Лекарь",
            "gearScore": 4550
          },
          {
            "characterName": "E4B5xt0",
            "role": "Боец",
            "gearScore": 5342
          },
          {
            "characterName": "OBHWJalJ",
            "role": "Боец",
            "gearScore": 4953
          },
          {
            "characterName": "7vPNchGR",
            "role": "Лекарь",
            "gearScore": 4975
          }
        ]
      },
      {
        "raidName": "Raid 5",
        "characters": [
          {
            "characterName": "iKC6F",
            "role": "Боец",
            "gearScore": 5792
          },
          {
            "characterName": "ICCL5WZT",
            "role": "Танк",
            "gearScore": 4535
          }
        ]
      },
      {
        "raidName": "Raid 6",
        "characters": [
          {
            "characterName": "Z9Ztj1",
            "role": "Боец",
            "gearScore": 5641
          },
          {
            "characterName": "nfWxC",
            "role": "Боец",
            "gearScore": 4580
          },
          {
            "characterName": "Pd9GN6f",
            "role": "Боец",
            "gearScore": 4904
          },
          {
            "characterName": "Y8QA7e6N8N",
            "role": "Боец",
            "gearScore": 4510
          },
          {
            "characterName": "oKg1zlIH",
            "role": "Лекарь",
            "gearScore": 5519
          },
          {
            "characterName": "bCSB3O",
            "role": "Боец",
            "gearScore": 4527
          },
          {
            "characterName": "ZjM1O7Vi",
            "role": "Боец",
            "gearScore": 4786
          },
          {
            "characterName": "rqNfKjp",
            "role": "Лекарь",
            "gearScore": 5503
          },
          {
            "characterName": "tWTYWx",
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
      characterName: characterData.characterName,
      role: characterData.role,
      gearScore: characterData.gearScore,
    }));
    return new Raid(raidData.raidName, characters);
  });
