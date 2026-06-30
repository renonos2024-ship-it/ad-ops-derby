const cases = [
  {
    client: "白金スキンラボ",
    industry: "美容クリニック",
    kpi: "予約CPA 18,000円以内",
    budget: "月80万円",
    absurdity: "高",
    brief:
      "高級感を崩さず、今月だけ予約数を2倍にしたい。院長は強い訴求が好きだが、薬機法とブランド毀損は絶対NG。",
    plans: [
      {
        name: "検索広告・症状名完全一致",
        horse: "ケンサクホンメイ",
        odds: 2.6,
        media: "Google",
        setup: "完全一致中心 / CV最大化 / LPは既存",
        allocation: "検索70%・リマケ20%・検証10%",
        stats: { fit: 86, stability: 82, burst: 48, client: 62 },
      },
      {
        name: "Meta・美容悩み動画訴求",
        horse: "メタビヨウバズ",
        odds: 4.4,
        media: "Meta",
        setup: "広め配信 / 動画3本 / 予約LP直送",
        allocation: "動画60%・静止画25%・リマケ15%",
        stats: { fit: 74, stability: 58, burst: 82, client: 54 },
      },
      {
        name: "YouTube・院長ブランディング",
        horse: "インチョウニンチ",
        odds: 8.8,
        media: "YouTube",
        setup: "認知寄せ / CPV重視 / 指名検索狙い",
        allocation: "動画80%・検索追撃20%",
        stats: { fit: 54, stability: 64, burst: 42, client: 76 },
      },
      {
        name: "TikTok・症例風UGC",
        horse: "ショウレイダッシュ",
        odds: 14.2,
        media: "TikTok",
        setup: "UGC風 / 若年層広め / 勢い重視",
        allocation: "UGC90%・予備10%",
        stats: { fit: 46, stability: 38, burst: 94, client: 35 },
      },
    ],
    incidents: [
      {
        type: "法務カットイン",
        title: "一番強いコピーが差し戻し",
        body: "『たるみ改善』がNG判定。強かった訴求ほど失速。",
        effect: { burst: -16, fit: -8, stability: 3 },
      },
      {
        type: "クライアント横やり",
        title: "院長が急に高級路線へ回帰",
        body: "派手なクリエイティブが全停止。上品な面構えだけが残る。",
        effect: { client: 18, burst: -10 },
      },
      {
        type: "媒体事故",
        title: "審査落ち理由が不明",
        body: "問い合わせてもテンプレ回答。配信再開まで半日ロス。",
        effect: { stability: -14 },
      },
    ],
  },
  {
    client: "クラウド勤怠SaaS",
    industry: "BtoB SaaS",
    kpi: "商談化リード30件",
    budget: "月120万円",
    absurdity: "中",
    brief:
      "リード数を3倍にしたいが、情報収集層は不要。役員からは『競合より知的に見せて』という曖昧な要望も来ている。",
    plans: [
      {
        name: "検索広告・課題顕在ワード",
        horse: "ケンサクショウダン",
        odds: 2.2,
        media: "Google",
        setup: "勤怠管理 / 比較 / 資料請求CV",
        allocation: "検索75%・リマケ15%・除外調整10%",
        stats: { fit: 88, stability: 84, burst: 44, client: 70 },
      },
      {
        name: "LinkedIn・職種ターゲット",
        horse: "リンクドインリッチ",
        odds: 6.5,
        media: "LinkedIn",
        setup: "人事責任者 / ホワイトペーパー",
        allocation: "役職配信85%・検証15%",
        stats: { fit: 82, stability: 61, burst: 40, client: 82 },
      },
      {
        name: "Meta・診断LPで刈り取り",
        horse: "メタシンダン",
        odds: 7.1,
        media: "Meta",
        setup: "類似拡張 / 診断コンテンツ / MA連携",
        allocation: "類似60%・興味25%・リマケ15%",
        stats: { fit: 63, stability: 55, burst: 72, client: 48 },
      },
      {
        name: "Display・競合面リマーケ",
        horse: "バナーオイコミ",
        odds: 11.4,
        media: "GDN",
        setup: "競合関連面 / リマケ強め / CPC抑制",
        allocation: "競合面50%・リマケ40%・検証10%",
        stats: { fit: 50, stability: 50, burst: 58, client: 41 },
      },
    ],
    incidents: [
      {
        type: "営業カットイン",
        title: "リードの質に営業が首をひねる",
        body: "件数は出たが『温度感が低い』判定。商談化補正が入る。",
        effect: { fit: -10, client: -12, stability: 5 },
      },
      {
        type: "役員レビュー",
        title: "急にブランドトーンが上品になる",
        body: "勝ちコピーが『軽い』と言われ、資料請求CTAが弱まる。",
        effect: { client: 14, burst: -12 },
      },
      {
        type: "奇跡",
        title: "比較記事が検索上位に浮上",
        body: "指名検索がじわっと伸び、検索系が後半に粘る。",
        effect: { fit: 8, stability: 8 },
      },
    ],
  },
  {
    client: "駅前もつ焼き だるま",
    industry: "飲食店",
    kpi: "週末予約40件",
    budget: "7日で12万円",
    absurdity: "高",
    brief:
      "今週末だけ席を埋めたい。店長は『地元感』を出したいが、写真素材は暗い店内写真が3枚だけ。",
    plans: [
      {
        name: "Googleマップ広告・近隣狙い",
        horse: "マップチカミチ",
        odds: 3.1,
        media: "Google",
        setup: "半径3km / 電話CV / 来店意図強め",
        allocation: "マップ65%・検索25%・電話10%",
        stats: { fit: 82, stability: 72, burst: 56, client: 66 },
      },
      {
        name: "Instagram・地元飯リール",
        horse: "ジモトメシリール",
        odds: 4.9,
        media: "Instagram",
        setup: "近隣20-40代 / リール / DM予約",
        allocation: "リール70%・ストーリーズ20%・DM10%",
        stats: { fit: 70, stability: 52, burst: 86, client: 70 },
      },
      {
        name: "X・本日空席ポスト広告",
        horse: "クウセキソクホウ",
        odds: 9.6,
        media: "X",
        setup: "地域ワード / 当日訴求 / 低予算高速",
        allocation: "当日投稿80%・反応追撃20%",
        stats: { fit: 56, stability: 42, burst: 72, client: 46 },
      },
      {
        name: "TikTok・店長出演ショート",
        horse: "テンチョウバクチ",
        odds: 18.0,
        media: "TikTok",
        setup: "顔出し / おすすめ料理 / ノリ重視",
        allocation: "店長動画100%",
        stats: { fit: 42, stability: 34, burst: 98, client: 58 },
      },
    ],
    incidents: [
      {
        type: "現場カットイン",
        title: "店長が撮影日に仕込みで不在",
        body: "動画素材が撮れず、静止画と根性で勝負することに。",
        effect: { burst: -18, stability: 4 },
      },
      {
        type: "天候事故",
        title: "週末に大雨予報",
        body: "来店意欲が鈍る。近場需要と予約導線だけが粘る。",
        effect: { fit: -6, stability: -8, client: -4 },
      },
      {
        type: "奇跡",
        title: "常連の投稿がなぜか伸びる",
        body: "地元ユーザーのコメント欄が温まり、SNS勢が加速。",
        effect: { burst: 16, client: 8 },
      },
    ],
  },
  {
    client: "人生逆転オンライン講座",
    industry: "教育・情報商材寄り",
    kpi: "説明会CPA 9,800円以内",
    budget: "月60万円",
    absurdity: "極",
    brief:
      "強い言葉で売りたいが、審査落ちは避けたい。代表は『人生が変わる』と言いたい。媒体はたぶん嫌がっている。",
    plans: [
      {
        name: "Meta・安全寄せ無料診断",
        horse: "アンゼンメタ",
        odds: 3.8,
        media: "Meta",
        setup: "無料診断 / 表現丸め / LPで教育",
        allocation: "安全訴求70%・リマケ20%・検証10%",
        stats: { fit: 76, stability: 68, burst: 54, client: 50 },
      },
      {
        name: "検索広告・悩みワード一点突破",
        horse: "ナヤミケンサク",
        odds: 4.1,
        media: "Google",
        setup: "悩み顕在 / 説明会CV / 除外強め",
        allocation: "検索80%・指名10%・除外調整10%",
        stats: { fit: 78, stability: 70, burst: 45, client: 58 },
      },
      {
        name: "YouTube・長尺ストーリー広告",
        horse: "ストーリーナガシ",
        odds: 8.5,
        media: "YouTube",
        setup: "体験談風 / 視聴維持 / 認知から刈る",
        allocation: "長尺75%・リマケ25%",
        stats: { fit: 60, stability: 56, burst: 74, client: 72 },
      },
      {
        name: "TikTok・煽り切り抜き",
        horse: "アオリバズーカ",
        odds: 21.0,
        media: "TikTok",
        setup: "強め冒頭 / 代表語録 / 爆発狙い",
        allocation: "煽り動画90%・祈り10%",
        stats: { fit: 48, stability: 28, burst: 100, client: 78 },
      },
    ],
    incidents: [
      {
        type: "審査カットイン",
        title: "『誰でも変われる』が刺される",
        body: "断定表現がNG。勢いで勝っていたプランほど急停止。",
        effect: { stability: -20, burst: -8 },
      },
      {
        type: "代表横やり",
        title: "代表がLPに赤字見出しを追加",
        body: "CVRは少し上がるが、媒体の空気が明らかに冷える。",
        effect: { burst: 10, stability: -14, client: 8 },
      },
      {
        type: "計測事故",
        title: "サンクスページCVが二重発火",
        body: "一瞬だけ勝って見える。現実は管理画面の外にある。",
        effect: { fit: -4, client: -10 },
      },
    ],
  },
  {
    client: "地方製造業 採用PJ",
    industry: "採用広告",
    kpi: "応募15件",
    budget: "月35万円",
    absurdity: "中",
    brief:
      "若手を採用したいが、勤務地は駅から遠い。社長は『家族みたいな職場』を推したいが、求職者はたぶんそこを見ていない。",
    plans: [
      {
        name: "Indeed・職種検索刈り取り",
        horse: "インディードコツコツ",
        odds: 2.9,
        media: "Indeed",
        setup: "職種軸 / 給与明記 / 応募導線短縮",
        allocation: "職種検索80%・原稿改善20%",
        stats: { fit: 84, stability: 78, burst: 42, client: 54 },
      },
      {
        name: "Meta・社員密着ショート",
        horse: "シャインミッチャク",
        odds: 5.7,
        media: "Meta",
        setup: "若手社員 / 職場風景 / 興味形成",
        allocation: "動画60%・静止画25%・リマケ15%",
        stats: { fit: 66, stability: 54, burst: 78, client: 70 },
      },
      {
        name: "Google検索・地域求人ワード",
        horse: "チイキキュウジン",
        odds: 4.6,
        media: "Google",
        setup: "地域名x職種 / 応募CV / 夜間配信",
        allocation: "検索70%・夜間20%・除外10%",
        stats: { fit: 75, stability: 72, burst: 46, client: 58 },
      },
      {
        name: "TikTok・工場あるある",
        horse: "コウジョウアルアル",
        odds: 15.8,
        media: "TikTok",
        setup: "あるある動画 / コメント重視 / 認知突破",
        allocation: "あるある85%・コメント追撃15%",
        stats: { fit: 48, stability: 36, burst: 96, client: 66 },
      },
    ],
    incidents: [
      {
        type: "社長カットイン",
        title: "『家族みたい』コピーを強制採用",
        body: "社長満足度は上がる。応募意欲は少し静かになる。",
        effect: { client: 18, fit: -8 },
      },
      {
        type: "現場事故",
        title: "撮影日に作業着が全員バラバラ",
        body: "リアルではあるが、採用広報としては少し情報量が強い。",
        effect: { burst: -8, stability: -6 },
      },
      {
        type: "求人市況",
        title: "近隣の大手が時給を上げた",
        body: "比較される。給与と導線が明確なプランだけ耐える。",
        effect: { fit: -7, stability: -7, client: -3 },
      },
    ],
  },
];

const colors = ["#f1c453", "#4ba3ff", "#f06c9b", "#36b37e"];
const state = {
  round: 0,
  selectedIndex: null,
  running: false,
  scores: [],
};

const els = {
  roundLabel: document.querySelector("#roundLabel"),
  clientName: document.querySelector("#clientName"),
  clientBrief: document.querySelector("#clientBrief"),
  clientIndustry: document.querySelector("#clientIndustry"),
  clientKpi: document.querySelector("#clientKpi"),
  clientBudget: document.querySelector("#clientBudget"),
  clientAbsurdity: document.querySelector("#clientAbsurdity"),
  track: document.querySelector("#track"),
  plansGrid: document.querySelector("#plansGrid"),
  eventLog: document.querySelector("#eventLog"),
  resultPanel: document.querySelector("#resultPanel"),
  raceMessage: document.querySelector("#raceMessage"),
  cutIn: document.querySelector("#cutIn"),
  cutInType: document.querySelector("#cutInType"),
  cutInTitle: document.querySelector("#cutInTitle"),
  cutInBody: document.querySelector("#cutInBody"),
  cutInContinue: document.querySelector("#cutInContinue"),
};

function weightedBase(plan) {
  const { fit, stability, burst, client } = plan.stats;
  return fit * 0.42 + stability * 0.24 + burst * 0.2 + client * 0.14;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function renderCase() {
  const item = cases[state.round];
  state.selectedIndex = null;
  state.running = false;
  state.scores = item.plans.map((plan) => ({
    score: weightedBase(plan) + randomBetween(-4, 4),
    progress: 0,
  }));

  els.roundLabel.textContent = `${state.round + 1} / ${cases.length}`;
  els.clientName.textContent = item.client;
  els.clientBrief.textContent = item.brief;
  els.clientIndustry.textContent = item.industry;
  els.clientKpi.textContent = item.kpi;
  els.clientBudget.textContent = item.budget;
  els.clientAbsurdity.textContent = item.absurdity;
  els.raceMessage.textContent = "出走プランを選択してください";
  els.eventLog.innerHTML = "";
  els.resultPanel.classList.add("hidden");
  renderPlans(item);
  renderTrack(item);
}

function renderPlans(item) {
  els.plansGrid.innerHTML = item.plans
    .map((plan, index) => {
      const gate = index + 1;
      return `
        <button class="plan-card" type="button" data-index="${index}">
          <div class="plan-topline">
            <span class="gate">${gate}</span>
            <span class="odds">${plan.odds.toFixed(1)}倍</span>
          </div>
          <h3>${plan.name}</h3>
          <p>${plan.setup}</p>
          <p class="allocation">予算配分: ${plan.allocation}</p>
          <div class="stats">
            <span>適性 ${plan.stats.fit}</span>
            <span>安定 ${plan.stats.stability}</span>
            <span>爆発 ${plan.stats.burst}</span>
            <span>顧客 ${plan.stats.client}</span>
          </div>
        </button>
      `;
    })
    .join("");

  [...els.plansGrid.querySelectorAll("button")].forEach((button) => {
    button.addEventListener("click", () => {
      if (state.running) return;
      startRace(Number(button.dataset.index));
    });
  });
}

function renderTrack(item) {
  els.track.innerHTML = item.plans
    .map((plan, index) => {
      return `
        <div class="lane">
          <div class="horse" id="horse-${index}">
            <span class="runner-icon" style="background:${colors[index]}">${index + 1}</span>
            <span class="runner-card">
              <strong>${plan.horse}</strong>
              <span>${plan.media} / KPI 0%</span>
            </span>
          </div>
        </div>
      `;
    })
    .join("");
}

function startRace(selectedIndex) {
  const item = cases[state.round];
  state.selectedIndex = selectedIndex;
  state.running = true;
  els.raceMessage.textContent = `${item.plans[selectedIndex].horse} に投票。ゲートイン完了。`;
  els.resultPanel.classList.add("hidden");

  [...els.plansGrid.querySelectorAll("button")].forEach((button, index) => {
    button.disabled = true;
    button.classList.toggle("selected", index === selectedIndex);
  });

  addLog(`あなたの本命: ${item.plans[selectedIndex].name}（オッズ ${item.plans[selectedIndex].odds.toFixed(1)}倍）`);
  runRaceTimeline(item);
}

async function runRaceTimeline(item) {
  for (let tick = 1; tick <= 10; tick += 1) {
    await sleep(620);
    advanceScores(item, tick);
    renderRacePositions(item);

    if ([3, 5, 8].includes(tick)) {
      const incident = item.incidents[(tick === 3 ? 0 : tick === 5 ? 1 : 2)];
      await playIncident(item, incident);
    }
  }

  await sleep(700);
  finishRace(item);
}

function advanceScores(item, tick) {
  item.plans.forEach((plan, index) => {
    const { fit, stability, burst } = plan.stats;
    const pace = fit * 0.07 + stability * 0.045 + randomBetween(-2.8, 3.2);
    const lateBurst = tick > 6 ? burst * 0.04 + randomBetween(-1.5, 4.5) : 0;
    const selectedNerve = index === state.selectedIndex ? randomBetween(-1.2, 2.4) : 0;
    state.scores[index].score = clamp(state.scores[index].score + pace + lateBurst + selectedNerve, 15, 185);
  });
}

async function playIncident(item, incident) {
  showCutIn(incident);
  addLog(`${incident.type}: ${incident.title}。${incident.body}`);
  applyIncident(item, incident);
  renderRacePositions(item);
  await waitForCutInContinue();
  hideCutIn();
}

function applyIncident(item, incident) {
  item.plans.forEach((plan, index) => {
    const effects = incident.effect;
    const profile =
      (effects.fit || 0) * (plan.stats.fit / 100) +
      (effects.stability || 0) * (plan.stats.stability / 100) +
      (effects.burst || 0) * (plan.stats.burst / 100) +
      (effects.client || 0) * (plan.stats.client / 100);
    const chaos = randomBetween(-7, 7);
    const unfairClientBonus = index === state.selectedIndex ? randomBetween(-5, 4) : randomBetween(-2, 5);
    state.scores[index].score = clamp(state.scores[index].score + profile + chaos + unfairClientBonus, 10, 198);
  });
}

function renderRacePositions(item, isFinal = false) {
  const maxTrack = getTrackDistance();
  const ranked = state.scores
    .map((entry, index) => ({ ...entry, index }))
    .sort((a, b) => b.score - a.score);

  ranked.forEach((entry, rank) => {
    const leaderBoost = rank === 0 ? 8 : 0;
    const percent = isFinal
      ? clamp(106 - rank * 14 + randomBetween(-2, 2), 54, 108)
      : clamp((entry.score / 190) * 100 + leaderBoost, 3, 100);
    const horse = document.querySelector(`#horse-${entry.index}`);
    const distance = isFinal && rank === 0
      ? getFinishCrossDistance(horse)
      : Math.round((percent / 100) * maxTrack);
    horse.style.transform = `translateX(${distance}px)`;
    horse.querySelector(".runner-card span").textContent =
      `${item.plans[entry.index].media} / KPI ${Math.round(entry.score)}%`;
  });

  const leader = item.plans[ranked[0].index];
  els.raceMessage.textContent = `現在先頭: ${leader.horse} / KPI ${Math.round(ranked[0].score)}%。まだ何も信用できません。`;
}

function getTrackDistance() {
  const trackRect = els.track.getBoundingClientRect();
  const finishRect = document.querySelector(".finish-line")?.getBoundingClientRect();
  const horse = document.querySelector(".horse");
  const horseWidth = horse?.getBoundingClientRect().width || 280;
  const horseLeft = horse?.offsetLeft || 12;

  if (finishRect) {
    const finishX = finishRect.left - trackRect.left + finishRect.width;
    return Math.max(60, finishX - horseLeft - horseWidth + 28);
  }

  return Math.max(60, trackRect.width - horseWidth - 32);
}

function getFinishCrossDistance(horse) {
  const trackRect = els.track.getBoundingClientRect();
  const finishRect = document.querySelector(".finish-line")?.getBoundingClientRect();
  const horseWidth = horse?.getBoundingClientRect().width || 280;
  const horseLeft = horse?.offsetLeft || 12;

  if (!finishRect) {
    return getTrackDistance();
  }

  return Math.max(60, finishRect.right - trackRect.left - horseLeft - horseWidth + 44);
}

function finishRace(item) {
  const result = state.scores
    .map((entry, index) => {
      const plan = item.plans[index];
      const clientAdjustment = plan.stats.client * randomBetween(-0.03, 0.07);
      const finalScore = clamp(entry.score + clientAdjustment + randomBetween(-4, 6), 1, 220);
      return { ...entry, index, finalScore };
    })
    .sort((a, b) => b.finalScore - a.finalScore);

  const winner = result[0];
  const picked = result.find((entry) => entry.index === state.selectedIndex);
  const winnerPlan = item.plans[winner.index];
  const pickedPlan = item.plans[state.selectedIndex];
  const pickedRank = result.findIndex((entry) => entry.index === state.selectedIndex) + 1;
  const won = winner.index === state.selectedIndex;

  result.forEach((entry) => {
    state.scores[entry.index].score = entry.finalScore;
  });
  renderRacePositions(item, true);
  els.raceMessage.textContent = won
    ? "本命的中。ただし理由はだいたい後付けです。"
    : `勝ったのは ${winnerPlan.horse}。広告運用は最後まで油断できません。`;

  els.resultPanel.innerHTML = `
    <h3>${won ? "的中" : "理不尽決着"}: ${winnerPlan.name}</h3>
    <ol class="ranking">
      ${result
        .map((entry, rank) => {
          const plan = item.plans[entry.index];
          return `
            <li>
              <strong>${rank + 1}着</strong>
              <span>${plan.horse}</span>
              <span>${Math.round(entry.finalScore)}%</span>
            </li>
          `;
        })
        .join("")}
    </ol>
    <p class="result-note">${makeResultComment(item, winnerPlan, pickedPlan, pickedRank, picked.finalScore)}</p>
    <button class="next-button" type="button">${state.round === cases.length - 1 ? "最初の案件へ" : "次の案件へ"}</button>
  `;
  els.resultPanel.classList.remove("hidden");
  els.resultPanel.querySelector("button").addEventListener("click", nextCase);
  state.running = false;
}

function makeResultComment(item, winnerPlan, pickedPlan, pickedRank, pickedScore) {
  if (winnerPlan === pickedPlan) {
    return `${pickedPlan.media} が ${item.kpi} に対して最終KPI ${Math.round(
      pickedScore,
    )}% を記録。勝因は、設計がよかったことに加えて、理不尽イベントの被弾位置がギリギリ許容範囲だったことです。`;
  }

  return `あなたの選択 ${pickedPlan.name} は ${pickedRank}着。設計としては筋がありましたが、途中の横やりと媒体事故で伸び切らず。勝者 ${winnerPlan.name} は、なぜか最後にクライアントの気分と媒体の機嫌が噛み合いました。`;
}

function nextCase() {
  state.round = (state.round + 1) % cases.length;
  renderCase();
}

function showCutIn(incident) {
  els.cutInType.textContent = incident.type;
  els.cutInTitle.textContent = incident.title;
  els.cutInBody.textContent = incident.body;
  els.cutIn.classList.add("show");
  els.cutIn.setAttribute("aria-hidden", "false");
}

function hideCutIn() {
  els.cutIn.classList.remove("show");
  els.cutIn.setAttribute("aria-hidden", "true");
}

function waitForCutInContinue() {
  return new Promise((resolve) => {
    els.cutInContinue.disabled = false;
    els.cutInContinue.focus();
    els.cutInContinue.onclick = () => {
      els.cutInContinue.disabled = true;
      els.cutInContinue.onclick = null;
      resolve();
    };
  });
}

function addLog(message) {
  const li = document.createElement("li");
  li.textContent = message;
  els.eventLog.prepend(li);
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

renderCase();
