export default {
  Bundesliga: {
    backgroundImage: {
      assetId: 'test_yourself/soccer/Bundesliga/Bundesliga_Template_-_Trivia_Q',
      type: 'IMAGE',
    },
    gamesNumber: 10000,
    gamesPackId: 'Bundesliga',
    id: 'Bundesliga',
    previewBackgroundColor: '#D3010C',
    previewBackgroundImage: {
      assetId: 'test_yourself/soccer/Bundesliga/Bundesliga_Pack',
      type: 'IMAGE',
    },
    previewLargeImage: {
      assetId: 'test_yourself/soccer/Bundesliga/Bundesliga_Pack_Play',
      type: 'IMAGE',
    },
    rank: 13,
    rewards: [
      {
        momentId: 'ff993850-fc82-424d-a846-af017eec955e',
        requiredStreak: 5,
        type: 'BRONZE',
      },
      {
        momentId: '90c9e928-1b39-4d43-9f93-84a8ad801e06',
        requiredStreak: 15,
        type: 'SILVER',
      },
      {
        momentId: '84cf86f5-a161-42a5-a417-d7b69ce052ee',
        requiredStreak: 25,
        type: 'GOLD',
      },
    ],
    shareText: ' ',
    shareUrl: 'https://heedlive.app.link/11uvS59wFX',
    texts: {
      description: {
        defaultText: '25 Questions, 15s Limit. Answer all correctly and win a limited edition moment!',
        localizationId: 'description-10',
      },
      previewDescription: {
        defaultText: 'Think you know the 2018/19 Bundesliga season?',
        localizationId: 'previewDescription-12',
      },
      previewTitle: {
        defaultText: 'Bundesliga IQ',
        localizationId: 'previewTitle-11',
      },
      title: {
        defaultText: 'HOW MUCH DO YOU KNOW?',
        localizationId: 'title-9',
      },
    },
    translationTable: {
      'de-DE': {
        'description-10': '25 Fragen, 15s Limit. Beantworte alle Fragen richtig und gewinne einen Limited Edition Moment!',
        'previewDescription-12': 'Glaubst du, alles über die 2018/19 Bundesliga-Saison zu wissen?',
        'previewTitle-11': 'Bundesliga IQ',
        'title-9': 'WIE GUT KENNST DU DICH AUS?',
      },
      'pt-PT': {
        'description-10': '25 perguntas. 15 segundos Limite. Responda todas corretamente e ganhe uma experiência de edição limitada!',
        'previewDescription-12': 'Acha que conhece a temporada 2018/19 da Bundesliga?',
        'previewTitle-11': 'QI da Bundesliga',
        'title-9': 'ATÉ QUE PONTO VOCÊ SABE?',
      },
    },
    game: {
      id: 'Q-Bundesliga-1561033835898',
      questions: [
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Bayern München',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '88',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Hertha BSC',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '49',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_19',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 0,
          metricName: 'goals',
          num: 1,
          question: {
            defaultText: 'Which team scored more goals?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hat in der letzten Saison mehr Tore erzielt?',
            },
            'pt-PT': {
              question: 'Qual time marcou mais gols ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'K. Volland (Leverkusen)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '87',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'M. Mittelstädt (Hertha BSC)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '23',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_31_copy.png',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 0,
          metricName: 'shotsToGoal',
          num: 2,
          question: {
            defaultText: 'Which player had more shots?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte in der letzten Saison mehr Schüsse aufs Tor?',
            },
            'pt-PT': {
              question: 'Qual jogador teve mais chutes na temporada passada?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'R. Lewandowski (Bayern München)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '20',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: "Raffael (M'gladbach)",
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '2',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_17',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'insideTheBoxGoal',
          num: 3,
          question: {
            defaultText: "Which player scored more goals from inside the opponent's box?",
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler erzielte mehr Tore von innerhalb des Strafraumes?',
            },
            'pt-PT': {
              question: 'Qual jogador marcou mais gols de dentro da área ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'A. Kramarić (Hoffenheim)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '73',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'J. Eggestein (Bremen)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '29',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_27',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'shotInsideTheBox',
          num: 4,
          question: {
            defaultText: "Which player had more shots from inside the opponent's box?",
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Schüsse von innerhalb des Strafraumes?',
            },
            'pt-PT': {
              question: 'Qual jogador teve mais chutes de dentro da área ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'S. Haller (Frankfurt)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '6',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'W. Orban (Leipzig)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '2',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_24',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'last15MinGoals',
          num: 5,
          question: {
            defaultText: 'Which player scored more goals in the last 15 minutes?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat in den letzten 15 Minuten der vergangenen Saison mehr Tore erzielt?',
            },
            'pt-PT': {
              question: 'Qual jogador marcou mais gols nos últimos 15 minutos ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Bayern München',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '28537',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Leverkusen',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '27338',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_29',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'touches',
          num: 6,
          question: {
            defaultText: 'Which team had more ball touches?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hatte mehr Ballberührungen?',
            },
            'pt-PT': {
              question: 'Qual time deu mais toques na bola ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Hoffenheim',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '16',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Leverkusen',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '10',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_13',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'last15MinGoals',
          num: 7,
          question: {
            defaultText: 'Which team scored more goals in the last 15 minutes?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hat in den letzten 15 Minuten der vergangenen Saison mehr Tore erzielt?',
            },
            'pt-PT': {
              question: 'Qual time marcou mais gols nos últimos 15 minutos ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'J. Sancho (Dortmund)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '12',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Wendell (Leverkusen)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '2',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_7',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'assistOpenPlay',
          num: 8,
          question: {
            defaultText: 'Which player had more assists from open play?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Torvorlagen aus dem offenen Spiel?',
            },
            'pt-PT': {
              question: 'Qual jogador deu mais assistências com a bola rolando ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Frankfurt',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '9',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Nürnberg',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '2',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_6',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'goalFastbreak',
          num: 9,
          question: {
            defaultText: 'Which team scored more goals from counter attacks?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft erzielte mehr Tore durch Gegenangriffe?',
            },
            'pt-PT': {
              question: 'Qual time marcou mais gols de contra-ataque na temporada passada?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'R. Oxford (Augsburg)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '65.89%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'M. Uth (Schalke 04)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '34.55%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_14',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'backPassesRate',
          num: 10,
          question: {
            defaultText: 'Which player had a higher percentage of passes in own half?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte einen höheren Prozentsatz an Pässen in der eigenen Spielhälfte?',
            },
            'pt-PT': {
              question: 'Qual jogador teve uma maior porcentagem em seu meio campo defensivo?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Bayern München',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '3.53',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: "M'gladbach",
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '2.85',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_11',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'OverUnderRatio',
          num: 11,
          question: {
            defaultText: 'Which team had more goals (scored + conceded) per match?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hatte mehr Tore (erzielte Tore + Gegentore) pro Spiel?',
            },
            'pt-PT': {
              question: '{QualTimeOuJogadorOuJogo} teve mais gols (marcados + sofridos) por jogo?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Bayern München',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '15.08%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Leipzig',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '13.32%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_11',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'backwardPassRate',
          num: 12,
          question: {
            defaultText: 'Which team had a higher percentage of backward passes?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hatte einen höheren Prozentsatz an Rückwärtspässen?',
            },
            'pt-PT': {
              question: 'Qual time teve uma maior porcentagem de passes para trás?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'R. Jarstein (Hertha BSC)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '100',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'R. Zentner (Mainz 05)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '37',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_10_copy',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'saves',
          num: 13,
          question: {
            defaultText: 'Which player had more saves?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Paraden?',
            },
            'pt-PT': {
              question: 'Qual jogador fez mais defesas ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Leverkusen',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '26.95%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Düsseldorf',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '24.83%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_3',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'leftSidePassRate',
          num: 14,
          question: {
            defaultText: 'Which team had a higher percentage of passes to the left?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hatte einen höheren Prozentsatz an Pässen nach links?',
            },
            'pt-PT': {
              question: 'Qual time teve uma maior porcentagem de passes para a esquerda?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Schalke 04',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '9',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Stuttgart',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '7',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_19',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'postShot',
          num: 15,
          question: {
            defaultText: 'Which team hit the post/crossbar more?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hat öfters den Pfosten oder die Latte getroffen?',
            },
            'pt-PT': {
              question: 'Qual time mais bateu na trave/ travessão ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'D. Alaba (Bayern München)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '70',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'S. Posch (Hoffenheim)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '47',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_28',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'possWonDef3rd',
          num: 16,
          question: {
            defaultText: 'Which player won more possessions in the defensive third?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler erlangte mehr Ballbesitze im defensiven Drittel des Spielfelds?',
            },
            'pt-PT': {
              question: 'Qual jogador teve mais posse de bola no setor defensivo?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'R. Quaison (Mainz 05)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '100.0%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'L. Goretzka (Bayern München)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '87.5%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_15_copy',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'insideTheBoxRatio',
          num: 17,
          question: {
            defaultText: "Which player had a higher percentage of goals from inside the opponent's box?",
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte einen höheren Prozentsatz an Toren von innerhalb des gegnerischen Strafraumes?',
            },
            'pt-PT': {
              question: 'Qual jogador teve uma maior porcentagem de gols de dentro da área adversária?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'J. Rodríguez (Bayern München)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '61',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'D. Latza (Mainz 05)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '39',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_15_copy',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'touchesInOppBox',
          num: 18,
          question: {
            defaultText: "Which player had more ball touches in the opponent's box?",
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Ballberührungen im gegnerischen Spielfeld?',
            },
            'pt-PT': {
              question: 'Qual jogador deu mais toques na bola na pequena área do oponente ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'M. Halstenberg (Leipzig)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '28',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'N. Bentaleb (Schalke 04)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '21',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_31_copy',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'dribble',
          num: 19,
          question: {
            defaultText: 'Which player had more dribbles?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Dribblings?',
            },
            'pt-PT': {
              question: 'Qual jogador deu mais dribles ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'H. Behrens (Nürnberg)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '21',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'B. Sosa (Stuttgart)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '15',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_15_copy',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'keyPasses',
          num: 20,
          question: {
            defaultText: 'Which player completed more key passes?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat mehr bedeutende Pässe vollendet?',
            },
            'pt-PT': {
              question: 'Qual jogador completou mais passes-chave ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Nürnberg',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '53',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Freiburg',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '51',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_10_copy',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'totalOffside',
          num: 21,
          question: {
            defaultText: 'Which team had more offsides?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hatte mehr Abseitsstrafen?',
            },
            'pt-PT': {
              question: 'Qual time teve mais infrações de impedimento?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Forsberg (Leipzig)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '744',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'E. Thommy (Stuttgart)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '488',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_1',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'touches',
          num: 22,
          question: {
            defaultText: 'Which player had more ball touches?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Ballberührungen?',
            },
            'pt-PT': {
              question: 'Qual jogador deu mais toques na bola ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'P. Bargfrede (Bremen)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '11.23%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'M. Kempf (Stuttgart)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '7.22%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_8',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'backwardPassRate',
          num: 23,
          question: {
            defaultText: 'Which player had a higher percentage of backward passes?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte einen höheren Prozentsatz an Rückwärtspässen?',
            },
            'pt-PT': {
              question: 'Qual jogador teve uma maior porcentagem de passes para trás?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'A. Robben (Bayern München)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '5',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Ji Dong-Won (Augsburg)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '4',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_15_copy',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'totalSubOn',
          num: 24,
          question: {
            defaultText: 'Which player had more appearances from the bench?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Auftritte von der Spieler-Bank?',
            },
            'pt-PT': {
              question: 'Qual jogador teve mais aparições do banco?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'D. Alaba (Bayern München)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '2',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'D. Ginczek (Wolfsburg)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '1',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BUN_QUESTIONS/Bundesliga_League_emplate_-_28',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'postShot',
          num: 25,
          question: {
            defaultText: 'Which player hit the post/crossbar more?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat öfters den Pfosten oder die Latte getroffen?',
            },
            'pt-PT': {
              question: 'Qual jogador mais bateu na trave/ travessão ?',
            },
          },
        },
      ],
    },
  },
  ChelseaPack: {
    backgroundImage: {
      assetId: 'test_yourself/ChelseaVsManU/ManUtdvChelsea_Cover',
      type: 'IMAGE',
    },
    gamesNumber: 100,
    gamesPackId: 'PremierleagueV3',
    id: 'ChelseaPack',
    permissions: [
      'iq_testpacks',
    ],
    previewBackgroundColor: '#38103c',
    previewBackgroundImage: {
      assetId: 'test_yourself/ChelseaVsManU/ManUtdvChelsea_Cover',
      type: 'IMAGE',
    },
    previewLargeImage: {
      assetId: 'test_yourself/ChelseaVsManU/ManUtdvChelsea_Cover',
      type: 'IMAGE',
    },
    rank: 0,
    rewards: [
      {
        momentId: 'ff993850-fc82-424d-a846-af017eec955e',
        requiredStreak: 5,
        type: 'BRONZE',
      },
      {
        momentId: '90c9e928-1b39-4d43-9f93-84a8ad801e06',
        requiredStreak: 15,
        type: 'SILVER',
      },
      {
        momentId: '84cf86f5-a161-42a5-a417-d7b69ce052ee',
        requiredStreak: 25,
        type: 'GOLD',
      },
    ],
    shareText: ' ',
    shareUrl: 'https://heedlive.app.link/itNGGz9wGW',
    texts: {
      description: {
        defaultText: '25 Questions, 15s Limit. Answer all correctly and win a limited edition moment!',
        localizationId: 'description-68',
      },
      previewDescription: {
        defaultText: "Think you know Chelsea's 2018/19 season?",
        localizationId: 'previewDescription-70',
      },
      previewLongDescription: {
        defaultText: "Think you know Chelsea's 2018/19 season?",
        localizationId: 'previewLongDescription-72',
      },
      previewLongTitle: {
        defaultText: 'Chelsea 2018/19 IQ',
        localizationId: 'previewLongTitle-71',
      },
      previewTitle: {
        defaultText: 'Chelsea IQ',
        localizationId: 'previewTitle-69',
      },
      title: {
        defaultText: 'HOW MUCH DO YOU KNOW?',
        localizationId: 'title-67',
      },
    },
    translationTable: {
      'de-DE': {
        'description-68': '25 Fragen, 15s Limit. Beantworte alle Fragen richtig und gewinne einen Limited Edition Moment!',
        'previewDescription-70': 'Denken Sie, Sie kennen die Saison 2018/19 von Chelsea?',
        'previewLongDescription-72': 'Denken Sie, Sie kennen die Saison 2018/19 von Chelsea?',
        'previewLongTitle-71': 'Chelsea 2018/19 IQ',
        'previewTitle-69': 'Chelsea IQ',
        'title-67': 'WIE GUT KENNST DU DICH AUS?',
      },
      'pt-PT': {
        'description-68': '25 perguntas. 15 segundos Limite. Responda todas corretamente e ganhe uma experiência de edição limitada!',
        'previewDescription-70': 'Acha que conhece a temporada 2018/19 do Chelsea?',
        'previewLongDescription-72': 'Acha que conhece a temporada 2018/19 do Chelsea?',
        'previewLongTitle-71': 'Chelsea 2018/19 IQ',
        'previewTitle-69': 'Chelsea IQ',
        'title-67': 'ATÉ QUE PONTO VOCÊ SABE?',
      },
    },
    game: {
      id: 'Q-ChelseaPack-1560851399912',
      questions: [
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Chelsea',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '198',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Watford',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '152',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_4',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 0,
          metricName: 'shotsOnTarget',
          num: 1,
          question: {
            defaultText: 'Which team had more shots on target?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft erzielte in der letzten Saison mehr Tore?',
            },
            'pt-PT': {
              question: 'Qual time teve mais chutes a gol na temporada passada?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '43',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'L. Digne (Everton)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '10',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_6',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 0,
          metricName: 'shotsOnTarget',
          num: 2,
          question: {
            defaultText: 'Which player had more shots on target?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler erzielte in der letzten Saison mehr Tore?',
            },
            'pt-PT': {
              question: 'Qual jogador teve mais chutes a gol na temporada passada?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Liverpool',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '1236',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Chelsea',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '1103',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_9',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'touchesInOppBox',
          num: 3,
          question: {
            defaultText: "Which team had more ball touches in the opponent's box?",
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hatte mehr Ballberührungen im gegnerischen Spielfeld?',
            },
            'pt-PT': {
              question: 'Qual time deu mais toques na bola na pequena área do oponente ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '10.53',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'L. Digne (Everton)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '1.34',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_2',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'GoalLikelihood',
          num: 4,
          question: {
            defaultText: 'Which player had higher chances of scoring?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte höhere Torchancen?',
            },
            'pt-PT': {
              question: 'Qual jogador teve mais chances de marcar ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Diogo Jota (Wolverhampton)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '58',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Azpilicueta (Chelsea)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '17',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_6',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 0,
          metricName: 'shotsToGoal',
          num: 5,
          question: {
            defaultText: 'Which player had more shots?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte in der letzten Saison mehr Schüsse aufs Tor?',
            },
            'pt-PT': {
              question: 'Qual jogador teve mais chutes na temporada passada?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'David Luiz (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '3',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'K. Ahearne-Grant (Huddersfield)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '1',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_5',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'headedGoal',
          num: 6,
          question: {
            defaultText: 'Which player scored more headers?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler erzielte mehr Kopfbälle?',
            },
            'pt-PT': {
              question: 'Qual jogador marcou mais gols de cabeça ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Deulofeu (Watford)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '10',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'R. Barkley (Chelsea)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '3',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_4',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 0,
          metricName: 'goals',
          num: 7,
          question: {
            defaultText: 'Which player scored more goals?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat in der letzten Saison mehr Tore erzielt?',
            },
            'pt-PT': {
              question: 'Qual jogador marcou mais gols ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'David Silva (Man City)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '1770',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'A. Christensen (Chelsea)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '425',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_7',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'accuratePass',
          num: 8,
          question: {
            defaultText: 'Which player had more accurate passes?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte genauere Pässe?',
            },
            'pt-PT': {
              question: 'Qual jogador deu mais passes precisos ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'C. Taylor (Burnley)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '2285',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'G. Higuaín (Chelsea)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '463',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_5',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'touches',
          num: 9,
          question: {
            defaultText: 'Which player had more ball touches?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Ballberührungen?',
            },
            'pt-PT': {
              question: 'Qual jogador deu mais toques na bola ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'West Ham',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '2.82',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Chelsea',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '2.68',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_3',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'OverUnderRatio',
          num: 10,
          question: {
            defaultText: 'Which team had more goals (scored + conceded) per match?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hatte mehr Tore (Erzielte + kassiert) pro Spiel?',
            },
            'pt-PT': {
              question: 'Qual time teve mais gols (marcados + sofridos) por jogo?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'M. Kovačić (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '92.03%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'J. Henderson (Liverpool)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '87.24%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_4',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'passSuccessRatio',
          num: 11,
          question: {
            defaultText: 'Which player had a higher pass completion rate?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte eine höhere Pass-Erfolgsquote?',
            },
            'pt-PT': {
              question: 'Qual jogador teve a mais alta taxa de conclusão de passes ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Willian (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '46.9%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'C. Chambers (Fulham)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '27.05%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_9',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'centerPassesRate',
          num: 12,
          question: {
            defaultText: "Which player had a higher rate of passes in the opponent's half center?",
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Pässe innerhalb der gegnerischen Spielhälfte?',
            },
            'pt-PT': {
              question: 'Qual jogador teve um maior índice de passes no setor central do oponente?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'R. Loftus-Cheek (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '0.61',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'T. Deeney (Watford)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '0.35',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_2',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'goalsPer90Min',
          num: 13,
          question: {
            defaultText: 'Which player scored more goals per 90 minutes?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat mehr Tore in je 90 Minuten geschossen?',
            },
            'pt-PT': {
              question: 'Qual jogador marcou mais gols nos 90 minutos?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Willian (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '103',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Josh Murphy (Cardiff)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '80',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_4',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'touchesInOppBox',
          num: 14,
          question: {
            defaultText: "Which player had more ball touches in the opponent's box?",
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Ballberührungen im gegnerischen Spielfeld?',
            },
            'pt-PT': {
              question: 'Qual jogador deu mais toques na bola na pequena área do oponente ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Kiko Femenía (Watford)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '36.97%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Willian (Chelsea)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '20.65%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_3',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'forwardPassRate',
          num: 15,
          question: {
            defaultText: 'Which player had a higher rate of passes forwards?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Pässe nach vorne?',
            },
            'pt-PT': {
              question: 'Qual jogador teve um maior índice de passes para a frente?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'P. Dummett (Newcastle)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '61',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'N. Kanté (Chelsea)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '27',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_1',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'aerialWon',
          num: 16,
          question: {
            defaultText: 'Which player won more aerial duels?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat mehr Kämpfe in der Luft gewonnen?',
            },
            'pt-PT': {
              question: 'Qual jogador ganhou mais disputas de bola aérea ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'David Luiz (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '21',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'J. Cork (Burnley)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '11',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_8',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'shotInsideTheBox',
          num: 17,
          question: {
            defaultText: 'Which player had more shots from inside the box?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Schüsse von innerhalb des Strafraumes?',
            },
            'pt-PT': {
              question: 'Qual jogador teve mais chutes de dentro da área ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Arsenal',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '89',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Chelsea',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '86',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_8',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 3,
          metricName: 'accurateCross',
          num: 18,
          question: {
            defaultText: 'Which team had more accurate crosses?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hatte genauere Flanken?',
            },
            'pt-PT': {
              question: 'Qual time fez mais cruzamentos precisos ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Felipe Anderson (West Ham)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '4',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'R. Loftus-Cheek (Chelsea)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '2',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_7',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'goalAssist',
          num: 19,
          question: {
            defaultText: 'Which player had more assists?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Torvorlagen?',
            },
            'pt-PT': {
              question: 'Qual jogador deu mais assistências ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Cédric Soares (Southampton)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '34.69%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Álvaro Morata (Chelsea)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '22.41%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_5',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'backPassesRate',
          num: 20,
          question: {
            defaultText: 'Which player had a higher rate of passes in own half?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte eine höhere Rate an Pässen in der eigenen Spielhälfte?',
            },
            'pt-PT': {
              question: 'Qual jogador teve um maior índice de passes em seu meio campo defensivo?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Ayoze Pérez (Newcastle)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '9',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'N. Kanté (Chelsea)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '6',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_2',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'totalOffside',
          num: 21,
          question: {
            defaultText: 'Which player had more offsides?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Abseitsstrafen?',
            },
            'pt-PT': {
              question: 'Qual jogador teve mais infrações de impedimento?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '2',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'David Luiz (Chelsea)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '1',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_4',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'postShot',
          num: 22,
          question: {
            defaultText: 'Which player hit the post/crossbar more?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat öfters den Pfosten oder die Latte getroffen?',
            },
            'pt-PT': {
              question: 'Qual jogador mais bateu na trave/ travessão ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'N. Redmond (Southampton)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '66',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Pedro (Chelsea)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '57',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_5',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'totalCross',
          num: 23,
          question: {
            defaultText: 'Which player had more crosses?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Flanken?',
            },
            'pt-PT': {
              question: 'Qual jogador fez mais cruzamentos ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '12',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'N. Clyne (Bournemouth)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '9',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_6',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'fouls',
          num: 24,
          question: {
            defaultText: 'Which player comitted more fouls?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat mehr Fouls begangen?',
            },
            'pt-PT': {
              question: 'Qual jogador cometeu mais faltas ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'D. Calvert-Lewin (Everton)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '83.33%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'G. Higuaín (Chelsea)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '80.0%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/ChelseaVsManU/ChelseavManUTD_Card_9',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'insideTheBoxRatio',
          num: 25,
          question: {
            defaultText: "Which player had a higher rate of goals from inside the opponent's box?",
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Tore von innerhalb des gegnerischen Strafraumes?',
            },
            'pt-PT': {
              question: 'Qual jogador teve um maior índice de gols de dentro da área?',
            },
          },
        },
      ],
    },
  },
  Euroleague: {
    backgroundImage: {
      assetId: 'test_yourself/soccer/Euroleague/Euroleague_Template_-_Trivia_Q',
      type: 'IMAGE',
    },
    gamesNumber: 400,
    gamesPackId: 'Euroleague',
    id: 'Euroleague',
    permissions: [
      'iq_testpacks',
    ],
    previewBackgroundColor: '#FD4F00',
    previewBackgroundImage: {
      assetId: 'test_yourself/soccer/Euroleague/Euroleague_-_Pack',
      type: 'IMAGE',
    },
    previewLargeImage: {
      assetId: 'test_yourself/soccer/Euroleague/Euroleague_-_Pack_Play',
      type: 'IMAGE',
    },
    rank: 1,
    rewards: [
      {
        momentId: 'ff993850-fc82-424d-a846-af017eec955e',
        requiredStreak: 5,
        type: 'BRONZE',
      },
      {
        momentId: '90c9e928-1b39-4d43-9f93-84a8ad801e06',
        requiredStreak: 15,
        type: 'SILVER',
      },
      {
        momentId: '84cf86f5-a161-42a5-a417-d7b69ce052ee',
        requiredStreak: 25,
        type: 'GOLD',
      },
    ],
    shareText: ' ',
    shareUrl: 'https://heedlive.app.link/KIpcpipxGW',
    texts: {
      description: {
        defaultText: '25 Questions, 15s Limit. Answer all correctly and win a limited edition moment!',
        localizationId: 'description-20',
      },
      previewDescription: {
        defaultText: 'Think you know the 2018/19 Euroleague season?',
        localizationId: 'previewDescription-22',
      },
      previewTitle: {
        defaultText: 'Euroleague IQ',
        localizationId: 'previewTitle-21',
      },
      title: {
        defaultText: 'HOW MUCH DO YOU KNOW?',
        localizationId: 'title-19',
      },
    },
    translationTable: {
      'de-DE': {
        'description-20': '25 Fragen, 15s Limit. Beantworte alle Fragen richtig und gewinne einen Limited Edition Moment!',
        'previewDescription-22': 'Glaubst du, alles über die 2018/19 Euroleague-Saison zu wissen?',
        'previewTitle-21': 'Euroleague IQ',
        'title-19': 'WIE GUT KENNST DU DICH AUS?',
      },
      'pt-PT': {
        'description-20': '25 perguntas. 15 segundos Limite. Responda todas corretamente e ganhe uma experiência de edição limitada!',
        'previewDescription-22': 'Acha que conhece a temporada 2018/19 da Euroleague?',
        'previewTitle-21': 'QI da EuroLiga',
        'title-19': 'ATÉ QUE PONTO VOCÊ SABE?',
      },
    },
    game: {
      id: 'Q-Euroleague-1561046061344',
      questions: [
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'M. James (Milan)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '70',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'M. Brown (Dacka)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '14',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/basketball/141967848',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 0,
          metricName: 'FieldGoalsMade3',
          num: 1,
          question: {
            defaultText: 'Which player made more 3-point field goals?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat mehr 3-Punkte-Würfe getroffen?',
            },
            'pt-PT': {
              question: 'Qual jogador fez mais cestas de 3 pontos?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Milan',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '2618',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Panathinaikos',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '2389',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/basketball/923067380',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 0,
          metricName: 'Points',
          num: 2,
          question: {
            defaultText: 'Which team scored more points?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hat mehr Punkte erzielt?',
            },
            'pt-PT': {
              question: 'Qual time marcou mais pontos?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'B. Davies (Zalgiris)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '153',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'K. Papanikolaou (Olympiacos)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '42',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/basketball/144193804_1',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'FreeThrowsAttempted',
          num: 3,
          question: {
            defaultText: 'Which player attempted more free-throws?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat mehr Freiwürfe versucht?',
            },
            'pt-PT': {
              question: 'Qual jogador cobrou mais lances livres?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'M. Huertas (Baskonia)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '142',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'D. Hackett (CSKA)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '50',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/basketball/948190522',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'Assistances',
          num: 4,
          question: {
            defaultText: 'Which player had more assists?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Vorlagen?',
            },
            'pt-PT': {
              question: 'Qual jogador deu mais assistências?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'N. Calathes (Panathinaikos)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '11',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'N. Milutinov (Olympiacos)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '6',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/basketball/144193804_1',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'doubleDouble',
          num: 5,
          question: {
            defaultText: 'Which player had more double-double?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Doppel-Doppel (mindestens 10 Körbe/Vorlagen oder 10 Blocks/Rebounds gleichzeitig)?',
            },
            'pt-PT': {
              question: 'Qual jogador obteve mais duplo-duplos?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'M. Eriksson (Gran Canaria)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '302',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'O. Pauli (Gran Canaria)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '152',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/basketball/948190522',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 0,
          metricName: 'Points',
          num: 6,
          question: {
            defaultText: 'Which player scored more points?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat mehr Punkte erzielt?',
            },
            'pt-PT': {
              question: 'Qual jogador marcou mais pontos?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Panathinaikos',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '212',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Maccabi',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '195',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/Euroleague/1135033343 copy.jpg',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'Steals',
          num: 7,
          question: {
            defaultText: 'Which team made more steals?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hatte mehr Balleroberungen?',
            },
            'pt-PT': {
              question: 'Qual time roubou mais bolas?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Efes',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '663',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Olympiacos',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '624',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/basketball/83192290',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'FieldGoalsMade2',
          num: 8,
          question: {
            defaultText: 'Which team made more 2-point field goals?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hat mehr 2-Punkte-Würfe getroffen?',
            },
            'pt-PT': {
              question: 'Qual time fez mais cestas de 2 pontos?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Dacka',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '1234',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Bayern',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '1111',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/basketball/83192290',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'FieldGoalsAttempted2',
          num: 9,
          question: {
            defaultText: 'Which team attempted more 2-point field goals?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hat mehr 2-Punkte-Würfe versucht?',
            },
            'pt-PT': {
              question: 'Qual time tentou mais arremessos de 2 pontos?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'T. Shengelia (Baskonia)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '49',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'L. Lekavicius (Panathinaikos)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '19',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/Euroleague/1138967186.jpg',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'FreeThrowsMade',
          num: 10,
          question: {
            defaultText: 'Which player scored more free throws?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat mehr Freiwürfe getroffen?',
            },
            'pt-PT': {
              question: 'Qual jogador converteu mais arremessos de 3?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'M. Huertas (Baskonia)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '20',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'WALTON JR, DERRICK (Zalgiris)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '8',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/Euroleague/948190522.jpg',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'Steals',
          num: 11,
          question: {
            defaultText: 'Which player made more steals?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Balleroberungen?',
            },
            'pt-PT': {
              question: 'Qual jogador roubou mais bolas?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Clark (Buducnost)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '103',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'J. Anderson (Efes)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '60',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/basketball/905684888',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'FieldGoalsAttempted3',
          num: 12,
          question: {
            defaultText: 'Which player attempted more 3-point field goals?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat mehr 3-Punkte-Würfe versucht?',
            },
            'pt-PT': {
              question: 'Qual jogador tentou mais arremessos de 3 pontos?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'I. Papapetrou (Panathinaikos)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '14',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'D. Balbay (Efes)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '6',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/basketball/144193804_1',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'BlocksFavour',
          num: 13,
          question: {
            defaultText: 'Which player had more blocks?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte öfter geblockt?',
            },
            'pt-PT': {
              question: '{QualTimeOuJogadorOuJogo} teve mais tocos?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'T. Shengelia (Baskonia)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '112',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'N. Nedovic (Milan)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '58',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/basketball/1135033697',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'FieldGoalsAttempted2',
          num: 14,
          question: {
            defaultText: 'Which player attempted more 2-point field goals?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat mehr 2-Punkte-Würfe versucht?',
            },
            'pt-PT': {
              question: 'Qual jogador tentou mais arremessos de 2 pontos?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Panathinaikos',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '83',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Fener',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '69',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/basketball/108744036',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'BlocksFavour',
          num: 15,
          question: {
            defaultText: 'Which team had more blocks?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hatte öfter geblockt?',
            },
            'pt-PT': {
              question: '{QualTimeOuJogadorOuJogo} teve mais tocos?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'CSKA',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '254',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Olympiacos',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '225',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/Euroleague/959900086 (1).jpg',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 0,
          metricName: 'FieldGoalsMade3',
          num: 16,
          question: {
            defaultText: 'Which team made more 3-point field goals?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hat mehr 3-Punkte-Würfe getroffen?',
            },
            'pt-PT': {
              question: 'Qual time fez mais cestas de 3 pontos?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Fener',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '418',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Khimki',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '374',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/basketball/144193804_1',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'FreeThrowsMade',
          num: 17,
          question: {
            defaultText: 'Which team scored more free throws?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hat mehr Freiwürfe getroffen?',
            },
            'pt-PT': {
              question: 'Qual time converteu mais arremessos de 3?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'V. Micic (Efes)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '4',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'E. Baez (Gran Canaria)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '2',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/Euroleague/948190522.jpg',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'clutchShot',
          num: 18,
          question: {
            defaultText: 'Which player made more shots under pressure?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Würfe unter Druck?',
            },
            'pt-PT': {
              question: '{QualTimeOuJogadorOuJogo} arremessou mais sob pressão?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'N. Radicevic (Gran Canaria)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '35',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'S. Kilpatrick (Panathinaikos)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '20',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/basketball/144193804_1',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'FoulsCommited',
          num: 19,
          question: {
            defaultText: 'Which player commited more fouls?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat mehr Fouls begangen?',
            },
            'pt-PT': {
              question: 'Qual jogador cometeu mais faltas?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'K. Kuric (Barcelona)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '2',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'S. Antonov (CSKA)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '1',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/basketball/948190522',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'streak',
          num: 20,
          question: {
            defaultText: 'Which player had more scoring streaks?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Punkteserien?',
            },
            'pt-PT': {
              question: '{QualTimeOuJogadorOuJogo} fez mais cestas seguidas?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Bayern',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '75',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Buducnost',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '73',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/basketball/923067380',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'BlocksAgainst',
          num: 21,
          question: {
            defaultText: 'Which team had more blocks against?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft wurde öfter geblockt?',
            },
            'pt-PT': {
              question: 'Qual time foi mais bloqueado?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Dacka',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '576',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Khimki',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '573',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/basketball/1135021472',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'FoulsReceived',
          num: 22,
          question: {
            defaultText: 'Which team had more fouls against?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft wurde öfter gefoult?',
            },
            'pt-PT': {
              question: '{QualTimeOuJogadorOuJogo} sofreu mais faltas?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Dacka',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '643',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Gran Canaria',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '639',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/Euroleague/948190522.jpg',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'FoulsCommited',
          num: 23,
          question: {
            defaultText: 'Which team commited more fouls?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hat mehr Fouls begangen?',
            },
            'pt-PT': {
              question: 'Qual time cometeu mais faltas?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'N. Dangubic (Bayern)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '2',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'J. Granger (Baskonia)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '1',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/basketball/1135021472',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'buzzBeater',
          num: 24,
          question: {
            defaultText: 'Which player had more buzzer beater?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Buzzer Beater?',
            },
            'pt-PT': {
              question: '{QualTimeOuJogadorOuJogo} fez mais cestas de último minuto?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Khimki',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '487',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Maccabi',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '474',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/Euroleague/905684888.jpg',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'FreeThrowsAttempted',
          num: 25,
          question: {
            defaultText: 'Which team attempted more free-throws?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hat mehr Freiwürfe versucht?',
            },
            'pt-PT': {
              question: 'Qual time cobrou mais lances livres?',
            },
          },
        },
      ],
    },
  },
  HazardPack: {
    backgroundImage: {
      assetId: 'test_yourself/EdenHazard/EdenHazard_Cover',
      type: 'IMAGE',
    },
    gamesNumber: 5000,
    gamesPackId: 'HazardPack',
    id: 'HazardPack',
    previewBackgroundColor: '#38103c',
    previewBackgroundImage: {
      assetId: 'test_yourself/EdenHazard/EdenHazard_Cover',
      type: 'IMAGE',
    },
    previewLargeImage: {
      assetId: 'test_yourself/EdenHazard/EdenHazard_Cover',
      type: 'IMAGE',
    },
    rank: 8,
    rewards: [
      {
        momentId: 'ff993850-fc82-424d-a846-af017eec955e',
        requiredStreak: 5,
        type: 'BRONZE',
      },
      {
        momentId: '90c9e928-1b39-4d43-9f93-84a8ad801e06',
        requiredStreak: 15,
        type: 'SILVER',
      },
      {
        momentId: '84cf86f5-a161-42a5-a417-d7b69ce052ee',
        requiredStreak: 25,
        type: 'GOLD',
      },
    ],
    shareText: ' ',
    shareUrl: 'https://heedlive.app.link/BAdvqIFUyX',
    texts: {
      description: {
        defaultText: '25 Questions, 15s Limit. Answer all correctly and win a limited edition moment!',
        localizationId: 'description-61',
      },
      previewDescription: {
        defaultText: "Think you know Eden Hazard's 2018/19 season?",
        localizationId: 'previewDescription-63',
      },
      previewLongDescription: {
        defaultText: "Think you know Eden Hazard's 2018/19 season?",
        localizationId: 'previewLongDescription-65',
      },
      previewLongTitle: {
        defaultText: 'Eden Hazard 2018/19 IQ',
        localizationId: 'previewLongTitle-64',
      },
      previewTitle: {
        defaultText: 'Hazard 2018/19 IQ',
        localizationId: 'previewTitle-62',
      },
      title: {
        defaultText: 'HOW MUCH DO YOU KNOW?',
        localizationId: 'title-60',
      },
    },
    translationTable: {
      'de-DE': {
        'description-61': '25 Fragen, 15s Limit. Beantworte alle Fragen richtig und gewinne einen Limited Edition Moment!',
        'previewDescription-63': 'Denken Sie, Sie kennen die Saison 2018/19 von Eden Hazard?',
        'previewLongDescription-65': 'Denken Sie, Sie kennen die Saison 2018/19 von Eden Hazard?',
        'previewLongTitle-64': 'Eden Hazard 2018/19 IQ',
        'previewTitle-62': 'Hazard 2018/19 IQ',
        'title-60': 'WIE GUT KENNST DU DICH AUS?',
      },
      'pt-PT': {
        'description-61': '25 perguntas. 15 segundos Limite. Responda todas corretamente e ganhe uma experiência de edição limitada!',
        'previewDescription-63': 'Acha que conhece a temporada 2018/19 do Eden Hazard?',
        'previewLongDescription-65': 'Acha que conhece a temporada 2018/19 do Eden Hazard?',
        'previewLongTitle-64': 'Eden Hazard 2018/19 IQ',
        'previewTitle-62': 'Hazard 2018/19 IQ',
        'title-60': 'ATÉ QUE PONTO VOCÊ SABE?',
      },
    },
    game: {
      id: 'Q-HazardPack-1560949514606',
      questions: [
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '43',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'S. Bamba (Cardiff)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '7',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_8',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 0,
          metricName: 'shotsOnTarget',
          num: 1,
          question: {
            defaultText: 'Which player had more shots on target?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler erzielte in der letzten Saison mehr Tore?',
            },
            'pt-PT': {
              question: 'Qual jogador teve mais chutes a gol na temporada passada?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '93',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'I. Mbenza (Huddersfield)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '16',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_8',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 0,
          metricName: 'shotsToGoal',
          num: 2,
          question: {
            defaultText: 'Which player had more shots?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte in der letzten Saison mehr Schüsse aufs Tor?',
            },
            'pt-PT': {
              question: 'Qual jogador teve mais chutes na temporada passada?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'I. Success (Watford)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '21',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '5',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_4',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'totalSubOn',
          num: 3,
          question: {
            defaultText: 'Which player had more appearances from the bench?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Auftritte von der Spieler-Bank?',
            },
            'pt-PT': {
              question: 'Qual jogador teve mais aparições do banco?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '84.33%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'T. Deeney (Watford)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '60.65%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_11',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'passSuccessRatio',
          num: 4,
          question: {
            defaultText: 'Which player had a higher pass completion rate?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte eine höhere Pass-Erfolgsquote?',
            },
            'pt-PT': {
              question: 'Qual jogador teve a mais alta taxa de conclusão de passes ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '2678',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'B. Reid (Cardiff)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '542',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_9',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'touches',
          num: 5,
          question: {
            defaultText: 'Which player had more ball touches?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Ballberührungen?',
            },
            'pt-PT': {
              question: 'Qual jogador deu mais toques na bola ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '1819',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'A. Barnes (Burnley)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '518',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_11',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'totalPass',
          num: 6,
          question: {
            defaultText: 'Which player had more passes?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Pässe?',
            },
            'pt-PT': {
              question: 'Qual jogador ganhou mais disputas de bola aérea ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '240',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'K. Zouma (Everton)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '41',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_1',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'touchesInOppBox',
          num: 7,
          question: {
            defaultText: "Which player had more ball touches in the opponent's box?",
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Ballberührungen im gegnerischen Spielfeld?',
            },
            'pt-PT': {
              question: 'Qual jogador deu mais toques na bola na pequena área do oponente ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '10.53',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'A. Westwood (Burnley)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '1.91',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_7',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'GoalLikelihood',
          num: 8,
          question: {
            defaultText: 'Which player had higher chances of scoring?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte höhere Torchancen?',
            },
            'pt-PT': {
              question: 'Qual jogador teve mais chances de marcar ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '16',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'J. Hernández (West Ham)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '7',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_4',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 0,
          metricName: 'goals',
          num: 9,
          question: {
            defaultText: 'Which player scored more goals?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat in der letzten Saison mehr Tore erzielt?',
            },
            'pt-PT': {
              question: 'Qual jogador marcou mais gols ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '11',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Richarlison (Everton)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '7',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_8',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'rightFootedGoal',
          num: 10,
          question: {
            defaultText: 'Which player scored more right-footed goals?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat mehr Tore mit dem rechten Fuß erzielt?',
            },
            'pt-PT': {
              question: 'Qual jogador marcou mais gols de pé direito ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '28',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'O. Giroud (Chelsea)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '5',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_1',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'possWonAtt3rd',
          num: 11,
          question: {
            defaultText: 'Which player won more possessions in the attacking third?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler erlangte mehr Ballbesitze im angreifenden Drittel des Spielfelds?',
            },
            'pt-PT': {
              question: 'Qual jogador teve mais posse de bola no setor ofensivo?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '51.47%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'B. Mee (Burnley)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '21.45%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_2',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'centerPassesRate',
          num: 12,
          question: {
            defaultText: "Which player had a higher percentage of passes in the opponent's half center?",
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte einen höheren Prozentsatz an Pässen in der gegnerischen Spielhälfte?',
            },
            'pt-PT': {
              question: 'Qual jogador teve uma maior porcentagem de passes no setor central adversário?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '0.55',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'T. Deeney (Watford)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '0.35',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_3',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'goalsPer90Min',
          num: 13,
          question: {
            defaultText: 'Which player scored more goals per 90 minutes?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat mehr Tore in je 90 Minuten geschossen?',
            },
            'pt-PT': {
              question: 'Qual jogador marcou mais gols nos 90 minutos?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '26',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'A. Barnes (Burnley)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '11',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_7',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'shotOutsideTheBox',
          num: 14,
          question: {
            defaultText: "Which player had more shots from outside the opponent's box?",
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Schüsse von außerhalb des Strafraumes?',
            },
            'pt-PT': {
              question: 'Qual jogador marcou mais gols de fora da área ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '104',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'J. Lingard (Man Utd)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '25',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_6',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'wasFouled',
          num: 15,
          question: {
            defaultText: 'Which player suffered more fouls?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat mehr Fouls erlitten?',
            },
            'pt-PT': {
              question: 'Qual jogador sofreu mais faltas?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '67',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'L. Depoitre (Huddersfield)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '28',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_6',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'shotInsideTheBox',
          num: 16,
          question: {
            defaultText: "Which player had more shots from inside the opponent's box?",
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Schüsse von innerhalb des Strafraumes?',
            },
            'pt-PT': {
              question: 'Qual jogador teve mais chutes de dentro da área ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '68',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Bellerín (Arsenal)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '39',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_3',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'totalCross',
          num: 17,
          question: {
            defaultText: 'Which player had more crosses?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Flanken?',
            },
            'pt-PT': {
              question: 'Qual jogador fez mais cruzamentos ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'A. Wan-Bissaka (Crystal Palace)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '4',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '2',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_11',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'yellowCard',
          num: 18,
          question: {
            defaultText: 'Which player received more yellow cards?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat mehr gelbe Karten erhalten?',
            },
            'pt-PT': {
              question: 'Qual jogador recebeu mais cartões amarelos ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Josh Murphy (Cardiff)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '20.45%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '16.38%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_6',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'backwardPassRate',
          num: 19,
          question: {
            defaultText: 'Which player had a higher percentage of backward passes?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte einen höheren Prozentsatz an Rückwärtspässen?',
            },
            'pt-PT': {
              question: 'Qual jogador teve uma maior porcentagem de passes para trás?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'H. Winks (Tottenham)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '16',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '12',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_3',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'fouls',
          num: 20,
          question: {
            defaultText: 'Which player comitted more fouls?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat mehr Fouls begangen?',
            },
            'pt-PT': {
              question: 'Qual jogador cometeu mais faltas ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '49',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'F. Balbuena (West Ham)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '38',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_3',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'possWonMid3rd',
          num: 21,
          question: {
            defaultText: 'Which player won more possessions in the middle third?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler erlangte mehr Ballbesitze im mittleren Drittel des Spielfelds?',
            },
            'pt-PT': {
              question: 'Qual jogador teve mais posse de bola no setor do meio campo?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '1534',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'H. Winks (Tottenham)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '1274',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_10',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'accuratePass',
          num: 22,
          question: {
            defaultText: 'Which player had more accurate passes?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte genauere Pässe?',
            },
            'pt-PT': {
              question: 'Qual jogador deu mais passes precisos ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '98',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'P. Groß (Brighton)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '54',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_9',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'keyPasses',
          num: 23,
          question: {
            defaultText: 'Which player completed more key passes?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat mehr bedeutende Pässe vollendet?',
            },
            'pt-PT': {
              question: 'Qual jogador completou mais passes-chave ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'J. King (Bournemouth)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '23.32%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '21.28%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_1',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'forwardPassRate',
          num: 24,
          question: {
            defaultText: 'Which player had a higher percentage of forward passes?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte einen höheren Prozentsatz an Vorwärtspässen?',
            },
            'pt-PT': {
              question: 'Qual jogador teve uma maior porcentagem de passes para a frente?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'E. Hazard (Chelsea)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '2925',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'T. Alderweireld (Tottenham)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '2923',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EdenHazard/ChelseaEdenHazard_Card_2',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'minsPlayed',
          num: 25,
          question: {
            defaultText: 'Which player played more minutes?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat mehr Minuten gespielt?',
            },
            'pt-PT': {
              question: 'Qual jogador jogou mais minutos ?',
            },
          },
        },
      ],
    },
  },
  Premierleague: {
    backgroundImage: {
      assetId: 'test_yourself/soccer/PremierLeague/Premier_League_-_Trivia_Q',
      type: 'IMAGE',
    },
    gamesNumber: 10000,
    gamesPackId: 'Premierleague',
    id: 'Premierleague',
    previewBackgroundColor: '#38003c',
    previewBackgroundImage: {
      assetId: 'test_yourself/soccer/PremierLeague/Premier_League_Pack',
      type: 'IMAGE',
    },
    previewLargeImage: {
      assetId: 'test_yourself/soccer/PremierLeague/Premier_League_Pack_Play',
      type: 'IMAGE',
    },
    rank: 11,
    rewards: [
      {
        momentId: 'ff993850-fc82-424d-a846-af017eec955e',
        requiredStreak: 5,
        type: 'BRONZE',
      },
      {
        momentId: '90c9e928-1b39-4d43-9f93-84a8ad801e06',
        requiredStreak: 15,
        type: 'SILVER',
      },
      {
        momentId: '84cf86f5-a161-42a5-a417-d7b69ce052ee',
        requiredStreak: 25,
        type: 'GOLD',
      },
    ],
    shareText: ' ',
    shareUrl: 'https://heedlive.app.link/bAOJh2PAFX',
    texts: {
      description: {
        defaultText: '25 Questions, 15s Limit. Answer all correctly and win a limited edition moment!',
        localizationId: 'description-2',
      },
      previewDescription: {
        defaultText: 'Think you know the 2018/19 Premier League season?',
        localizationId: 'previewDescription-4',
      },
      previewLongDescription: {
        defaultText: 'Think you know the 2018/19 Premier League season?',
        localizationId: 'previewLongDescription-6',
      },
      previewLongTitle: {
        defaultText: 'Premier League IQ',
        localizationId: 'previewLongTitle-5',
      },
      previewTitle: {
        defaultText: 'Premier League IQ',
        localizationId: 'previewTitle-3',
      },
      timeframe: {
        defaultText: 'Season 2018/19',
        localizationId: 'timeframe-7',
      },
      title: {
        defaultText: 'HOW MUCH DO YOU KNOW?',
        localizationId: 'title-1',
      },
    },
    translationTable: {
      'de-DE': {
        'description-2': '25 Fragen, 15s Limit. Beantworte alle Fragen richtig und gewinne einen Limited Edition Moment!',
        'previewDescription-4': 'Glaubst du, alles über die 2018/19-Premier-League-Saison zu wissen?',
        'previewLongDescription-6': 'Glaubst du, alles über die 2018/19-Premier-League-Saison zu wissen?',
        'previewLongTitle-5': 'Premier League IQ',
        'previewTitle-3': 'Premier League IQ',
        'timeframe-7': 'Saison 2018/19',
        'title-1': 'WIE GUT KENNST DU DICH AUS?',
      },
      'pt-PT': {
        'description-2': '25 perguntas. 15 segundos Limite. Responda todas corretamente e ganhe uma experiência de edição limitada!',
        'previewDescription-4': 'Acha que conhece a temporada 2018/19 da Premier League?',
        'previewLongDescription-6': 'Acha que conhece a temporada 2018/19 da Premier League?',
        'previewLongTitle-5': 'QI da Premier League',
        'previewTitle-3': 'QI da Premier League',
        'timeframe-7': 'a tempora 2018/19',
        'title-1': 'ATÉ QUE PONTO VOCÊ SABE?',
      },
    },
    game: {
      id: 'Q-Premierleague-1560937460350',
      questions: [
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'S. Agüero (Man City)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '118',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'J. Stanislas (Bournemouth)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '34',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier_League_emplate_-_15_copy',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 0,
          metricName: 'shotsToGoal',
          num: 1,
          question: {
            defaultText: 'Which player had more shots?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte in der letzten Saison mehr Schüsse aufs Tor?',
            },
            'pt-PT': {
              question: 'Qual jogador teve mais chutes na temporada passada?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Chelsea',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '609',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Cardiff',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '418',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier_League_emplate_-_7',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 0,
          metricName: 'shotsToGoal',
          num: 2,
          question: {
            defaultText: 'Which team had more shots?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hatte in der letzten Saison mehr Schüsse aufs Tor?',
            },
            'pt-PT': {
              question: 'Qual time teve mais chutes na temporada passada?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Crystal Palace',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '10',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Man City',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '3',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier_League_emplate_-_1',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'goalFromPenalty',
          num: 3,
          question: {
            defaultText: 'Which team scored more goals from penalty kicks?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft erzielte mehr Tore durch Elfmeter?',
            },
            'pt-PT': {
              question: 'Qual time marcou mais gols de pênalti ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Chelsea',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '16',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Man Utd',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '7',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier_League_emplate_-_18_copy',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 0,
          metricName: 'cleanSheet',
          num: 4,
          question: {
            defaultText: 'Which team kept more clean sheets?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hat in der letzten Saison häufiger eine weiße Weste behalten?',
            },
            'pt-PT': {
              question: 'Qual time teve mais jogos sem levar gol ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Tottenham',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '14',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Watford',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '8',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier_League_emplate_-_17_copy',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'headedGoal',
          num: 5,
          question: {
            defaultText: 'Which team scored more headers?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft erzielte mehr Kopfbälle?',
            },
            'pt-PT': {
              question: 'Qual time marcou mais gols de cabeça ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'D. Calvert-Lewin (Everton)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '4',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'E. Dier (Tottenham)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '1',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier_League_emplate_-_16',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'headedGoal',
          num: 6,
          question: {
            defaultText: 'Which player scored more headers?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler erzielte mehr Kopfbälle?',
            },
            'pt-PT': {
              question: 'Qual jogador marcou mais gols de cabeça ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'L. Milivojević (Crystal Palace)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '12',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'K. Ahearne-Grant (Huddersfield)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '4',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier_League_emplate_-_30',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 0,
          metricName: 'goals',
          num: 7,
          question: {
            defaultText: 'Which player scored more goals?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat in der letzten Saison mehr Tore erzielt?',
            },
            'pt-PT': {
              question: 'Qual jogador marcou mais gols ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'G. Sigurðsson (Everton)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '3',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'J. Ralls (Cardiff)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '1',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier_League_emplate_-_21_copy',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'missedPenalty',
          num: 8,
          question: {
            defaultText: 'Which player missed more penalties?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler verfehlte mehr Elfmeter?',
            },
            'pt-PT': {
              question: 'Qual jogador perdeu mais pênaltis ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'T. Heaton (Burnley)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '90.76%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'T. Kongolo (Huddersfield)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '51.83%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier_League_emplate_-_5_copy',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'forwardPassRate',
          num: 9,
          question: {
            defaultText: 'Which player had a higher percentage of forward passes?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte einen höheren Prozentsatz an Vorwärtspässen?',
            },
            'pt-PT': {
              question: 'Qual jogador teve uma maior porcentagem de passes para a frente?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Fulham',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '17699',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Newcastle',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '13490',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier_League_emplate_-_21_copy',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'totalPass',
          num: 10,
          question: {
            defaultText: 'Which team had more passes?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hatte mehr Pässe?',
            },
            'pt-PT': {
              question: 'Qual time ganhou mais disputas de bola aérea ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Mohamed Salah (Liverpool)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '3',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'P. van Aanholt (Crystal Palace)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '1',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier_League_emplate_-_10',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'last15MinGoals',
          num: 11,
          question: {
            defaultText: 'Which player scored more goals in the last 15 minutes?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat in den letzten 15 Minuten der vergangenen Saison mehr Tore erzielt?',
            },
            'pt-PT': {
              question: 'Qual jogador marcou mais gols nos últimos 15 minutos ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Brighton',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '39.39%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Liverpool',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '29.39%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier_League_emplate_-_19_copy',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'forwardPassRate',
          num: 12,
          question: {
            defaultText: 'Which team had a higher percentage of forward passes?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hatte einen höheren Prozentsatz an Vorwärtspässen?',
            },
            'pt-PT': {
              question: 'Qual time teve uma maior porcentagem de passes para a frente?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Leicester',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '43',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Fulham',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '30',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier_League_emplate_-_29',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'insideTheBoxGoal',
          num: 13,
          question: {
            defaultText: "Which team scored more goals from inside the opponent's box?",
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft erzielte mehr Tore von innerhalb des Strafraumes?',
            },
            'pt-PT': {
              question: 'Qual time marcou mais gols de dentro da área ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'M. Keane (Everton)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '30',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'İ. Gündoğan (Man City)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '16',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier_League_emplate_-_13_copy',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'shotInsideTheBox',
          num: 14,
          question: {
            defaultText: "Which player had more shots from inside the opponent's box?",
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Schüsse von innerhalb des Strafraumes?',
            },
            'pt-PT': {
              question: 'Qual jogador teve mais chutes de dentro da área ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'David Silva (Man City)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '54',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'J. Hendrick (Burnley)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '23',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier_League_emplate_-_6',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'totalCross',
          num: 15,
          question: {
            defaultText: 'Which player had more crosses?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Flanken?',
            },
            'pt-PT': {
              question: 'Qual jogador fez mais cruzamentos ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'İ. Gündoğan (Man City)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '31.75%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'A. Barnes (Burnley)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '21.04%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier_League_emplate_-_21_copy',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'leftSidePassRate',
          num: 16,
          question: {
            defaultText: 'Which player had a higher percentage of passes to the left?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte einen höheren Prozentsatz an Pässen nach links?',
            },
            'pt-PT': {
              question: 'Qual jogador teve uma maior porcentagem de passes para a esquerda?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'V. van Dijk (Liverpool)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '3',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'S. Bamba (Cardiff)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '2',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier_League_emplate_-_4',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'postShot',
          num: 17,
          question: {
            defaultText: 'Which player hit the post/crossbar more?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat öfters den Pfosten oder die Latte getroffen?',
            },
            'pt-PT': {
              question: 'Qual jogador mais bateu na trave/ travessão ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'A. Ramsey (Arsenal)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '13',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'M. Meyer (Crystal Palace)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '8',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier_League_emplate_-_31',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 0,
          metricName: 'shotsOnTarget',
          num: 18,
          question: {
            defaultText: 'Which player had more shots on target?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler erzielte in der letzten Saison mehr Tore?',
            },
            'pt-PT': {
              question: 'Qual jogador teve mais chutes a gol na temporada passada?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Huddersfield',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '75.78%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Brighton',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '74.8%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier_League_emplate_-_18_copy',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'passSuccessRatio',
          num: 19,
          question: {
            defaultText: 'Which team had a higher pass completion rate?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hatte eine höhere Pass-Erfolgsquote?',
            },
            'pt-PT': {
              question: 'Qual time teve a mais alta taxa de conclusão de passes ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Crystal Palace',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '+3%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'West Ham',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: ' ',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier_League_emplate_-_4',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'aggressiveness',
          num: 20,
          question: {
            defaultText: 'Which team was more aggressive on average?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft war durchschnittlich aggressiver?',
            },
            'pt-PT': {
              question: 'Qual time foi, em média, mais agressivo?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Ricardo Pereira (Leicester)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '8',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'G. Xhaka (Arsenal)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '6',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier_League_emplate_-_1',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'goalsInvolvement',
          num: 21,
          question: {
            defaultText: 'Which player was involved in more goals (assists + goals)?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler war an mehr Toren (Torvorlagen + Tore) beteiligt?',
            },
            'pt-PT': {
              question: 'Qual jogador esteve envolvido em mais gols (assistências + gols) ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'J. Maddison (Leicester)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '25',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'E. Dier (Tottenham)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '24',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier_League_emplate_-_17_copy',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'fouls',
          num: 22,
          question: {
            defaultText: 'Which player comitted more fouls?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat mehr Fouls begangen?',
            },
            'pt-PT': {
              question: 'Qual jogador cometeu mais faltas ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'J. Kenny (Everton)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '34.33%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'B. Mendy (Man City)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '30.85%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier League_emplate_-_9',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'backPassesRate',
          num: 23,
          question: {
            defaultText: 'Which player had a higher percentage of passes in own half?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte einen höheren Prozentsatz an Pässen in der eigenen Spielhälfte?',
            },
            'pt-PT': {
              question: 'Qual jogador teve uma maior porcentagem em seu meio campo defensivo?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'P. van Aanholt (Crystal Palace)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '14',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'L. Dendoncker (Wolverhampton)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '11',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier_League_emplate_-_27',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'wasFouled',
          num: 24,
          question: {
            defaultText: 'Which player suffered more fouls?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat mehr Fouls erlitten?',
            },
            'pt-PT': {
              question: 'Qual jogador sofreu mais faltas?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Man City',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '37.03%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Burnley',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '36.85%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/EPL_QUESTIONS/Premier League_emplate_-_9',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'backPassesRate',
          num: 25,
          question: {
            defaultText: 'Which team had a higher percentage of passes in own half?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hatte einen höheren Prozentsatz an Pässen in der eigenen Spielhälfte?',
            },
            'pt-PT': {
              question: 'Qual time teve uma maior porcentagem em seu meio campo defensivo?',
            },
          },
        },
      ],
    },
  },
  SeriaABrazil: {
    backgroundImage: {
      assetId: 'test_yourself/soccer/SerieABrazil/Series_A',
      type: 'IMAGE',
    },
    gamesNumber: 10000,
    gamesPackId: 'SeriaABrazil',
    id: 'SeriaABrazil',
    previewBackgroundColor: '#004398',
    previewBackgroundImage: {
      assetId: 'test_yourself/soccer/SerieABrazil/Brazil_Pack',
      type: 'IMAGE',
    },
    previewLargeImage: {
      assetId: 'test_yourself/soccer/SerieABrazil/Brazil_Pack_Q_Play',
      type: 'IMAGE',
    },
    rank: 13,
    rewards: [
      {
        momentId: 'ff993850-fc82-424d-a846-af017eec955e',
        requiredStreak: 5,
        type: 'BRONZE',
      },
      {
        momentId: '90c9e928-1b39-4d43-9f93-84a8ad801e06',
        requiredStreak: 15,
        type: 'SILVER',
      },
      {
        momentId: '84cf86f5-a161-42a5-a417-d7b69ce052ee',
        requiredStreak: 25,
        type: 'GOLD',
      },
    ],
    shareText: ' ',
    shareUrl: 'https://heedlive.app.link/HtRycp9A3W',
    texts: {
      description: {
        defaultText: '25 Questions, 15s Limit. Answer all correctly and win a limited edition moment!',
        localizationId: 'description-25',
      },
      previewDescription: {
        defaultText: 'Think you know the 2018 Brasileirão season?',
        localizationId: 'previewDescription-27',
      },
      previewTitle: {
        defaultText: 'Brasileirão IQ',
        localizationId: 'previewTitle-26',
      },
      title: {
        defaultText: 'HOW MUCH DO YOU KNOW?',
        localizationId: 'title-24',
      },
    },
    translationTable: {
      'de-DE': {
        'description-25': '25 Fragen, 15s Limit. Beantworte alle Fragen richtig und gewinne einen Limited Edition Moment!',
        'previewDescription-27': 'Glaubst du, alles über die 2018 Brasileirão-Saison zu wissen?',
        'previewTitle-26': 'Brasileirão IQ',
        'title-24': 'WIE GUT KENNST DU DICH AUS?',
      },
      'pt-PT': {
        'description-25': '25 perguntas. 15 segundos Limite. Responda todas corretamente e ganhe uma experiência de edição limitada!',
        'previewDescription-27': 'Acha que conhece a temporada 2018 da Campeonato Brasileirão Série A?',
        'previewTitle-26': 'QI do Brasileirão ',
        'title-24': 'ATÉ QUE PONTO VOCÊ SABE?',
      },
    },
    game: {
      id: 'Q-SeriaABrazil-1561037746579',
      questions: [
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Everton (Grêmio)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '39',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Giovanni (América MG)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '8',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_12',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 0,
          metricName: 'shotsOnTarget',
          num: 1,
          question: {
            defaultText: 'Which player had more shots on target?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler erzielte in der letzten Saison mehr Tore?',
            },
            'pt-PT': {
              question: 'Qual jogador teve mais chutes a gol na temporada passada?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Palmeiras',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '186',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Vitória',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '130',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_7',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 0,
          metricName: 'shotsOnTarget',
          num: 2,
          question: {
            defaultText: 'Which team had more shots on target?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft erzielte in der letzten Saison mehr Tore?',
            },
            'pt-PT': {
              question: 'Qual time teve mais chutes a gol na temporada passada?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Vitória',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '63',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Botafogo',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '46',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_21',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 0,
          metricName: 'goalsConceded',
          num: 3,
          question: {
            defaultText: 'Which team conceded more goals?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hat in der letzten Saison mehr Tore kassiert?',
            },
            'pt-PT': {
              question: 'Qual time sofreu mais gols ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Vasco',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '10',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Internacional',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '6',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_23',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'goalFromPenalty',
          num: 4,
          question: {
            defaultText: 'Which team scored more goals from penalty kicks?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft erzielte mehr Tore durch Elfmeter?',
            },
            'pt-PT': {
              question: 'Qual time marcou mais gols de pênalti ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Arthur Cabral (Ceará)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '6',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Keno (Palmeiras)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '1',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_23',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'rightFootedGoal',
          num: 5,
          question: {
            defaultText: 'Which player scored more right-footed goals?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat mehr Tore mit dem rechten Fuß erzielt?',
            },
            'pt-PT': {
              question: 'Qual jogador marcou mais gols de pé direito ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Nenê (São Paulo)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '8',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Victor Ferraz (Santos)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '3',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_7',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 0,
          metricName: 'goals',
          num: 6,
          question: {
            defaultText: 'Which player scored more goals?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat in der letzten Saison mehr Tore erzielt?',
            },
            'pt-PT': {
              question: 'Qual jogador marcou mais gols ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Paranaense',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '54',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Bahia',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '39',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_29',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 0,
          metricName: 'goals',
          num: 7,
          question: {
            defaultText: 'Which team scored more goals?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hat in der letzten Saison mehr Tore erzielt?',
            },
            'pt-PT': {
              question: 'Qual time marcou mais gols ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Santos',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '72.4%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Paraná',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '64.52%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_12',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'attackingThirdPassCompletionRate',
          num: 8,
          question: {
            defaultText: 'Which team had a higher completion rate of passes in the attacking third?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hatte mehr erfolgreiche Pässe im angreifenden Drittel des Spielfelds?',
            },
            'pt-PT': {
              question: 'Qual time teve um maior índice de passes completos no terço de ataque?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Roger Guedes (Atl. Mineiro)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '3',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'L. Valencia (Botafogo)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '1',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_28',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'last15MinGoals',
          num: 9,
          question: {
            defaultText: 'Which player scored more goals in the last 15 minutes?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat in den letzten 15 Minuten der vergangenen Saison mehr Tore erzielt?',
            },
            'pt-PT': {
              question: 'Qual jogador marcou mais gols nos últimos 15 minutos ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Internacional',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '50.55%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Chapecoense',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '49.15%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_3',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'dominance',
          num: 10,
          question: {
            defaultText: 'Which team was more dominant on average?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft war durchschnittlich dominanter?',
            },
            'pt-PT': {
              question: 'Qual time foi, em média, mais dominante?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Santos',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '280',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Fluminense',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '242',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_6',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'shotInsideTheBox',
          num: 11,
          question: {
            defaultText: "Which team had more shots from inside the opponent's box?",
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hatte mehr Schüsse von innerhalb des Strafraumes?',
            },
            'pt-PT': {
              question: 'Qual time teve mais chutes de dentro da área ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Diego Souza (São Paulo)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '43',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Juninho Quixadá (Ceará)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '29',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_12',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'wasFouled',
          num: 12,
          question: {
            defaultText: 'Which player suffered more fouls?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat mehr Fouls erlitten?',
            },
            'pt-PT': {
              question: 'Qual jogador sofreu mais faltas?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Santos',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '13',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Vitória',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '10',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_23',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'last15MinGoals',
          num: 13,
          question: {
            defaultText: 'Which team scored more goals in the last 15 minutes?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hat in den letzten 15 Minuten der vergangenen Saison mehr Tore erzielt?',
            },
            'pt-PT': {
              question: 'Qual time marcou mais gols nos últimos 15 minutos ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Nilton (Bahia)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '42.71%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Patrick (Internacional)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '30.75%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_1',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'forwardPassRate',
          num: 14,
          question: {
            defaultText: 'Which player had a higher percentage of forward passes?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte einen höheren Prozentsatz an Vorwärtspässen?',
            },
            'pt-PT': {
              question: 'Qual jogador teve uma maior porcentagem de passes para a frente?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Leandro Pereira (Chapecoense)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '3',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: "A. D'Alessandro (Internacional)",
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '2',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_2',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'postShot',
          num: 15,
          question: {
            defaultText: 'Which player hit the post/crossbar more?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat öfters den Pfosten oder die Latte getroffen?',
            },
            'pt-PT': {
              question: 'Qual jogador mais bateu na trave/ travessão ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Yago Pikachu (Vasco)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '3',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Judivan (América MG)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '1',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_3',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'assistOpenPlay',
          num: 16,
          question: {
            defaultText: 'Which player had more assists from open play?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Torvorlagen aus dem offenen Spiel?',
            },
            'pt-PT': {
              question: 'Qual jogador deu mais assistências com a bola rolando ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Ceará',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '36.04%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Santos',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '34.26%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_23',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'forwardPassRate',
          num: 17,
          question: {
            defaultText: 'Which team had a higher percentage of forward passes?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hatte einen höheren Prozentsatz an Vorwärtspässen?',
            },
            'pt-PT': {
              question: 'Qual time teve uma maior porcentagem de passes para a frente?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Paraná',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '8',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Sport',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '6',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_17',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'totalFastbreak',
          num: 18,
          question: {
            defaultText: 'Which team had more counter attacks?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hatte mehr Gegenangriffe?',
            },
            'pt-PT': {
              question: 'Qual time teve mais contra-ataques?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Igor (Paraná)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '54',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Vinícius Goes (Bahia)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '43',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_28',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'totalCross',
          num: 19,
          question: {
            defaultText: 'Which player had more crosses?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Flanken?',
            },
            'pt-PT': {
              question: 'Qual jogador fez mais cruzamentos ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Rafinha (Cruzeiro)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '36',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Vinícius Júnior (Flamengo)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '24',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_23',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'possWonMid3rd',
          num: 20,
          question: {
            defaultText: 'Which player won more possessions in the middle third?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler erlangte mehr Ballbesitze im mittleren Drittel des Spielfelds?',
            },
            'pt-PT': {
              question: 'Qual jogador teve mais posse de bola no setor do meio campo?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Pepê (Grêmio)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '21',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Robinho (Cruzeiro)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '16',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_21',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'dribble',
          num: 21,
          question: {
            defaultText: 'Which player had more dribbles?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hatte mehr Dribblings?',
            },
            'pt-PT': {
              question: 'Qual jogador deu mais dribles ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Deyverson (Palmeiras)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '2',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Éverton Ribeiro (Flamengo)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '1',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_13',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 1,
          metricName: 'brace',
          num: 22,
          question: {
            defaultText: 'Which player scored more braces (2 goals in one match)?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat mehr Klammern (2 Tore in einem Spiel) erzielt?',
            },
            'pt-PT': {
              question: 'Qual jogador marcou mais braces (2 gols em uma partida) ?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'América MG',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '43.78%',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Fluminense',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '43.73%',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_6',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'backPassesRate',
          num: 23,
          question: {
            defaultText: 'Which team had a higher percentage of passes in own half?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welche Mannschaft hatte einen höheren Prozentsatz an Pässen in der eigenen Spielhälfte?',
            },
            'pt-PT': {
              question: 'Qual time teve uma maior porcentagem em seu meio campo defensivo?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Edu Dracena (Palmeiras)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '2',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Emerson (Atl. Mineiro)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '1',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_20',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'errorLeadToGoal',
          num: 24,
          question: {
            defaultText: 'Which player had more errors leading to a goal?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler verursachte mehr Spielfehler, die doch zu einem Tor führten?',
            },
            'pt-PT': {
              question: 'Qual jogador teve mais erros que resultaram em gol?',
            },
          },
        },
        {
          answers: [
            {
              answerTitle: {
                defaultText: 'Ruan (Vitória)',
                localizationId: 'answer1',
              },
              answerValue: {
                defaultText: '3',
                localizationId: 'Value1',
              },
              id: 'answer-1',
            },
            {
              answerTitle: {
                defaultText: 'Barreto (Chapecoense)',
                localizationId: 'answer2',
              },
              answerValue: {
                defaultText: '2',
                localizationId: 'Value2',
              },
              id: 'answer-2',
            },
          ],
          backgroundImage: {
            assetId: 'test_yourself/BRASILEIRO_QUESTIONS/Serie_A_League_Template_-_13',
            type: 'IMAGE',
          },
          correctAnswerId: 'answer-1',
          difficultyLevel: 2,
          metricName: 'yellowCard',
          num: 25,
          question: {
            defaultText: 'Which player received more yellow cards?',
            localizationId: 'question',
          },
          questionTemplateType: 'compare',
          translationTable: {
            'de-DE': {
              question: 'Welcher Spieler hat mehr gelbe Karten erhalten?',
            },
            'pt-PT': {
              question: 'Qual jogador recebeu mais cartões amarelos ?',
            },
          },
        },
      ],
    },
  },
};
